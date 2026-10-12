/* Roadtrip English — onglet Grammaire.
   Fiches (explications structurées), séries d'exercices variées (QCM, compléter, remettre dans l'ordre,
   transformer, trouver l'erreur, traduire), erreurs reprogrammées en fin de série, entraînement illimité généré,
   entraînement mixte et verbes irréguliers. S'appuie sur window.RT (app.js). */
(function () {
"use strict";
const RT = window.RT;
const { $, $$, esc, shuffle, speak, norm, toast, dayStats, save, state, TODAY } = RT;
const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
const SERIES = 15;

/* ============================ Données ============================ */
function parseEx(line) {
  const p = line.split("|");
  switch (p[0]) {
    case "m": return { type: "m", q: p[1], opts: p[2].split(";"), a: +p[3], why: p[4] || "" };
    case "f": return { type: "f", q: p[1].replace(/___(\s+___)+/g, "___"), answers: p[2].split("//").map(s => s.trim()), hint: p[3] || "" };
    case "o": return { type: "o", fr: p[1], en: p[2] };
    case "t": return { type: "t", ins: p[1], src: p[2], answers: p[3].split("//").map(s => s.trim()) };
    case "tr": return { type: "tr", fr: p[1], answers: p[2].split("//").map(s => s.trim()) };
    case "e": {
      const m = p[1].match(/^(.*?)\s*\(([^()]*)\)\s*$/); // une précision entre parenthèses en fin de phrase devient un indice
      return { type: "e", s: m ? m[1] : p[1], note: m ? m[2] : "", wrong: p[2], fix: p[3], why: p[4] || "" };
    }
  }
  return null;
}
const PLUS = window.GPLUS || {};
const FICHES = (window.GRAMMAR || []).map((g, i) => {
  const plus = PLUS[g.id] || {};
  const lines = g.ex.trim().split("\n").concat(plus.ex ? plus.ex.trim().split("\n") : []);
  const exercises = lines.map(parseEx).filter(Boolean).map((e, k) => ({ ...e, key: g.id + "#" + k }));
  return { ...g, memo: plus.memo || "", formula: plus.formula || [], mistakes: plus.mistakes || [], exercises, lvl: RT.lvlIdx(g.level), ord: i };
}).sort((a, b) => a.lvl - b.lvl || a.ord - b.ord);
const IRR = (window.IRREGULARS || "").trim().split("\n").map(l => { const [base, past, pp, fr] = l.split("|"); return { base, past, pp, fr }; });

function gstate() { const S = state(); S.gram = S.gram || {}; S.irr = S.irr || {}; S.gex = S.gex || {}; return S; }
function best(id) { const g = gstate().gram[id]; return g ? g.best : null; }
function passed(id) { const b = best(id); return b !== null && b >= 0.8; }
function mastered(f) { const S = gstate(); return f.exercises.filter(e => S.gex[e.key] && S.gex[e.key].lastOk).length; }
function nextFiche() {
  const u = RT.userLvl();
  return FICHES.find(f => !passed(f.id) && f.lvl >= Math.min(u, 4)) || FICHES.find(f => !passed(f.id)) || null;
}

/* ============================ Générateurs (entraînement illimité) ============================ */
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const VERBS = (window.GEN_VERBS || "").trim().split("\n").map(l => { const [base, s3, ing, past, pp, obj, objFr] = l.split("|"); return { base, s3, ing, past, pp, obj, objFr }; });
const ADJS = (window.GEN_ADJ || "").trim().split("\n").map(l => { const [base, comp, sup] = l.split("|"); return { base, comp, sup }; });
const NOUNS = (window.GEN_NOUNS || "").trim().split("\n").map(l => { const [noun, art] = l.split("|"); return { noun, art }; });
const S3 = ["He", "She", "My brother", "Tom", "The guide", "My sister"];
const SPL = ["I", "You", "We", "They", "My parents"];
const lowerSubj = (s) => (s === "I" || s === "Tom") ? s : s[0].toLowerCase() + s.slice(1);
const alts = (x) => x.split("/").map(s => s.trim());
const beOf = (s) => s === "I" ? "am" : (S3.includes(s) ? "is" : "are");
const wasOf = (s) => (s === "I" || S3.includes(s)) ? "was" : "were";
const STATES = ["tired", "hungry", "late", "at the hotel", "ready", "cold", "on holiday", "happy", "lost"];
const GENERATORS = {
  g1: () => { const s = pick(S3.concat(SPL)); return { type: "f", q: `${s} ___ ${pick(STATES)}.`, answers: [beOf(s)], hint: "am / is / are" }; },
  g2: () => { const v = pick(VERBS); if (Math.random() < 0.7) { const s = pick(S3); return { type: "f", q: `${s} ___ (${v.base}) ${v.obj} every day.`, answers: [v.s3], hint: "il / elle → -s" }; } const s = pick(SPL); return { type: "f", q: `${s} ___ (${v.base}) ${v.obj} every day.`, answers: [v.base], hint: "pas de -s" }; },
  g3: () => { const v = pick(VERBS); const s = pick(S3); if (Math.random() < 0.5) return { type: "t", ins: "Mets à la forme négative.", src: `${s} ${v.s3} ${v.obj}.`, answers: [`${s} doesn't ${v.base} ${v.obj}.`, `${s} does not ${v.base} ${v.obj}.`] }; return { type: "t", ins: "Pose la question.", src: `${s} ${v.s3} ${v.obj}.`, answers: [`Does ${lowerSubj(s)} ${v.base} ${v.obj}?`] }; },
  g5: () => { const n = pick(NOUNS); return { type: "f", q: `It's ___ ${n.noun}.`, answers: [n.art], hint: "a ou an ? Écoute le premier son." }; },
  g10: () => { const v = pick(VERBS); const s = pick(S3.concat(SPL)); return { type: "f", q: `${s} ${beOf(s)} ___ (${v.base}) ${v.obj} right now.`, answers: [v.ing], hint: "orthographe du -ing" }; },
  g12: () => { const s = pick(S3.concat(SPL)); return { type: "f", q: `${s} ___ ${pick(STATES)} yesterday.`, answers: [wasOf(s)], hint: "was / were" }; },
  g13: () => { const v = pick(VERBS); const s = pick(S3.concat(SPL)); if (Math.random() < 0.65) return { type: "f", q: `Yesterday, ${lowerSubj(s)} ___ (${v.base}) ${v.obj}.`, answers: [v.past], hint: "prétérit" }; return { type: "t", ins: "Mets à la forme négative.", src: `${s} ${v.past} ${v.obj}.`, answers: [`${s} didn't ${v.base} ${v.obj}.`, `${s} did not ${v.base} ${v.obj}.`] }; },
  g15: () => { const a = pick(ADJS); if (Math.random() < 0.5) return { type: "f", q: `This one is ___ (${a.base}) than that one.`, answers: alts(a.comp), hint: "court → -er · long → more" }; return { type: "f", q: `Of the three, this one is the ___ (${a.base}).`, answers: alts(a.sup), hint: "court → -est · long → most" }; },
  g16: () => { const v = pick(VERBS); const s = pick(S3.concat(SPL)); const aux = (s === "I" || SPL.includes(s)) ? "have" : "has"; return { type: "f", q: `${s} ${aux} never ___ (${v.base}) ${v.obj}.`, answers: [v.pp], hint: "participe passé" }; }
};

/* ============================ Liste des fiches ============================ */
let view = { tab: "fiches" };
function render(opts) {
  if (opts && opts.fiche) { openFiche(opts.fiche); return; }
  const v = $("#view-grammar");
  const done = FICHES.filter(f => passed(f.id)).length;
  const total = FICHES.reduce((a, f) => a + f.exercises.length, 0);
  const nx = nextFiche();
  v.innerHTML = `
    <h1 class="view-title">Grammaire</h1>
    <p class="view-sub">${FICHES.length} fiches et ${total} exercices. Chaque fiche : l'essentiel, la formule, les pièges des Français, puis des séries d'exercices variés. Une fiche est validée à 80 %.</p>
    <div class="chips">
      <button class="chip ${view.tab === "fiches" ? "on" : ""}" data-gt="fiches">📐 Fiches (${done}/${FICHES.length})</button>
      <button class="chip ${view.tab === "mix" ? "on" : ""}" data-gt="mix">🎲 Entraînement mixte</button>
      <button class="chip ${view.tab === "irr" ? "on" : ""}" data-gt="irr">🔀 Verbes irréguliers</button>
    </div>
    <div id="gramZone"></div>`;
  $$("[data-gt]", v).forEach(b => b.addEventListener("click", () => { view.tab = b.dataset.gt; render(); }));
  if (view.tab === "irr") return renderIrr();
  if (view.tab === "mix") return renderMix();
  const z = $("#gramZone");
  z.innerHTML = `
    ${nx ? `<button class="lesson featured" style="width:100%;margin-bottom:12px" data-f="${nx.id}"><div class="lv">⚡ FICHE CONSEILLÉE</div><div class="nm">${nx.icon} ${esc(nx.title)}</div>
      <div class="small" style="opacity:.8">Niveau ${nx.level} · ${nx.exercises.length} exercices${GENERATORS[nx.id] ? " + entraînement illimité" : ""}</div></button>`
      : `<div class="lesson-tip">🏆 Toutes les fiches sont validées ! L'entraînement mixte « points faibles » t'aidera à ne pas oublier.</div>`}
    ${[0, 1, 2, 3, 4].map(L => { const fs = FICHES.filter(f => f.lvl === L); if (!fs.length) return "";
      const u = Math.min(RT.userLvl(), 4); const tag = L === u || L === u + 1 ? '<span class="rec-tag">pour toi</span>' : L < u ? '<span class="small muted">révision</span>' : "";
      return `<h3 class="lvl-head">${RT.LEVELS[L]} — ${RT.LEVEL_NAMES[RT.LEVELS[L]]} ${tag}</h3>
      <div class="panel" style="padding:6px 14px">
      ${fs.map(f => { const b = best(f.id); const n = FICHES.indexOf(f) + 1; const m = mastered(f); return `<div class="goal ${passed(f.id) ? "done" : ""}" data-f="${f.id}">
        <div class="check">${passed(f.id) ? "✓" : n}</div>
        <div class="grow"><div class="label">${f.icon} ${esc(f.title)}</div>
          <div class="meta">${f.level} · ${m}/${f.exercises.length} exercices réussis${b !== null ? " · meilleure série " + Math.round(b * 100) + " %" : ""}${GENERATORS[f.id] ? " · ♾️" : ""}</div>
          <div class="progress" style="height:4px;margin-top:5px"><div style="width:${Math.round(m / f.exercises.length * 100)}%"></div></div></div>
        <div class="go">›</div></div>`; }).join("")}
      </div>`; }).join("")}`;
  $$("[data-f]", z).forEach(el => el.addEventListener("click", () => openFiche(el.dataset.f)));
}

/* ============================ Une fiche ============================ */
function openFiche(id) {
  const f = FICHES.find(x => x.id === id); if (!f) return render();
  const v = $("#view-grammar");
  const lesson = RT.LESSONS.find(l => l.id === f.lesson);
  const m = mastered(f);
  const sayable = (e) => esc(e.replace(/\*\*/g, "").replace(/\s*·\s*/g, ". ").replace(/[→]/g, ", "));
  v.innerHTML = `
    <div class="row" style="margin-bottom:12px"><button class="btn ghost small" id="gBack">‹ Fiches</button><div class="grow"></div><span class="level-tag">${f.level}</span></div>
    <div class="panel">
      <h2 style="font-size:24px;margin-bottom:12px">${f.icon} ${esc(f.title)}</h2>
      ${f.memo ? `<div class="gram-memo"><div class="k">🎯 En bref</div>${md(f.memo)}</div>` : ""}
      ${f.formula.length ? `<div class="gram-sec"><h4>🧩 La formule</h4>${f.formula.map(x => `<div class="formula">${md(x)}</div>`).join("")}</div>` : ""}
      <div class="gram-sec"><h4>📖 Comment ça marche</h4><div class="gram-rule">${f.rule.map(p => `<p>${md(p)}</p>`).join("")}</div></div>
      ${f.table ? `<div class="gram-sec"><h4>🗣️ Exemples à écouter</h4><div class="gram-table">${f.table.map(([e, fr]) => `<div class="gram-row"><div class="grow"><div class="en">${md(e)}</div>${fr ? `<div class="fr">${md(fr)}</div>` : ""}</div>
        <button class="audio-btn" data-say="${sayable(e)}" aria-label="Écouter">🔊</button></div>`).join("")}</div></div>` : ""}
      ${f.mistakes.length ? `<div class="gram-sec"><h4>⚠️ Les pièges des Français</h4>${f.mistakes.map(([w, r, why]) => `<div class="mistake"><div class="bad">✗ ${esc(w)}</div><div class="good">✓ ${esc(r)}</div><div class="why">${md(why)}</div></div>`).join("")}</div>` : ""}
      ${f.more ? `<details class="gram-more"><summary>🔎 Pour aller plus loin</summary>${f.more.map(p => `<p>${md(p)}</p>`).join("")}</details>` : ""}
    </div>
    <div class="panel">
      <div class="row"><b class="grow">Exercices</b><span class="small muted">${m}/${f.exercises.length} réussis</span></div>
      <div class="progress" style="margin:8px 0 12px"><div style="width:${Math.round(m / f.exercises.length * 100)}%"></div></div>
      <button class="btn block" id="gSeries">▶ Série de ${Math.min(SERIES, f.exercises.length)} exercices</button>
      <p class="small muted" style="margin:6px 0 10px">Tirés au hasard, en priorité ceux que tu n'as jamais faits ou que tu as ratés. Les erreurs reviennent en fin de série.</p>
      <button class="btn ghost block" id="gAll">Tout faire (${f.exercises.length})</button>
      ${GENERATORS[f.id] ? `<button class="btn ghost block" id="gGen" style="margin-top:8px">♾️ Entraînement illimité (exercices générés)</button>` : ""}
      ${lesson ? `<button class="btn ghost block" id="gLesson" style="margin-top:8px">✍️ Mettre en pratique : ${esc(lesson.name)}</button>` : ""}
    </div>`;
  $("#gBack").addEventListener("click", () => render());
  $$("[data-say]", v).forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
  $("#gSeries").addEventListener("click", () => startSession(f, pickSeries(f.exercises, SERIES)));
  $("#gAll").addEventListener("click", () => startSession(f, spread(shuffle(f.exercises))));
  const gg = $("#gGen"); if (gg) gg.addEventListener("click", () => startSession(f, [], GENERATORS[f.id]));
  const gl = $("#gLesson"); if (gl) gl.addEventListener("click", () => RT.goLesson(f.lesson));
  window.scrollTo({ top: 0 });
}

/* Sélection : jamais faits et ratés d'abord, puis types variés */
function pickSeries(list, n) {
  const S = gstate();
  const scored = list.map(e => { const s = S.gex[e.key]; const pri = !s ? 0 : (!s.lastOk ? 0.5 : 2 + Math.min(s.ok, 3)); return { e, k: pri + Math.random() * 0.9 }; });
  return spread(scored.sort((a, b) => a.k - b.k).slice(0, n).map(x => x.e));
}
function spread(items) { // évite deux exercices du même type à la suite
  const out = []; const pool = items.slice();
  while (pool.length) { const last = out.length ? out[out.length - 1].type : null; let i = pool.findIndex(x => x.type !== last); if (i < 0) i = 0; out.push(pool.splice(i, 1)[0]); }
  return out;
}

/* ============================ Session d'exercices ============================ */
let ex = null;
function startSession(f, items, gen, mix) {
  ex = { f, items: items.slice(), i: 0, firstOk: 0, firstN: 0, combo: 0, bestCombo: 0, retried: new Set(), wrongs: [], gen: gen || null, mix: !!mix, missedF: {} };
  if (gen) for (let k = 0; k < 3; k++) ex.items.push(gen());
  drawEx();
}
const TYPE_LABEL = { m: "Choisis la bonne réponse", f: "Complète la phrase", o: "Remets les mots dans l'ordre", t: "Transforme la phrase", e: "Trouve l'erreur", tr: "Traduis en anglais" };
function drawEx() {
  const v = $("#view-grammar"); const { f, items, i } = ex;
  if (ex.gen && i >= items.length - 1) items.push(ex.gen());
  if (i >= items.length) return endEx();
  const it = items[i]; ex.answered = false;
  let body = "";
  if (it.type === "m") {
    const order = shuffle(it.opts.map((o, k) => k));
    body = `<div class="prompt-fr" style="font-size:21px">${md(it.q)}</div>${order.map(k => `<button class="quiz-opt" data-k="${k}">${esc(it.opts[k])}</button>`).join("")}`;
  } else if (it.type === "f") {
    const [a, b] = it.q.split("___");
    body = `<div class="prompt-fr fill-line" style="font-size:21px">${esc(a)}<input class="blank-input" id="gIn" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Réponse">${esc(b || "")}</div>
      <div class="row"><button class="btn ghost small" id="gHint">💡 Indice</button><button class="btn ghost small" id="gIdk">🤷 Je ne sais pas</button><div class="grow"></div><button class="btn" id="gCheck">Vérifier</button></div><div class="small muted" id="gHintTxt"></div>`;
  } else if (it.type === "o") {
    body = `<div class="prompt-fr" style="font-size:21px">${esc(it.fr)}</div>
      <div class="tiles target" id="tgt"></div><div class="tiles" id="src"></div><button class="btn block" id="gCheck" style="margin-top:12px">Vérifier</button>`;
  } else if (it.type === "t" || it.type === "tr") {
    body = `${it.type === "t" ? `<div class="ins">${esc(it.ins)}</div><div class="prompt-fr" style="font-size:21px">${esc(it.src)}</div>` : `<div class="prompt-fr" style="font-size:21px">${esc(it.fr)}</div>`}
      <textarea class="answer-input" id="gTxt" placeholder="Écris ta réponse en anglais…" autocapitalize="sentences" spellcheck="false"></textarea>
      <div class="row" style="margin-top:10px"><button class="btn ghost small" id="gIdk">🤷 Je ne sais pas</button><div class="grow"></div><button class="btn" id="gCheck">Vérifier</button></div>`;
  } else if (it.type === "e") {
    const toks = it.s.split(/\s+/);
    body = `<div class="small muted" style="margin-bottom:6px">Touche le mot (ou le groupe de mots) qui contient l'erreur.${it.note ? " · " + esc(it.note) : ""}</div>
      <div class="tiles err-tiles">${toks.map((t, k) => `<button class="tile" data-t="${k}">${esc(t)}</button>`).join("")}</div>`;
  }
  const acc = ex.firstN ? Math.round(ex.firstOk / ex.firstN * 100) : 0;
  v.innerHTML = `
    <div class="row" style="margin-bottom:12px"><button class="btn ghost small" id="gQuit">‹ ${ex.mix ? "Mixte" : "Fiche"}</button>
      <div class="grow">${ex.gen ? `<div class="small muted center">♾️ ${ex.firstN} faits · ${acc} % de réussite</div>` : `<div class="progress"><div style="width:${i / items.length * 100}%"></div></div>`}</div>
      <span class="small muted">${ex.gen ? "" : (i + 1) + "/" + items.length}</span></div>
    ${ex.combo >= 3 ? `<div class="combo">🔥 Série de ${ex.combo} bonnes réponses</div>` : ""}
    <div class="panel">
      ${ex.mix && it._f ? `<div class="small muted" style="margin-bottom:4px">${it._f.icon} ${esc(it._f.title)}</div>` : ""}
      <div class="ex-type">${TYPE_LABEL[it.type]}${it.retry ? ' · <span class="retry-tag">à revoir</span>' : ""}</div>
      ${body}<div id="gFb"></div></div>
    <div id="gNext">${ex.gen ? `<button class="btn ghost block" id="gStop">Terminer l'entraînement</button>` : ""}</div>`;
  $("#gQuit").addEventListener("click", () => (ex.mix ? (view.tab = "mix", render()) : openFiche(f.id)));
  const gs = $("#gStop"); if (gs) gs.addEventListener("click", endEx);
  if (it.type === "m") $$(".quiz-opt", v).forEach(b => b.addEventListener("click", () => answerM(it, +b.dataset.k)));
  if (it.type === "f") {
    const inp = $("#gIn"); setTimeout(() => inp.focus(), 50);
    inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); ex.answered ? next() : answerF(it, inp.value); } });
    $("#gCheck").addEventListener("click", () => answerF(it, inp.value));
    $("#gHint").addEventListener("click", () => { $("#gHintTxt").textContent = it.hint || "Pas d'indice pour celle-ci."; });
    $("#gIdk").addEventListener("click", () => answerF(it, "", true));
  }
  if (it.type === "o") wireOrder(it);
  if (it.type === "t" || it.type === "tr") {
    const ta = $("#gTxt"); setTimeout(() => ta.focus(), 50);
    ta.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ex.answered ? next() : answerT(it, ta.value); } });
    $("#gCheck").addEventListener("click", () => answerT(it, ta.value));
    $("#gIdk").addEventListener("click", () => answerT(it, "", true));
  }
  if (it.type === "e") $$(".err-tiles .tile", v).forEach(b => b.addEventListener("click", () => answerE(it, +b.dataset.t)));
}
function record(it, ok) {
  const S = gstate();
  if (it.key) { const s = S.gex[it.key] || (S.gex[it.key] = { ok: 0, ko: 0 }); if (ok) s.ok++; else s.ko++; if (!it.retry || !ok) s.lastOk = ok; s.last = TODAY(); } // une erreur rattrapée dans la même série reste « à retravailler »
  if (!it.retry) { ex.firstN++; if (ok) ex.firstOk++; }
  if (ok) { ex.combo++; ex.bestCombo = Math.max(ex.bestCombo, ex.combo); } else {
    ex.combo = 0;
    if (!it.retry && !ex.gen) { ex.items.push({ ...it, retry: true }); ex.wrongs.push(it); }
    if (it._f) ex.missedF[it._f.id] = it._f;
  }
  dayStats().gram = (dayStats().gram || 0) + 1; save(); RT.updateStreak();
}
function feedback(it, ok, html, sayText, allowOverride) {
  ex.answered = true;
  record(it, ok);
  $("#gFb").innerHTML = `<div class="feedback ${ok ? "ok" : "ko"}"><div class="title">${ok ? "✅ " + RT.pickPraise() : "❌ Pas tout à fait"}</div>${html}
    ${!ok && allowOverride ? `<div class="row" style="margin-top:10px"><button class="btn ghost small" id="gOverride">J'avais bon quand même</button></div>` : ""}</div>`;
  if (sayText) speak(sayText);
  $("#gNext").innerHTML = `<button class="btn block" id="gGo">Continuer <span class="small" style="opacity:.7">(Entrée)</span></button>${ex.gen ? `<button class="btn ghost block" id="gStop" style="margin-top:8px">Terminer l'entraînement</button>` : ""}`;
  $("#gGo").addEventListener("click", next); $("#gGo").focus();
  const gs = $("#gStop"); if (gs) gs.addEventListener("click", endEx);
  const ov = $("#gOverride");
  if (ov) ov.addEventListener("click", () => {
    const S = gstate(); if (it.key && S.gex[it.key]) { S.gex[it.key].ko = Math.max(0, S.gex[it.key].ko - 1); S.gex[it.key].ok++; S.gex[it.key].lastOk = true; }
    if (!it.retry) { ex.firstOk++; const k = ex.items.findIndex((x, j) => j > ex.i && x.retry && x.key === it.key && (x.q || x.src || x.fr || x.s) === (it.q || it.src || it.fr || it.s)); if (k > 0) ex.items.splice(k, 1); ex.wrongs = ex.wrongs.filter(w => w !== it); }
    ex.combo++; save();
    ov.parentElement.innerHTML = '<span class="small score-ok">Compté comme juste ✓</span>';
  });
}
function answerM(it, k) {
  if (ex.answered) return;
  $$(".quiz-opt").forEach(b => { b.disabled = true; const kk = +b.dataset.k; if (kk === it.a) b.classList.add("right"); else if (kk === k) b.classList.add("wrong"); });
  const ok = k === it.a;
  const full = it.q.includes("___") ? it.q.replace("___", it.opts[it.a]).replace(/\s+'(ll|m|re|s|ve|d)\b/g, "'$1") : null;
  feedback(it, ok, `<div class="small">${md(it.why)}</div>`, full && !/^[«(]/.test(it.opts[it.a]) ? full.replace(/\(.*?\)/g, "").replace(/\(rien\)\s*/g, "") : null);
}
function fullF(it) {
  const a = it.answers[0];
  return it.q.replace(/\s*___\s*/, a === "-" || a === "—" ? " " : " " + a + " ").replace(/\s*\((?:[^()]*)\)\s*/g, " ").replace(/\s+([.,!?])/g, "$1").replace(/\s+'(ll|m|re|s|ve|d)\b/g, "'$1").replace(/\s{2,}/g, " ").trim();
}
function answerF(it, val, idk) {
  if (ex.answered) return;
  if (!idk && !val.trim()) { toast("Écris ta réponse (ou « Je ne sais pas »)."); return; }
  const ok = !idk && it.answers.some(a => norm(a) === norm(val) || ((a === "-" || a === "—") && /^[-—–]?$/.test(val.trim())));
  const full = fullF(it);
  $("#gIn").disabled = true;
  feedback(it, ok, `<div class="model"><span class="grow">${esc(full)}</span><button class="audio-btn" id="gSay">🔊</button></div>${!ok && it.hint ? `<div class="small">💡 ${esc(it.hint)}</div>` : ""}`, full);
  $("#gSay").addEventListener("click", () => speak(full));
}
function answerT(it, val, idk) {
  if (ex.answered) return;
  if (!idk && !val.trim()) { toast("Écris ta réponse (ou « Je ne sais pas »)."); return; }
  const m = idk ? { score: 0, answer: it.answers[0] } : RT.bestMatch(val, it.answers);
  const ok = !idk && m.score >= 0.999;
  $("#gTxt").disabled = true;
  const model = `<div class="model"><span class="grow">${esc(m.answer)}</span><button class="audio-btn" id="gSay">🔊</button></div>
    ${it.answers.length > 1 ? `<div class="alts">Aussi accepté : ${it.answers.filter(a => a !== m.answer).map(esc).join(" · ")}</div>` : ""}`;
  feedback(it, ok, `${!ok && !idk ? RT.diffHTML(val, m.answer) : ""}${model}`, ok ? null : m.answer, !idk);
  $("#gSay").addEventListener("click", () => speak(m.answer));
}
const clean = (w) => w.toLowerCase().replace(/^[^a-z0-9']+|[^a-z0-9']+$/gi, "");
function errSpan(it) {
  const toks = it.s.split(/\s+/).map(clean);
  const target = it.wrong.split(/\s+/).map(clean).filter(Boolean);
  for (let i = 0; i + target.length <= toks.length; i++) if (target.every((t, k) => toks[i + k] === t)) return [i, i + target.length - 1];
  return null;
}
function answerE(it, k) {
  if (ex.answered) return;
  const span = errSpan(it); const toks = it.s.split(/\s+/);
  const ok = !!span && k >= span[0] && k <= span[1];
  $$(".err-tiles .tile").forEach(b => { b.disabled = true; const t = +b.dataset.t; if (span && t >= span[0] && t <= span[1]) b.classList.add("err"); else if (t === k) b.classList.add("miss-tap"); });
  let corrected = it.s;
  if (span) {
    const before = toks.slice(0, span[0]).join(" "), after = toks.slice(span[1] + 1).join(" ");
    const lastTok = toks[span[1]]; const trail = (lastTok.match(/[.,!?;:"»”]+$/) || [""])[0];
    const lead = (toks[span[0]].match(/^["«“]+/) || [""])[0];
    const fix = (it.fix === "—" || it.fix === "-") ? "" : lead + it.fix + trail;
    corrected = [before, fix, after].filter(x => x).join(" ").replace(/\s+([.,!?])/g, "$1");
    if (!fix && trail && !after) corrected = corrected.replace(/[,;:]?$/, "") + trail;
    if (span[0] === 0 && corrected) corrected = corrected[0].toUpperCase() + corrected.slice(1);
  }
  feedback(it, ok, `<div class="small">L'erreur : <b>${esc(it.wrong)}</b> → <b>${esc(it.fix === "—" || it.fix === "-" ? "(à supprimer)" : it.fix)}</b>. ${md(it.why)}</div>
    <div class="model"><span class="grow">${esc(corrected)}</span><button class="audio-btn" id="gSay">🔊</button></div>`, corrected);
  $("#gSay").addEventListener("click", () => speak(corrected));
}
function wireOrder(it) {
  const strip = (w) => w.replace(/[.,!?;:]+$/g, "");
  const tiles = shuffle(it.en.split(/\s+/).map(strip)).map((t, i) => ({ t, i }));
  let chosen = [];
  const draw = () => {
    $("#tgt").innerHTML = chosen.map(i => `<button class="tile" data-i="${i}">${esc(tiles[i].t)}</button>`).join("") || '<span class="muted small">Touche les mots dans l\'ordre…</span>';
    $("#src").innerHTML = tiles.map(x => `<button class="tile ${chosen.includes(x.i) ? "used" : ""}" data-i="${x.i}">${esc(x.t)}</button>`).join("");
    $$("#tgt .tile").forEach(b => b.addEventListener("click", () => { if (ex.answered) return; chosen = chosen.filter(i => i !== +b.dataset.i); draw(); }));
    $$("#src .tile").forEach(b => b.addEventListener("click", () => { if (ex.answered || chosen.includes(+b.dataset.i)) return; chosen.push(+b.dataset.i); draw(); }));
  };
  draw();
  $("#gCheck").addEventListener("click", () => {
    if (ex.answered) return;
    if (!chosen.length) { toast("Touche les mots dans l'ordre."); return; }
    const ok = norm(chosen.map(i => tiles[i].t).join(" ")) === norm(it.en);
    feedback(it, ok, `<div class="model"><span class="grow">${esc(it.en)}</span><button class="audio-btn" id="gSay">🔊</button></div>`, it.en);
    $("#gSay").addEventListener("click", () => speak(it.en));
  });
}
function next() { ex.i++; drawEx(); }
document.addEventListener("keydown", e => {
  if (!ex || !ex.answered || !document.querySelector("#view-grammar.active #gGo")) return;
  if (e.key === "Enter" && !e.target.matches("textarea, input")) { e.preventDefault(); next(); }
});
function endEx() {
  const { f, firstOk, firstN } = ex; const score = firstN ? firstOk / firstN : 0;
  const v = $("#view-grammar");
  const wrongList = ex.wrongs.length ? `<div class="panel" style="text-align:left"><h3>À retenir</h3>${ex.wrongs.slice(0, 12).map(w => `<div class="phrase-row"><div class="grow small">${recap(w)}</div></div>`).join("")}</div>` : "";
  const stars = score >= 0.95 ? "⭐⭐⭐" : score >= 0.8 ? "⭐⭐" : score >= 0.5 ? "⭐" : "";
  if (ex.mix || ex.gen) {
    v.innerHTML = `<div class="panel done-box"><div class="big">${score >= 0.8 ? "🏆" : "📚"}</div><h2>${firstOk}/${firstN} — ${Math.round(score * 100)} % ${stars}</h2>
      <p class="muted">Meilleure série de bonnes réponses : ${ex.bestCombo}</p>
      ${ex.mix && Object.keys(ex.missedF).length ? `<p class="muted">Fiches à revoir :</p>${Object.values(ex.missedF).map(m => `<button class="quiz-opt" data-f="${m.id}">${m.icon} ${esc(m.title)}</button>`).join("")}` : ""}
      <div class="row" style="justify-content:center;margin-top:10px">${ex.mix ? `<button class="btn" id="gMixAgain">Nouvelle série</button>` : `<button class="btn ghost" id="gBackF">La fiche</button><button class="btn" id="gGenAgain">Encore</button>`}</div></div>${wrongList}`;
    $$("[data-f]", v).forEach(b => b.addEventListener("click", () => openFiche(b.dataset.f)));
    const ma = $("#gMixAgain"); if (ma) ma.addEventListener("click", () => { view.tab = "mix"; render(); });
    const bf = $("#gBackF"); if (bf) bf.addEventListener("click", () => openFiche(f.id));
    const ga = $("#gGenAgain"); if (ga) ga.addEventListener("click", () => startSession(f, [], ex.gen));
    ex = null; return;
  }
  const S = gstate(); const prev = S.gram[f.id];
  if (firstN >= Math.min(10, f.exercises.length)) S.gram[f.id] = { best: Math.max(score, prev ? prev.best : 0), last: TODAY() };
  save(); RT.updateStreak();
  const pass = score >= 0.8; const nx = nextFiche();
  v.innerHTML = `<div class="panel done-box"><div class="big">${pass ? "🏆" : "📚"}</div>
    <h2>${firstOk}/${firstN} — ${Math.round(score * 100)} % ${stars}</h2>
    <p class="muted">${pass ? "Fiche validée ! " : "Il faut 80 % au premier essai pour valider. "}Meilleure série : ${ex.bestCombo} d'affilée · ${mastered(f)}/${f.exercises.length} exercices de la fiche réussis.</p>
    <div class="row" style="justify-content:center;flex-wrap:wrap;margin-top:10px">
      <button class="btn ghost" id="gRetry">Nouvelle série</button>
      ${pass && nx && nx.id !== f.id ? `<button class="btn" id="gNextF">Fiche suivante →</button>` : `<button class="btn" id="gBackF">Revoir la fiche</button>`}
    </div></div>${wrongList}`;
  $("#gRetry").addEventListener("click", () => startSession(f, pickSeries(f.exercises, SERIES)));
  const nf = $("#gNextF"); if (nf) nf.addEventListener("click", () => openFiche(nx.id));
  const bf = $("#gBackF"); if (bf) bf.addEventListener("click", () => openFiche(f.id));
  ex = null;
}
function recap(w) {
  if (w.type === "m") return `${md(w.q)} → <b>${esc(w.opts[w.a])}</b>`;
  if (w.type === "f") return `<b>${esc(fullF(w))}</b>`;
  if (w.type === "o") return `${esc(w.fr)} → <b>${esc(w.en)}</b>`;
  if (w.type === "t") return `${esc(w.src)} → <b>${esc(w.answers[0])}</b>`;
  if (w.type === "tr") return `${esc(w.fr)} → <b>${esc(w.answers[0])}</b>`;
  if (w.type === "e") return `✗ ${esc(w.s)}<br>${esc(w.wrong)} → <b>${esc(w.fix === "—" || w.fix === "-" ? "(à supprimer)" : w.fix)}</b>`;
  return "";
}

/* ============================ Entraînement mixte ============================ */
function renderMix() {
  const z = $("#gramZone"); const u = Math.min(RT.userLvl(), 4);
  const opts = [
    { k: "level", label: "Mon niveau (" + RT.LEVELS[u] + " et autour)", pick: () => FICHES.filter(f => Math.abs(f.lvl - u) <= 1) },
    { k: "done", label: "Fiches déjà travaillées", pick: () => FICHES.filter(f => best(f.id) !== null || mastered(f) > 0) },
    { k: "weak", label: "Mes erreurs à retravailler", pick: () => FICHES.filter(f => f.exercises.some(e => { const s = gstate().gex[e.key]; return s && !s.lastOk; })) },
    { k: "all", label: "Tout le programme", pick: () => FICHES }
  ];
  z.innerHTML = `<div class="panel">
    <h3>🎲 Entraînement mixte</h3>
    <p class="small muted" style="margin-top:0">20 exercices tirés de plusieurs fiches. Mélanger les règles, c'est ce qui les ancre vraiment (c'est plus proche d'une vraie conversation).</p>
    ${opts.map(o => { const n = o.pick().length; return `<button class="quiz-opt" data-mix="${o.k}" ${n ? "" : "disabled"}>${o.label} <span class="small muted">· ${n} fiche${n > 1 ? "s" : ""}</span></button>`; }).join("")}
  </div>`;
  $$("[data-mix]", z).forEach(b => b.addEventListener("click", () => {
    const k = b.dataset.mix; const fs = opts.find(o => o.k === k).pick();
    let pool = fs.flatMap(f => f.exercises.map(e => ({ ...e, _f: f })));
    if (k === "weak") pool = pool.filter(e => { const s = gstate().gex[e.key]; return s && !s.lastOk; });
    startSession({ id: "mix", title: "Entraînement mixte", icon: "🎲" }, pickSeries(pool, 20), null, true);
  }));
}

/* ============================ Verbes irréguliers ============================ */
let irr = null;
function renderIrr() {
  const z = $("#gramZone"); irr = null;
  const known = IRR.filter(x => (gstate().irr[x.base] || 0) >= 2).length;
  z.innerHTML = `
    <div class="panel">
      <h3>Les ${IRR.length} verbes irréguliers indispensables</h3>
      <p class="small muted" style="margin-top:0">Ils servent à raconter au passé (« I went, I saw, I ate… »). Tu en maîtrises <b>${known}</b>.</p>
      <button class="btn block" id="irrQuiz">🎯 Quiz : 10 verbes (prétérit)</button>
      <button class="btn ghost block" id="irrQuizPP" style="margin-top:8px">🎯 Quiz : 10 verbes (participe passé)</button>
    </div>
    <div class="panel" style="padding:6px 14px">
      <div class="irr-row irr-head"><div>Base</div><div>Prétérit</div><div>Participe</div><div></div></div>
      ${IRR.map(x => `<div class="irr-row"><div><b>${esc(x.base)}</b><div class="fr">${esc(x.fr)}</div></div><div>${esc(x.past)}</div><div>${esc(x.pp)}</div>
        <button class="audio-btn" data-say="${esc(x.base + ", " + x.past.replace(" / ", ", ") + ", " + x.pp.replace(/\s*\(.*\)/, ""))}" aria-label="Écouter">🔊</button></div>`).join("")}
    </div>`;
  $$("[data-say]", z).forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
  $("#irrQuiz").addEventListener("click", () => startIrr("past"));
  $("#irrQuizPP").addEventListener("click", () => startIrr("pp"));
}
function startIrr(mode) {
  const S = gstate();
  const items = IRR.slice().sort((a, b) => ((S.irr[a.base] || 0) - (S.irr[b.base] || 0)) || (Math.random() - 0.5)).slice(0, 10);
  irr = { items: shuffle(items), i: 0, ok: 0, mode }; drawIrr();
}
function drawIrr() {
  const z = $("#gramZone");
  if (irr.i >= irr.items.length) {
    z.innerHTML = `<div class="panel done-box"><div class="big">${irr.ok >= 8 ? "🏆" : "💪"}</div><h2>${irr.ok}/10</h2><p class="muted">Les verbes ratés reviendront en priorité au prochain quiz.</p>
      <div class="row" style="justify-content:center"><button class="btn ghost" id="irrList">La liste</button><button class="btn" id="irrAgain">Encore 10</button></div></div>`;
    $("#irrList").addEventListener("click", renderIrr); $("#irrAgain").addEventListener("click", () => startIrr(irr.mode)); return;
  }
  const x = irr.items[irr.i]; let answered = false; const pp = irr.mode === "pp";
  z.innerHTML = `<div class="row" style="margin-bottom:12px"><div class="grow"><div class="progress"><div style="width:${irr.i * 10}%"></div></div></div><span class="small muted">${irr.i + 1}/10</span></div>
    <div class="panel">
      <div class="small muted">Donne le ${pp ? "participe passé (I have …)" : "prétérit (passé)"} de :</div>
      <div class="prompt-fr">${esc(x.base)} <span class="muted" style="font-size:16px">(${esc(x.fr)})</span></div>
      <input class="search" id="irrIn" placeholder="${pp ? "ex : gone" : "ex : went"}" autocomplete="off" autocapitalize="off" spellcheck="false">
      <button class="btn block" id="irrCheck">Vérifier</button>
      <div id="irrFb"></div>
    </div>`;
  const inp = $("#irrIn"); setTimeout(() => inp.focus(), 50);
  const check = () => {
    if (answered) { irr.i++; drawIrr(); return; }
    if (!inp.value.trim()) return;
    answered = true;
    const target = (pp ? x.pp : x.past).replace(/\(.*?\)/g, "").replace(/US\s*:\s*/g, "");
    const ok = target.split("/").some(p => norm(p) === norm(inp.value));
    const S = gstate(); S.irr[x.base] = ok ? (S.irr[x.base] || 0) + 1 : 0; if (ok) irr.ok++;
    dayStats().gram = (dayStats().gram || 0) + 1; save(); RT.updateStreak();
    $("#irrFb").innerHTML = `<div class="feedback ${ok ? "ok" : "ko"}"><div class="title">${ok ? "✅ " + RT.pickPraise() : "❌ C'était :"}</div>
      <div class="model"><span class="grow">${esc(x.base)} → <b>${esc(x.past)}</b> → <b>${esc(x.pp)}</b></span><button class="audio-btn" id="irrSay">🔊</button></div></div>`;
    const say = x.base + ", " + x.past.replace(" / ", ", ") + ", " + x.pp.replace(/\s*\(.*\)/, "");
    speak(say); $("#irrSay").addEventListener("click", () => speak(say));
    $("#irrCheck").textContent = "Continuer";
  };
  $("#irrCheck").addEventListener("click", check);
  inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); check(); } });
}

RT.registerTab("grammar", render);
RT.grammarInfo = () => ({ total: FICHES.length, passed: FICHES.filter(f => passed(f.id)).length, next: nextFiche() });
RT.__grammar = { FICHES, errSpan, GENERATORS, fullF, cur: () => ex };
})();
