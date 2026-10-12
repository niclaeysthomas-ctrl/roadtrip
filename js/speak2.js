/* Roadtrip English — « Défi 1 minute » (monologue chronométré) et « Dictée ».
   S'ajoute à l'onglet Parler via RT.registerSpeakTab. */
(function () {
"use strict";
const RT = window.RT;
const { $, $$, esc, shuffle, speak, save, toast, dayStats, TODAY } = RT;

const TOPICS = (window.TOPICS || "").trim().split("\n").map((l, i) => {
  const [lvl, q, fr, help] = l.split("|");
  return { i, lvl, q, fr, help: (help || "").split(";").map(s => s.trim()).filter(Boolean) };
});
const CONNECTORS = ["because", "so", "but", "although", "even though", "however", "then", "after that", "first", "finally", "also", "actually", "if", "when", "while", "which", "who", "on the other hand", "i think", "in my opinion", "for example", "that's why", "what's more", "unless", "whereas", "instead"];
const HasMR = typeof window.MediaRecorder !== "undefined" && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;

function st() { const S = RT.state(); S.mono = S.mono || []; return S; }

/* ============================ Défi 1 minute ============================ */
let D = { lvl: null, topic: null, secs: 60, mode: null, running: false, showFr: false };
function pickTopic(lvl, avoid) {
  const pool = TOPICS.filter(t => t.lvl === lvl && t !== avoid);
  const done = new Set(st().mono.map(m => m.t));
  const fresh = pool.filter(t => !done.has(t.i));
  const from = fresh.length ? fresh : pool;
  return from[Math.floor(Math.random() * from.length)];
}
function renderMono() {
  stopAll();
  if (!D.lvl) D.lvl = RT.LEVELS[Math.min(RT.userLvl(), 4)];
  if (!D.topic || D.topic.lvl !== D.lvl) D.topic = pickTopic(D.lvl);
  if (!D.mode) D.mode = RT.SR ? "text" : (HasMR ? "audio" : "timer");
  const z = $("#speakZone"); const t = D.topic;
  const best = st().mono.filter(m => m.t === t.i && m.words).reduce((a, m) => Math.max(a, m.words), 0);
  z.innerHTML = `
    <p class="small muted" style="margin-top:0">Parle <b>sans t'arrêter</b> sur le sujet, même avec des phrases simples et des fautes. C'est le meilleur exercice pour la fluidité. Astuce : fais le même sujet deux ou trois fois de suite, tu iras plus loin à chaque fois.</p>
    <div class="chips">${["A1", "A2", "B1", "B2", "C1"].map(L => `<button class="chip ${D.lvl === L ? "on" : ""}" data-ml="${L}">${L}</button>`).join("")}</div>
    <div class="panel">
      <div class="row"><span class="level-tag">${t.lvl}</span><div class="grow"></div><button class="btn ghost small" id="mNext">🔀 Autre sujet</button></div>
      <div class="row" style="margin-top:10px;align-items:flex-start"><div class="prompt-fr grow" style="margin:0">${esc(t.q)}</div><button class="audio-btn" id="mSay" aria-label="Écouter">🔊</button></div>
      <button class="chip ${D.showFr ? "on" : ""}" id="mFr" style="margin-top:8px">🇫🇷 ${D.showFr ? esc(t.fr) : "Traduction"}</button>
      <div class="small muted" style="margin:14px 0 6px;font-weight:700">Pour t'aider :</div>
      <div>${t.help.map(h => `<button class="word-chip" data-h="${esc(h)}">${esc(h)}</button>`).join("")}</div>
      ${best ? `<div class="small muted">Ton record sur ce sujet : <b>${best} mots</b></div>` : ""}
    </div>
    <div class="panel">
      <div class="row wrap-row" style="gap:8px">
        <span class="small" style="font-weight:700">Durée</span>${[30, 60, 90, 120].map(n => `<button class="chip ${D.secs === n ? "on" : ""}" data-sec="${n}">${n < 60 ? n + " s" : n / 60 + " min"}</button>`).join("")}
      </div>
      <div class="row wrap-row" style="gap:8px;margin-top:10px">
        <span class="small" style="font-weight:700">Mode</span>
        ${RT.SR ? `<button class="chip ${D.mode === "text" ? "on" : ""}" data-mode="text">📝 Transcription</button>` : ""}
        ${HasMR ? `<button class="chip ${D.mode === "audio" ? "on" : ""}" data-mode="audio">🎙️ M'enregistrer</button>` : ""}
        <button class="chip ${D.mode === "timer" ? "on" : ""}" data-mode="timer">⏱️ Chrono seul</button>
      </div>
      <p class="small muted" style="margin-bottom:0">${D.mode === "text" ? "L'appli écrit ce que tu dis et compte tes mots." : D.mode === "audio" ? "Tu pourras te réécouter à la fin : c'est très efficace pour repérer tes hésitations." : "Juste un chrono : parle à voix haute, puis fais ton auto-évaluation."}</p>
    </div>
    <div class="center" id="mRun">
      <div class="timer-ring" id="mTimer">${fmt(D.secs)}</div>
      <button class="btn block" id="mStart">▶ C'est parti</button>
    </div>
    <div id="mLive"></div>`;
  $$("[data-ml]", z).forEach(b => b.addEventListener("click", () => { D.lvl = b.dataset.ml; D.topic = null; renderMono(); }));
  $("#mNext").addEventListener("click", () => { D.topic = pickTopic(D.lvl, D.topic); D.showFr = false; renderMono(); });
  $("#mSay").addEventListener("click", () => speak(t.q));
  $("#mFr").addEventListener("click", () => { D.showFr = !D.showFr; renderMono(); });
  $$("[data-h]", z).forEach(b => b.addEventListener("click", () => speak(b.dataset.h.replace(/…/g, ""))));
  $$("[data-sec]", z).forEach(b => b.addEventListener("click", () => { D.secs = +b.dataset.sec; renderMono(); }));
  $$("[data-mode]", z).forEach(b => b.addEventListener("click", () => { D.mode = b.dataset.mode; renderMono(); }));
  $("#mStart").addEventListener("click", startMono);
}
function fmt(s) { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }

let R = null; // session en cours
function stopAll() {
  if (!R) return;
  R.running = false;
  clearInterval(R.timer);
  try { if (R.rec) R.rec.abort(); } catch (e) {}
  try { if (R.mr && R.mr.state !== "inactive") R.mr.stop(); } catch (e) {}
  if (R.stream) R.stream.getTracks().forEach(tr => tr.stop());
  R = null;
}
RT.onSpeakLeave = stopAll;
async function startMono() {
  RT.stopSpeak();
  R = { running: true, finals: [], interim: "", t0: 0, mode: D.mode, topic: D.topic, secs: D.secs };
  if (R.mode === "audio") {
    try {
      R.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      R.chunks = [];
      R.mr = new MediaRecorder(R.stream);
      R.mr.ondataavailable = e => { if (e.data && e.data.size) R.chunks.push(e.data); };
      R.mr.start();
    } catch (e) { toast("Micro refusé : autorise-le dans ton navigateur 🎤"); R = null; return; }
  }
  R.t0 = Date.now();
  $("#mStart").outerHTML = `<button class="btn block" id="mStop" style="background:var(--ink);color:var(--bg)">⏹ J'ai fini</button>`;
  $("#mStop").addEventListener("click", () => endMono());
  $("#mLive").innerHTML = R.mode === "text" ? `<div class="panel"><div class="small muted" style="font-weight:700">Ce que j'entends…</div><div class="live-text" id="mText"><span class="muted">Commence à parler !</span></div></div>` : `<p class="center muted">🗣️ Parle maintenant !</p>`;
  $("#mTimer").classList.add("running");
  R.timer = setInterval(() => {
    if (!R) return;
    const left = R.secs - (Date.now() - R.t0) / 1000;
    const el = $("#mTimer"); if (el) { el.textContent = fmt(left); el.style.setProperty("--p", Math.max(0, left / R.secs)); }
    if (left <= 0) endMono();
  }, 250);
  if (R.mode === "text") listenLoop();
}
function listenLoop() {
  if (!R || !R.running) return;
  const SRc = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SRc(); R.rec = rec;
  rec.lang = RT.state().settings.accent; rec.continuous = true; rec.interimResults = true;
  rec.onresult = (e) => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const r = e.results[i];
      if (r.isFinal) R.finals.push(r[0].transcript.trim()); else interim += r[0].transcript;
    }
    R.interim = interim;
    const el = $("#mText"); if (el) el.innerHTML = esc(R.finals.join(" ")) + (interim ? ` <span class="muted">${esc(interim)}</span>` : "");
  };
  rec.onerror = (e) => { if (e.error === "not-allowed" || e.error === "service-not-allowed") { RT.micError(new Error(e.error)); endMono(true); } };
  rec.onend = () => { if (R && R.running) setTimeout(listenLoop, 100); }; // Chrome coupe après un silence : on relance
  try { rec.start(); } catch (e) {}
}
function endMono(cancel) {
  if (!R || !R.running) return;
  R.running = false; clearInterval(R.timer);
  const elapsed = Math.min(R.secs, (Date.now() - R.t0) / 1000);
  const session = R;
  try { if (session.rec) session.rec.stop(); } catch (e) {}
  if (cancel) { stopAll(); renderMono(); return; }
  const finish = (audioUrl) => {
    if (session.stream) session.stream.getTracks().forEach(tr => tr.stop());
    R = null;
    showResult(session, elapsed, audioUrl);
  };
  if (session.mode === "audio" && session.mr) {
    session.mr.onstop = () => finish(URL.createObjectURL(new Blob(session.chunks, { type: session.mr.mimeType || "audio/webm" })));
    try { session.mr.stop(); } catch (e) { finish(null); }
  } else if (session.mode === "text") {
    setTimeout(() => { if (session.interim) session.finals.push(session.interim.trim()); finish(null); }, 700); // laisse arriver les derniers mots
  } else finish(null);
}
function analyse(text, secs) {
  const words = text.toLowerCase().replace(/[^a-z' ]+/g, " ").split(/\s+/).filter(Boolean);
  const uniq = new Set(words).size;
  const low = " " + words.join(" ") + " ";
  const used = CONNECTORS.filter(c => low.includes(" " + c + " "));
  const wpm = secs > 5 ? Math.round(words.length / (secs / 60)) : 0;
  return { words: words.length, uniq, used, wpm };
}
function showResult(session, secs, audioUrl) {
  const z = $("#speakZone"); const t = session.topic;
  const ds = dayStats(); ds.mono = (ds.mono || 0) + 1; ds.speak = (ds.speak || 0) + 3;
  let html = "";
  if (session.mode === "text") {
    const text = session.finals.join(" ").trim();
    const a = analyse(text, secs);
    const S = st(); const prev = S.mono.filter(m => m.t === t.i && m.words).reduce((x, m) => Math.max(x, m.words), 0);
    S.mono.push({ day: TODAY(), t: t.i, words: a.words, secs: Math.round(secs), mode: "text" });
    const tips = [];
    if (a.words < 25) tips.push("Peu de mots : essaie de <strong>ne jamais t'arrêter</strong>, même pour dire « I mean… », « let me think… ».");
    if (a.used.length < 2) tips.push("Relie tes idées avec <strong>because, so, but, then, also</strong> : ça rend ton discours beaucoup plus naturel.");
    if (a.words >= 25 && a.uniq / Math.max(1, a.words) < 0.45) tips.push("Tu répètes souvent les mêmes mots : essaie d'utiliser les phrases d'aide du sujet.");
    if (a.wpm >= 90) tips.push("Super débit ! Prochaine étape : un sujet du niveau au-dessus.");
    html = `
      <div class="panel center"><div class="small muted" style="font-weight:700">BILAN</div>
        <div class="stats" style="margin-top:10px">
          <div class="stat"><div class="n">${a.words}</div><div class="l">mots${prev ? " (record : " + Math.max(prev, a.words) + ")" : ""}</div></div>
          <div class="stat"><div class="n">${a.wpm || "—"}</div><div class="l">mots / minute</div></div>
          <div class="stat"><div class="n">${a.uniq}</div><div class="l">mots différents</div></div>
          <div class="stat"><div class="n">${a.used.length}</div><div class="l">connecteurs</div></div>
        </div>
        ${prev && a.words > prev ? `<p class="score-ok">🔥 Nouveau record sur ce sujet : +${a.words - prev} mots !</p>` : ""}
        <p class="small muted" style="margin-bottom:0">Repère : un natif parle à environ 130-150 mots/minute. En apprentissage, 60-90, c'est déjà très bien.</p>
      </div>
      <div class="panel"><h3>Ce que l'appli a compris</h3><div class="live-text">${text ? esc(text) : '<span class="muted">Rien n\'a été transcrit. Vérifie le micro, ou utilise le mode « M\'enregistrer ».</span>'}</div>
        ${a.used.length ? `<div class="small" style="margin-top:10px">Connecteurs utilisés : ${a.used.map(c => `<b>${esc(c)}</b>`).join(", ")}</div>` : ""}
        <p class="small muted" style="margin-bottom:0">La transcription n'est pas parfaite : si un mot est mal reconnu, c'est souvent un indice sur ta prononciation.</p></div>
      ${tips.length ? `<div class="tip-box">${tips.map(x => "💡 " + x).join("<br>")}</div>` : ""}`;
  } else {
    st().mono.push({ day: TODAY(), t: t.i, words: 0, secs: Math.round(secs), mode: session.mode });
    html = `
      <div class="panel">
        <h3>${audioUrl ? "🎧 Réécoute-toi" : "✅ Bien joué !"}</h3>
        ${audioUrl ? `<audio controls src="${audioUrl}" style="width:100%"></audio>` : ""}
        <p class="small muted">Tu as parlé ${Math.round(secs)} secondes. Auto-évaluation :</p>
        ${["Je n'ai pas fait de longues pauses", "J'ai relié mes idées (because, so, but…)", "Je n'ai pas utilisé de mots en français", "J'ai utilisé au moins une phrase d'aide"].map((c, k) => `<label class="switch-row"><span>${c}</span><input type="checkbox" class="selfchk"></label>`).join("")}
        <div id="selfScore" class="small" style="margin-top:8px"></div>
      </div>`;
  }
  save(); RT.updateStreak();
  z.innerHTML = `<div class="row" style="margin-bottom:12px"><button class="btn ghost small" id="mBack">‹ Sujets</button><div class="grow"></div><span class="level-tag">${t.lvl}</span></div>
    <div class="panel"><div class="small muted">Sujet</div><div style="font-weight:800;font-size:18px">${esc(t.q)}</div></div>
    ${html}
    <button class="btn block" id="mAgain" style="margin-top:12px">🔁 Refaire le même sujet</button>
    <button class="btn ghost block" id="mOther" style="margin-top:8px">🔀 Nouveau sujet</button>`;
  $("#mBack").addEventListener("click", renderMono);
  $("#mAgain").addEventListener("click", () => { renderMono(); });
  $("#mOther").addEventListener("click", () => { D.topic = pickTopic(D.lvl, t); renderMono(); });
  $$(".selfchk", z).forEach(c => c.addEventListener("change", () => { const n = $$(".selfchk:checked", z).length; $("#selfScore").innerHTML = n === 4 ? '<span class="score-ok">Parfait ! Passe à un sujet plus difficile ou augmente la durée.</span>' : n + "/4"; }));
}

/* ============================ Dictée ============================ */
let DC = null;
function dictPool() {
  const near = RT.LESSONS.filter(l => RT.lvlRank(RT.LESSON_CEFR[l.level]) <= 1);
  return shuffle(near.flatMap(l => l.list)).slice(0, 10);
}
function renderDict() {
  stopAll();
  DC = { items: dictPool(), i: 0, ok: 0, done: false };
  drawDict();
}
function drawDict() {
  const z = $("#speakZone");
  if (DC.i >= DC.items.length) {
    z.innerHTML = `<div class="panel done-box"><div class="big">${DC.ok >= 8 ? "🏆" : "🎧"}</div><h2>${DC.ok}/${DC.items.length}</h2>
      <p class="muted">${DC.ok >= 8 ? "Excellente oreille ! Essaie sans le bouton lent la prochaine fois." : "La dictée entraîne ton oreille à repérer les petits mots (a, the, to, have…) qu'on n'entend presque pas à l'oral."}</p>
      <button class="btn" id="dAgain">Nouvelle dictée</button></div>`;
    $("#dAgain").addEventListener("click", renderDict); return;
  }
  const p = DC.items[DC.i]; const en = p.answers[0]; DC.answered = false;
  z.innerHTML = `<p class="small muted" style="margin-top:0">Écoute la phrase et écris exactement ce que tu entends. La ponctuation et les majuscules ne comptent pas.</p>
    <div class="row" style="margin-bottom:12px"><div class="grow"><div class="progress"><div style="width:${DC.i / DC.items.length * 100}%"></div></div></div><span class="small muted">${DC.i + 1}/${DC.items.length}</span></div>
    <div class="panel center">
      <div class="row" style="justify-content:center;gap:14px"><button class="mic-btn" id="dPlay" style="background:var(--sea);margin:0" aria-label="Écouter">🔊</button><button class="audio-btn slow" id="dSlow" style="width:56px;height:56px" aria-label="Lentement">🐢</button></div>
      <textarea class="answer-input" id="dIn" placeholder="Écris ce que tu entends…" autocapitalize="sentences" spellcheck="false" style="margin-top:14px;text-align:left"></textarea>
      <div id="dFb" style="text-align:left"></div>
    </div>
    <div id="dAct"><div class="row"><button class="btn ghost" id="dSkip">Je n'ai pas compris</button><button class="btn grow" id="dCheck">Vérifier</button></div></div>`;
  $("#dPlay").addEventListener("click", () => speak(en));
  $("#dSlow").addEventListener("click", () => speak(en, { slow: true }));
  setTimeout(() => { if (DC && DC.items[DC.i] === p) speak(en); }, 250);
  const inp = $("#dIn"); setTimeout(() => inp.focus(), 60);
  inp.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); DC.answered ? nextDict() : checkDict(p, inp.value); } });
  $("#dCheck").addEventListener("click", () => checkDict(p, inp.value));
  $("#dSkip").addEventListener("click", () => checkDict(p, ""));
}
function checkDict(p, val) {
  if (DC.answered) return; DC.answered = true;
  const en = p.answers[0];
  const ok = val.trim() && RT.norm(val) === RT.norm(en);
  if (ok) DC.ok++;
  const ds = dayStats(); ds.dict = (ds.dict || 0) + 1; save(); RT.updateStreak();
  $("#dFb").innerHTML = `<div class="feedback ${ok ? "ok" : val.trim() ? "almost" : "ko"}"><div class="title">${ok ? "✅ " + RT.pickPraise() : val.trim() ? "🟡 Compare :" : "📘 La phrase était :"}</div>
    ${!ok && val.trim() ? RT.diffHTML(val, en) : ""}
    <div class="model"><span class="grow">${esc(en)}</span></div><div class="small muted">${esc(p.fr)}</div></div>`;
  $("#dIn").disabled = true;
  $("#dAct").innerHTML = `<button class="btn block" id="dNext">Continuer</button>`;
  $("#dNext").addEventListener("click", nextDict); $("#dNext").focus();
}
function nextDict() { DC.i++; drawDict(); }

RT.registerSpeakTab("mono", "⏱️ Défi 1 minute", renderMono, 1);
RT.registerSpeakTab("dict", "✍️ Dictée", renderDict, 3);
})();
