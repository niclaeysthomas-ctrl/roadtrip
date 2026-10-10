/* Roadtrip English — onglet Grammaire (fiches, exercices, verbes irréguliers).
   S'appuie sur window.RT, exposé par app.js. */
(function () {
"use strict";
const RT = window.RT;
const { $, $$, esc, shuffle, speak, norm, toast, dayStats, save, state, TODAY } = RT;

const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
const FICHES = (window.GRAMMAR || []).map(g => ({
  ...g,
  exercises: g.ex.trim().split("\n").map(line => {
    const p = line.split("|");
    if (p[0] === "m") return { type: "m", q: p[1], opts: p[2].split(";"), a: +p[3], why: p[4] || "" };
    if (p[0] === "f") return { type: "f", q: p[1], answers: p[2].split("//").map(s => s.trim()), hint: p[3] || "" };
    return { type: "o", fr: p[1], en: p[2] };
  })
}));
const IRR = (window.IRREGULARS || "").trim().split("\n").map(l => { const [base, past, pp, fr] = l.split("|"); return { base, past, pp, fr }; });

function gstate() { const S = state(); S.gram = S.gram || {}; S.irr = S.irr || {}; return S; }
function best(id) { const g = gstate().gram[id]; return g ? g.best : null; }
function passed(id) { const b = best(id); return b !== null && b >= 0.8; }
function nextFiche() { return FICHES.find(f => !passed(f.id)) || null; }

let view = { tab: "fiches" };
function render(opts) {
  if (opts && opts.fiche) { openFiche(opts.fiche); return; }
  const v = $("#view-grammar");
  const done = FICHES.filter(f => passed(f.id)).length;
  const nx = nextFiche();
  v.innerHTML = `
    <h1 class="view-title">Grammaire</h1>
    <p class="view-sub">Des fiches courtes pour comprendre comment se construisent les phrases, puis des exercices pour vérifier. Une fiche est réussie à partir de 80 %.</p>
    <div class="chips">
      <button class="chip ${view.tab === "fiches" ? "on" : ""}" data-gt="fiches">📐 Fiches (${done}/${FICHES.length})</button>
      <button class="chip ${view.tab === "irr" ? "on" : ""}" data-gt="irr">🔀 Verbes irréguliers</button>
    </div>
    <div id="gramZone"></div>`;
  $$("[data-gt]", v).forEach(b => b.addEventListener("click", () => { view.tab = b.dataset.gt; render(); }));
  if (view.tab === "irr") return renderIrr();
  const z = $("#gramZone");
  z.innerHTML = `
    ${nx ? `<button class="lesson featured" style="width:100%;margin-bottom:12px" data-f="${nx.id}"><div class="lv">⚡ FICHE CONSEILLÉE</div><div class="nm">${nx.icon} ${esc(nx.title)}</div>
      <div class="small" style="opacity:.8">Les fiches sont dans l'ordre : chacune s'appuie sur les précédentes.</div></button>`
      : `<div class="lesson-tip">🏆 Toutes les fiches sont réussies ! Refais-les de temps en temps pour ne pas oublier.</div>`}
    <div class="panel" style="padding:6px 14px">
      ${FICHES.map((f, i) => { const b = best(f.id); return `<div class="goal ${passed(f.id) ? "done" : ""}" data-f="${f.id}">
        <div class="check">${passed(f.id) ? "✓" : i + 1}</div>
        <div class="grow"><div class="label">${f.icon} ${esc(f.title)}</div><div class="meta">${f.level}${b !== null ? " · meilleur score " + Math.round(b * 100) + " %" : " · pas encore faite"}</div></div>
        <div class="go">›</div></div>`; }).join("")}
    </div>`;
  $$("[data-f]", z).forEach(el => el.addEventListener("click", () => openFiche(el.dataset.f)));
}

function openFiche(id) {
  const f = FICHES.find(x => x.id === id); if (!f) return render();
  const v = $("#view-grammar");
  const lesson = RT.LESSONS.find(l => l.id === f.lesson);
  v.innerHTML = `
    <div class="row" style="margin-bottom:12px"><button class="btn ghost small" id="gBack">‹ Fiches</button><div class="grow"></div><span class="level-tag">${f.level}</span></div>
    <div class="panel">
      <h2 style="font-size:24px;margin-bottom:10px">${f.icon} ${esc(f.title)}</h2>
      <div class="gram-rule">${f.rule.map(p => `<p>${md(p)}</p>`).join("")}</div>
      ${f.table ? `<div class="gram-table">${f.table.map(([e, fr]) => `<div class="gram-row"><div class="grow"><div class="en">${md(e)}</div>${fr ? `<div class="fr">${md(fr)}</div>` : ""}</div>
        <button class="audio-btn" data-say="${esc(e.replace(/\s*·\s*/g, ". ").replace(/[→]/g, ", "))}" aria-label="Écouter">🔊</button></div>`).join("")}</div>` : ""}
      ${f.more ? `<details class="gram-more"><summary>🔎 Pour aller plus loin</summary>${f.more.map(p => `<p>${md(p)}</p>`).join("")}</details>` : ""}
    </div>
    <button class="btn block" id="gStart">Faire les exercices (${f.exercises.length}) →</button>
    ${lesson ? `<button class="btn ghost block" id="gLesson" style="margin-top:10px">✍️ Puis t'entraîner à traduire : ${esc(lesson.name)}</button>` : ""}`;
  $("#gBack").addEventListener("click", () => render());
  $$("[data-say]", v).forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
  $("#gStart").addEventListener("click", () => startEx(f));
  const gl = $("#gLesson"); if (gl) gl.addEventListener("click", () => RT.goLesson(f.lesson));
  window.scrollTo({ top: 0 });
}

let ex = null;
function startEx(f) { ex = { f, items: shuffle(f.exercises), i: 0, ok: 0 }; drawEx(); }
function drawEx() {
  const v = $("#view-grammar"); const { f, items, i } = ex;
  if (i >= items.length) return endEx();
  const it = items[i]; ex.answered = false;
  let body = "";
  if (it.type === "m") {
    const order = shuffle(it.opts.map((o, k) => k));
    body = `<div class="prompt-fr" style="font-size:21px">${md(it.q)}</div>${order.map(k => `<button class="quiz-opt" data-k="${k}">${esc(it.opts[k])}</button>`).join("")}`;
  } else if (it.type === "f") {
    const [a, b] = it.q.split("___");
    body = `<div class="small muted">Complète la phrase</div><div class="prompt-fr fill-line" style="font-size:21px">${esc(a)}<input class="blank-input" id="gIn" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Réponse">${esc(b || "")}</div>
      <div class="row"><button class="btn ghost small" id="gHint">💡 Indice</button><div class="grow"></div><button class="btn" id="gCheck">Vérifier</button></div><div class="small muted" id="gHintTxt"></div>`;
  } else {
    body = `<div class="small muted">Remets les mots dans l'ordre</div><div class="prompt-fr" style="font-size:21px">${esc(it.fr)}</div>
      <div class="tiles target" id="tgt"></div><div class="tiles" id="src"></div><button class="btn block" id="gCheck" style="margin-top:12px">Vérifier</button>`;
  }
  v.innerHTML = `
    <div class="row" style="margin-bottom:12px"><button class="btn ghost small" id="gQuit">‹ Fiche</button>
      <div class="grow"><div class="progress"><div style="width:${i / items.length * 100}%"></div></div></div><span class="small muted">${i + 1}/${items.length}</span></div>
    <div class="panel">${body}<div id="gFb"></div></div>
    <div id="gNext"></div>`;
  $("#gQuit").addEventListener("click", () => openFiche(f.id));
  if (it.type === "m") $$(".quiz-opt", v).forEach(b => b.addEventListener("click", () => answerM(it, +b.dataset.k)));
  if (it.type === "f") {
    const inp = $("#gIn"); setTimeout(() => inp.focus(), 50);
    inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); ex.answered ? next() : answerF(it, inp.value); } });
    $("#gCheck").addEventListener("click", () => answerF(it, inp.value));
    $("#gHint").addEventListener("click", () => { $("#gHintTxt").textContent = it.hint || "Pas d'indice pour celle-ci."; });
  }
  if (it.type === "o") wireOrder(it);
}
function feedback(ok, html, sayText) {
  if (ok) ex.ok++;
  ex.answered = true;
  $("#gFb").innerHTML = `<div class="feedback ${ok ? "ok" : "ko"}"><div class="title">${ok ? "✅ " + RT.pickPraise() : "❌ Pas tout à fait"}</div>${html}</div>`;
  if (sayText) speak(sayText);
  $("#gNext").innerHTML = `<button class="btn block" id="gGo">Continuer</button>`;
  $("#gGo").addEventListener("click", next); $("#gGo").focus();
  dayStats().gram = (dayStats().gram || 0) + 1; save();
}
function answerM(it, k) {
  if (ex.answered) return;
  $$(".quiz-opt").forEach(b => { b.disabled = true; const kk = +b.dataset.k; if (kk === it.a) b.classList.add("right"); else if (kk === k) b.classList.add("wrong"); });
  const ok = k === it.a;
  const full = it.q.includes("___") ? it.q.replace("___", it.opts[it.a]) : null;
  feedback(ok, `<div class="small">${md(it.why)}</div>`, full && !/^[«(]/.test(it.opts[it.a]) ? full.replace(/\(.*?\)/g, "") : null);
}
function answerF(it, val) {
  if (ex.answered) return;
  if (!val.trim()) { toast("Écris ta réponse (ou regarde l'indice)."); return; }
  const n = norm(val);
  const ok = it.answers.some(a => norm(a) === n);
  const full = it.q.replace("___", it.answers[0]).replace(/\s*\(.*?\)\s*/g, " ").trim();
  $("#gIn").disabled = true;
  feedback(ok, `<div class="model"><span class="grow">${esc(full)}</span><button class="audio-btn" id="gSay">🔊</button></div>${!ok && it.hint ? `<div class="small">💡 ${esc(it.hint)}</div>` : ""}`, full);
  $("#gSay").addEventListener("click", () => speak(full));
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
    feedback(ok, `<div class="model"><span class="grow">${esc(it.en)}</span><button class="audio-btn" id="gSay">🔊</button></div>`, it.en);
    $("#gSay").addEventListener("click", () => speak(it.en));
  });
}
function next() { ex.i++; drawEx(); }
function endEx() {
  const { f, items, ok } = ex; const score = ok / items.length;
  const S = gstate(); const prev = S.gram[f.id];
  S.gram[f.id] = { best: Math.max(score, prev ? prev.best : 0), last: TODAY() }; save(); RT.updateStreak();
  const pass = score >= 0.8;
  const nx = nextFiche();
  const v = $("#view-grammar");
  v.innerHTML = `<div class="panel done-box"><div class="big">${pass ? "🏆" : "📚"}</div>
    <h2>${ok}/${items.length} — ${Math.round(score * 100)} %</h2>
    <p class="muted">${pass ? "Fiche réussie ! " : "Il faut 80 % pour valider. Relis la fiche (surtout « Pour aller plus loin ») et réessaie."}</p>
    <div class="row" style="justify-content:center;flex-wrap:wrap;margin-top:10px">
      <button class="btn ghost" id="gRetry">Refaire</button>
      ${pass && nx ? `<button class="btn" id="gNextF">Fiche suivante →</button>` : `<button class="btn" id="gList">Toutes les fiches</button>`}
    </div>
    ${f.lesson ? `<button class="btn ghost block" id="gLesson2" style="margin-top:12px">✍️ Mettre en pratique : traduire des phrases</button>` : ""}</div>`;
  $("#gRetry").addEventListener("click", () => (pass ? startEx(f) : openFiche(f.id)));
  const nf = $("#gNextF"); if (nf) nf.addEventListener("click", () => openFiche(nx.id));
  const gl = $("#gList"); if (gl) gl.addEventListener("click", () => render());
  const l2 = $("#gLesson2"); if (l2) l2.addEventListener("click", () => RT.goLesson(f.lesson));
}

/* Verbes irréguliers */
let irr = null;
function renderIrr() {
  const z = $("#gramZone"); irr = null;
  const known = IRR.filter(x => (gstate().irr[x.base] || 0) >= 2).length;
  z.innerHTML = `
    <div class="panel">
      <h3>Les ${IRR.length} verbes irréguliers indispensables</h3>
      <p class="small muted" style="margin-top:0">Ils servent à raconter au passé (« I went, I saw, I ate… »). Tu en maîtrises <b>${known}</b>. Apprends-les par petits groupes de 10.</p>
      <button class="btn block" id="irrQuiz">🎯 Quiz : 10 verbes</button>
    </div>
    <div class="panel" style="padding:6px 14px">
      <div class="irr-row irr-head"><div>Base</div><div>Prétérit</div><div>Participe</div><div></div></div>
      ${IRR.map(x => `<div class="irr-row"><div><b>${esc(x.base)}</b><div class="fr">${esc(x.fr)}</div></div><div>${esc(x.past)}</div><div>${esc(x.pp)}</div>
        <button class="audio-btn" data-say="${esc(x.base + ", " + x.past.replace(" / ", ", ") + ", " + x.pp.replace(/\s*\(.*\)/, ""))}" aria-label="Écouter">🔊</button></div>`).join("")}
    </div>`;
  $$("[data-say]", z).forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
  $("#irrQuiz").addEventListener("click", startIrr);
}
function startIrr() {
  const S = gstate();
  const items = IRR.slice().sort((a, b) => ((S.irr[a.base] || 0) - (S.irr[b.base] || 0)) || (Math.random() - 0.5)).slice(0, 10);
  irr = { items: shuffle(items), i: 0, ok: 0 }; drawIrr();
}
function drawIrr() {
  const z = $("#gramZone");
  if (irr.i >= irr.items.length) {
    z.innerHTML = `<div class="panel done-box"><div class="big">${irr.ok >= 8 ? "🏆" : "💪"}</div><h2>${irr.ok}/10</h2><p class="muted">Les verbes ratés reviendront en priorité au prochain quiz.</p>
      <div class="row" style="justify-content:center"><button class="btn ghost" id="irrList">La liste</button><button class="btn" id="irrAgain">Encore 10</button></div></div>`;
    $("#irrList").addEventListener("click", renderIrr); $("#irrAgain").addEventListener("click", startIrr); return;
  }
  const x = irr.items[irr.i]; let answered = false;
  z.innerHTML = `<div class="row" style="margin-bottom:12px"><div class="grow"><div class="progress"><div style="width:${irr.i * 10}%"></div></div></div><span class="small muted">${irr.i + 1}/10</span></div>
    <div class="panel">
      <div class="small muted">Donne le prétérit (passé) de :</div>
      <div class="prompt-fr">${esc(x.base)} <span class="muted" style="font-size:16px">(${esc(x.fr)})</span></div>
      <input class="search" id="irrIn" placeholder="ex : went" autocomplete="off" autocapitalize="off" spellcheck="false">
      <button class="btn block" id="irrCheck">Vérifier</button>
      <div id="irrFb"></div>
    </div>`;
  const inp = $("#irrIn"); setTimeout(() => inp.focus(), 50);
  const check = () => {
    if (answered) { irr.i++; drawIrr(); return; }
    if (!inp.value.trim()) return;
    answered = true;
    const ok = x.past.split("/").some(p => norm(p) === norm(inp.value));
    const S = gstate(); S.irr[x.base] = ok ? (S.irr[x.base] || 0) + 1 : 0; if (ok) irr.ok++;
    dayStats().gram = (dayStats().gram || 0) + 1; save(); RT.updateStreak();
    $("#irrFb").innerHTML = `<div class="feedback ${ok ? "ok" : "ko"}"><div class="title">${ok ? "✅ " + RT.pickPraise() : "❌ C'était :"}</div>
      <div class="model"><span class="grow">${esc(x.base)} → <b>${esc(x.past)}</b> → ${esc(x.pp)}</span><button class="audio-btn" id="irrSay">🔊</button></div></div>`;
    const say = x.base + ", " + x.past.replace(" / ", ", ") + ", " + x.pp.replace(/\s*\(.*\)/, "");
    speak(say); $("#irrSay").addEventListener("click", () => speak(say));
    $("#irrCheck").textContent = "Continuer";
  };
  $("#irrCheck").addEventListener("click", check);
  inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); check(); } });
}

RT.registerTab("grammar", render);
RT.grammarInfo = () => ({ total: FICHES.length, passed: FICHES.filter(f => passed(f.id)).length, next: nextFiche() });
})();
