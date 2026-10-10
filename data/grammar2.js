// Grammaire — fiches 9 à 15 + verbes irréguliers. Même format que grammar1.js.
window.GRAMMAR = window.GRAMMAR || [];
window.GRAMMAR.push(
{ id: "g9", icon: "🙋", level: "A1", title: "CAN, COULD, HAVE TO", lesson: "p2",
  rule: [
    "**can** = pouvoir / savoir faire. Il ne change jamais (pas de -s) et il est suivi du verbe SANS « to » : She **can swim**. (pas « can to swim »)",
    "Question : **Can** I pay by card? · Négation : I **can't** (cannot) find my key.",
    "**could** = version plus polie de can pour demander : **Could** you help me, please?",
    "**have to** = devoir (obligation) : I **have to** leave. · She **has to** work. · You **don't have to** pay (= ce n'est pas obligatoire)."
  ],
  table: [["Can I sit here?", "Je peux m'asseoir ici ?"], ["Could you repeat, please?", "Pourriez-vous répéter ?"], ["I can't hear you.", "Je ne t'entends pas."], ["I have to go.", "Je dois y aller."], ["You don't have to pay.", "Tu n'es pas obligé de payer."]],
  more: [
    "**must** = devoir aussi, mais plus fort ou écrit (règlements) : You **must** show your passport. **mustn't** = interdiction : You **mustn't** smoke here.",
    "⚠️ **don't have to** (pas obligé) ≠ **mustn't** (interdit).",
    "**could** est aussi le passé de can : When I was young, I **could** run fast.",
    "Pour demander poliment, l'échelle est : Can I… ? < Could I… ? < **May I… ?** (très poli)."
  ],
  ex: `
m|She ___ speak three languages.|cans;can;can to|1|can ne change jamais.
m|Quelle phrase est correcte ?|Can I to sit here?;Can I sit here?;Do I can sit here?|1|can + verbe sans to.
m|« Pourriez-vous m'aider ? » (très poli)|Can you help me?;Could you help me?;Do you help me?|1|could = plus poli.
m|He ___ work tomorrow. (il doit)|have to;has to;must to|1|he → has to.
m|« Ce n'est pas obligatoire, tu n'es pas obligé. »|You mustn't pay.;You don't have to pay.;You can't pay.|1|don't have to = pas obligé.
f|I ___ find my wallet. (je n'arrive pas à trouver)|can't // cannot // can not|négation de can
f|___ you speak more slowly, please? (pourriez-vous)|could|demande polie
o|Je peux payer par carte ?|Can I pay by card?
o|Je dois y aller.|I have to go.
` },

{ id: "g10", icon: "⏳", level: "A1", title: "Le présent continu (BE + -ING)", lesson: "p8",
  rule: [
    "Pour ce qui se passe **en ce moment** : I'**m waiting** for the bus. It'**s raining**.",
    "Formation : **am / is / are + verbe-ing** : I am eat**ing**, she is sleep**ing**, they are play**ing**.",
    "Il sert aussi pour un **projet déjà organisé** : I'**m leaving** on Friday. We'**re meeting** Sam tonight.",
    "Comparer : I **work** in a shop (en général, habitude) / Today I'**m working** at home (aujourd'hui, en ce moment)."
  ],
  table: [["What are you doing?", "Qu'est-ce que tu fais (là) ?"], ["I'm looking for the station.", "Je cherche la gare."], ["She's not listening.", "Elle n'écoute pas."], ["Are you coming?", "Tu viens ?"]],
  more: [
    "Orthographe : e muet disparaît (make → mak**ing**, take → tak**ing**) ; une consonne se double après voyelle courte (sit → si**tt**ing, run → ru**nn**ing, stop → sto**pp**ing).",
    "Certains verbes ne se mettent presque jamais en -ing : **like, love, want, need, know, understand, believe**. On dit **I want** a coffee (pas « I'm wanting »).",
    "Mots-indices : **now, right now, at the moment, today, Look!, Listen!**"
  ],
  ex: `
m|Look! It ___.|rains;is raining;raining|1|en ce moment → be + ing.
m|I ___ in a shop. (c'est mon métier)|work;am working;working|0|habitude / en général → présent simple.
m|Quelle phrase est correcte ?|I'm wanting a coffee.;I want a coffee.;I wanting a coffee.|1|want ne se met pas en -ing.
m|Shh! The baby ___.|sleeps;is sleeping;sleep|1|en ce moment.
f|We ___ (wait) for the bus.|are waiting // 're waiting|be + ing
f|What ___ you doing?|are|question au présent continu
f|She is ___ (sit) next to the window.|sitting|consonne doublée
o|Je cherche mon hôtel.|I'm looking for my hotel.
o|Qu'est-ce que tu fais ce soir ?|What are you doing tonight?
` },

{ id: "g11", icon: "🔮", level: "A1+", title: "Le futur : GOING TO et WILL", lesson: "p9",
  rule: [
    "**going to** = un projet, une intention déjà décidée : I'**m going to visit** London next year. We'**re going to rent** a car.",
    "**will** ('ll) = une décision prise sur le moment, une promesse, une proposition : « It's 20 dollars. » — « OK, I'**ll take** it. » · I'**ll call** you tomorrow.",
    "**will** sert aussi pour une prédiction : It **will** be sunny tomorrow.",
    "Négation : I'm **not going to**… / I **won't** (will not)…"
  ],
  table: [["I'm going to travel to Ireland.", "Je vais voyager en Irlande (c'est prévu)."], ["I'll have the chicken.", "Je vais prendre le poulet (je décide là)."], ["I'll help you!", "Je vais t'aider ! (proposition)"], ["It won't take long.", "Ça ne prendra pas longtemps."]],
  more: [
    "Au restaurant, pour commander, on dit très souvent **I'll have…** : c'est la décision du moment.",
    "Avec **going to go**, on simplifie souvent : I'm **going to the beach** (= I'm going to go to the beach).",
    "Pour un rendez-vous fixé, on peut aussi utiliser le présent continu : I'**m flying** to Dublin on Monday.",
    "**Shall I / Shall we…?** pour proposer : **Shall we** go? (On y va ?)"
  ],
  ex: `
m|« The phone is ringing! » — « I ___ answer it. »|'m going to;'ll;will to|1|décision sur le moment → will.
m|Next summer, we ___ visit Canada. (c'est prévu)|will;are going to;go to|1|projet → going to.
m|Au restaurant, pour commander :|I'm going to have the fish.;I'll have the fish.;I have the fish.|1|décision du moment → I'll have.
m|« Ça ne prendra pas longtemps. »|It won't take long.;It doesn't will take long.;It not will take long.|0|will not = won't.
f|I ___ call you tomorrow. (promesse)|will // 'll|promesse → will
f|She's ___ to rent a car.|going|projet
o|Je vais visiter le musée demain.|I'm going to visit the museum tomorrow.
o|Je t'appelle demain.|I'll call you tomorrow.
` },

{ id: "g12", icon: "⌛", level: "A1+", title: "Le passé de BE : WAS / WERE", lesson: "p10",
  rule: [
    "**was** avec I / he / she / it · **were** avec you / we / they.",
    "It **was** amazing! · We **were** tired. · Where **were** you?",
    "Négation : **wasn't**, **weren't** → The hotel **wasn't** expensive.",
    "Pour dire « c'était », c'est **it was** : It **was** great! (très utile pour raconter son voyage)"
  ],
  table: [["I was / I wasn't", "j'étais / je n'étais pas"], ["you were", "tu étais"], ["he / she / it was", "il / elle était"], ["we / they were", "nous étions / ils étaient"], ["How was your trip?", "C'était comment ton voyage ?"]],
  more: [
    "« Je suis né en 2003 » = **I was born** in 2003 (toujours au passé avec be).",
    "**there was / there were** = il y avait : There **were** a lot of people.",
    "Question pour demander un avis : **How was** the film? · **What was** the weather like?"
  ],
  ex: `
m|It ___ a great trip!|were;was;is been|1|it → was.
m|We ___ very tired yesterday.|was;were;are|1|we → were.
m|« Je suis né en 2004. »|I am born in 2004.;I was born in 2004.;I born in 2004.|1|né = was born.
m|___ was your holiday?|What;How;Who|1|How was… ? = c'était comment ?
f|The museum ___ open. (n'était pas)|wasn't // was not|négation, singulier
f|Where ___ you last night?|were|you → were
o|C'était incroyable !|It was amazing!
o|L'hôtel n'était pas cher.|The hotel wasn't expensive.
` },

{ id: "g13", icon: "📜", level: "A2", title: "Le prétérit : raconter au passé", lesson: "p10",
  rule: [
    "Pour une action terminée dans le passé (hier, la semaine dernière, en 2020…) : I **visited** London last year.",
    "Verbes réguliers : verbe + **-ed** → visit**ed**, walk**ed**, play**ed**, arriv**ed**. C'est pareil pour toutes les personnes !",
    "Beaucoup de verbes courants sont **irréguliers** : go → **went**, see → **saw**, eat → **ate**, have → **had**, buy → **bought**… (voir la liste des verbes irréguliers).",
    "Question et négation avec **did** + verbe à la base : **Did** you **see** the castle? · I **didn't understand**. (pas « didn't understood »)"
  ],
  table: [["I visited / I went", "j'ai visité / je suis allé"], ["Did you like it?", "Ça t'a plu ?"], ["We didn't see him.", "On ne l'a pas vu."], ["yesterday · last week · ago", "hier · la semaine dernière · il y a"]],
  more: [
    "Prononciation du -ed : « t » après p, k, s, sh, ch (walked = walkt) ; « d » après les autres sons (played) ; « id » seulement après t ou d (wanted, needed).",
    "Le français « j'ai visité » ne se traduit PAS par « I have visited » quand il y a un moment précis : « Hier, j'ai visité » = **Yesterday I visited**.",
    "Le present perfect (**I have been** to London) sert pour une expérience sans date : Have you ever been to New York? (Tu es déjà allé à New York ?)",
    "Orthographe : stop → stop**ped**, study → stud**ied**, live → live**d**."
  ],
  ex: `
m|Yesterday we ___ the castle.|visit;visited;have visit|1|action terminée → -ed.
m|Last year I ___ to New York.|goed;went;go|1|go → went (irrégulier).
m|___ you like the film?|Do;Did;Was|1|question au passé → did.
m|Quelle phrase est correcte ?|I didn't understood.;I didn't understand.;I not understood.|1|didn't + verbe à la base.
m|« Il y a deux jours » :|since two days;two days ago;there are two days|1|il y a (passé) = ago.
f|I ___ (buy) a jacket in Camden.|bought|buy → bought
f|We ___ (eat) fish and chips.|ate|eat → ate
f|They ___ (arrive) at noon.|arrived|régulier
o|J'ai raté mon train.|I missed my train.
o|Tu as passé une bonne journée ?|Did you have a good day?
` },

{ id: "g14", icon: "🗓️", level: "A2", title: "IN / ON / AT (lieu et temps)", lesson: "p4",
  rule: [
    "TEMPS — **at** + heure précise : at 6 o'clock, at noon, at night · **on** + jour / date : on Monday, on July 14th · **in** + mois, année, saison, partie de la journée : in July, in 2025, in summer, in the morning.",
    "LIEU — **in** = à l'intérieur / ville, pays : in the room, in London, in France · **at** = à un point, un endroit précis : at the station, at the hotel, at home, at work · **on** = sur une surface : on the table, on the wall, on the left.",
    "Astuce : du plus grand au plus précis → **in** (grand) → **on** → **at** (point précis)."
  ],
  table: [["at 8 · at night · at the weekend (UK)", "à 8 h · la nuit · le week-end"], ["on Friday · on my birthday", "vendredi · le jour de mon anniversaire"], ["in May · in the evening", "en mai · le soir"], ["in Paris · in the car", "à Paris · dans la voiture"], ["at the airport · at home", "à l'aéroport · à la maison"], ["on the bus · on the plane", "dans le bus · dans l'avion"]],
  more: [
    "Transports : **in** a car / a taxi (petit véhicule) mais **on** a bus / a train / a plane / a boat (on peut marcher dedans).",
    "Pas de préposition avant **today, tomorrow, yesterday, next…, last…, this…** : I leave **next** week (pas « in next week »).",
    "**to** pour le mouvement (go **to** London), sauf **home** : go home (pas « go to home »).",
    "US vs UK : **on** the weekend (US) / **at** the weekend (UK)."
  ],
  ex: `
m|The train leaves ___ 10:30.|in;on;at|2|heure précise → at.
m|I arrive ___ Monday.|in;on;at|1|jour → on.
m|We go to Spain ___ August.|in;on;at|0|mois → in.
m|I'm ___ the airport.|in;on;at|2|lieu précis → at.
m|She's ___ the bus.|in;on;at|1|bus = on.
f|My brother lives ___ London.|in|ville → in
f|See you ___ the morning!|in|partie de la journée
m|I'm leaving ___ next week.|in;on;(rien)|2|pas de préposition devant next, last, this, today, tomorrow.
o|Le musée ouvre à neuf heures.|The museum opens at nine.
o|On part vendredi.|We leave on Friday.
` },

{ id: "g15", icon: "📏", level: "A2", title: "Comparatifs et superlatifs", lesson: "p12",
  rule: [
    "Adjectif court (1 syllabe) : **+ -er than** pour comparer → cheap → cheap**er than** · **the + -est** pour le plus → **the** cheap**est**.",
    "Adjectif long (2 syllabes ou +) : **more … than** / **the most …** → **more** expensive **than**, **the most** beautiful.",
    "Irréguliers à connaître : good → **better** → **the best** · bad → **worse** → **the worst** · far → **further** → **the furthest**.",
    "London is **bigger than** Dublin. · It's **the best** pizza in New York!"
  ],
  table: [["cheap → cheaper → the cheapest", "pas cher → moins cher → le moins cher"], ["big → bigger → the biggest", "consonne doublée"], ["easy → easier → the easiest", "y → ier"], ["expensive → more expensive → the most expensive", ""], ["good → better → the best", "bon → meilleur → le meilleur"]],
  more: [
    "Adjectifs en -y (2 syllabes) : happy → happ**ier**, easy → eas**ier**, busy → bus**ier**.",
    "Égalité : **as … as** → It's **as** big **as** Paris. · Négatif : **not as** expensive **as** London.",
    "**less** = moins : less expensive, less crowded.",
    "Ne dis pas « more cheap » ni « more better » : c'est soit -er, soit more, jamais les deux."
  ],
  ex: `
m|London is ___ than Lille.|big;bigger;more big|1|court → -er (consonne doublée).
m|This hotel is ___ than the other one.|expensiver;more expensive;most expensive|1|long → more.
m|It's the ___ restaurant in town!|better;best;goodest|1|good → better → the best.
m|The weather today is ___ than yesterday.|badder;worse;more bad|1|bad → worse.
m|Quelle phrase est correcte ?|It's more cheaper.;It's cheaper.;It's more cheap.|1|soit -er, soit more.
f|This is the ___ (cheap) hostel in London.|cheapest|superlatif court
f|English is ___ (easy) than Chinese.|easier|y → ier
o|C'est la plus belle ville du monde.|It's the most beautiful city in the world.
o|Le train est plus rapide que le bus.|The train is faster than the bus.
` }
);

// Les verbes irréguliers indispensables : base | prétérit | participe passé | français
window.IRREGULARS = `
be|was / were|been|être
have|had|had|avoir
do|did|done|faire
go|went|gone|aller
come|came|come|venir
get|got|got (US : gotten)|obtenir, recevoir
make|made|made|faire, fabriquer
say|said|said|dire
tell|told|told|dire à, raconter
see|saw|seen|voir
know|knew|known|savoir, connaître
think|thought|thought|penser
take|took|taken|prendre
give|gave|given|donner
find|found|found|trouver
eat|ate|eaten|manger
drink|drank|drunk|boire
buy|bought|bought|acheter
pay|paid|paid|payer
bring|brought|brought|apporter
leave|left|left|partir, quitter
meet|met|met|rencontrer
sleep|slept|slept|dormir
feel|felt|felt|ressentir
lose|lost|lost|perdre
spend|spent|spent|dépenser, passer (du temps)
send|sent|sent|envoyer
sit|sat|sat|s'asseoir
stand|stood|stood|être debout
understand|understood|understood|comprendre
speak|spoke|spoken|parler
write|wrote|written|écrire
read|read|read|lire (se prononce « red » au passé)
drive|drove|driven|conduire
ride|rode|ridden|aller à vélo, à cheval
fly|flew|flown|voler, prendre l'avion
swim|swam|swum|nager
run|ran|run|courir
begin|began|begun|commencer
forget|forgot|forgotten|oublier
choose|chose|chosen|choisir
wake up|woke up|woken up|se réveiller
put|put|put|mettre
cost|cost|cost|coûter
hurt|hurt|hurt|faire mal
break|broke|broken|casser
steal|stole|stolen|voler (dérober)
fall|fell|fallen|tomber
hear|heard|heard|entendre
win|won|won|gagner
`;
