/* Roadtrip English — application d'anglais de voyage (100 % locale, hors-ligne). */
(function () {
"use strict";

/* ============================ Utilitaires ============================ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const dayNum = (d = new Date()) => Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
const TODAY = () => dayNum();
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const slug = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function toast(msg, ms = 2200) {
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t);
  setTimeout(() => t.remove(), ms);
}
function plural(n, w) { return n + " " + w + (n > 1 ? "s" : ""); }

/* ============================ Stockage ============================ */
const KEY = "roadtrip-english-v1";
const DEFAULT_SETTINGS = { name: "", accent: "en-US", voiceURI: "", rate: 0.9, newPerDay: 15, direction: "both", autoplay: true, hideSitText: false, theme: "auto" };
let S;
function load() {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { raw = null; }
  S = raw || {};
  S.settings = Object.assign({}, DEFAULT_SETTINGS, S.settings || {});
  S.cards = S.cards || {};
  S.phr = S.phr || {};
  S.read = S.read || {};       // index -> { day, score }
  S.sit = S.sit || {};         // id -> count
  S.days = S.days || {};       // dayNum -> stats
  S.start = S.start || TODAY();
  S.onboarded = !!S.onboarded;
  S.level = S.level || null;     // niveau CECRL estimé : "A1"… "C1"
  S.readStart = S.readStart || 0;
  S.tests = S.tests || [];
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* stockage indisponible */ } }
function dayStats(d = TODAY()) {
  if (!S.days[d]) S.days[d] = { cards: 0, newCards: 0, phrases: 0, reading: 0, sit: 0, speak: 0, gram: 0 };
  return S.days[d];
}
function activityScore(d) {
  const x = S.days[d]; if (!x) return 0;
  return (x.cards || 0) + (x.gram || 0) * 2 + (x.phrases || 0) * 2 + (x.reading || 0) * 10 + (x.sit || 0) * 8 + (x.speak || 0);
}
function streak() {
  let d = TODAY(), n = 0;
  if (!activityScore(d)) d--;
  while (activityScore(d) > 0) { n++; d--; }
  return n;
}

/* ============================ Voix (synthèse + reconnaissance) ============================ */
const synth = window.speechSynthesis || null;
let voices = [];
function loadVoices() { if (synth) voices = synth.getVoices().filter(v => /^en[-_]/i.test(v.lang)); }
if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }
function pickVoice(alt = false) {
  if (!voices.length) loadVoices();
  if (!voices.length) return null;
  const acc = S.settings.accent.toLowerCase();
  const byLang = voices.filter(v => v.lang.replace("_", "-").toLowerCase().startsWith(acc));
  const pool = byLang.length ? byLang : voices;
  const score = (v) => (/(natural|neural|premium|enhanced|google|samantha|daniel|serena|ava|allison)/i.test(v.name) ? 2 : 0) + (v.localService ? 0 : 1);
  const sorted = pool.slice().sort((a, b) => score(b) - score(a));
  let main = sorted[0];
  if (S.settings.voiceURI) { const chosen = voices.find(v => v.voiceURI === S.settings.voiceURI); if (chosen) main = chosen; }
  if (!alt) return main;
  return sorted.find(v => v !== main) || voices.find(v => v !== main) || main;
}
function speak(text, opts = {}) {
  if (!synth) { toast("La synthèse vocale n'est pas disponible sur ce navigateur."); return Promise.resolve(); }
  return new Promise((resolve) => {
    if (!opts.queue) synth.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/\s*\/\/\s*/g, ". "));
    const v = pickVoice(opts.alt);
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = S.settings.accent;
    u.rate = (opts.slow ? 0.6 : 1) * S.settings.rate;
    u.onend = () => resolve(); u.onerror = () => resolve();
    synth.speak(u);
  });
}
function stopSpeak() { if (synth) synth.cancel(); }

const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
let activeRec = null;
function listen() {
  return new Promise((resolve, reject) => {
    if (!SR) { reject(new Error("unsupported")); return; }
    stopSpeak();
    if (activeRec) { try { activeRec.abort(); } catch (e) {} }
    const rec = new SR(); activeRec = rec;
    rec.lang = S.settings.accent; rec.interimResults = false; rec.maxAlternatives = 4; rec.continuous = false;
    let done = false;
    rec.onresult = (e) => { done = true; const r = e.results[0]; resolve(Array.from(r).map(a => a.transcript)); };
    rec.onerror = (e) => { if (!done) { done = true; reject(new Error(e.error || "error")); } };
    rec.onend = () => { activeRec = null; if (!done) { done = true; resolve([]); } };
    try { rec.start(); } catch (e) { reject(e); }
  });
}
function micError(err) {
  const m = err && err.message;
  if (m === "not-allowed" || m === "service-not-allowed") toast("Autorise le micro dans ton navigateur pour parler 🎤");
  else if (m === "unsupported") toast("Reconnaissance vocale indisponible ici. Essaie Chrome (Android/ordi) ou Safari récent.");
  else if (m === "no-speech") toast("Je n'ai rien entendu. Réessaie en parlant plus fort.");
  else toast("Micro : " + (m || "erreur"));
}
/* Bouton micro générique : écoute puis appelle onResult(listeDeTranscriptions) */
function wireMic(btn, onResult) {
  btn.addEventListener("click", async () => {
    if (btn.classList.contains("listening")) { if (activeRec) activeRec.stop(); return; }
    btn.classList.add("listening");
    try { const alts = await listen(); btn.classList.remove("listening"); onResult(alts); }
    catch (e) { btn.classList.remove("listening"); micError(e); }
  });
}

/* ============================ Comparaison de réponses ============================ */
const CONTR = [
  [/\bcan['’]t\b/g, "can not"], [/\bcannot\b/g, "can not"], [/\bwon['’]t\b/g, "will not"], [/\bshan['’]t\b/g, "shall not"],
  [/n['’]t\b/g, " not"], [/\bi['’]m\b/g, "i am"], [/['’]re\b/g, " are"], [/['’]ll\b/g, " will"], [/['’]ve\b/g, " have"], [/['’]d\b/g, " would"],
  [/\blet['’]s\b/g, "let us"],
  [/\b(it|that|what|where|here|there|he|she|who|how|everything|this)['’]s\b/g, "$1 is"]
];
const SPELL = { colour: "color", colours: "colors", favourite: "favorite", centre: "center", travelling: "traveling", travelled: "traveled", cancelled: "canceled", theatre: "theater", neighbourhood: "neighborhood", mum: "mom", ok: "okay", tv: "television", realise: "realize", realised: "realized" };
const NUMS = { "0": "zero", "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten", "11": "eleven", "12": "twelve", "15": "fifteen", "20": "twenty", "22": "twenty two", "30": "thirty" };
function norm(s) {
  let t = String(s).toLowerCase().replace(/[’‘]/g, "'");
  CONTR.forEach(([re, rep]) => { t = t.replace(re, rep); });
  t = t.replace(/-/g, " ").replace(/[^a-z0-9' ]+/g, " ").replace(/'/g, "");
  return t.split(/\s+/).filter(Boolean).map(w => SPELL[w] || NUMS[w] || w).join(" ").split(" ")
    .filter(w => w && w !== "please").join(" ");
}
function lcs(a, b) {
  const m = a.length, n = b.length, dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return dp;
}
function similarity(a, b) {
  const x = norm(a).split(" ").filter(Boolean), y = norm(b).split(" ").filter(Boolean);
  if (!x.length && !y.length) return 1; if (!x.length || !y.length) return 0;
  const l = lcs(x, y)[x.length][y.length];
  return (2 * l) / (x.length + y.length);
}
function bestMatch(user, answers) {
  let best = { score: -1, answer: answers[0] };
  answers.forEach(a => { const sc = similarity(user, a); if (sc > best.score) best = { score: sc, answer: a }; });
  return best;
}
/* Différence mot à mot (affichage) : mots manquants / en trop */
function diffHTML(user, answer) {
  const x = user.trim().split(/\s+/).filter(Boolean), y = answer.trim().split(/\s+/).filter(Boolean);
  const nx = x.map(w => norm(w)), ny = y.map(w => norm(w));
  const dp = lcs(nx, ny); let i = x.length, j = y.length; const out = [];
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && nx[i - 1] === ny[j - 1]) { out.unshift(esc(y[j - 1])); i--; j--; }
    else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) { out.unshift('<span class="add">' + esc(y[j - 1]) + "</span>"); j--; }
    else { out.unshift('<span class="miss">' + esc(x[i - 1]) + "</span>"); i--; }
  }
  return '<div class="diff">' + out.join(" ") + "</div>";
}

/* ============================ Niveaux ============================ */
const LEVELS = ["A1", "A2", "B1", "B2", "C1"];
const LEVEL_NAMES = { A1: "Débutant", A2: "Élémentaire", B1: "Intermédiaire", B2: "Intermédiaire avancé", C1: "Avancé" };
function lvlIdx(l) { const i = LEVELS.indexOf(String(l || "A1").replace("+", "")); return i < 0 ? 0 : i; }
function userLvl() { return Math.min(lvlIdx(S.level || "A1"), 3); } // le contenu va jusqu'au B2
// Plus le score est bas, plus le contenu est prioritaire : niveau de l'élève, puis le niveau au-dessus, puis les révisions en dessous.
function lvlRank(i) { const u = userLvl(); return i >= u ? i - u : (u - i) + 0.5; }
const LESSON_CEFR = { 1: 0, 2: 1, 3: 1, 4: 2, 5: 3 };
const LESSON_LABEL = { 1: "A1", 2: "A2", 3: "A2+", 4: "B1", 5: "B2" };

/* ============================ Données ============================ */
const DECK_ORDER = ["basics", "questions", "numbers", "food", "transport", "hotel", "airport", "verbs", "adjectives", "time", "shopping", "city", "health", "people", "weather", "leisure", "connectors", "body"];
const RAW_DECKS = window.VOCAB || [];
const deckOrd = (d) => { const i = DECK_ORDER.indexOf(d.id); return i >= 0 ? i : 100 + RAW_DECKS.indexOf(d); };
RAW_DECKS.forEach(d => { d.level = d.level || "A1"; d.lvl = lvlIdx(d.level); });
const DECKS = RAW_DECKS.slice().sort((a, b) => (a.lvl - b.lvl) || (deckOrd(a) - deckOrd(b)));
const WORDS = []; const WORD = {};
DECKS.forEach(d => {
  d.list = [];
  d.words.trim().split("\n").forEach(line => {
    const p = line.split("|").map(s => s.trim()); if (p.length < 2) return;
    let id = d.id + ":" + slug(p[0]); while (WORD[id]) id += "-2";
    const w = { id, deck: d.id, en: p[0], fr: p[1], exEn: p[2] || "", exFr: p[3] || "" };
    WORDS.push(w); WORD[id] = w; d.list.push(w);
  });
});
const DECK = Object.fromEntries(DECKS.map(d => [d.id, d]));

const LESSONS = (window.PHRASES || []).map(l => ({
  ...l, list: l.items.trim().split("\n").map((line, i) => {
    const [fr, en] = line.split("|");
    return { id: l.id + "-" + i, lesson: l.id, fr: fr.trim(), answers: en.split("//").map(s => s.trim()).filter(Boolean) };
  })
}));
const PHRASE = {}; LESSONS.forEach(l => l.list.forEach(p => { PHRASE[p.id] = p; }));
const ALL_PHRASES = LESSONS.flatMap(l => l.list);

const READINGS = window.READINGS || [];
const SITUATIONS = (window.SITUATIONS || []).map((s, i) => ({
  ...s, level: s.level || (i < 9 ? "A1" : "A2"), steps: s.lines.trim().split("\n").map(line => {
    const [them, task, ans] = line.split("|");
    return { them: them.trim(), task: task.trim(), answers: ans.split("//").map(x => x.trim()) };
  })
}));

const TIPS = [
  ["Parle tout seul 🗣️", "Décris à voix haute ce que tu fais : « I'm making coffee. I'm opening the door. » C'est bizarre, mais c'est le meilleur entraînement pour débloquer l'oral."],
  ["Le shadowing", "Lance une vidéo en anglais, mets en pause après une phrase et répète-la en imitant le ton, la vitesse et l'accent. 5 minutes par jour suffisent."],
  ["Pense en anglais", "Quand tu marches, essaie de nommer les choses autour de toi en anglais : car, tree, bus stop, shop... Les mots que tu ne connais pas, cherche-les le soir."],
  ["Les erreurs sont normales", "Personne ne parle parfaitement une langue étrangère. Les natifs préfèrent un anglais imparfait à un silence. Ose !"],
  ["Mets tes séries en VO avec sous-titres anglais", "Tu comprends déjà beaucoup. Passe aux sous-titres en anglais (pas en français) : tu relies le son à l'écrit."],
  ["Apprends des blocs, pas des mots", "Plutôt que « want » tout seul, retiens « I'd like a... », « Can I have... ? ». Ce sont ces blocs qui sortent naturellement en voyage."],
  ["Enregistre-toi", "Lis la lecture du jour à voix haute et enregistre-toi avec ton téléphone. Réécoute-toi : tu entendras tout de suite ce qu'il faut améliorer."],
  ["Change la langue de ton téléphone", "Passe ton téléphone ou tes jeux en anglais pendant une semaine. Ça fait plein de vocabulaire du quotidien gratuitement."],
  ["Le « Sorry, can you repeat? »", "C'est la phrase la plus utile. Utilise-la sans honte : même les natifs se font répéter entre eux."],
  ["Échange linguistique", "Des applis comme Tandem ou HelloTalk te mettent en contact avec des anglophones qui apprennent le français. Tu les aides, ils t'aident."],
  ["Régularité > intensité", "15 minutes tous les jours valent mieux que 2 heures le dimanche. Garde ta série de jours 🔥 !"],
  ["Utilise les mots de remplissage", "« Well... », « Let me think... », « You know... » te donnent du temps pour réfléchir sans casser la conversation."],
  ["Imite un personnage", "Choisis un acteur ou un youtubeur que tu aimes et imite sa façon de parler. L'imitation est le secret des gens qui ont un bon accent."],
  ["Prépare tes phrases avant de sortir", "Avant d'entrer dans un resto ou un magasin, prépare dans ta tête les 2–3 phrases dont tu auras besoin. Ça enlève le stress."],
  ["Chante !", "Les chansons que tu écoutes déjà sont un super entraînement de prononciation. Chante par-dessus en lisant les paroles."]
];

/* ============================ Répétition espacée (style Anki) ============================ */
function cardId(wid, dir) { return wid + "|" + dir; }
function previewIvl(st, grade) {
  const ivl = st ? st.ivl : 0, ease = st ? st.ease : 2.5;
  if (grade === 0) return 0;
  if (grade === 1) return ivl === 0 ? 1 : Math.max(ivl + 1, Math.round(ivl * 1.2));
  if (grade === 2) return ivl === 0 ? 1 : Math.max(ivl + 1, Math.round(ivl * ease));
  return ivl === 0 ? 3 : Math.max(ivl + 2, Math.round(ivl * ease * 1.3));
}
function fmtIvl(d) { if (d === 0) return "< 10 min"; if (d < 30) return d + " j"; if (d < 365) return Math.round(d / 30) + " mois"; return "1 an"; }
function gradeCard(id, grade) {
  const today = TODAY();
  let st = S.cards[id];
  const isNew = !st;
  if (!st) st = S.cards[id] = { ivl: 0, ease: 2.5, reps: 0, lapses: 0, due: today, first: today };
  const ds = dayStats();
  if (isNew) ds.newCards++;
  ds.cards++;
  const nIvl = Math.min(365, previewIvl(st, grade));
  if (grade === 0) { if (st.ivl >= 1) st.lapses++; st.ease = Math.max(1.3, st.ease - 0.2); }
  if (grade === 1) st.ease = Math.max(1.3, st.ease - 0.15);
  if (grade === 3) st.ease = Math.min(3.2, st.ease + 0.15);
  st.ivl = nIvl; st.due = today + nIvl; st.reps++; st.last = today;
  save();
  return grade === 0;
}
function wordLevel(w) {
  const r = S.cards[cardId(w.id, "r")], p = S.cards[cardId(w.id, "p")];
  const ivl = Math.max(r ? r.ivl : -1, p ? p.ivl : -1);
  if (ivl < 0) return 0; if (ivl < 7) return 1; if (ivl < 21) return 2; return 3;
}
function dirs() { return S.settings.direction === "both" ? ["r", "p"] : [S.settings.direction]; }
// Ordre des nouveaux mots : par priorité de niveau, et à l'intérieur d'un niveau on alterne les thèmes.
function mixByLevel(words) {
  const groups = {};
  words.forEach(w => { const d = DECK[w.deck]; const r = lvlRank(d.lvl); (groups[r] = groups[r] || {}); (groups[r][d.id] = groups[r][d.id] || []).push(w); });
  const out = [];
  Object.keys(groups).map(Number).sort((a, b) => a - b).forEach(r => {
    const lists = Object.values(groups[r]).map(l => l.filter(w => !S.cards[cardId(w.id, "r")] || !S.cards[cardId(w.id, "p")]).concat(l.filter(w => S.cards[cardId(w.id, "r")] && S.cards[cardId(w.id, "p")])));
    let k = 0, added = true;
    while (added) { added = false; lists.forEach(l => { if (k < l.length) { out.push(l[k]); added = true; } }); k++; }
  });
  return out;
}
function buildQueue(deckId) {
  const today = TODAY();
  const base = deckId === "all" ? WORDS : (DECK[deckId] ? DECK[deckId].list : WORDS);
  // Nouveaux mots : d'abord ceux du niveau de l'élève (tri stable)
  const words = deckId === "all" ? mixByLevel(base) : base;
  const ds = dayStats();
  const due = [], newR = [], newP = [];
  const useR = dirs().includes("r"), useP = dirs().includes("p"), both = useR && useP;
  words.forEach(w => {
    ["r", "p"].forEach(dir => {
      const id = cardId(w.id, dir), st = S.cards[id];
      if (st) { if (st.due <= today && dirs().includes(dir)) due.push({ id, due: st.due }); return; }
      if (dir === "r" && useR) newR.push(id);
      if (dir === "p" && useP) {
        if (!both) newP.push(id);
        else { const r = S.cards[cardId(w.id, "r")]; if (r && r.reps >= 1 && r.ivl >= 1 && r.first < today) newP.push(id); }
      }
    });
  });
  due.sort((a, b) => a.due - b.due);
  const room = Math.max(0, S.settings.newPerDay - ds.newCards);
  const news = []; let i = 0, j = 0;
  while (news.length < room && (i < newP.length || j < newR.length)) {
    if (i < newP.length) news.push(newP[i++]);
    if (news.length < room && j < newR.length) news.push(newR[j++]);
  }
  // On intercale les nouvelles cartes entre les révisions
  const q = []; const d = due.map(x => x.id); let k = 0;
  while (d.length || k < news.length) {
    for (let n = 0; n < 3 && d.length; n++) q.push(d.shift());
    if (k < news.length) q.push(news[k++]);
  }
  return q;
}
function countDueToday() { return buildQueue("all").length; }
// « Je connais déjà » : le mot sort des nouveautés et revient dans un mois pour vérifier.
function markKnown(wid) {
  const today = TODAY();
  ["r", "p"].forEach(dir => {
    const id = cardId(wid, dir);
    if (!S.cards[id]) S.cards[id] = { ivl: 30, ease: 2.6, reps: 1, lapses: 0, due: today + 25 + Math.floor(Math.random() * 15), first: today, last: today, known: true };
  });
  const ds = dayStats(); ds.known = (ds.known || 0) + 1; ds.cards++;
  save();
}

/* ============================ Navigation ============================ */
let currentTab = "home";
const TABS = { home: (o) => renderHome(o), cards: (o) => renderCards(o), translate: (o) => renderTranslateHome(o), read: (o) => renderRead(o), speak: (o) => renderSpeak(o) };
function go(tab, opts) {
  stopSpeak();
  currentTab = tab;
  $$(".tab").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  $$(".view").forEach(v => v.classList.toggle("active", v.id === "view-" + tab));
  TABS[tab](opts);
  window.scrollTo({ top: 0 });
  updateStreak();
}
function updateStreak() { $("#streakN").textContent = streak(); }

/* ============================ Accueil ============================ */
function goals() {
  const ds = dayStats();
  const remaining = countDueToday();
  return [
    { key: "cards", icon: "🃏", label: "Cartes de vocabulaire", meta: ds.cards >= 20 || (remaining === 0 && ds.cards > 0) ? plural(ds.cards, "carte") + " révisée" + (ds.cards > 1 ? "s" : "") : (remaining ? remaining + " à faire aujourd'hui" : "Rien à réviser"), done: ds.cards >= 20 || (remaining === 0 && ds.cards > 0), tab: "cards" },
    { key: "phrases", icon: "✍️", label: "10 phrases à traduire", meta: Math.min(ds.phrases, 10) + " / 10", done: ds.phrases >= 10, tab: "translate" },
    { key: "reading", icon: "📖", label: "Lecture du jour", meta: ds.reading ? "Lue ✔" : "Épisode " + (todayReadingIndex() + 1) + " — " + READINGS[todayReadingIndex()].title, done: ds.reading > 0, tab: "read" },
    { key: "sit", icon: "🗣️", label: "Une situation à l'oral", meta: ds.sit ? "Faite ✔" : "Entraîne-toi à parler", done: ds.sit > 0, tab: "speak" }
  ];
}
function renderHome() {
  const v = $("#view-home");
  const g = goals(); const doneN = g.filter(x => x.done).length;
  const dayN = TODAY() - S.start + 1;
  const learned = WORDS.filter(w => wordLevel(w) > 0).length;
  const solid = WORDS.filter(w => wordLevel(w) >= 2).length;
  const phrOk = ALL_PHRASES.filter(p => S.phr[p.id] && S.phr[p.id].lastOk).length;
  const readDone = Object.keys(S.read).length;
  const tip = TIPS[TODAY() % TIPS.length];
  const gi = window.RT && RT.grammarInfo ? RT.grammarInfo() : null;
  const hour = new Date().getHours();
  const hello = hour < 5 ? "Still awake" : hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  // Calendrier des 5 dernières semaines
  const today = TODAY(); let heat = "";
  const offset = (new Date().getDay() + 6) % 7; // lundi = 0
  const startD = today - offset - 28;
  for (let d = startD; d < startD + 35; d++) {
    const a = activityScore(d); const lvl = d > today ? "" : a === 0 ? "" : a < 15 ? "l1" : a < 40 ? "l2" : "l3";
    heat += `<div class="${lvl} ${d === today ? "today" : ""}" title="${new Date(d * 86400000).toLocaleDateString("fr-FR")}"></div>`;
  }
  v.innerHTML = `
    <div class="hero">
      <h2>${hello}${S.settings.name ? ", " + esc(S.settings.name) : ""} ! 👋</h2>
      <p>${doneN === 4 ? "Objectif du jour atteint. Great job! 🎉" : "Ta mission du jour : " + (4 - doneN) + " étape" + (4 - doneN > 1 ? "s" : "") + " pour avancer vers ton prochain voyage."}</p>
      <span class="day-badge">Jour ${dayN} · 🔥 ${streak()} jour${streak() > 1 ? "s" : ""} d'affilée</span>
      ${S.level ? `<span class="day-badge">🎯 Niveau ${S.level}</span>` : ""}
    </div>
    ${!S.level ? `<div class="panel test-cta"><div class="row"><div style="font-size:30px">🎯</div><div class="grow"><b>Fais le test de niveau</b><div class="small muted">5 à 8 minutes. L'appli s'adapte ensuite à ton vrai niveau (cartes, phrases, lectures, grammaire).</div></div></div>
      <button class="btn block" id="homeTest" style="margin-top:12px">Commencer le test</button></div>` : ""}
    <div class="panel">
      <div class="row" style="margin-bottom:8px"><h3 class="grow" style="margin:0">Aujourd'hui</h3><span class="muted small">${doneN}/4</span></div>
      <div class="progress"><div style="width:${doneN * 25}%"></div></div>
      <div style="margin-top:6px">
        ${g.map(x => `<div class="goal ${x.done ? "done" : ""}" data-go="${x.tab}">
          <div class="check">${x.done ? "✓" : x.icon}</div>
          <div class="grow"><div class="label">${x.label}</div><div class="meta">${esc(x.meta)}</div></div>
          <div class="go">›</div></div>`).join("")}
      </div>
    </div>
    ${gi && gi.next ? `<div class="panel goal" style="padding:14px 18px" data-go="grammar">
      <div class="check">📐</div><div class="grow"><div class="label">Bonus : fiche de grammaire</div><div class="meta">${esc(gi.next.icon + " " + gi.next.title)}</div></div><div class="go">›</div></div>` : ""}
    <div class="panel">
      <h3>Ta progression</h3>
      <div class="stats">
        <div class="stat"><div class="n">${learned}</div><div class="l">mots vus / ${WORDS.length}</div></div>
        <div class="stat"><div class="n">${solid}</div><div class="l">mots bien ancrés</div></div>
        <div class="stat"><div class="n">${phrOk}</div><div class="l">phrases réussies / ${ALL_PHRASES.length}</div></div>
        <div class="stat"><div class="n">${readDone}</div><div class="l">épisodes lus / ${READINGS.length}</div></div>
        <div class="stat"><div class="n">${gi ? gi.passed : 0}</div><div class="l">fiches de grammaire / ${gi ? gi.total : 0}</div></div>
        <div class="stat"><div class="n">${Object.values(S.sit).reduce((a, b) => a + b, 0)}</div><div class="l">situations jouées</div></div>
      </div>
      <div class="small muted" style="margin-top:12px">Les 5 dernières semaines</div>
      <div class="heat">${heat}</div>
    </div>
    <div class="tip-box"><b>💡 Conseil du jour — ${esc(tip[0])}</b>${esc(tip[1])}</div>`;
  $$(".goal", v).forEach(el => el.addEventListener("click", () => go(el.dataset.go, el.dataset.go === "grammar" && gi && gi.next ? { fiche: gi.next.id } : undefined)));
  const ht = $("#homeTest"); if (ht) ht.addEventListener("click", () => go("test"));
}

/* ============================ Cartes ============================ */
let cardDeck = "all", cardQueue = [], cardFlipped = false, cardShowList = false, sessionCount = 0;
function renderCards() {
  const v = $("#view-cards");
  cardQueue = buildQueue(cardDeck); cardFlipped = false; sessionCount = 0;
  const opts = `<option value="all">Tous les thèmes (${WORDS.length} mots) — priorité au niveau ${LEVELS[userLvl()]}</option>` +
    LEVELS.slice(0, 4).map(L => { const ds = DECKS.filter(d => d.level === L); if (!ds.length) return "";
      return `<optgroup label="${L} — ${LEVEL_NAMES[L]}">` + ds.map(d => `<option value="${d.id}">${d.icon} ${esc(d.name)} — ${d.list.filter(w => wordLevel(w) > 0).length}/${d.list.length}</option>`).join("") + "</optgroup>"; }).join("");
  v.innerHTML = `
    <h1 class="view-title">Cartes</h1>
    <p class="view-sub">Comme Anki : sois honnête avec toi-même, l'appli revient sur les mots au bon moment. Un nouveau mot trop facile ? « Je connais déjà » le met de côté.</p>
    <div class="deck-bar"><select id="deckSel" aria-label="Thème">${opts}</select>
      <button class="btn ghost small" id="listBtn">${cardShowList ? "🃏 Réviser" : "📋 Liste"}</button></div>
    <div id="cardZone"></div>`;
  $("#deckSel").value = cardDeck;
  $("#deckSel").addEventListener("change", e => { cardDeck = e.target.value; renderCards(); });
  $("#listBtn").addEventListener("click", () => { cardShowList = !cardShowList; renderCards(); });
  if (cardShowList) renderWordList(); else showCard();
}
function renderWordList() {
  const z = $("#cardZone");
  const words = cardDeck === "all" ? WORDS : DECK[cardDeck].list;
  z.innerHTML = `<input class="search" id="wSearch" placeholder="Rechercher un mot (anglais ou français)…" autocomplete="off">
    <div class="small muted" style="margin-bottom:6px">● gris : jamais vu · <span style="color:var(--warn)">●</span> en cours · <span style="color:var(--good)">●</span> bien · <span style="color:var(--sea)">●</span> maîtrisé</div>
    <div class="panel word-list" id="wList"></div>`;
  const draw = (q) => {
    const nq = q.toLowerCase().trim();
    const list = words.filter(w => !nq || w.en.toLowerCase().includes(nq) || w.fr.toLowerCase().includes(nq)).slice(0, 400);
    $("#wList").innerHTML = list.map(w => `<div class="word-item"><span class="lvl-dot l${wordLevel(w)}"></span>
      <div class="grow"><div class="en">${esc(w.en)}</div><div class="fr">${esc(w.fr)}</div></div>
      <button class="audio-btn" data-say="${esc(w.en)}" aria-label="Écouter">🔊</button></div>`).join("") || '<p class="muted">Aucun mot trouvé.</p>';
    $$("[data-say]", $("#wList")).forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
  };
  draw(""); $("#wSearch").addEventListener("input", e => draw(e.target.value));
}
function cardCounts() {
  let n = 0, l = 0, r = 0;
  cardQueue.forEach(id => { const st = S.cards[id]; if (!st) n++; else if (st.ivl === 0) l++; else r++; });
  return { n, l, r };
}
function showCard() {
  const z = $("#cardZone"); if (!z) return;
  cardFlipped = false;
  if (!cardQueue.length) {
    const ds = dayStats();
    const room = Math.max(0, S.settings.newPerDay - ds.newCards);
    z.innerHTML = `<div class="panel done-box"><div class="big">🎉</div>
      <h2>${sessionCount ? "Session terminée !" : "Rien à réviser pour l'instant"}</h2>
      <p class="muted">${ds.cards ? "Tu as révisé " + plural(ds.cards, "carte") + " aujourd'hui. " : ""}${room === 0 ? "Tu as vu tes " + S.settings.newPerDay + " nouveaux mots du jour. Reviens demain pour la suite !" : cardDeck !== "all" ? "Ce thème est à jour. Choisis-en un autre ou « Tous les thèmes »." : "Tout est à jour."}</p>
      <div class="row" style="justify-content:center;margin-top:10px;flex-wrap:wrap">
        ${room === 0 ? '<button class="btn ghost" id="moreNew">+ 10 nouveaux mots</button>' : ""}
        <button class="btn" id="toPhr">Passer aux phrases ✍️</button></div></div>`;
    const mn = $("#moreNew"); if (mn) mn.addEventListener("click", () => { dayStats().newCards = Math.max(0, dayStats().newCards - 10); save(); renderCards(); });
    $("#toPhr").addEventListener("click", () => go("translate"));
    return;
  }
  const id = cardQueue[0]; const [wid, dir] = id.split("|"); const w = WORD[wid];
  if (!w) { cardQueue.shift(); showCard(); return; }
  const st = S.cards[id]; const c = cardCounts(); const deck = DECK[w.deck];
  const front = dir === "r" ? w.en : w.fr, back = dir === "r" ? w.fr : w.en;
  z.innerHTML = `
    <div class="counts"><span class="new">${c.n} nouveaux</span><span class="lrn">${c.l} en cours</span><span class="rev">${c.r} à revoir</span></div>
    <div class="flash" id="flash">
      <div class="cat">${deck.icon} ${esc(deck.name)} · ${deck.level}</div>
      <div class="dir">${dir === "r" ? "EN → FR" : "FR → EN"}</div>
      <div class="front">
        ${!st ? '<span class="level-tag">Nouveau mot</span>' : ""}
        <div class="word">${esc(front)}</div>
        ${dir === "r" ? `<button class="audio-btn" id="sayFront" aria-label="Écouter">🔊</button>` : `<div class="say-hint">🗣️ Dis-le à voix haute en anglais avant de retourner</div>`}
      </div>
      <div class="back hidden" id="back">
        <div class="row" style="justify-content:center"><div class="answer">${esc(back)}</div>
          ${dir === "p" ? `<button class="audio-btn" id="sayBack" aria-label="Écouter">🔊</button>` : ""}</div>
        ${w.exEn ? `<div class="ex"><div class="grow"><div class="en">${esc(w.exEn)}</div><div class="fr">${esc(w.exFr)}</div></div>
          <button class="audio-btn" id="sayEx" aria-label="Écouter l'exemple">🔊</button></div>` : ""}
      </div>
    </div>
    <div id="cardActions" style="margin-top:14px">
      <button class="btn block" id="flipBtn">Afficher la réponse <span class="small" style="opacity:.7">(espace)</span></button>
      ${!st ? `<button class="btn ghost block" id="knownBtn" style="margin-top:8px">✓ Je connais déjà ce mot <span class="small muted">(K)</span></button>` : ""}
    </div>`;
  const kb = $("#knownBtn"); if (kb) kb.addEventListener("click", () => skipKnown());
  if (dir === "r") { $("#sayFront").addEventListener("click", e => { e.stopPropagation(); speak(w.en); }); if (S.settings.autoplay) speak(w.en); }
  $("#flipBtn").addEventListener("click", flipCard);
  $("#flash").addEventListener("click", e => { if (!cardFlipped && !e.target.closest("button")) flipCard(); });
}
function flipCard() {
  if (cardFlipped || !cardQueue.length) return;
  cardFlipped = true;
  const id = cardQueue[0]; const [wid, dir] = id.split("|"); const w = WORD[wid]; const st = S.cards[id];
  $("#back").classList.remove("hidden");
  if (dir === "p") { $("#sayBack").addEventListener("click", () => speak(w.en)); if (S.settings.autoplay) speak(w.en); }
  const ex = $("#sayEx"); if (ex) ex.addEventListener("click", () => speak(w.exEn));
  const labels = ["À revoir", "Difficile", "Bien", "Facile"], cls = ["again", "hard", "good", "easy"];
  $("#cardActions").innerHTML = `<div class="grades">${labels.map((l, g) => `<button class="grade ${cls[g]}" data-g="${g}">${l}<small>${fmtIvl(previewIvl(st, g))}</small></button>`).join("")}</div>
    <p class="small muted center" style="margin-top:8px">Raccourcis clavier : 1 · 2 · 3 · 4</p>`;
  $$(".grade").forEach(b => b.addEventListener("click", () => answerCard(+b.dataset.g)));
}
function skipKnown() {
  if (!cardQueue.length) return;
  const wid = cardQueue[0].split("|")[0];
  if (S.cards[cardQueue[0]]) return;
  markKnown(wid);
  cardQueue = cardQueue.filter(id => id.split("|")[0] !== wid);
  sessionCount++; updateStreak(); showCard();
}
function answerCard(g) {
  if (!cardFlipped) return;
  const id = cardQueue.shift();
  const again = gradeCard(id, g); sessionCount++;
  if (again) cardQueue.splice(Math.min(3, cardQueue.length), 0, id);
  updateStreak(); showCard();
}
document.addEventListener("keydown", e => {
  if (currentTab !== "cards" || cardShowList || e.target.matches("input, textarea, select")) return;
  if (e.code === "Space" || e.key === "Enter") { e.preventDefault(); if (!cardFlipped) flipCard(); else answerCard(2); }
  if (cardFlipped && ["1", "2", "3", "4"].includes(e.key)) answerCard(+e.key - 1);
  if (!cardFlipped && (e.key === "k" || e.key === "K")) skipKnown();
});

/* ============================ Traduction ============================ */
let tr = null; // session en cours
function phraseMastered(p) { const s = S.phr[p.id]; return s && s.ok >= 2 && s.lastOk; }
function renderTranslateHome() {
  const v = $("#view-translate"); tr = null;
  v.innerHTML = `
    <h1 class="view-title">Traduire</h1>
    <p class="view-sub">Du français vers l'anglais : c'est l'exercice qui débloque l'oral. Écris, assemble les mots, ou dis la phrase au micro.</p>
    <div class="lesson-grid">
      <button class="lesson featured" data-l="mix"><div class="lv">⚡ RECOMMANDÉ · NIVEAU ${LEVELS[userLvl()]}</div><div class="nm">Mélange du jour — 10 phrases</div>
        <div class="small" style="opacity:.8">Tes erreurs d'abord, puis de nouvelles phrases de ton niveau et du niveau au-dessus.</div></button>
    </div>
    ${[5, 4, 3, 2, 1].filter(lv => LESSONS.some(l => l.level === lv)).sort((a, b) => lvlRank(LESSON_CEFR[a]) - lvlRank(LESSON_CEFR[b]) || a - b).map(lv => {
      const ls = LESSONS.filter(l => l.level === lv); const rec = lvlRank(LESSON_CEFR[lv]) <= 1;
      return `<h3 class="lvl-head">${LESSON_LABEL[lv]} ${rec ? '<span class="rec-tag">pour toi</span>' : '<span class="small muted">révision / plus tard</span>'}</h3>
      <div class="lesson-grid">${ls.map(l => { const m = l.list.filter(phraseMastered).length; return `<button class="lesson" data-l="${l.id}">
        <div class="lv">${LESSON_LABEL[l.level]}</div><div class="nm">${esc(l.name)}</div>
        <div class="progress"><div style="width:${Math.round(m / l.list.length * 100)}%"></div></div>
        <div class="small muted" style="margin-top:4px">${m}/${l.list.length}</div></button>`; }).join("")}</div>`; }).join("")}`;
  $$(".lesson", v).forEach(b => b.addEventListener("click", () => startTranslate(b.dataset.l)));
}
function mixPhrases() {
  const wrong = shuffle(ALL_PHRASES.filter(p => S.phr[p.id] && !S.phr[p.id].lastOk));
  const fresh = LESSONS.filter(l => lvlRank(LESSON_CEFR[l.level]) <= 1.5).sort((a, b) => lvlRank(LESSON_CEFR[a.level]) - lvlRank(LESSON_CEFR[b.level]) || a.level - b.level)
    .flatMap(l => shuffle(l.list.filter(p => !S.phr[p.id])));
  const old = ALL_PHRASES.filter(p => S.phr[p.id] && S.phr[p.id].lastOk).sort((a, b) => (S.phr[a.id].last || 0) - (S.phr[b.id].last || 0));
  const pick = wrong.slice(0, 4);
  for (const p of fresh) { if (pick.length >= 8) break; pick.push(p); }
  for (const p of old) { if (pick.length >= 10) break; if (!pick.includes(p)) pick.push(p); }
  for (const p of wrong) { if (pick.length >= 10) break; if (!pick.includes(p)) pick.push(p); }
  return shuffle(pick).slice(0, 10);
}
function startTranslate(lid) {
  const lesson = LESSONS.find(l => l.id === lid);
  const items = lid === "mix" ? mixPhrases() : shuffle(lesson.list);
  tr = { lid, lesson, items, base: items.length, i: 0, okN: 0, mode: "write" };
  try { tr.mode = localStorage.getItem("rt-mode") || "write"; } catch (e) { tr.mode = "write"; }
  showPhrase();
}
function setMode(m) { tr.mode = m; try { localStorage.setItem("rt-mode", m); } catch (e) {} showPhrase(); }
function showPhrase() {
  const v = $("#view-translate");
  if (tr.i >= tr.items.length) return endTranslate();
  const p = tr.items[tr.i]; tr.answered = false;
  const lesson = LESSONS.find(l => l.id === p.lesson);
  v.innerHTML = `
    <div class="row" style="margin-bottom:12px"><button class="btn ghost small" id="trBack">‹ Retour</button>
      <div class="grow"><div class="progress"><div style="width:${tr.i / tr.items.length * 100}%"></div></div></div>
      <span class="small muted">${tr.i + 1}/${tr.items.length}</span></div>
    <div class="mode-switch">
      <button data-m="write" class="${tr.mode === "write" ? "on" : ""}">✍️ Écrire</button>
      <button data-m="puzzle" class="${tr.mode === "puzzle" ? "on" : ""}">🧩 Assembler</button>
      <button data-m="oral" class="${tr.mode === "oral" ? "on" : ""}">🎤 À l'oral</button>
    </div>
    ${tr.i === 0 && tr.lesson ? `<div class="lesson-tip">💡 ${esc(tr.lesson.tip)}</div>` : ""}
    <div class="panel">
      <div class="small muted">${esc(lesson.name)} · Traduis en anglais</div>
      <div class="prompt-fr">${esc(p.fr)}</div>
      <div id="trInput"></div>
      <div id="trFeedback"></div>
    </div>
    <div id="trActions"></div>`;
  $("#trBack").addEventListener("click", renderTranslateHome);
  $$(".mode-switch button", v).forEach(b => b.addEventListener("click", () => setMode(b.dataset.m)));
  ({ write: inputWrite, puzzle: inputPuzzle, oral: inputOral })[tr.mode](p);
}
function inputWrite(p) {
  $("#trInput").innerHTML = `<textarea class="answer-input" id="trText" placeholder="Écris ta traduction…" autocapitalize="sentences" spellcheck="false"></textarea>`;
  $("#trActions").innerHTML = `<div class="row"><button class="btn ghost" id="trSkip">Je ne sais pas</button><button class="btn grow" id="trCheck">Vérifier</button></div>`;
  const ta = $("#trText"); setTimeout(() => ta.focus(), 50);
  ta.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (!tr.answered) checkPhrase(p, ta.value); else nextPhrase(); } });
  $("#trCheck").addEventListener("click", () => checkPhrase(p, ta.value));
  $("#trSkip").addEventListener("click", () => checkPhrase(p, ""));
}
function inputPuzzle(p) {
  const strip = (w) => w.replace(/[.,!?;:"«»]+/g, "");
  const words = p.answers[0].split(/\s+/).map(strip).filter(Boolean);
  const lower = new Set(words.map(w => norm(w)));
  const pool = shuffle(ALL_PHRASES.filter(x => x !== p).flatMap(x => x.answers[0].split(/\s+/).map(strip))).filter(w => w && !lower.has(norm(w)));
  const distract = Array.from(new Set(pool)).slice(0, Math.min(3, Math.max(2, Math.floor(words.length / 3))));
  const tiles = shuffle(words.concat(distract)).map((t, i) => ({ t, i }));
  let chosen = [];
  $("#trInput").innerHTML = `<div class="tiles target" id="tgt"></div><div class="tiles" id="src"></div>`;
  const draw = () => {
    $("#tgt").innerHTML = chosen.map(i => `<button class="tile" data-i="${i}">${esc(tiles[i].t)}</button>`).join("") || '<span class="muted small">Touche les mots dans l\'ordre…</span>';
    $("#src").innerHTML = tiles.map(x => `<button class="tile ${chosen.includes(x.i) ? "used" : ""}" data-i="${x.i}">${esc(x.t)}</button>`).join("");
    $$("#tgt .tile").forEach(b => b.addEventListener("click", () => { if (tr.answered) return; chosen = chosen.filter(i => i !== +b.dataset.i); draw(); }));
    $$("#src .tile").forEach(b => b.addEventListener("click", () => { if (tr.answered || chosen.includes(+b.dataset.i)) return; chosen.push(+b.dataset.i); speak(tiles[+b.dataset.i].t); draw(); }));
  };
  draw();
  $("#trActions").innerHTML = `<div class="row"><button class="btn ghost" id="trSkip">Je ne sais pas</button><button class="btn grow" id="trCheck">Vérifier</button></div>`;
  $("#trCheck").addEventListener("click", () => checkPhrase(p, chosen.map(i => tiles[i].t).join(" "), true));
  $("#trSkip").addEventListener("click", () => checkPhrase(p, ""));
}
function inputOral(p) {
  if (!SR) {
    $("#trInput").innerHTML = `<p class="muted small">La reconnaissance vocale n'est pas disponible sur ce navigateur (essaie Chrome ou Safari récent). Dis la phrase à voix haute, puis révèle la réponse et note-toi honnêtement.</p>`;
    $("#trActions").innerHTML = `<button class="btn block" id="trReveal">J'ai dit ma phrase — révéler</button>`;
    $("#trReveal").addEventListener("click", () => {
      tr.answered = true;
      $("#trFeedback").innerHTML = `<div class="feedback almost"><div class="title">Compare avec ta version :</div>${modelHTML(p)}</div>`;
      wireModelAudio();
      $("#trActions").innerHTML = `<div class="row"><button class="btn ghost grow" data-self="0">Raté</button><button class="btn grow" data-self="1">J'avais bon ✓</button></div>`;
      $$("[data-self]").forEach(b => b.addEventListener("click", () => { recordPhrase(p, b.dataset.self === "1"); nextPhrase(); }));
    });
    return;
  }
  $("#trInput").innerHTML = `<button class="mic-btn" id="trMic" aria-label="Parler">🎤</button><p class="center small muted">Touche le micro et dis la phrase en anglais</p><div class="heard center" id="trHeard"></div>`;
  $("#trActions").innerHTML = `<button class="btn ghost block" id="trSkip">Je ne sais pas</button>`;
  $("#trSkip").addEventListener("click", () => checkPhrase(p, ""));
  wireMic($("#trMic"), (alts) => {
    if (!alts.length) { toast("Je n'ai rien entendu, réessaie."); return; }
    let best = alts[0], bs = -1;
    alts.forEach(a => { const s = bestMatch(a, p.answers).score; if (s > bs) { bs = s; best = a; } });
    $("#trHeard").textContent = "J'ai entendu : « " + best + " »";
    checkPhrase(p, best, false, true);
  });
}
function modelHTML(p) {
  return `<div class="model"><span class="grow">${esc(p.answers[0])}</span><button class="audio-btn" data-say="${esc(p.answers[0])}">🔊</button><button class="audio-btn slow" data-slow="${esc(p.answers[0])}" aria-label="Écouter lentement">🐢</button></div>
    ${p.answers.length > 1 ? `<div class="alts">Aussi accepté : ${p.answers.slice(1).map(esc).join(" · ")}</div>` : ""}`;
}
function wireModelAudio(root = document) {
  $$("[data-say]", root).forEach(b => b.onclick = () => speak(b.dataset.say));
  $$("[data-slow]", root).forEach(b => b.onclick = () => speak(b.dataset.slow, { slow: true }));
}
function recordPhrase(p, ok) {
  const s = S.phr[p.id] || (S.phr[p.id] = { ok: 0, ko: 0 });
  if (ok) s.ok++; else s.ko++;
  s.lastOk = ok; s.last = TODAY();
  dayStats().phrases++; if (ok) tr.okN++;
  save(); updateStreak();
}
function checkPhrase(p, user, strict, oral) {
  if (tr.answered) return;
  tr.answered = true;
  const empty = !user.trim();
  const m = empty ? { score: 0, answer: p.answers[0] } : bestMatch(user, p.answers);
  const okLimit = oral ? 0.85 : 0.999, almostLimit = oral ? 0.6 : 0.75;
  const ok = !empty && m.score >= okLimit;
  const almost = !ok && !empty && m.score >= almostLimit;
  let html;
  if (ok) html = `<div class="feedback ok"><div class="title">✅ ${pickPraise()}</div>${m.answer !== p.answers[0] ? `<div class="small">Ta version est correcte. Autre façon de dire :</div>` : ""}${modelHTML(p)}</div>`;
  else if (almost) html = `<div class="feedback almost"><div class="title">🟡 Presque !</div>${oral ? "" : diffHTML(user, m.answer)}${modelHTML(p)}
    <div class="row" style="margin-top:10px"><button class="btn ghost small" id="trOverride">J'avais bon quand même</button></div></div>`;
  else html = `<div class="feedback ko"><div class="title">${empty ? "📘 La réponse" : "❌ Pas tout à fait"}</div>${!empty && !oral ? diffHTML(user, m.answer) : ""}${modelHTML(p)}
    ${empty ? "" : `<div class="row" style="margin-top:10px"><button class="btn ghost small" id="trOverride">J'avais bon quand même</button></div>`}</div>`;
  $("#trFeedback").innerHTML = html;
  wireModelAudio($("#trFeedback"));
  recordPhrase(p, ok);
  if (!ok) speak(p.answers[0]);
  const ov = $("#trOverride");
  if (ov) ov.addEventListener("click", () => {
    const s = S.phr[p.id]; s.ko = Math.max(0, s.ko - 1); s.ok++; s.lastOk = true; tr.okN++; save();
    ov.parentElement.innerHTML = '<span class="small score-ok">Compté comme juste ✓</span>';
  });
  if (!ok && tr.items.length < tr.base + 6) tr.items.push(p); // on la revoit en fin de série
  $("#trActions").innerHTML = `<button class="btn block" id="trNext">Continuer <span class="small" style="opacity:.7">(Entrée)</span></button>`;
  $("#trNext").addEventListener("click", nextPhrase);
  $("#trNext").focus();
}
const PRAISE = ["Perfect!", "Great job!", "Well done!", "Excellent!", "Awesome!", "Nice one!", "Spot on!"];
function pickPraise() { return PRAISE[Math.floor(Math.random() * PRAISE.length)]; }
function nextPhrase() { tr.i++; showPhrase(); }
function endTranslate() {
  const v = $("#view-translate"); const n = tr.i;
  v.innerHTML = `<div class="panel done-box"><div class="big">${tr.okN >= n * 0.8 ? "🏆" : "💪"}</div>
    <h2>Série terminée !</h2><p class="muted">${tr.okN} bonne${tr.okN > 1 ? "s" : ""} réponse${tr.okN > 1 ? "s" : ""} sur ${n} essais. ${tr.okN >= n * 0.8 ? "Super niveau !" : "Les phrases ratées reviendront dans le mélange du jour."}</p>
    <div class="row" style="justify-content:center;flex-wrap:wrap;margin-top:10px">
      <button class="btn ghost" id="trAgain">Recommencer</button><button class="btn" id="trHome">Autres leçons</button></div></div>`;
  $("#trAgain").addEventListener("click", () => startTranslate(tr.lid));
  $("#trHome").addEventListener("click", renderTranslateHome);
}

/* ============================ Lecture du jour ============================ */
function doneReadings() { return Object.keys(S.read).map(Number); }
function readToday() { return Object.values(S.read).some(r => r.day === TODAY()); }
function todayReadingIndex() {
  const done = new Set(doneReadings());
  if (done.size >= READINGS.length) {
    const t = Object.entries(S.read).find(([, r]) => r.day === TODAY());
    return t ? +t[0] : TODAY() % READINGS.length;
  }
  if (readToday()) { const t = Object.entries(S.read).filter(([, r]) => r.day === TODAY()).map(([k]) => +k); return Math.max(...t); }
  const start = Math.min(S.readStart || 0, READINGS.length - 1);
  for (let k = 0; k < READINGS.length; k++) { const i = (start + k) % READINGS.length; if (!done.has(i)) return i; }
  return 0;
}
function isLocked(i, doneSet) {
  if (doneSet.has(i) || i < (S.readStart || 0)) return false;
  return i > todayReadingIndex();
}
let readState = { idx: null, showFr: false, showGloss: false, slow: false, playing: false };
function renderRead(opts) {
  const idx = opts && typeof opts.idx === "number" ? opts.idx : todayReadingIndex();
  readState = { idx, showFr: false, showGloss: false, slow: false, playing: false, answers: {} };
  drawReading();
}
function glossify(sentence, gloss) {
  const terms = Object.keys(gloss).sort((a, b) => b.length - a.length);
  if (!terms.length) return esc(sentence);
  const re = new RegExp("(?<![A-Za-z])(" + terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")(?![A-Za-z])", "gi");
  let out = "", last = 0, m;
  while ((m = re.exec(sentence))) {
    out += esc(sentence.slice(last, m.index));
    const key = terms.find(t => t.toLowerCase() === m[0].toLowerCase());
    out += `<span class="gl" data-fr="${esc(gloss[key])}">${esc(m[0])}</span>`;
    last = m.index + m[0].length;
  }
  return out + esc(sentence.slice(last));
}
function splitSentences(par) { return par.match(/[^.!?]+[.!?]+["”’)]*\s*|[^.!?]+$/g) || [par]; }
function drawReading() {
  const v = $("#view-read"); const idx = readState.idx; const r = READINGS[idx];
  const done = S.read[idx];
  const doneSet = new Set(doneReadings());
  let sIdx = 0; const sentences = [];
  const textHTML = r.text.split("\n").map(par => "<p>" + splitSentences(par).map(s => { sentences.push(s.trim()); return `<span class="s" data-s="${sIdx++}">${glossify(s, r.glossary)}</span>`; }).join("") + "</p>").join("");
  readState.sentences = sentences;
  const allDone = doneSet.size >= READINGS.length;
  v.innerHTML = `
    <h1 class="view-title">Lecture du jour</h1>
    <p class="view-sub">Un épisode par jour. Saison 1 « Tom's Big Trip » (A1 → A2) · Saison 2 « Two Brothers Down Under » (B1 → B2). Touche les mots soulignés pour la traduction.</p>
    ${readToday() && !allDone && idx === todayReadingIndex() && idx + 1 < READINGS.length ? `<div class="lesson-tip">✅ Lecture du jour faite ! L'épisode ${idx + 2} se débloque demain. Tu peux relire les précédents en attendant.</div>` : ""}
    ${allDone ? `<div class="lesson-tip">🏁 Tu as fini toute l'histoire ! Chaque jour, un épisode revient pour une relecture : essaie de le lire à voix haute, sans la traduction.</div>` : ""}
    <div class="panel">
      <div class="reading-head"><div><div class="place">Épisode ${idx + 1} · ${esc(r.place)}</div><h2>${esc(r.title)}</h2></div><span class="level-tag">${esc(r.level)}</span></div>
      <div class="toolbar">
        <button class="btn sea small" id="rdPlay">${readState.playing ? "⏹ Stop" : "▶ Écouter"}</button>
        <button class="chip ${readState.slow ? "on" : ""}" id="rdSlow">🐢 Lent</button>
        <button class="chip ${readState.showFr ? "on" : ""}" id="rdFr">🇫🇷 Traduction</button>
        <button class="chip ${readState.showGloss ? "on" : ""}" id="rdGloss">📚 Lexique</button>
      </div>
      <div class="reading-text" id="rdText">${textHTML}</div>
      ${readState.showFr ? `<div class="reading-fr">${r.fr.split("\n").map(p => "<p>" + esc(p) + "</p>").join("")}</div>` : ""}
      ${readState.showGloss ? `<div class="panel" style="margin:14px 0 0;box-shadow:none;background:var(--bg2)"><div class="gloss-table">${Object.entries(r.glossary).map(([e, f]) => `<div class="e">${esc(e)}</div><div>${esc(f)}</div>`).join("")}</div>
        <button class="btn ghost small" id="rdAddCards" style="margin-top:12px">Écouter le lexique 🔊</button></div>` : ""}
    </div>
    <div class="panel"><h3>As-tu compris ?</h3>
      ${r.q.map((q, qi) => `<div class="quiz-q">${qi + 1}. ${esc(q[0])}</div>${quizOrder(idx, qi, q[1].length).map(oi => `<button class="quiz-opt" data-q="${qi}" data-o="${oi}">${esc(q[1][oi])}</button>`).join("")}`).join("")}
      <div id="rdScore"></div>
    </div>
    <div class="panel"><h3>🗣️ À toi de parler</h3>
      <p style="margin-top:0">${esc(r.speak)}</p>
      <p class="small muted">Réponds à voix haute, en phrases simples. Si ton navigateur le permet, touche le micro pour voir ce que l'appli a compris.</p>
      ${SR ? `<button class="mic-btn" id="rdMic">🎤</button><div class="heard center" id="rdHeard"></div>` : ""}
    </div>
    <div class="panel"><h3>Tous les épisodes</h3>
      ${[[1, "Saison 1 · Tom's Big Trip (A1 → A2)"], [2, "Saison 2 · Two Brothers Down Under (B1 → B2)"]].map(([sn, label]) => `<div class="small muted" style="margin:10px 0 6px;font-weight:700">${label}</div>
      <div class="ep-list">${READINGS.map((x, i) => [x, i]).filter(([x]) => (x.season || 1) === sn).map(([x, i]) => { const locked = isLocked(i, doneSet); return `<button class="ep ${doneSet.has(i) ? "done" : ""} ${i === idx ? "current" : ""} ${locked ? "locked" : ""}" data-ep="${i}" ${locked ? "disabled" : ""} title="${esc(x.title)}">${locked ? "🔒" : i + 1}</button>`; }).join("")}</div>`).join("")}
      <p class="small muted" style="margin-bottom:0">${doneSet.size}/${READINGS.length} épisodes lus${done ? " · Score de cet épisode : " + done.score + "/3" : ""}</p>
    </div>`;
  $$(".gl", v).forEach(el => el.addEventListener("click", (e) => { e.stopPropagation(); const open = el.classList.contains("open"); $$(".gl.open").forEach(x => x.classList.remove("open")); if (!open) { el.classList.add("open"); speak(el.textContent); } }));
  $("#rdPlay").addEventListener("click", toggleReadAloud);
  $("#rdSlow").addEventListener("click", () => { readState.slow = !readState.slow; stopReading(); drawReading(); });
  $("#rdFr").addEventListener("click", () => { readState.showFr = !readState.showFr; stopReading(); drawReading(); });
  $("#rdGloss").addEventListener("click", () => { readState.showGloss = !readState.showGloss; stopReading(); drawReading(); });
  const ga = $("#rdAddCards"); if (ga) ga.addEventListener("click", async () => { for (const k of Object.keys(r.glossary)) { await speak(k, { queue: true }); } });
  $$(".s", v).forEach(el => el.addEventListener("dblclick", () => speak(sentences[+el.dataset.s])));
  $$(".quiz-opt", v).forEach(b => b.addEventListener("click", () => answerQuiz(+b.dataset.q, +b.dataset.o)));
  $$(".ep", v).forEach(b => b.addEventListener("click", () => { stopReading(); renderRead({ idx: +b.dataset.ep }); window.scrollTo({ top: 0 }); }));
  const mic = $("#rdMic"); if (mic) wireMic(mic, (alts) => { $("#rdHeard").textContent = alts.length ? "« " + alts[0] + " »" : "Je n'ai rien entendu."; if (alts.length) { dayStats().speak++; save(); } });
  // Rétablit les réponses déjà données à ce quiz
  Object.entries(readState.answers).forEach(([q, o]) => markQuiz(+q, o));
}
// Ordre des réponses mélangé, mais toujours le même pour un épisode donné
function quizOrder(ep, qi, n) {
  const h = (k) => { let x = Math.imul(ep + 1, 73856093) ^ Math.imul(qi + 1, 19349663) ^ Math.imul(k + 1, 83492791); x = Math.imul(x ^ (x >>> 15), 2246822519); x = Math.imul(x ^ (x >>> 13), 3266489917); return (x ^ (x >>> 16)) >>> 0; };
  return Array.from({ length: n }, (_, k) => k).sort((x, y) => h(x) - h(y));
}
function stopReading() { readState.playing = false; stopSpeak(); $$(".s.speaking").forEach(x => x.classList.remove("speaking")); }
async function toggleReadAloud() {
  if (readState.playing) { stopReading(); $("#rdPlay").textContent = "▶ Écouter"; return; }
  readState.playing = true; $("#rdPlay").textContent = "⏹ Stop";
  stopSpeak();
  for (let i = 0; i < readState.sentences.length; i++) {
    if (!readState.playing || currentTab !== "read") break;
    $$(".s.speaking").forEach(x => x.classList.remove("speaking"));
    const el = $(`.s[data-s="${i}"]`); if (el) { el.classList.add("speaking"); }
    await speak(readState.sentences[i], { slow: readState.slow, queue: true });
  }
  readState.playing = false; $$(".s.speaking").forEach(x => x.classList.remove("speaking"));
  const b = $("#rdPlay"); if (b) b.textContent = "▶ Écouter";
}
function markQuiz(qi, oi) {
  const r = READINGS[readState.idx]; const right = r.q[qi][2];
  $$(`.quiz-opt[data-q="${qi}"]`).forEach(b => { b.disabled = true; const o = +b.dataset.o; if (o === right) b.classList.add("right"); else if (o === oi) b.classList.add("wrong"); });
}
function answerQuiz(qi, oi) {
  if (qi in readState.answers) return;
  readState.answers[qi] = oi; markQuiz(qi, oi);
  const r = READINGS[readState.idx];
  if (Object.keys(readState.answers).length === r.q.length) {
    const score = r.q.filter((q, i) => readState.answers[i] === q[2]).length;
    const idx = readState.idx, first = !S.read[idx];
    const allDone = doneReadings().length >= READINGS.length;
    const ds = dayStats();
    if (first) { S.read[idx] = { day: TODAY(), score }; ds.reading = 1; }
    else {
      S.read[idx].score = Math.max(S.read[idx].score, score);
      if (allDone && idx === todayReadingIndex()) { S.read[idx].day = TODAY(); ds.reading = 1; }
    }
    save(); updateStreak();
    $("#rdScore").innerHTML = `<div class="feedback ${score === 3 ? "ok" : score === 2 ? "almost" : "ko"}"><div class="title">${score}/3 ${score === 3 ? "— Perfect! 🎉" : score === 2 ? "— Pas mal !" : "— Relis le texte avec la traduction 😉"}</div>
      <div class="small">${first ? "Épisode validé ! " : ""}Pour finir, réponds à voix haute à la question « À toi de parler » ci-dessous.</div></div>`;
  }
}

/* ============================ Parler ============================ */
let speakTab = "sit", sitState = null;
function renderSpeak(opts) {
  const v = $("#view-speak"); sitState = null;
  if (opts && opts.tab) speakTab = opts.tab;
  v.innerHTML = `
    <h1 class="view-title">Parler</h1>
    <p class="view-sub">Ton point faible, c'est l'oral ? Ici on parle pour de vrai : situations de voyage, répétition et prononciation.</p>
    <div class="chips">
      <button class="chip ${speakTab === "sit" ? "on" : ""}" data-t="sit">🎭 Situations</button>
      <button class="chip ${speakTab === "shadow" ? "on" : ""}" data-t="shadow">🎧 Répète après moi</button>
      <button class="chip ${speakTab === "survival" ? "on" : ""}" data-t="survival">🆘 Guide de survie</button>
      <button class="chip ${speakTab === "pron" ? "on" : ""}" data-t="pron">👄 Prononciation</button>
    </div>
    <div id="speakZone"></div>`;
  $$(".chip[data-t]", v).forEach(b => b.addEventListener("click", () => { speakTab = b.dataset.t; stopSpeak(); renderSpeak(); }));
  ({ sit: renderSitList, shadow: renderShadow, survival: renderSurvival, pron: renderPron })[speakTab]();
}
function renderSitList() {
  const z = $("#speakZone");
  z.innerHTML = `<p class="small muted" style="margin-top:0">Tu joues ton rôle à voix haute. L'autre personne te parle, on te dit en français ce que tu dois répondre. ${SR ? "Le micro vérifie ta phrase." : "Dis ta phrase, puis compare avec la réponse."}</p>
    ${LEVELS.slice(0, 4).filter(L => SITUATIONS.some(s => s.level === L)).sort((a, b) => lvlRank(lvlIdx(a)) - lvlRank(lvlIdx(b))).map(L => `<h3 class="lvl-head">${L} ${lvlRank(lvlIdx(L)) <= 1 ? '<span class="rec-tag">pour toi</span>' : ""}</h3>
    <div class="sit-grid">${SITUATIONS.filter(s => s.level === L).map(s => `<button class="sit" data-s="${s.id}">${S.sit[s.id] ? `<span class="badge">✓ ${S.sit[s.id]}×</span>` : ""}<div class="ic">${s.icon}</div><div class="t">${esc(s.title)}</div><div class="w">avec : ${esc(s.who)}</div></button>`).join("")}</div>`).join("")}`;
  $$(".sit", z).forEach(b => b.addEventListener("click", () => startSit(b.dataset.s)));
}
function startSit(id) {
  const s = SITUATIONS.find(x => x.id === id);
  sitState = { s, i: 0, log: [], scores: [] };
  drawSit();
}
function drawSit() {
  const z = $("#speakZone"); const { s, i } = sitState;
  const finished = i >= s.steps.length;
  const step = s.steps[i];
  const isNarr = (t) => /^\(.*\)$/.test(t);
  let bubbles = sitState.log.map(l => l.who === "them"
    ? (isNarr(l.text) ? `<p class="small muted center">${esc(l.text)}</p>` : `<div class="bubble them"><div class="who">${esc(s.who)}</div><div class="txt">${esc(l.text)}</div></div>`)
    : `<div class="bubble me"><div class="who">Toi</div>${esc(l.text)}</div>`).join("");
  if (!finished) bubbles += isNarr(step.them) ? `<p class="small muted center">${esc(step.them)}</p>`
    : `<div class="bubble them ${S.settings.hideSitText ? "blur" : ""}" id="curThem"><div class="who">${esc(s.who)}</div><div class="txt">${esc(step.them)}</div></div>`;
  z.innerHTML = `
    <div class="row" style="margin-bottom:10px"><button class="btn ghost small" id="sitBack">‹ Situations</button><div class="grow"></div>
      <label class="small row" style="gap:6px"><input type="checkbox" id="hideTxt" ${S.settings.hideSitText ? "checked" : ""}> Cacher le texte (écoute)</label></div>
    <div class="panel">
      <h3>${s.icon} ${esc(s.title)}</h3>
      <div id="chat">${bubbles}</div>
      ${finished ? endSitHTML() : `
        <div class="row" style="gap:8px">${isNarr(step.them) ? "" : `<button class="audio-btn" id="sitReplay" aria-label="Réécouter">🔊</button><button class="audio-btn slow" id="sitSlow" aria-label="Lentement">🐢</button>`}<div class="grow"></div><span class="small muted">${i + 1}/${s.steps.length}</span></div>
        <div class="task-box"><div class="k">À toi de dire</div>${esc(step.task)}</div>
        <div id="sitInput">
          ${SR ? `<button class="mic-btn" id="sitMic" aria-label="Parler">🎤</button><p class="center small muted" style="margin:0">Touche le micro et réponds en anglais</p>` : `<p class="small muted center">Dis ta réponse à voix haute, puis regarde la solution.</p>`}
          <div class="heard center" id="sitHeard"></div>
        </div>
        <div id="sitFeedback"></div>
        <div class="row" style="margin-top:12px" id="sitActions"><button class="btn ghost grow" id="sitShow">Voir une réponse</button></div>`}
    </div>`;
  $("#sitBack").addEventListener("click", () => { stopSpeak(); renderSpeak(); });
  $("#hideTxt").addEventListener("change", e => { S.settings.hideSitText = e.target.checked; save(); drawSit(); });
  const ct = $("#curThem"); if (ct) ct.addEventListener("click", () => ct.classList.remove("blur"));
  if (finished) { wireEndSit(); return; }
  if (!isNarr(step.them)) {
    $("#sitReplay").addEventListener("click", () => speak(step.them, { alt: true }));
    $("#sitSlow").addEventListener("click", () => speak(step.them, { alt: true, slow: true }));
    setTimeout(() => { if (sitState && sitState.i === i) speak(step.them, { alt: true }); }, 250);
  }
  const mic = $("#sitMic");
  if (mic) wireMic(mic, (alts) => {
    if (!alts.length) { toast("Je n'ai rien entendu, réessaie."); return; }
    let best = alts[0], bs = -1, ans = step.answers[0];
    alts.forEach(a => { const m = bestMatch(a, step.answers); if (m.score > bs) { bs = m.score; best = a; ans = m.answer; } });
    $("#sitHeard").textContent = "J'ai entendu : « " + best + " »";
    sitFeedback(step, bs, best, ans);
  });
  $("#sitShow").addEventListener("click", () => sitFeedback(step, null, null, step.answers[0]));
}
function sitFeedback(step, score, heard, ans) {
  const cls = score === null ? "almost" : score >= 0.8 ? "ok" : score >= 0.5 ? "almost" : "ko";
  const title = score === null ? "Une réponse possible :" : score >= 0.8 ? "✅ " + pickPraise() : score >= 0.5 ? "🟡 C'est compréhensible ! Version modèle :" : "❌ Réessaie ! Version modèle :";
  $("#sitFeedback").innerHTML = `<div class="feedback ${cls}"><div class="title">${title}</div>
    <div class="model"><span class="grow">${esc(ans)}</span><button class="audio-btn" data-say="${esc(ans)}">🔊</button></div>
    ${step.answers.length > 1 ? `<div class="alts">Autres possibilités : ${step.answers.filter(a => a !== ans).map(esc).join(" · ")}</div>` : ""}</div>`;
  wireModelAudio($("#sitFeedback"));
  if (score === null || score < 0.8) speak(ans);
  $("#sitActions").innerHTML = `${score !== null && score < 0.8 ? '<button class="btn ghost grow" id="sitRetry">Réessayer</button>' : ""}<button class="btn grow" id="sitNext">Suivant ›</button>`;
  const rt = $("#sitRetry"); if (rt) rt.addEventListener("click", () => { $("#sitFeedback").innerHTML = ""; $("#sitHeard").textContent = ""; $("#sitActions").innerHTML = '<button class="btn ghost grow" id="sitShow">Voir une réponse</button>'; $("#sitShow").addEventListener("click", () => sitFeedback(step, null, null, step.answers[0])); });
  $("#sitNext").addEventListener("click", () => {
    sitState.log.push({ who: "them", text: step.them }, { who: "me", text: heard && score >= 0.5 ? heard : ans });
    sitState.scores.push(score === null ? 0 : score);
    sitState.i++; dayStats().speak++; save();
    if (sitState.i >= sitState.s.steps.length) { S.sit[sitState.s.id] = (S.sit[sitState.s.id] || 0) + 1; dayStats().sit++; save(); updateStreak(); }
    drawSit();
  });
}
function endSitHTML() {
  const sc = sitState.scores; const good = sc.filter(x => x >= 0.8).length;
  return `<div class="feedback ok" style="margin-top:14px"><div class="title">🎉 Conversation terminée !</div>
    <div class="small">${SR ? good + "/" + sc.length + " réponses comprises du premier coup. " : ""}Rejoue-la jusqu'à pouvoir répondre sans regarder les indices : c'est comme ça qu'elle sortira toute seule en voyage.</div></div>
    <div class="row" style="margin-top:12px;flex-wrap:wrap"><button class="btn ghost grow" id="sitListen">▶ Écouter toute la conversation</button><button class="btn grow" id="sitRestart">Rejouer</button></div>`;
}
function wireEndSit() {
  $("#sitRestart").addEventListener("click", () => startSit(sitState.s.id));
  $("#sitListen").addEventListener("click", async () => {
    stopSpeak();
    const s = sitState.s;
    for (const st of s.steps) {
      if (currentTab !== "speak" || !sitState) break;
      if (!/^\(.*\)$/.test(st.them)) await speak(st.them, { alt: true, queue: true });
      await speak(st.answers[0], { queue: true });
    }
  });
}

/* Répète après moi (shadowing) */
let shadow = null;
function renderShadow() {
  const z = $("#speakZone");
  const seen = ALL_PHRASES.filter(p => S.phr[p.id]);
  const near = (p) => lvlRank(LESSON_CEFR[LESSONS.find(l => l.id === p.lesson).level]) <= 1;
  const seenNear = seen.filter(near);
  const pool = seenNear.length >= 10 ? seenNear : ALL_PHRASES.filter(near);
  shadow = { items: shuffle(pool).slice(0, 10), i: 0, scores: [] };
  drawShadow();
}
function drawShadow() {
  const z = $("#speakZone");
  if (shadow.i >= shadow.items.length) {
    const avg = shadow.scores.length ? Math.round(shadow.scores.reduce((a, b) => a + b, 0) / shadow.scores.length * 100) : 0;
    z.innerHTML = `<div class="panel done-box"><div class="big">🎧</div><h2>Bien joué !</h2><p class="muted">${shadow.scores.length ? "Score moyen de prononciation : " + avg + " %" : "Série terminée."}</p><button class="btn" id="shAgain">Nouvelle série</button></div>`;
    $("#shAgain").addEventListener("click", renderShadow); return;
  }
  const p = shadow.items[shadow.i]; const en = p.answers[0];
  z.innerHTML = `<p class="small muted" style="margin-top:0">Écoute la phrase, puis répète-la en imitant la voix : le rythme, l'intonation, les liaisons. ${SR ? "Le micro te donne un score." : ""}</p>
    <div class="panel center">
      <div class="small muted">${shadow.i + 1}/${shadow.items.length}</div>
      <div class="prompt-fr" style="margin:10px 0 4px">${esc(en)}</div>
      <div class="muted">${esc(p.fr)}</div>
      <div class="row" style="justify-content:center;margin:16px 0 4px"><button class="audio-btn" id="shPlay">🔊</button><button class="audio-btn slow" id="shSlow">🐢</button></div>
      ${SR ? `<button class="mic-btn" id="shMic">🎤</button>` : `<p class="small muted">Répète à voix haute 2 ou 3 fois.</p>`}
      <div class="heard" id="shHeard"></div>
      <div id="shRes"></div>
    </div>
    <button class="btn block" id="shNext">Phrase suivante ›</button>`;
  $("#shPlay").addEventListener("click", () => speak(en));
  $("#shSlow").addEventListener("click", () => speak(en, { slow: true }));
  setTimeout(() => speak(en), 200);
  const mic = $("#shMic");
  if (mic) wireMic(mic, (alts) => {
    if (!alts.length) { toast("Je n'ai rien entendu."); return; }
    let best = alts[0], bs = -1; alts.forEach(a => { const s = similarity(a, en); if (s > bs) { bs = s; best = a; } });
    const pc = Math.round(bs * 100);
    $("#shHeard").textContent = "« " + best + " »";
    $("#shRes").innerHTML = `<div class="${pc >= 85 ? "score-ok" : pc >= 60 ? "score-mid" : "score-ko"}" style="font-size:22px;margin-top:6px">${pc} % ${pc >= 85 ? "🔥" : pc >= 60 ? "👍" : "🔁"}</div>${pc < 85 ? diffHTML(best, en) : ""}`;
    shadow.scores[shadow.i] = bs; dayStats().speak++; save(); updateStreak();
  });
  $("#shNext").addEventListener("click", () => { shadow.i++; drawShadow(); });
}

function renderSurvival() {
  const z = $("#speakZone");
  z.innerHTML = (window.SURVIVAL || []).map(sec => `<div class="panel"><h3>${esc(sec.title)}</h3>
    ${sec.items.map(([en, fr]) => `<div class="phrase-row"><div class="grow"><div class="en">${esc(en)}</div><div class="fr">${esc(fr)}</div></div>
      ${/emergency numbers|=/i.test(en) ? "" : `<button class="audio-btn" data-say="${esc(en.replace(/\.\.\./g, "something"))}">🔊</button>`}</div>`).join("")}</div>`).join("");
  wireModelAudio(z);
}
function renderPron() {
  const z = $("#speakZone");
  z.innerHTML = (window.PRONUNCIATION || []).map((sec, si) => `<div class="panel"><h3>${esc(sec.title)}</h3><p class="small" style="margin-top:0">${esc(sec.tip)}</p>
    <div>${sec.examples.map((w, wi) => `<button class="word-chip" data-pw="${esc(w.toLowerCase())}">🔊 ${esc(w)}</button>`).join("")}</div>
    ${SR ? `<div class="row" style="margin-top:6px"><button class="btn ghost small" data-try="${si}">🎤 Teste-toi sur un mot au hasard</button><span class="small" id="pr${si}"></span></div>` : ""}</div>`).join("");
  $$("[data-pw]", z).forEach(b => b.addEventListener("click", () => speak(b.dataset.pw)));
  $$("[data-try]", z).forEach(b => b.addEventListener("click", async () => {
    const sec = window.PRONUNCIATION[+b.dataset.try];
    const target = sec.examples[Math.floor(Math.random() * sec.examples.length)].toLowerCase();
    const out = $("#pr" + b.dataset.try);
    out.innerHTML = `Dis : <b>${esc(target)}</b>…`;
    await speak(target);
    b.classList.add("listening");
    try {
      const alts = await listen(); b.classList.remove("listening");
      const tn = norm(target); const ok = alts.some(a => norm(a).split(" ").includes(tn) || norm(a) === tn);
      out.innerHTML = ok ? `<span class="score-ok">✅ « ${esc(target)} » reconnu !</span>` : `<span class="score-ko">🔁 J'ai entendu « ${esc(alts[0] || "…")} ». Réessaie !</span>`;
      dayStats().speak++; save(); updateStreak();
    } catch (e) { b.classList.remove("listening"); micError(e); }
  }));
}

/* ============================ Réglages ============================ */
function closeModal() { $("#modalRoot").innerHTML = ""; }
function openSettings() {
  const st = S.settings; loadVoices();
  const voiceOpts = `<option value="">Automatique (meilleure voix ${st.accent === "en-GB" ? "britannique" : "américaine"})</option>` + voices.map(v => `<option value="${esc(v.voiceURI)}" ${v.voiceURI === st.voiceURI ? "selected" : ""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("");
  $("#modalRoot").innerHTML = `<div class="modal-bg" id="mbg"><div class="modal" role="dialog" aria-label="Réglages">
    <div class="row"><h2 class="grow" style="margin:0">Réglages</h2><button class="icon-btn" id="mClose" aria-label="Fermer">✕</button></div>
    <div style="height:14px"></div>
    <div class="field"><label>Ton prénom</label><input type="text" id="sName" value="${esc(st.name)}" style="width:100%;padding:11px 12px;border-radius:12px;border:1px solid var(--line);background:var(--card)"></div>
    <div class="field"><label>Niveau ${S.level ? "(test : " + S.level + ")" : ""}</label>
      <select id="sLevel">${LEVELS.map(L => `<option value="${L}" ${L === (S.level || "A1") ? "selected" : ""}>${L} — ${LEVEL_NAMES[L]}</option>`).join("")}</select>
      <button class="btn ghost small" id="sTest" style="margin-top:8px">🎯 ${S.level ? "Refaire" : "Faire"} le test de niveau</button>
      <div class="small muted" style="margin-top:4px">Change l'ordre des nouveaux mots, les leçons et situations recommandées, la fiche de grammaire conseillée et l'épisode de départ de la lecture.</div></div>
    <div class="field"><label>Accent</label><select id="sAccent"><option value="en-US" ${st.accent === "en-US" ? "selected" : ""}>🇺🇸 Américain</option><option value="en-GB" ${st.accent === "en-GB" ? "selected" : ""}>🇬🇧 Britannique</option></select></div>
    <div class="field"><label>Voix</label><select id="sVoice">${voiceOpts}</select><button class="btn ghost small" id="sVoiceTest" style="margin-top:8px">🔊 Tester la voix</button></div>
    <div class="field"><label>Vitesse de la voix : <span id="rateV">${st.rate.toFixed(2)}</span></label><input type="range" id="sRate" min="0.5" max="1.2" step="0.05" value="${st.rate}"></div>
    <div class="field"><label>Nouveaux mots par jour</label><select id="sNew">${[5, 10, 15, 20, 30].map(n => `<option ${n === st.newPerDay ? "selected" : ""}>${n}</option>`).join("")}</select>
      <div class="small muted" style="margin-top:4px">Les mots déjà connus se mettent de côté en un clic, donc ce rythme concerne surtout les mots vraiment nouveaux. Chaque mot est travaillé dans les deux sens.</div></div>
    <div class="field"><label>Sens des cartes</label><select id="sDir">
      <option value="both" ${st.direction === "both" ? "selected" : ""}>Les deux (recommandé) : comprendre puis dire</option>
      <option value="r" ${st.direction === "r" ? "selected" : ""}>Anglais → Français uniquement</option>
      <option value="p" ${st.direction === "p" ? "selected" : ""}>Français → Anglais uniquement</option></select></div>
    <div class="switch-row"><span>Lire les mots automatiquement</span><input type="checkbox" id="sAuto" ${st.autoplay ? "checked" : ""}></div>
    <div class="field" style="margin-top:14px"><label>Thème</label><select id="sTheme"><option value="auto" ${st.theme === "auto" ? "selected" : ""}>Automatique</option><option value="light" ${st.theme === "light" ? "selected" : ""}>Clair</option><option value="dark" ${st.theme === "dark" ? "selected" : ""}>Sombre</option></select></div>
    <h3 style="margin:22px 0 8px">Anki & sauvegarde</h3>
    <p class="small muted" style="margin-top:0">Exporte les ${WORDS.length} cartes pour les importer dans Anki (Fichier → Importer, séparateur tabulation). Tes progrès restent dans ce navigateur : fais une sauvegarde de temps en temps.</p>
    <div class="row wrap-row">
      <button class="btn ghost small" id="sAnki">📦 Export Anki (.txt)</button>
      <button class="btn ghost small" id="sBackup">💾 Sauvegarder</button>
      <label class="btn ghost small" style="cursor:pointer">📂 Restaurer<input type="file" id="sRestore" accept="application/json" hidden></label>
    </div>
    <div style="margin-top:22px"><button class="btn ghost small" id="sReset" style="color:var(--bad)">Tout réinitialiser</button></div>
    <p class="small muted" style="margin-top:20px">Roadtrip English · ${WORDS.length} mots · ${ALL_PHRASES.length} phrases · ${READINGS.length} lectures · ${SITUATIONS.length} situations · ${(window.GRAMMAR || []).length} fiches de grammaire. Tout fonctionne sans compte et hors-ligne.</p>
  </div></div>`;
  $("#mbg").addEventListener("click", e => { if (e.target.id === "mbg") closeModal(); });
  $("#mClose").addEventListener("click", closeModal);
  const upd = () => { save(); applyTheme(); if (currentTab === "home") renderHome(); };
  $("#sName").addEventListener("input", e => { st.name = e.target.value.trim(); upd(); });
  $("#sLevel").addEventListener("change", e => { applyLevel(e.target.value); upd(); toast("Niveau " + e.target.value + " appliqué ✓"); });
  $("#sTest").addEventListener("click", () => { closeModal(); go("test"); });
  $("#sAccent").addEventListener("change", e => { st.accent = e.target.value; st.voiceURI = ""; upd(); openSettings(); });
  $("#sVoice").addEventListener("change", e => { st.voiceURI = e.target.value; upd(); speak("Hello! Ready for your trip?"); });
  $("#sVoiceTest").addEventListener("click", () => speak("Hello! Can I have a coffee, please?"));
  $("#sRate").addEventListener("input", e => { st.rate = +e.target.value; $("#rateV").textContent = st.rate.toFixed(2); upd(); });
  $("#sNew").addEventListener("change", e => { st.newPerDay = +e.target.value; upd(); });
  $("#sDir").addEventListener("change", e => { st.direction = e.target.value; upd(); });
  $("#sAuto").addEventListener("change", e => { st.autoplay = e.target.checked; upd(); });
  $("#sTheme").addEventListener("change", e => { st.theme = e.target.value; upd(); });
  $("#sAnki").addEventListener("click", exportAnki);
  $("#sBackup").addEventListener("click", () => download("roadtrip-sauvegarde-" + new Date().toISOString().slice(0, 10) + ".json", JSON.stringify(S), "application/json"));
  $("#sRestore").addEventListener("change", e => {
    const f = e.target.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => { try { const data = JSON.parse(rd.result); if (!data.cards || !data.settings) throw new Error(); localStorage.setItem(KEY, JSON.stringify(data)); load(); applyTheme(); closeModal(); go("home"); toast("Sauvegarde restaurée ✓"); } catch (err) { toast("Fichier invalide."); } };
    rd.readAsText(f);
  });
  $("#sReset").addEventListener("click", () => { if (confirm("Effacer toute ta progression ? (fais une sauvegarde avant si besoin)")) { try { localStorage.removeItem(KEY); } catch (e) {} load(); closeModal(); go("home"); } });
}
function download(name, content, type) {
  const blob = new Blob([content], { type }); const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
function exportAnki() {
  const clean = (s) => esc(s).replace(/[\t\n\r]/g, " ");
  const lines = ["#separator:tab", "#html:true", "#tags column:3"];
  WORDS.forEach(w => {
    const front = `<b>${clean(w.en)}</b>${w.exEn ? "<br><i>" + clean(w.exEn) + "</i>" : ""}`;
    const back = `<b>${clean(w.fr)}</b>${w.exFr ? "<br><i>" + clean(w.exFr) + "</i>" : ""}`;
    lines.push(front + "\t" + back + "\troadtrip::" + w.deck);
  });
  download("roadtrip-anki-" + WORDS.length + "-cartes.txt", lines.join("\n"), "text/plain;charset=utf-8");
  toast("Fichier Anki téléchargé ✓");
}
function applyTheme() {
  const t = S.settings.theme;
  if (t === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", t);
}

/* Applique un niveau à toute l'appli */
function applyLevel(L) {
  S.level = L; const u = lvlIdx(L);
  const minNew = [15, 20, 20, 25, 25][u];
  if (S.settings.newPerDay < minNew) S.settings.newPerDay = minNew;
  const start = [0, 10, 30, 40, 40][u];
  // On ne recule jamais le point de départ si l'élève a déjà lu plus loin
  S.readStart = Math.min(start, READINGS.length - 1);
  save();
}

/* Premier lancement */
function onboarding() {
  $("#modalRoot").innerHTML = `<div class="modal-bg"><div class="modal" role="dialog" aria-label="Bienvenue">
    <div style="font-size:48px">✈️</div>
    <h2>Welcome aboard!</h2>
    <p>Cette appli t'entraîne chaque jour pour parler anglais en voyage, de débutant à B2 :</p>
    <div class="phrase-row"><span style="font-size:22px">🃏</span><div class="grow"><b>${WORDS.length} cartes de vocabulaire (A1 → B2)</b><div class="fr">Méthode Anki : chaque mot revient au bon moment.</div></div></div>
    <div class="phrase-row"><span style="font-size:22px">✍️</span><div class="grow"><b>${ALL_PHRASES.length} phrases à traduire</b><div class="fr">À l'écrit, en assemblant les mots, ou au micro.</div></div></div>
    <div class="phrase-row"><span style="font-size:22px">📐</span><div class="grow"><b>${(window.GRAMMAR || []).length} fiches de grammaire</b><div class="fr">Des explications courtes en français et des exercices corrigés.</div></div></div>
    <div class="phrase-row"><span style="font-size:22px">📖</span><div class="grow"><b>Une lecture par jour (${READINGS.length} épisodes)</b><div class="fr">Deux saisons d'une histoire de voyage, de l'A1 au B2.</div></div></div>
    <div class="phrase-row"><span style="font-size:22px">🗣️</span><div class="grow"><b>${SITUATIONS.length} situations à jouer à l'oral</b><div class="fr">Aéroport, hôtel, resto, pharmacie… pour oser parler.</div></div></div>
    <div class="field" style="margin-top:16px"><label>Comment tu t'appelles ?</label><input type="text" id="obName" placeholder="Ton prénom" style="width:100%;padding:12px;border-radius:12px;border:1px solid var(--line);background:var(--card)"></div>
    <div class="field"><label>Quel accent veux-tu entendre ?</label><select id="obAccent"><option value="en-US">🇺🇸 Américain</option><option value="en-GB">🇬🇧 Britannique</option></select></div>
    <button class="btn block" id="obTest">🎯 Faire le test de niveau (5-8 min)</button>
    <button class="btn ghost block" id="obGo" style="margin-top:8px">Passer : commencer au niveau A1</button>
    <p class="small muted center" style="margin-bottom:0">Astuce : ajoute l'appli à ton écran d'accueil pour l'avoir comme une vraie appli.</p>
  </div></div>`;
  const finish = (toTest) => {
    S.settings.name = $("#obName").value.trim(); S.settings.accent = $("#obAccent").value;
    S.onboarded = true; S.start = TODAY(); save(); closeModal();
    if (toTest) { go("test"); return; }
    applyLevel("A1"); go("home");
    speak("Welcome aboard" + (S.settings.name ? ", " + S.settings.name : "") + "! Let's go!");
  };
  $("#obGo").addEventListener("click", () => finish(false));
  $("#obTest").addEventListener("click", () => finish(true));
}

/* ============================ API pour les autres modules ============================ */
window.RT = {
  $, $$, esc, shuffle, speak, norm, toast, dayStats, save, TODAY, LESSONS, pickPraise, updateStreak,
  state: () => S,
  LEVELS, LEVEL_NAMES, lvlIdx, userLvl, lvlRank, applyLevel, go, READINGS,
  goLesson: (id) => { go("translate"); startTranslate(id); },
  registerTab: (name, fn) => { TABS[name] = fn; }
};

/* ============================ Démarrage ============================ */
load(); applyTheme();
$$(".tab").forEach(b => b.addEventListener("click", () => go(b.dataset.tab)));
$("#settingsBtn").addEventListener("click", openSettings);
document.addEventListener("click", e => { if (!e.target.closest(".gl")) $$(".gl.open").forEach(x => x.classList.remove("open")); });
// Si l'appli reste ouverte après minuit, on rafraîchit l'accueil
let lastDay = TODAY();
document.addEventListener("visibilitychange", () => { if (!document.hidden && TODAY() !== lastDay) { lastDay = TODAY(); go(currentTab); } });
document.addEventListener("DOMContentLoaded", () => { go("home"); if (!S.onboarded) onboarding(); });
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
// Accès pour les tests
window.__RT = { WORDS, ALL_PHRASES, READINGS, SITUATIONS, norm, similarity, bestMatch, buildQueue, state: () => S };
})();
