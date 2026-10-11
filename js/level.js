/* Roadtrip English — test de niveau adaptatif (A1 → C1).
   Blocs de 6 questions par niveau : on monte tant que le bloc est réussi.
   ≥ 5/6 : niveau validé, on passe au suivant · 3-4/6 : c'est ton niveau · ≤ 2/6 : niveau en dessous. */
(function () {
"use strict";
const RT = window.RT;
const { $, $$, esc, shuffle, speak, save, TODAY } = RT;

const BANK = (window.PLACEMENT || "").trim().split("\n").map(line => {
  const [lvl, sk, q, opts, a, extra] = line.split("|");
  return { lvl, sk, q, opts: opts.split(";"), a: +a, extra: (extra || "").trim() };
});
const SKILLS = { g: "Grammaire", v: "Vocabulaire", l: "Compréhension orale", r: "Compréhension écrite" };
const PER_BLOCK = 6;
const CAN_DO = {
  A1: "Tu comprends et utilises des expressions très simples du quotidien (te présenter, commander, demander ton chemin) si l'autre parle lentement.",
  A2: "Tu te débrouilles dans les situations courantes de voyage (hôtel, transports, magasins) et tu peux parler de toi simplement, au présent et au passé.",
  B1: "Tu gères la plupart des situations de voyage, tu racontes une expérience, tu donnes ton avis et tu comprends l'essentiel d'une conversation claire.",
  B2: "Tu discutes avec aisance avec des natifs, tu argumentes, tu gères des problèmes (réclamations, démarches) et tu comprends des textes assez complexes.",
  C1: "Tu t'exprimes avec aisance et précision, y compris sur des sujets complexes. L'appli va jusqu'au B2 : complète avec des films, podcasts et livres en VO."
};

let T = null;
function render() {
  const v = $("#view-test");
  T = null;
  v.innerHTML = `
    <div class="panel center" style="padding:26px 20px">
      <div style="font-size:52px">🎯</div>
      <h1 class="view-title" style="margin-top:6px">Test de niveau</h1>
      <p class="muted" style="margin:6px 0 16px">5 à 8 minutes · de 12 à 30 questions</p>
      <div style="text-align:left">
        <div class="phrase-row"><span style="font-size:20px">📈</span><div class="grow">Les questions deviennent plus difficiles tant que tu réussis. Le test s'arrête tout seul.</div></div>
        <div class="phrase-row"><span style="font-size:20px">🎧</span><div class="grow">Certaines questions sont <b>à l'écoute</b> : monte le son. Tu peux réécouter deux fois.</div></div>
        <div class="phrase-row"><span style="font-size:20px">🤷</span><div class="grow"><b>Ne devine pas !</b> Si tu ne sais pas, touche « Je ne sais pas » : le résultat sera plus juste, et l'appli plus adaptée.</div></div>
      </div>
      <button class="btn block" id="tStart" style="margin-top:16px">C'est parti</button>
      <button class="btn ghost block" id="tCancel" style="margin-top:8px">Plus tard</button>
    </div>`;
  $("#tStart").addEventListener("click", start);
  $("#tCancel").addEventListener("click", () => RT.go("home"));
}
// Chaque bloc contient toujours l'écoute et la lecture, complétées par de la grammaire et du vocabulaire.
function blockFor(lvl) {
  const all = BANK.filter(q => q.lvl === lvl);
  const must = all.filter(q => q.sk === "l" || q.sk === "r").slice(0, 2);
  const gv = shuffle(all.filter(q => !must.includes(q)));
  const g = gv.filter(q => q.sk === "g"), v = gv.filter(q => q.sk === "v");
  const pick = must.concat(g.slice(0, 2), v.slice(0, 1));
  for (const q of gv) { if (pick.length >= PER_BLOCK) break; if (!pick.includes(q)) pick.push(q); }
  return shuffle(pick);
}
function start() {
  T = { lvl: 1, block: blockFor("A2"), i: 0, score: 0, results: [], tested: {}, passed: {}, done: null };
  drawQ();
}
function drawQ() {
  const v = $("#view-test"); const q = T.block[T.i];
  const asked = T.results.length + 1;
  const order = shuffle(q.opts.map((o, k) => k));
  T.plays = 0;
  v.innerHTML = `
    <div class="row" style="margin-bottom:12px"><button class="btn ghost small" id="tQuit">✕ Quitter</button><div class="grow"></div><span class="small muted">Question ${asked}</span></div>
    <div class="panel">
      <div class="small muted" style="font-weight:700">${SKILLS[q.sk]}</div>
      ${q.sk === "l" ? `<div class="center" style="margin:14px 0"><button class="mic-btn" id="tPlay" style="background:var(--sea)" aria-label="Écouter">🔊</button>
        <div class="small muted" id="tPlays">Écoute (2 réécoutes possibles)</div></div>` : ""}
      ${q.sk === "r" ? `<div class="test-text">${esc(q.extra)}</div>` : ""}
      <div class="prompt-fr" style="font-size:20px;margin:10px 0 12px">${esc(q.q)}</div>
      ${order.map(k => `<button class="quiz-opt" data-k="${k}">${esc(q.opts[k])}</button>`).join("")}
      <button class="btn ghost block" id="tIdk" style="margin-top:6px">🤷 Je ne sais pas</button>
    </div>`;
  $("#tQuit").addEventListener("click", () => { if (confirm("Quitter le test ? Ta progression dans le test sera perdue.")) RT.go("home"); });
  $$(".quiz-opt", v).forEach(b => b.addEventListener("click", () => answer(+b.dataset.k === q.a)));
  $("#tIdk").addEventListener("click", () => answer(false));
  if (q.sk === "l") {
    const qNow = T.results.length;
    const play = () => {
      if (!T || T.results.length !== qNow || !$("#tPlays")) return; // la question a déjà changé
      if (T.plays > 2) return;
      T.plays++;
      const left = 3 - T.plays;
      $("#tPlays").textContent = left > 0 ? `${left} réécoute${left > 1 ? "s" : ""} possible${left > 1 ? "s" : ""}` : "Plus de réécoute";
      if (left <= 0) $("#tPlay").disabled = true;
      speak(q.extra);
    };
    $("#tPlay").addEventListener("click", play);
    setTimeout(play, 300);
  }
}
function answer(ok) {
  const q = T.block[T.i];
  T.results.push({ lvl: q.lvl, sk: q.sk, ok });
  if (ok) T.score++;
  T.i++;
  if (T.i < T.block.length) return drawQ();
  // Fin de bloc
  const L = RT.LEVELS[T.lvl]; const sc = T.score;
  T.tested[L] = sc;
  if (sc >= 5) {
    T.passed[L] = true;
    if (T.lvl === 4) return finish("C1");
    return nextBlock(T.lvl + 1);
  }
  if (sc >= 3) return finish(L);
  // Échec du bloc
  if (T.lvl === 1 && !("A1" in T.tested)) return nextBlock(0); // on vérifie l'A1
  if (T.lvl === 0) return finish("A1");
  return finish(RT.LEVELS[T.lvl - 1]);
}
function nextBlock(lvl) {
  T.lvl = lvl; T.block = blockFor(RT.LEVELS[lvl]); T.i = 0; T.score = 0;
  const v = $("#view-test");
  v.innerHTML = `<div class="panel center" style="padding:30px 20px"><div style="font-size:42px">${lvl === 0 ? "🔄" : "⬆️"}</div>
    <h2>${lvl === 0 ? "On vérifie les bases" : "Bien joué ! On monte d'un cran"}</h2>
    <p class="muted">${lvl === 0 ? "Quelques questions plus simples pour situer ton niveau précisément." : "Les prochaines questions sont plus difficiles. Garde le « Je ne sais pas » si besoin."}</p>
    <button class="btn block" id="tNext">Continuer</button></div>`;
  $("#tNext").addEventListener("click", drawQ);
}
function finish(level) {
  const v = $("#view-test");
  const by = {}; T.results.forEach(r => { by[r.sk] = by[r.sk] || { ok: 0, n: 0 }; by[r.sk].n++; if (r.ok) by[r.sk].ok++; });
  const total = T.results.length, ok = T.results.filter(r => r.ok).length;
  const S = RT.state();
  S.tests.push({ day: TODAY(), level, ok, total, skills: by });
  const prev = S.level;
  RT.applyLevel(level);
  save();
  const u = RT.lvlIdx(level);
  const readEp = [1, 11, 31, 41, 41][u];
  const weak = Object.entries(by).filter(([, x]) => x.n >= 2).sort((a, b) => a[1].ok / a[1].n - b[1].ok / b[1].n)[0];
  v.innerHTML = `
    <div class="panel center" style="padding:24px 18px">
      <div class="small muted" style="font-weight:700">TON NIVEAU ESTIMÉ</div>
      <div class="lvl-badge">${level}</div>
      <h2>${RT.LEVEL_NAMES[level]}</h2>
      <p style="margin:10px 0 0">${CAN_DO[level]}</p>
      ${prev && prev !== level ? `<p class="small muted">Ancien niveau : ${prev}</p>` : ""}
    </div>
    <div class="panel">
      <h3>Détail (${ok}/${total} bonnes réponses)</h3>
      ${Object.entries(SKILLS).filter(([k]) => by[k]).map(([k, name]) => { const x = by[k]; const pc = Math.round(x.ok / x.n * 100); return `
        <div class="skill-row"><div class="row"><span class="grow">${name}</span><b>${x.ok}/${x.n}</b></div>
        <div class="progress"><div style="width:${pc}%;background:${pc >= 70 ? "var(--good)" : pc >= 45 ? "var(--warn)" : "var(--bad)"}"></div></div></div>`; }).join("")}
      ${weak ? `<p class="small" style="margin-bottom:0">Point à travailler en priorité : <b>${SKILLS[weak[0]].toLowerCase()}</b>.</p>` : ""}
      <p class="small muted" style="margin-bottom:0">Ce test ne mesure pas l'expression orale. C'est souvent le point le plus faible quand on comprend bien : l'onglet « Parler » est fait pour ça.</p>
    </div>
    <div class="panel">
      <h3>Ce qui change dans l'appli</h3>
      <div class="phrase-row"><span style="font-size:20px">🃏</span><div class="grow">Les nouveaux mots commencent par le niveau <b>${RT.LEVELS[Math.min(u, 3)]}</b>. Les mots trop faciles : « Je connais déjà ».</div></div>
      <div class="phrase-row"><span style="font-size:20px">✍️</span><div class="grow">Le mélange du jour pioche dans les leçons <b>${RT.LEVELS[Math.min(u, 3)]}</b>${u < 3 ? " et " + RT.LEVELS[u + 1] : ""}.</div></div>
      <div class="phrase-row"><span style="font-size:20px">📐</span><div class="grow">La fiche de grammaire conseillée est au niveau ${RT.LEVELS[Math.min(u, 3)]}. Les fiches plus simples restent dispo en révision.</div></div>
      <div class="phrase-row"><span style="font-size:20px">📖</span><div class="grow">La lecture du jour démarre à l'<b>épisode ${readEp}</b>. Les épisodes précédents sont débloqués.</div></div>
      <p class="small muted" style="margin-bottom:0">Trop facile ou trop dur ? Change le niveau à la main dans les réglages ⚙️.</p>
    </div>
    <button class="btn block" id="tDone">Let's go! 🚀</button>
    <button class="btn ghost block" id="tRedo" style="margin-top:8px">Refaire le test</button>`;
  $("#tDone").addEventListener("click", () => RT.go("home"));
  $("#tRedo").addEventListener("click", render);
  window.scrollTo({ top: 0 });
  speak(level === "A1" ? "Good start! Let's go!" : "Well done! Your level is " + level.split("").join(" ") + ".");
}

RT.registerTab("test", render);
})();
