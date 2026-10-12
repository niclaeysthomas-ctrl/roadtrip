// Grammaire B2+ → C1 (fiches 31 à 46). Même format que grammar1.js.
window.GRAMMAR = window.GRAMMAR || [];
window.GRAMMAR.push(
{ id: "g31", icon: "🛰️", level: "B2", title: "Futur continu et futur antérieur", lesson: "p33",
  rule: [
    "**Futur continu (will be + -ing)** : une action **en cours** à un moment du futur. This time tomorrow, I'**ll be flying** to Sydney. (Demain à cette heure-ci, je serai dans l'avion.)",
    "Il sert aussi à demander poliment les projets de quelqu'un : **Will you be using** the car tonight?",
    "**Futur antérieur (will have + participe)** : une action **terminée avant** un moment du futur. By June, I'**ll have finished** the course. (D'ici juin, j'aurai fini.)",
    "Avec **by** (d'ici / avant) : by Friday, by the time you arrive, by then."
  ],
  table: [["This time next week, we'll be lying on the beach.", "La semaine prochaine à cette heure, on sera allongés sur la plage."], ["By the time you arrive, I'll have left.", "Quand tu arriveras, je serai déjà parti."], ["Will you be needing a taxi?", "Aurez-vous besoin d'un taxi ? (très poli)"], ["By 2030, I'll have visited 30 countries.", "D'ici 2030, j'aurai visité 30 pays."]],
  more: [
    "Futur antérieur continu : By December, I'**ll have been living** here for a year (insiste sur la durée).",
    "Après **by the time**, **when**, **as soon as**, on garde le présent : By the time you **arrive** (pas « will arrive »).",
    "Pour une supposition sur le présent : Don't call now, he'**ll be sleeping**. (il doit être en train de dormir)"
  ],
  ex: `
m|This time tomorrow, I ___ over the Atlantic.|will fly;will be flying;will have flown|1|action en cours à un moment futur.
m|By the end of the year, I ___ 500 new words.|will learn;will be learning;will have learned|2|terminé avant un moment futur.
m|By the time you ___, we'll have eaten.|will arrive;arrive;will have arrived|1|by the time + présent.
m|« Aurez-vous besoin de la chambre demain ? » (très poli)|Do you need the room tomorrow?;Will you be needing the room tomorrow?;Will you have needed the room tomorrow?|1|futur continu = forme polie.
m|Don't call him now, he ___. (il doit être en train de dormir)|will sleep;will be sleeping;will have slept|1|supposition sur une action en cours.
m|By next June, she ___ here for ten years.|will work;will be working;will have been working|2|durée jusqu'à un moment futur.
f|By Friday, we ___ ___ (finish) the project.|will have finished // 'll have finished|futur antérieur
f|At 8 tonight, I ___ ___ ___ (watch) the match.|will be watching // 'll be watching|futur continu
f|By the time we get there, the shop ___ ___ ___ (close).|will have closed // 'll have closed|terminé avant
o|D'ici juin, j'aurai fini le cours.|By June, I'll have finished the course.
o|Demain à cette heure-ci, je serai dans l'avion.|This time tomorrow, I'll be on the plane.
o|Quand tu arriveras, je serai déjà parti.|By the time you arrive, I'll have left.
` },

{ id: "g32", icon: "🔀", level: "C1", title: "Les conditionnels mixtes", lesson: "p35",
  rule: [
    "On mélange les temps quand la condition et le résultat ne sont **pas à la même époque**.",
    "**Passé → présent** : If + **had + participe**, **would + verbe**. If I **had learned** English as a child, I **would be** fluent now. (Si j'avais appris… je serais bilingue maintenant.)",
    "**Présent → passé** : If + **prétérit**, **would have + participe**. If I **were** braver, I **would have spoken** to her. (Si j'étais plus courageux, je lui aurais parlé.)",
    "C'est très naturel à l'oral pour parler de regrets et de caractère."
  ],
  table: [["If I hadn't missed the bus, I'd be at home now.", "Si je n'avais pas raté le bus, je serais chez moi maintenant."], ["If she weren't so shy, she'd have asked.", "Si elle n'était pas si timide, elle aurait demandé."], ["If we'd booked, we wouldn't be standing in this queue.", "Si on avait réservé, on ne ferait pas cette queue."]],
  more: [
    "Pour repérer le bon mélange, demande-toi : la condition est-elle passée (un événement) ou permanente (un trait de caractère, une situation actuelle) ?",
    "**could / might** remplacent souvent would : If I'd studied more, I **might** have a better job now.",
    "À l'oral, « 'd » = had dans la condition et would dans le résultat : If I**'d** known, I**'d** be there."
  ],
  ex: `
m|If I ___ that course last year, I'd be fluent now.|took;had taken;would take|1|passé → présent : had + participe.
m|If I had booked earlier, I ___ in a nicer hotel now.|would stay;would be staying;would have stayed|1|résultat présent → would (be + -ing).
m|If he ___ so lazy, he'd have finished on time.|isn't;weren't;hadn't been|1|caractère permanent → prétérit.
m|If we hadn't got lost, we ___ there by now.|would be;would have been;will be|0|résultat présent.
m|If I spoke better English, I ___ that job last year.|would get;would have got;had got|1|présent → passé.
m|Quelle phrase est un conditionnel mixte ?|If I had money, I'd travel.;If I'd saved money, I'd be travelling now.;If I'd saved money, I'd have travelled.|1|condition passée, résultat présent.
f|If I ___ ___ (not / miss) the train, I'd be home now.|hadn't missed // had not missed|condition passée
f|If she ___ (be) more organised, she wouldn't have forgotten her passport.|were // was|trait permanent → prétérit
f|If we'd left earlier, we ___ ___ (not / be) stuck in traffic now.|wouldn't be // would not be|résultat présent
o|Si j'avais appris l'anglais plus tôt, je serais bilingue maintenant.|If I had learned English earlier, I would be fluent now.
o|Si j'étais plus courageux, je lui aurais parlé.|If I were braver, I would have spoken to her.
o|Si on avait réservé, on ne ferait pas la queue.|If we had booked, we wouldn't be queuing.
` },

{ id: "g33", icon: "🚦", level: "C1", title: "Conditions sans « if »", lesson: "p35",
  rule: [
    "**unless** = sauf si : We'll go **unless** it rains.",
    "**provided (that) / providing / as long as** = à condition que : You can borrow it **as long as** you give it back.",
    "**supposing / suppose / what if** = et si, imaginons : **Supposing** you lost your passport, what would you do?",
    "**otherwise** = sinon : Hurry up, **otherwise** we'll miss it. · **but for / without** + nom = sans : **But for** your help, we'd have been lost."
  ],
  table: [["Provided you book early, it's cheap.", "À condition de réserver tôt, c'est pas cher."], ["Suppose you won, what would you buy?", "Imagine que tu gagnes, tu achèterais quoi ?"], ["In case of fire, use the stairs.", "En cas d'incendie, utilisez les escaliers."], ["But for the rain, it would have been perfect.", "Sans la pluie, ça aurait été parfait."]],
  more: [
    "**in case** ≠ if : Take an umbrella **in case** it rains (par précaution) / Take an umbrella **if** it rains (seulement s'il pleut).",
    "Inversion soutenue sans if : **Should** you need help, call us. (= If you should need…) · **Were** I you, I'd accept. · **Had** I known, I'd have come.",
    "**even if** = même si (condition) / **even though** = même si (fait réel) : Even though it's raining, we're going."
  ],
  ex: `
m|We'll go to the beach ___ it rains.|if;unless;provided|1|sauf si → unless.
m|You can stay ___ you don't make noise.|unless;as long as;in case|1|à condition que.
m|Take some cash ___ the card doesn't work.|if;in case;unless|1|par précaution → in case.
m|___ your help, we would have got lost.|Unless;But for;Provided|1|sans + nom → but for.
m|Hurry up, ___ we'll miss the train.|unless;otherwise;provided|1|sinon → otherwise.
m|___ you need anything, just call reception. (très soutenu)|Should;Would;Had|0|inversion = if you should need.
m|___ I known, I would have come.|If;Had;Were|1|inversion = if I had known.
f|___ you lost your passport, what would you do? (imaginons)|supposing // suppose // what if|hypothèse
f|We'll go hiking ___ the weather is bad. (sauf si)|unless|sauf si
f|___ I you, I'd accept the offer. (soutenu)|were|inversion = if I were
o|À condition de réserver tôt, c'est pas cher.|Provided you book early, it's cheap.
o|Prends un parapluie au cas où il pleuvrait.|Take an umbrella in case it rains.
` },

{ id: "g34", icon: "🔄", level: "C1", title: "L'inversion pour insister", lesson: "p34",
  rule: [
    "En anglais soutenu ou pour un effet dramatique, après certains mots **négatifs ou restrictifs** placés en tête de phrase, on **inverse** sujet et auxiliaire (comme dans une question).",
    "**Never have I** seen such a view. (Jamais je n'ai vu une telle vue.) · **Rarely do** we get sunshine like this.",
    "**Not only did** he lose his bag, **but** he **also** missed the flight.",
    "**Hardly had** we arrived **when** it started raining. · **No sooner had** I sat down **than** the phone rang."
  ],
  table: [["Never have I been so tired.", "Jamais je n'ai été aussi fatigué."], ["Not only is it cheap, but it's also beautiful.", "Non seulement c'est pas cher, mais c'est aussi beau."], ["Under no circumstances should you open the door.", "En aucun cas vous ne devez ouvrir la porte."], ["Only then did I realise my mistake.", "Ce n'est qu'alors que j'ai compris mon erreur."]],
  more: [
    "Autres déclencheurs : **Seldom, Little** (Little did I know…), **At no time, Not until, Only when / Only after, On no account, Nowhere**.",
    "Au présent / prétérit simple, on ajoute **do / does / did** : Rarely **do** I eat meat. · Little **did** she know.",
    "C'est un registre écrit ou théâtral : à l'oral courant, on dit plutôt « I've never seen such a view »."
  ],
  ex: `
m|Never ___ such a beautiful beach.|I have seen;have I seen;I saw|1|never en tête → inversion.
m|Not only ___ late, but he also forgot the tickets.|he was;was he;he did be|1|not only → inversion.
m|Hardly ___ arrived when it started to rain.|we had;had we;did we|1|hardly had + sujet.
m|No sooner had I sat down ___ the phone rang.|when;than;that|1|no sooner… than.
m|Little ___ that the trip would change my life.|I knew;did I know;knew I|1|présent/prétérit simple → did.
m|Under no circumstances ___ leave your bag unattended.|you should;should you;you must|1|inversion avec le modal.
f|Rarely ___ I see such kindness. (présent)|do|présent simple → do
f|Only then ___ I understand what she meant. (passé)|did|prétérit → did
f|Not until I arrived ___ I realise my mistake.|did|not until → inversion
o|Jamais je n'ai été aussi fatigué.|Never have I been so tired.
o|Non seulement c'est pas cher, mais c'est beau.|Not only is it cheap, but it's beautiful.
o|À peine étions-nous arrivés qu'il s'est mis à pleuvoir.|Hardly had we arrived when it started to rain.
` },

{ id: "g35", icon: "🔦", level: "C1", title: "Les phrases clivées (mise en relief)", lesson: "p34",
  rule: [
    "Pour **mettre en valeur** une partie de la phrase, comme « C'est… qui / Ce que… c'est… » en français.",
    "**It is / was … that / who** : **It was** my brother **who** booked the hotel. (C'est mon frère qui a réservé.)",
    "**What … is / was** : **What I need is** a good night's sleep. (Ce dont j'ai besoin, c'est…)",
    "**All … is** : **All I want is** a coffee. (Tout ce que je veux, c'est un café.)"
  ],
  table: [["What I love about London is the parks.", "Ce que j'adore à Londres, ce sont les parcs."], ["It was in Dublin that we met.", "C'est à Dublin qu'on s'est rencontrés."], ["All you have to do is ask.", "Tu n'as qu'à demander."], ["The reason why I came is to learn.", "La raison pour laquelle je suis venu, c'est pour apprendre."]],
  more: [
    "Avec une action : **What happened was** (that) we missed the train. · **What we did was** (to) call a taxi.",
    "Autres formes : **The thing is**, … · **The place where** we stayed was… · **The person who** helped me was…",
    "Le verbe est au singulier après What… même avec un pluriel : What I need **is** new shoes."
  ],
  ex: `
m|___ I need is a long holiday.|That;What;Which|1|ce dont… → what.
m|It was my sister ___ found the hotel.|which;who;what|1|personne → who.
m|___ I want is to sleep.|All;Everything that;What all|0|tout ce que… → all.
m|It was in 2019 ___ we first met.|when;that;which|1|it was … that.
m|What I loved about the trip ___ the people.|were;was;are|1|what… → verbe au singulier.
m|« Ce qui s'est passé, c'est qu'on a raté le train. »|What happened was that we missed the train.;It happened that we missed the train.;That happened was we missed the train.|0|what happened was…
f|___ you have to do is ask. (tout ce que)|all|all … is
f|It ___ the noise that kept me awake. (passé)|was|it was … that
f|___ I don't understand is why he left. (ce que)|what|what … is
o|Ce que j'adore, c'est la mer.|What I love is the sea.
o|C'est à Dublin qu'on s'est rencontrés.|It was in Dublin that we met.
o|Tout ce que je veux, c'est dormir.|All I want is to sleep.
` },

{ id: "g36", icon: "🗞️", level: "C1", title: "Passif avancé : « It is said that… »", lesson: "p36",
  rule: [
    "Pour rapporter une opinion générale ou une rumeur (« on dit que »), typique des médias :",
    "**It is said / thought / believed / reported that** + phrase : **It is said that** the castle is haunted.",
    "Ou avec le sujet en tête : **The castle is said to be** haunted. (Le château serait hanté.)",
    "Pour le passé : He **is believed to have left** the country. (Il aurait quitté le pays.)"
  ],
  table: [["It is thought that 2 million people visit each year.", "On estime que 2 millions de personnes viennent chaque année."], ["She is said to be the best guide in town.", "Elle serait la meilleure guide de la ville."], ["The thieves are believed to have escaped by car.", "Les voleurs se seraient enfuis en voiture."], ["The hotel is reported to be closing.", "L'hôtel fermerait, selon certaines sources."]],
  more: [
    "Verbes courants : say, think, believe, expect, report, know, consider, claim, estimate, allege.",
    "Infinitif : **to be** (présent), **to be doing** (en cours : He is thought to be hiding), **to have done** (passé).",
    "C'est l'équivalent du conditionnel journalistique français : « Le suspect **se serait** enfui »."
  ],
  ex: `
m|It ___ that the museum will close next year.|says;is said;said|1|it is said that.
m|The castle is said ___ haunted.|being;to be;be|1|is said + to be.
m|He is believed ___ the country last week.|to leave;to have left;leaving|1|action passée → to have + participe.
m|« Le restaurant serait le meilleur de la ville. »|The restaurant would be the best in town.;The restaurant is said to be the best in town.;It says the restaurant is the best.|1|conditionnel journalistique.
m|The suspect is thought to be ___ in the mountains. (en ce moment)|hide;hiding;hidden|1|action en cours → to be + -ing.
m|It ___ that over a million people attended.|is estimated;estimates;is estimating|0|passif.
f|She is said ___ ___ (be) very rich.|to be|is said + to be
f|The thieves are believed to ___ ___ (escape) by boat.|have escaped|to have + participe
f|It ___ ___ (think) that prices will rise.|is thought|it is thought that
o|On dit que le château est hanté.|It is said that the castle is haunted.
o|Il aurait quitté le pays.|He is believed to have left the country.
o|Elle serait la meilleure guide de la ville.|She is said to be the best guide in town.
` },

{ id: "g37", icon: "✂️", level: "B2", title: "Faire faire : HAVE / GET something done", lesson: "p36",
  rule: [
    "Quand **quelqu'un d'autre** fait l'action pour toi : **have / get + objet + participe passé**.",
    "I **had my hair cut**. (Je me suis fait couper les cheveux.) · We need to **get the car repaired**.",
    "Aussi pour un événement subi (souvent négatif) : I **had my phone stolen**. (On m'a volé mon téléphone.)",
    "**get** est plus familier que **have**."
  ],
  table: [["I'm having my car serviced tomorrow.", "Je fais réviser ma voiture demain."], ["Where can I get my shoes repaired?", "Où puis-je faire réparer mes chaussures ?"], ["She had her bag stolen on the train.", "On lui a volé son sac dans le train."], ["You should get your eyes tested.", "Tu devrais faire contrôler ta vue."]],
  more: [
    "Ne pas confondre : I **cut my hair** (je me suis coupé les cheveux moi-même) / I **had my hair cut** (chez le coiffeur).",
    "**have someone do something** = demander à quelqu'un de faire : I'll **have the porter bring** your bags. · **get someone to do** : I **got him to help** me.",
    "Tous les temps sont possibles : I've just **had** my room cleaned · I'll **get** it fixed."
  ],
  ex: `
m|I need to ___ before the wedding.|cut my hair;have my hair cut;have cut my hair|1|have + objet + participe.
m|We ___ our car repaired yesterday.|had;did;made|0|have something done.
m|She had her wallet ___ on the bus.|steal;stole;stolen|2|participe passé.
m|« Je vais faire réparer mon téléphone. »|I'm going to repair my phone.;I'm going to get my phone repaired.;I'm going to get repaired my phone.|1|get + objet + participe.
m|I got my brother ___ me with the bags.|help;to help;helped|1|get someone to do.
m|The hotel will have the porter ___ your luggage.|bring;to bring;brought|0|have someone do.
f|Where can I get my shoes ___ (repair)?|repaired|participe passé
f|I've just ___ my room cleaned.|had // got|have / get
f|You should get your eyes ___ (test).|tested|participe passé
o|Je me suis fait couper les cheveux.|I had my hair cut.
o|On m'a volé mon téléphone.|I had my phone stolen.
o|Il faut faire réparer la voiture.|We need to get the car repaired.
` },

{ id: "g38", icon: "🧵", level: "C1", title: "Les propositions participiales", lesson: "p39",
  rule: [
    "Pour alléger une phrase, on remplace « quand / parce que / qui… + verbe » par un **participe**.",
    "**-ing** (actif, en même temps ou cause) : **Walking** along the beach, I found a shell. (En marchant…) · **Feeling** tired, she went to bed. (Comme elle était fatiguée…)",
    "**Having + participe** (action antérieure) : **Having finished** dinner, we went out. (Après avoir dîné…)",
    "**Participe passé** (sens passif) : **Built** in 1850, the bridge is still used. (Construit en 1850…)"
  ],
  table: [["Not knowing the way, we asked a local.", "Ne connaissant pas le chemin, on a demandé à un habitant."], ["Having lived in Sydney, he loves the sea.", "Ayant vécu à Sydney, il adore la mer."], ["Located in the centre, the hotel is very convenient.", "Situé dans le centre, l'hôtel est très pratique."], ["The man sitting next to me was French.", "L'homme assis à côté de moi était français."]],
  more: [
    "Le sujet du participe doit être le même que celui de la phrase principale : « **Walking** into the room, the lights went off » ✗ (ce ne sont pas les lumières qui marchent).",
    "Négation : **Not** having slept, I was exhausted.",
    "On trouve aussi des participes après **when, while, after, before, since** : **After visiting** the castle, we had lunch. · **While waiting**, I read."
  ],
  ex: `
m|___ the way, we asked a local.|Not knowing;Not known;Don't knowing|0|participe présent négatif.
m|___ dinner, we went for a walk.|Having finished;Finished;Have finished|0|action antérieure → having + participe.
m|___ in 1850, the bridge is still used today.|Building;Built;Having built|1|sens passif → participe passé.
m|The man ___ next to me was very friendly.|sat;sitting;sits|1|qui était assis → -ing.
m|___ tired, she went to bed early.|Feeling;Felt;Feel|0|cause → -ing.
m|Quelle phrase est correcte ?|Walking into the room, the lights went off.;Walking into the room, I turned off the lights.;Walked into the room, I turned off the lights.|1|même sujet obligatoire.
f|___ (live) in Sydney for a year, he speaks with an Aussie accent.|having lived|action antérieure
f|___ (locate) in the old town, the hotel is perfect.|located|sens passif
f|After ___ (visit) the museum, we had lunch.|visiting|préposition + -ing
o|N'ayant pas dormi, j'étais épuisé.|Not having slept, I was exhausted.
o|Après avoir fini, on est sortis.|Having finished, we went out.
o|Situé dans le centre, l'hôtel est très pratique.|Located in the centre, the hotel is very convenient.
` },

{ id: "g39", icon: "🌠", level: "C1", title: "WISH, IF ONLY, IT'S TIME, WOULD RATHER", lesson: "p35",
  rule: [
    "Ces expressions sont suivies d'un **passé** pour parler d'une situation **présente irréelle** :",
    "**I wish / If only** + prétérit : I wish I **had** more time. · **wish + would** pour se plaindre d'une habitude des autres : I wish you **would** stop talking!",
    "**It's (high / about) time** + prétérit : **It's time** we **left**. (Il est temps qu'on parte.)",
    "**I'd rather** + sujet + prétérit : **I'd rather** you **didn't** smoke here. (Je préférerais que tu ne fumes pas ici.)"
  ],
  table: [["If only I could speak Japanese!", "Si seulement je savais parler japonais !"], ["I wish it would stop raining.", "J'aimerais tellement qu'il arrête de pleuvoir."], ["It's high time you got a job.", "Il est grand temps que tu trouves un travail."], ["I'd rather we took the train.", "Je préférerais qu'on prenne le train."]],
  more: [
    "Regret sur le passé : wish / if only + **had + participe** : If only I **had listened**!",
    "**I'd rather** + verbe sans to quand le sujet est le même : I'd rather **stay** in. Avec un autre sujet : I'd rather **you stayed**.",
    "**wish + would** ne s'utilise pas avec « I » : on ne dit pas « I wish I would… »."
  ],
  ex: `
m|I wish I ___ more money.|have;had;would have|1|présent irréel → prétérit.
m|It's high time we ___.|leave;left;will leave|1|it's time + prétérit.
m|I'd rather you ___ smoke in the car.|don't;didn't;won't|1|I'd rather + sujet + prétérit.
m|I wish you ___ stop interrupting me!|will;would;did|1|plainte → wish + would.
m|If only I ___ to your advice! (passé)|listened;had listened;would listen|1|regret passé → had + participe.
m|I'd rather ___ at home tonight.|stay;to stay;stayed|0|même sujet → verbe base.
f|It's about time you ___ (start) studying.|started|it's time + prétérit
f|If only I ___ (can) speak Japanese.|could|prétérit de can
f|I'd rather we ___ (take) the train.|took|I'd rather + sujet + prétérit
o|Il est temps qu'on parte.|It's time we left.
o|Si seulement j'avais plus de temps.|If only I had more time.
o|Je préférerais que tu restes.|I'd rather you stayed.
` },

{ id: "g40", icon: "🕳️", level: "C1", title: "Modaux au passé : NEEDN'T HAVE, MIGHT AS WELL…", lesson: "p35",
  rule: [
    "**needn't have + participe** = on l'a fait, mais ce n'était pas nécessaire : You **needn't have brought** a gift! (Il ne fallait pas !)",
    "**didn't need to + verbe** = ce n'était pas nécessaire (souvent : donc on ne l'a pas fait) : I **didn't need to** pay, it was free.",
    "**should have / ought to have** = reproche ou regret · **could have** = possibilité non réalisée : You **could have** told me!",
    "**might as well** = autant (faire quelque chose) : The bus isn't coming. We **might as well** walk."
  ],
  table: [["We needn't have booked: the restaurant was empty.", "Ce n'était pas la peine de réserver : le resto était vide."], ["You could have called me!", "Tu aurais pu m'appeler !"], ["He must have been exhausted.", "Il a dû être épuisé."], ["We may as well go home.", "Autant rentrer."]],
  more: [
    "**was / were supposed to** = on était censé : We **were supposed to** meet at 8, but he never came.",
    "**would have liked to** = j'aurais aimé : I **would have liked to** stay longer.",
    "**can't have** = impossible (passé) : She **can't have** seen us, she didn't wave."
  ],
  ex: `
m|You ___ brought flowers! (mais tu l'as fait)|didn't need to;needn't have;mustn't have|1|fait mais inutile → needn't have.
m|I ___ pay: the museum was free. (je n'ai pas payé)|needn't have;didn't need to;couldn't|1|inutile, donc pas fait.
m|You ___ told me you were coming! (reproche)|could have;must have;can have|0|reproche → could have.
m|The bus isn't coming. We ___ walk.|might as well;should have;must|0|autant → might as well.
m|We ___ meet at 8, but he never came.|supposed to;were supposed to;should|1|on était censés.
m|I ___ stay longer, but I had to work.|would like to;would have liked to;liked to|1|regret → would have liked to.
f|We ___ ___ booked: the place was empty.|needn't have // need not have|inutile mais fait
f|You ___ ___ warned me! (tu aurais dû)|should have // ought to have|reproche
f|It's raining anyway, we ___ as well stay in.|might // may|autant
o|Il ne fallait pas apporter de cadeau !|You needn't have brought a gift!
o|Tu aurais pu m'appeler.|You could have called me.
o|Autant rentrer à pied.|We might as well walk home.
` },

{ id: "g41", icon: "🔗", level: "C1", title: "Relatives avancées : WHOM, WHICH, WHEREBY", lesson: "p39",
  rule: [
    "**whom** = qui (complément d'une personne), en anglais soutenu, surtout après une préposition : the person **to whom** I spoke. À l'oral : the person (who) I spoke **to**.",
    "**which** peut reprendre **toute une proposition** : He missed the flight, **which** meant we had to wait. (ce qui…)",
    "**preposition + which** (soutenu) : the hotel **in which** we stayed = the hotel (that) we stayed **in**.",
    "**whereby** = par lequel / selon lequel : a system **whereby** tourists pay a fee."
  ],
  table: [["The guide, whom I'd met before, was great.", "Le guide, que j'avais déjà rencontré, était super."], ["It rained all week, which ruined the trip.", "Il a plu toute la semaine, ce qui a gâché le voyage."], ["Most of whom / many of which", "dont la plupart / parmi lesquels beaucoup"], ["A scheme whereby students travel for free.", "Un dispositif grâce auquel les étudiants voyagent gratuitement."]],
  more: [
    "Quantifiant + **of whom / of which** : I met fifty people, **most of whom** were students. · We saw three castles, **one of which** was in ruins.",
    "**whose** marche aussi pour les choses : a city **whose** history fascinates me.",
    "Après une virgule (relative non essentielle), jamais de **that** : My brother, **who** lives in Lille, … (pas « that »)."
  ],
  ex: `
m|The woman ___ I spoke was very helpful. (soutenu)|to who;to whom;whom to|1|préposition + whom.
m|He forgot the tickets, ___ annoyed everyone.|that;which;what|1|reprend toute la proposition → which.
m|I met many travellers, most of ___ were German.|them;whom;who|1|quantifiant + of whom.
m|We visited three castles, one of ___ was in ruins.|which;them;that|0|chose → of which.
m|A system ___ customers pay online.|whereby;whom;whose|0|par lequel → whereby.
m|My brother, ___ lives in London, is visiting.|that;who;which|1|non essentielle → who (pas that).
f|The hotel in ___ we stayed was lovely.|which|préposition + which
f|It rained every day, ___ was disappointing.|which|reprend la proposition
f|A city ___ history fascinates me.|whose|possession
o|Il a plu toute la semaine, ce qui a gâché le voyage.|It rained all week, which ruined the trip.
o|J'ai rencontré dix étudiants, dont la plupart étaient anglais.|I met ten students, most of whom were English.
o|L'hôtel dans lequel on a logé était charmant.|The hotel in which we stayed was charming.
` },

{ id: "g42", icon: "📣", level: "B2", title: "Verbes introducteurs : suggest, accuse, deny…", lesson: "p25",
  rule: [
    "Au lieu de toujours dire « he said », on utilise des verbes plus précis. Chacun a sa **construction** :",
    "**+ to + verbe** : agree, offer, promise, refuse, threaten → He **refused to pay**.",
    "**+ quelqu'un + to + verbe** : advise, ask, encourage, invite, remind, warn, tell → She **advised me to book**.",
    "**+ -ing** : deny, admit, suggest, recommend → He **denied taking** it. · **+ préposition + -ing** : accuse sb **of**, apologise **for**, insist **on**, blame sb **for** → She **apologised for being** late."
  ],
  table: [["\"I'll help you.\" → He offered to help me.", "Il a proposé de m'aider."], ["\"Don't swim here.\" → She warned us not to swim.", "Elle nous a avertis de ne pas nager."], ["\"Let's take a taxi.\" → He suggested taking a taxi.", "Il a suggéré de prendre un taxi."], ["\"You stole it!\" → She accused him of stealing it.", "Elle l'a accusé de l'avoir volé."]],
  more: [
    "⚠️ **suggest** n'accepte jamais « to » : He suggested **going** / He suggested **that we go** (pas « suggested us to go »).",
    "**explain** n'a pas de complément direct de personne : He explained **to me** (pas « explained me »).",
    "**congratulate sb on**, **thank sb for**, **prevent sb from**, **object to + -ing**."
  ],
  ex: `
m|He refused ___ for the broken glass.|paying;to pay;pay|1|refuse + to.
m|She advised me ___ early.|booking;to book;book|1|advise sb + to.
m|He suggested ___ a taxi.|to take;taking;us to take|1|suggest + -ing.
m|The guard accused him ___ the bag.|to steal;of stealing;for stealing|1|accuse of + -ing.
m|She apologised ___ late.|to be;for being;of being|1|apologise for + -ing.
m|He denied ___ the money.|to take;taking;of taking|1|deny + -ing.
f|They warned us ___ ___ swim there. (de ne pas)|not to|warn sb not to
f|He insisted ___ paying for dinner.|on|insist on
f|She congratulated me ___ passing my exam.|on|congratulate on
o|Il a proposé de m'aider.|He offered to help me.
o|Elle m'a rappelé de fermer la porte.|She reminded me to lock the door.
o|Il a nié avoir pris l'argent.|He denied taking the money.
` },

{ id: "g43", icon: "🧮", level: "C1", title: "Articles et indénombrables : les pièges", lesson: "p39",
  rule: [
    "**Indénombrables** (pas de « a », pas de pluriel) : advice, information, news, luggage, furniture, equipment, accommodation, research, homework, progress, travel, work, weather, evidence.",
    "Pour compter : **a piece of** advice / information / furniture / luggage · **an item of** news.",
    "**the** pour les choses uniques ou connues (the sun, the government), les fleuves, mers, chaînes de montagnes (the Thames, the Alps), les pays au pluriel (the USA, the Netherlands).",
    "**Pas d'article** pour les généralités (Life is short), les repas (have lunch), la plupart des pays, villes, lacs et sommets (France, Lake Geneva, Mount Everest)."
  ],
  table: [["Can you give me some advice?", "Tu peux me donner des conseils ?"], ["The news is good.", "Les nouvelles sont bonnes (verbe au singulier)."], ["We found accommodation near the beach.", "On a trouvé un logement près de la plage."], ["She plays the piano / He plays football.", "Instruments : the · sports : rien."]],
  more: [
    "**travel** (le voyage en général, indénombrable) / **a trip / a journey** (un voyage précis).",
    "**work** (le travail) / **a job** (un poste) : I'm looking for work / for a job.",
    "Les institutions : go to **school / hospital / prison / church** (pour leur fonction, sans article) vs go to **the** school (le bâtiment, pour une autre raison)."
  ],
  ex: `
m|Can you give me ___?|an advice;some advice;some advices|1|advice est indénombrable.
m|The news ___ really good.|are;is;were|1|news → singulier.
m|We need to find ___ for tonight.|an accommodation;accommodation;accommodations|1|indénombrable (UK).
m|I've got two ___.|luggages;pieces of luggage;luggage|1|on compte avec pieces of.
m|We sailed down ___ Thames.|—;the;a|1|fleuves → the.
m|He's looking for ___.|a work;a job;job|1|un poste → a job.
f|She plays ___ guitar.|the|instrument → the
m|I'm going to have ___ lunch.|a;the;(rien)|2|repas → pas d'article.
f|Let me give you a ___ of advice.|piece|a piece of
o|Tu peux me donner des informations ?|Can you give me some information?
o|J'ai fait beaucoup de progrès.|I've made a lot of progress.
o|On a trouvé un logement près de la plage.|We found accommodation near the beach.
` },

{ id: "g44", icon: "📢", level: "C1", title: "Insister : DO emphatique, SO/SUCH, THE MORE… THE MORE", lesson: "p40",
  rule: [
    "**do / does / did + verbe** dans une phrase affirmative pour **insister** : I **do** like it, I promise! · She **did** call, but you were out.",
    "**so + adjectif / adverbe** · **such + (a) + adjectif + nom** : It was **so** hot. · It was **such a** hot day. · They're **such** nice people.",
    "**The + comparatif…, the + comparatif** : **The more** I travel, **the more** I want to travel. · **The sooner, the better.**",
    "**so… that / such… that** pour la conséquence : It was **so** cold **that** we stayed in."
  ],
  table: [["I do apologise for the delay.", "Je vous présente toutes mes excuses pour le retard."], ["It was such a beautiful day!", "C'était une si belle journée !"], ["The harder you practise, the easier it gets.", "Plus tu t'entraînes, plus c'est facile."], ["She speaks so fast that I can't follow.", "Elle parle si vite que je n'arrive pas à suivre."]],
  more: [
    "**such** + nom indénombrable ou pluriel sans « a » : such good weather, such friendly people.",
    "Autres intensifs : **at all** (not at all, nothing at all), **whatsoever** (no problem whatsoever), **the very** (the very best, at the very end).",
    "Impératif emphatique, très poli : **Do** come in! · **Do** help yourself!"
  ],
  ex: `
m|It was ___ hot day that we stayed inside.|so;such a;so a|1|such a + adj + nom.
m|They're ___ friendly people.|so;such;such a|1|such + pluriel.
m|The more I practise, ___ confident I feel.|more;the more;the most|1|the more…, the more.
m|I ___ like your idea, I promise!|do;am;does|0|do emphatique.
m|She ___ call you, but you didn't answer. (insistance, passé)|did;was;has|0|did emphatique.
m|The food was ___ good that we came back.|such;so;such a|1|so + adjectif.
f|___ sooner, the better.|the|the + comparatif
f|It was ___ a long journey!|such|such a
f|I ___ apologise for the delay. (très poli)|do|do emphatique
o|Plus je voyage, plus j'ai envie de voyager.|The more I travel, the more I want to travel.
o|C'était une si belle journée !|It was such a beautiful day!
o|Elle parle si vite que je ne comprends rien.|She speaks so fast that I can't understand anything.
` },

{ id: "g45", icon: "🪢", level: "C1", title: "Concession : although, despite, however, albeit", lesson: "p40",
  rule: [
    "**although / even though / though** + **phrase complète** : **Although** it rained, we went out.",
    "**despite / in spite of** + **nom ou -ing** : **Despite** the rain… · **Despite being** tired… (jamais « despite it rained »).",
    "**however / nevertheless / nonetheless** relient **deux phrases** : It was expensive. **However**, it was worth it.",
    "**whereas / while** opposent deux faits : I love the city, **whereas** my brother prefers the countryside. · **albeit** + adjectif / nom (soutenu) : a good trip, **albeit** a short one."
  ],
  table: [["Despite the fact that it was late, he called.", "Bien qu'il soit tard, il a appelé."], ["Although tired, she kept going.", "Bien que fatiguée, elle a continué."], ["Much as I love London, I couldn't live there.", "Même si j'adore Londres, je ne pourrais pas y vivre."], ["Strange as it may seem, I miss the rain.", "Aussi étrange que cela puisse paraître, la pluie me manque."]],
  more: [
    "**despite the fact that** + phrase permet de garder une phrase complète après despite.",
    "**though** à la fin d'une phrase, à l'oral = pourtant : It's expensive. It's good, **though**.",
    "Structures C1 : **Adjectif + as + sujet + verbe** (Tired as he was, he kept going) · **Much as** + phrase · **Be that as it may** (quoi qu'il en soit)."
  ],
  ex: `
m|___ the rain, we went for a walk.|Although;Despite;However|1|+ nom → despite.
m|___ it was late, we went out.|Despite;Although;In spite of|1|+ phrase → although.
m|It was expensive. ___, it was worth it.|Although;However;Despite|1|relie deux phrases → however.
m|Despite ___ tired, she finished the race.|she was;being;be|1|despite + -ing.
m|I like mountains, ___ my sister prefers the sea.|whereas;despite;however|0|opposition → whereas.
m|It was a lovely trip, ___ a short one.|albeit;although;despite|0|albeit + nom.
f|___ the fact that he was ill, he came. (malgré)|despite // in spite of|despite the fact that
f|Tired ___ he was, he kept walking.|as|adj + as + sujet
f|The hotel was nice. The food was awful, ___. (à la fin = pourtant)|though|though final
o|Malgré la pluie, on est sortis.|Despite the rain, we went out.
o|Même si j'adore Londres, je ne pourrais pas y vivre.|Much as I love London, I couldn't live there.
o|C'était cher. Cependant, ça valait le coup.|It was expensive. However, it was worth it.
` },

{ id: "g46", icon: "🪞", level: "B2", title: "Réponses courtes : SO DO I, I HOPE SO, NEITHER…", lesson: "p31",
  rule: [
    "Pour dire « moi aussi » : **So + auxiliaire + sujet** → \"I'm tired.\" \"**So am I**.\" · \"I love it.\" \"**So do I**.\" · \"I went.\" \"**So did I**.\"",
    "Pour dire « moi non plus » : **Neither / Nor + auxiliaire + sujet** → \"I can't swim.\" \"**Neither can I**.\"",
    "**I think so / I hope so / I'm afraid so** = je pense que oui · **I don't think so / I hope not / I'm afraid not** = je pense que non, j'espère que non…",
    "On reprend toujours l'auxiliaire de la phrase de départ (be, have, can, will…) ou do / does / did."
  ],
  table: [["\"I've never been to Spain.\" \"Neither have I.\"", "« Je ne suis jamais allé en Espagne. » « Moi non plus. »"], ["\"Will it rain?\" \"I hope not.\"", "« Il va pleuvoir ? » « J'espère que non. »"], ["\"Is the shop open?\" \"I'm afraid not.\"", "« Le magasin est ouvert ? » « Malheureusement non. »"], ["\"She can drive.\" \"So can I.\"", "« Elle sait conduire. » « Moi aussi. »"]],
  more: [
    "À l'oral familier : **Me too** / **Me neither** (plus simple, mais moins précis).",
    "Pour exprimer le contraire : \"I love opera.\" \"**I don't.**\" · \"I can't swim.\" \"**I can.**\"",
    "Substitution avec **one / ones** : I don't like the red bag, I prefer the blue **one**."
  ],
  ex: `
m|"I'm exhausted." "___"|So do I.;So am I.;Neither am I.|1|be → so am I.
m|"I love this city." "___"|So do I.;So am I.;Neither do I.|0|présent simple → so do I.
m|"I can't swim." "___"|So can I.;Neither can I.;Neither can't I.|1|négatif → neither can I.
m|"I've never tried haggis." "___"|Neither have I.;So have I.;Neither did I.|0|present perfect → neither have I.
m|"Will it rain tomorrow?" "I hope ___."|no;not;don't|1|I hope not.
m|"Is there a later train?" "I'm afraid ___." (malheureusement non)|no;not;none|1|I'm afraid not.
f|"I went to the concert." "So ___ I."|did|prétérit → did
f|"I don't like coffee." "___ do I." (moi non plus)|neither // nor|neither do I
f|I don't want the big room, I'll take the small ___.|one|substitution
o|« Moi aussi. » (en réponse à « I'm tired. »)|So am I.
o|J'espère que non.|I hope not.
o|« Moi non plus. » (en réponse à « I can't swim. »)|Neither can I.
` }
);
