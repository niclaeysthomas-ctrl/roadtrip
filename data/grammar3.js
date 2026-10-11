// Grammaire B1 → B2 (fiches 16 à 30). Même format que grammar1.js.
window.GRAMMAR = window.GRAMMAR || [];
window.GRAMMAR.push(
{ id: "g16", icon: "🌍", level: "B1", title: "Le present perfect (have + participe)", lesson: "p17",
  rule: [
    "Formation : **have / has + participe passé** → I **have visited**, she **has been**, we **have eaten**.",
    "On l'utilise pour une **expérience** sans date : **Have** you ever **been** to London? · I've **never tried** sushi.",
    "Pour une action passée avec un **résultat maintenant** : I've **lost** my keys (je ne les ai toujours pas).",
    "Avec **just** (venir de), **already** (déjà), **yet** (déjà ? / pas encore) : I've **just** arrived. · Have you eaten **yet**? · I haven't finished **yet**."
  ],
  table: [["I've been to Spain.", "Je suis déjà allé en Espagne."], ["Have you ever tried haggis?", "Tu as déjà goûté le haggis ?"], ["She's just left.", "Elle vient de partir."], ["I haven't booked yet.", "Je n'ai pas encore réservé."]],
  more: [
    "**been** vs **gone** : He's **been** to Paris (il y est allé et revenu) / He's **gone** to Paris (il y est, il n'est pas revenu).",
    "Participes irréguliers à connaître : been, done, gone, seen, eaten, taken, written, bought, made, had (voir la liste des verbes irréguliers).",
    "« C'est la première fois que… » → It's the first time I've **ever** + participe : It's the first time I've **eaten** haggis."
  ],
  ex: `
m|___ you ever been to Ireland?|Did;Have;Are|1|expérience sans date → have.
m|She ___ just arrived.|has;have;is|0|she → has.
m|I've ___ seen this film. (déjà)|yet;already;ever|1|déjà (affirmatif) → already.
m|Have you finished ___?|already;yet;just|1|en fin de question → yet.
m|He's not here, he's ___ to the shop.|been;gone;went|1|il y est encore → gone.
f|I've never ___ (eat) Indian food.|eaten|eat → eaten
f|We ___ (lose) our tickets! (on vient de les perdre)|have lost // 've lost|have + participe
f|It's the first time I've ___ (be) here.|been|be → been
o|Je viens de finir.|I've just finished.
o|Tu es déjà allé à New York ?|Have you ever been to New York?
` },

{ id: "g17", icon: "⚖️", level: "B1", title: "Present perfect ou prétérit ? FOR / SINCE", lesson: "p17",
  rule: [
    "**Prétérit** si on donne un **moment précis** (yesterday, last year, in 2019, two days ago, when I was a child) : I **went** to London **last year**.",
    "**Present perfect** si **pas de moment** précis, ou une période **pas terminée** (today, this week, ever, never) : I've **been** to London **twice**.",
    "« Depuis » = present perfect (pas le présent comme en français !) : I've **lived** here **for** three years. (J'habite ici depuis trois ans.)",
    "**for** + durée (for two hours, for a week) · **since** + point de départ (since Monday, since 2019, since I was a child)."
  ],
  table: [["I saw him yesterday.", "Je l'ai vu hier (moment précis)."], ["I've seen him today.", "Je l'ai vu aujourd'hui (journée pas finie)."], ["I've known her for ten years.", "Je la connais depuis dix ans."], ["We've been here since Monday.", "On est là depuis lundi."]],
  more: [
    "Erreur n°1 : « I live here since 2020 » ✗ → **I've lived here since 2020** ✓.",
    "Question sur la durée : **How long have you** lived here? (Depuis combien de temps… ?)",
    "Pour une action en cours qui dure, on préfère souvent le present perfect continu : I've **been waiting** for an hour."
  ],
  ex: `
m|I ___ to Dublin in 2022.|have been;went;have gone|1|date précise → prétérit.
m|I ___ in Lille since 2019.|live;have lived;lived|1|depuis → present perfect.
m|We've been here ___ three days.|since;for;during|1|durée → for.
m|She's worked here ___ January.|for;since;from|1|point de départ → since.
m|___ have you known him?|How much;How long;Since when do|1|durée → How long have you… ?
f|I ___ (see) him two days ago.|saw|ago → prétérit
f|We've had this car ___ 2015.|since|point de départ
f|How long ___ you been learning English?|have|present perfect
o|Je la connais depuis dix ans.|I've known her for ten years.
o|Je suis allé à Londres l'année dernière.|I went to London last year.
` },

{ id: "g18", icon: "🎬", level: "B1", title: "Le past continuous (was + -ING)", lesson: "p18",
  rule: [
    "Formation : **was / were + verbe-ing** → I **was sleeping**, they **were waiting**.",
    "Il décrit une action **en cours** dans le passé, le **décor** : At 8 p.m. I **was having** dinner.",
    "Avec le prétérit pour une action qui **interrompt** : I **was walking** home **when** it **started** to rain.",
    "**while** + past continuous : **While** I was sleeping, someone stole my bag."
  ],
  table: [["What were you doing?", "Qu'est-ce que tu faisais ?"], ["It was raining.", "Il pleuvait."], ["We were waiting when the bus arrived.", "On attendait quand le bus est arrivé."]],
  more: [
    "Comme pour le présent continu, pas de -ing avec know, like, want, need, understand : I **knew** him (pas « I was knowing »).",
    "Deux actions en parallèle : **While** I was cooking, my brother **was setting** the table.",
    "Le past continuous se traduit souvent par l'imparfait français (« je marchais »), le prétérit par le passé composé (« j'ai vu »)."
  ],
  ex: `
m|I ___ when the phone rang.|slept;was sleeping;am sleeping|1|action en cours interrompue.
m|What ___ you doing at 10 last night?|was;were;did|1|you → were.
m|While we ___ dinner, the lights went out.|had;were having;have|1|while + past continuous.
m|It ___ when we left the hotel.|rained;was raining;is raining|1|décor → past continuous.
m|Quelle phrase est correcte ?|I was knowing the answer.;I knew the answer.;I was know the answer.|1|know ne se met pas en -ing.
f|They ___ (wait) for us at the station.|were waiting|they → were + ing
f|I was driving when I ___ (see) the accident.|saw|action qui interrompt → prétérit
o|Il pleuvait quand on est arrivés.|It was raining when we arrived.
o|Qu'est-ce que tu faisais ?|What were you doing?
` },

{ id: "g19", icon: "🕰️", level: "B1", title: "USED TO, BE USED TO, GET USED TO", lesson: "p18",
  rule: [
    "**used to + verbe** = habitude passée, terminée (« avant, je… ») : I **used to live** in Paris. · I **used to smoke**.",
    "Négation / question avec **did** et **use** (sans d) : I **didn't use to** like coffee. · **Did** you **use to** play football?",
    "**be used to + -ing / nom** = être habitué à : I'm **used to driving** on the right.",
    "**get used to + -ing / nom** = s'habituer à : I'm **getting used to** the accent."
  ],
  table: [["I used to be shy.", "Avant, j'étais timide."], ["I'm not used to the cold.", "Je ne suis pas habitué au froid."], ["You'll get used to it.", "Tu vas t'y habituer."]],
  more: [
    "Piège : après **be / get used to**, le « to » est une préposition → verbe en **-ing** : I'm used to **getting** up early (pas « to get up »).",
    "Au présent, pour une habitude actuelle, on n'utilise PAS used to : I **usually** drink tea (pas « I use to drink »).",
    "**would** peut aussi exprimer une habitude passée (pour des actions répétées) : When I was a kid, we **would** go to the beach every Sunday."
  ],
  ex: `
m|I ___ live in Paris, but now I live in Lille.|use to;used to;am used to|1|habitude passée → used to.
m|I'm not used to ___ on the left.|drive;driving;drove|1|be used to + -ing.
m|Did you ___ play football?|used to;use to;using to|1|avec did → use to (sans d).
m|Don't worry, you'll get used ___ the food.|to;at;with|0|get used to + nom.
m|« D'habitude, je bois du thé. »|I use to drink tea.;I usually drink tea.;I'm used to drink tea.|1|habitude actuelle → usually.
f|I didn't ___ to like vegetables.|use|didn't + use (sans d)
f|She's getting used to ___ (work) at night.|working|get used to + -ing
o|Avant, j'étais timide.|I used to be shy.
o|Je ne suis pas habitué au froid.|I'm not used to the cold.
` },

{ id: "g20", icon: "🔀", level: "B1", title: "IF + présent : le 1er conditionnel", lesson: "p19",
  rule: [
    "Pour une situation **réelle / possible** dans le futur : **If + présent, will + verbe**.",
    "**If** it **rains**, we'**ll stay** at home. · **If** you **hurry**, you'**ll catch** the bus.",
    "⚠️ Jamais de **will** après **if** : « If it will rain » ✗.",
    "Même règle après **when, as soon as, unless, until, before, after** : I'll call you **when** I **arrive** (pas « when I will arrive »)."
  ],
  table: [["If I have time, I'll visit the museum.", "Si j'ai le temps, je visiterai le musée."], ["We'll go unless it rains.", "On ira sauf s'il pleut."], ["Call me as soon as you land.", "Appelle-moi dès que tu atterris."]],
  more: [
    "Conditionnel « zéro » (vérité générale) : **If + présent, présent** → If you heat water to 100°C, it **boils**.",
    "**unless** = if… not : Unless you book (= if you don't book), there won't be any seats.",
    "On peut inverser : We'll stay at home **if** it rains (pas de virgule dans ce cas)."
  ],
  ex: `
m|If it ___ tomorrow, we'll go to the museum.|will rain;rains;rained|1|if + présent.
m|If you hurry, you ___ the train.|catch;will catch;would catch|1|1er conditionnel → will.
m|I'll call you when I ___.|will arrive;arrive;arrived|1|when + présent.
m|We'll go to the beach ___ it rains.|if;unless;when|1|sauf si → unless.
m|Quelle phrase est correcte ?|If I will see him, I'll tell him.;If I see him, I'll tell him.;If I see him, I tell him tomorrow.|1|jamais will après if.
f|If you ___ (be) hungry, there's a café nearby.|are|if + présent
f|I won't leave ___ you arrive. (jusqu'à ce que)|until|until + présent
o|S'il pleut, on restera à la maison.|If it rains, we'll stay at home.
o|Je t'appellerai quand j'arriverai.|I'll call you when I arrive.
` },

{ id: "g21", icon: "💭", level: "B1", title: "IF + prétérit : le 2e conditionnel", lesson: "p19",
  rule: [
    "Pour une situation **imaginaire** ou peu probable : **If + prétérit, would + verbe**.",
    "**If** I **had** more money, I **would travel** more. (Mais je n'ai pas plus d'argent.)",
    "Pour donner un conseil : **If I were you**, I'**d** book now. (À ta place…)",
    "« Je voudrais / j'aimerais » = **I would like** (I'd like). « Ce serait » = **It would be**."
  ],
  table: [["If I won the lottery, I'd buy a house.", "Si je gagnais au loto, j'achèterais une maison."], ["If I were you, I'd go.", "À ta place, j'irais."], ["What would you do?", "Que ferais-tu ?"]],
  more: [
    "Avec **be**, on utilise **were** pour toutes les personnes (style soigné) : If I **were** rich… (« If I was » est courant à l'oral).",
    "**could** et **might** peuvent remplacer would : If I spoke better English, I **could** work abroad.",
    "1er ou 2e ? Ça dépend de ce que tu penses : If it **rains** (c'est possible) / If it **snowed** in July (c'est improbable)."
  ],
  ex: `
m|If I ___ more time, I would learn Japanese.|have;had;would have|1|imaginaire → if + prétérit.
m|If I were you, I ___ that hotel.|will book;would book;book|1|conseil → would.
m|What ___ you do if you lost your passport?|will;would;did|1|situation imaginaire → would.
m|If I ___ rich, I'd travel all year.|am;were;will be|1|if + were.
m|« Ce serait génial. »|It will be great.;It would be great.;It was great.|1|conditionnel → would.
f|If I ___ (speak) better English, I'd make more friends.|spoke|if + prétérit
f|I ___ like a coffee, please. (je voudrais)|would // 'd|would like
o|À ta place, je réserverais maintenant.|If I were you, I'd book now.
o|Que ferais-tu à ma place ?|What would you do if you were me?
` },

{ id: "g22", icon: "🏛️", level: "B1", title: "La voix passive", lesson: "p23",
  rule: [
    "Formation : **be (au bon temps) + participe passé**. On s'intéresse à l'action, pas à celui qui la fait.",
    "Présent : Breakfast **is served** at 8. · Passé : The castle **was built** in 1200. · Present perfect : My bag **has been stolen**. · Futur : The room **will be cleaned**.",
    "Pour dire **par qui** : **by** → The book was written **by** a French author.",
    "« On m'a dit » = **I was told**. « On parle anglais ici » = English **is spoken** here."
  ],
  table: [["English is spoken here.", "On parle anglais ici."], ["The flight was cancelled.", "Le vol a été annulé."], ["My phone has been stolen.", "On m'a volé mon téléphone."], ["I was told to wait.", "On m'a dit d'attendre."]],
  more: [
    "Avec un modal : **can / must / should + be + participe** → Tickets **can be bought** online.",
    "« Faire faire quelque chose » = **have / get something done** : I **had my hair cut**. · I need to **get my car repaired**.",
    "Le passif est très utilisé dans les panneaux, annonces et règlements : « Smoking is not allowed », « Passengers are requested to… »."
  ],
  ex: `
m|The castle ___ in the 12th century.|built;was built;has built|1|passif au passé.
m|English ___ here.|speaks;is spoken;is speaking|1|on parle → passif présent.
m|My wallet ___! (on vient de me le voler)|has been stolen;has stolen;is stealing|0|present perfect passif.
m|The room will ___ this afternoon.|clean;be cleaned;been cleaned|1|will be + participe.
m|« On m'a dit de patienter. »|I told to wait.;I was told to wait.;Someone told I wait.|1|on m'a dit → I was told.
f|Tickets can ___ bought online.|be|modal + be + participe
f|This film was directed ___ a French woman.|by|par → by
o|Le vol a été annulé.|The flight was cancelled.
o|Le petit-déjeuner est servi à huit heures.|Breakfast is served at eight.
` },

{ id: "g23", icon: "🔗", level: "B1", title: "WHO, WHICH, THAT, WHERE, WHOSE", lesson: "p27",
  rule: [
    "Pour relier deux phrases et préciser de qui ou de quoi on parle (pronoms relatifs).",
    "**who** = qui (personnes) : The man **who** helped me was very kind.",
    "**which** = qui / que (choses) : The hotel **which** we booked is near the beach.",
    "**that** remplace who ou which (à l'oral) · **where** = où (lieux) · **whose** = dont (possession) : The girl **whose** bag was stolen."
  ],
  table: [["the guy who works at the bar", "le gars qui travaille au bar"], ["the bus that goes to the beach", "le bus qui va à la plage"], ["the town where I grew up", "la ville où j'ai grandi"], ["the woman whose car broke down", "la femme dont la voiture est tombée en panne"]],
  more: [
    "Quand le pronom est **complément** (« que »), on peut le **supprimer** : The film (**that**) we saw was great. → The film we saw was great.",
    "Avec des virgules (info en plus, non essentielle), pas de **that** : My brother, **who** lives in London, is coming.",
    "La préposition va souvent à la fin : the hostel **(that)** I stayed **in** · the friend I travelled **with**."
  ],
  ex: `
m|The woman ___ helped us was really nice.|which;who;where|1|personne → who.
m|This is the restaurant ___ we had dinner.|which;where;who|1|lieu → where.
m|The bus ___ goes to the airport is the 42.|who;which;whose|1|chose → which (ou that).
m|That's the man ___ wallet was stolen.|who;whose;which|1|possession → whose.
m|Quelle phrase est correcte ?|The film who we saw was boring.;The film we saw was boring.;The film where we saw was boring.|1|pronom complément supprimable.
f|The city ___ I was born is small.|where|lieu
f|I've got a friend ___ speaks five languages.|who // that|personne sujet
o|C'est le gars qui travaille à la réception.|That's the guy who works at reception.
o|La ville où j'ai grandi est près de la mer.|The town where I grew up is near the sea.
` },

{ id: "g24", icon: "🧷", level: "B1", title: "Verbe + -ING ou verbe + TO ?", lesson: "p22",
  rule: [
    "Certains verbes sont suivis de **-ing** : **enjoy, avoid, mind, finish, suggest, keep, can't stand, look forward to** → I enjoy **travelling**. · Would you mind **opening** the window?",
    "D'autres sont suivis de **to + verbe** : **want, need, decide, hope, plan, promise, agree, refuse, manage, would like** → I decided **to stay**.",
    "Après une **préposition** (about, of, in, at, without, before, after…), toujours **-ing** : Thanks for **helping** me. · Before **leaving**, check the room.",
    "Avec **like, love, hate, start, begin**, les deux sont possibles : I like **swimming** / I like **to swim**."
  ],
  table: [["I enjoy meeting new people.", "J'aime rencontrer de nouvelles personnes."], ["We decided to rent a car.", "On a décidé de louer une voiture."], ["I'm looking forward to seeing you.", "J'ai hâte de te voir."], ["He left without paying.", "Il est parti sans payer."]],
  more: [
    "**stop** change de sens : I stopped **smoking** (j'ai arrêté de fumer) / I stopped **to smoke** (je me suis arrêté pour fumer).",
    "**remember / forget** aussi : Remember **to lock** the door (n'oublie pas de…) / I remember **locking** it (je me souviens de l'avoir fait).",
    "**try** : Try **to sleep** (fais un effort) / Try **drinking** some water (essaie, pour voir si ça marche)."
  ],
  ex: `
m|I enjoy ___ new places.|to visit;visiting;visit|1|enjoy + -ing.
m|We decided ___ another night.|staying;to stay;stay|1|decide + to.
m|Would you mind ___ the window?|to close;closing;close|1|mind + -ing.
m|I'm looking forward to ___ you.|see;seeing;to see|1|look forward to + -ing.
m|He left without ___.|pay;paying;to pay|1|préposition + -ing.
f|I need ___ (buy) a new charger.|to buy|need + to
f|Thanks for ___ (help) me.|helping|préposition + -ing
f|Remember ___ (lock) the door when you leave.|to lock|ne pas oublier de → to
o|J'ai hâte de te voir.|I'm looking forward to seeing you.
o|On a décidé de louer une voiture.|We decided to rent a car.
` },

{ id: "g25", icon: "⏪", level: "B2", title: "3e conditionnel, WISH et regrets", lesson: "p24",
  rule: [
    "Pour imaginer un **passé différent** : **If + had + participe, would have + participe**.",
    "**If** I **had known**, I **would have come**. (Si j'avais su, je serais venu.)",
    "**I wish + prétérit** = regret sur le présent : I wish I **had** more time. · **I wish + had + participe** = regret sur le passé : I wish I **had learned** English earlier.",
    "**should have + participe** = j'aurais dû : I **should have listened** to you. · **could have** = j'aurais pu."
  ],
  table: [["If we'd left earlier, we wouldn't have missed the train.", "Si on était partis plus tôt, on n'aurait pas raté le train."], ["I wish I were taller.", "J'aimerais être plus grand."], ["You should have told me!", "Tu aurais dû me le dire !"], ["We could have taken a taxi.", "On aurait pu prendre un taxi."]],
  more: [
    "À l'oral, tout se contracte : If I**'d** known, I**'d have** come (« I'd » = I had OU I would selon la place).",
    "Mélange des conditionnels : If I **had studied** more (passé), I **would speak** better now (présent).",
    "**If only…** = si seulement : If only I **had** a car! · If only I **hadn't** said that!"
  ],
  ex: `
m|If I ___ about the party, I would have come.|knew;had known;would know|1|passé imaginaire → had + participe.
m|If we had left earlier, we ___ the train.|wouldn't miss;wouldn't have missed;didn't miss|1|would have + participe.
m|I wish I ___ more time. (maintenant)|have;had;will have|1|regret présent → wish + prétérit.
m|You ___ me! (tu aurais dû me le dire)|should tell;should have told;must told|1|should have + participe.
m|I wish I ___ English earlier.|learned;had learned;have learned|1|regret passé → wish + had + participe.
f|We ___ have taken a taxi. (on aurait pu)|could|could have
f|If she ___ (not miss) the bus, she wouldn't have been late.|hadn't missed // had not missed|négation au plus-que-parfait
o|J'aurais dû t'écouter.|I should have listened to you.
o|Si j'avais su, je serais venu.|If I had known, I would have come.
` },

{ id: "g26", icon: "🗣️", level: "B2", title: "Le discours rapporté", lesson: "p25",
  rule: [
    "Pour rapporter ce que quelqu'un a dit, on **recule d'un temps** : présent → prétérit, prétérit / present perfect → plus-que-parfait, will → would, can → could.",
    "« I'**m** tired. » → He said (that) he **was** tired. · « I **will** call you. » → She said she **would** call me.",
    "**say** + (that) : He **said** he was late. · **tell** + quelqu'un : He **told me** he was late (pas « he said me »).",
    "Questions rapportées : ordre **sujet + verbe**, sans do : « Where **is** the station? » → He asked me where the station **was**. · « Do you speak English? » → She asked **if** I spoke English."
  ],
  table: [["\"I'm lost.\" → He said he was lost.", "Il a dit qu'il était perdu."], ["\"I'll help you.\" → She said she'd help me.", "Elle a dit qu'elle m'aiderait."], ["\"Are you French?\" → He asked if I was French.", "Il m'a demandé si j'étais français."], ["\"Don't worry!\" → They told us not to worry.", "Ils nous ont dit de ne pas nous inquiéter."]],
  more: [
    "Les repères changent aussi : today → that day, tomorrow → the next day, here → there, now → then.",
    "Ordres : **tell / ask someone (not) to + verbe** → He told me **to wait**. · She asked me **not to smoke**.",
    "Même logique dans les questions indirectes polies : Do you know where the station **is**? (pas « where is the station »)."
  ],
  ex: `
m|« I'm tired. » → He said he ___ tired.|is;was;has been|1|présent → prétérit.
m|« I will call you. » → She said she ___ me.|will call;would call;called|1|will → would.
m|He ___ me he was French.|said;told;asked|1|tell + quelqu'un.
m|« Where is the bank? » → She asked me where the bank ___.|is;was;was it|1|ordre sujet + verbe, temps reculé.
m|Do you know what time ___?|does the shop close;the shop closes;closes the shop|1|question indirecte → sujet + verbe.
f|« Don't touch it! » → He told me ___ to touch it.|not|tell + not to
f|« Do you speak English? » → He asked ___ I spoke English.|if // whether|question oui/non → if
o|Il m'a dit qu'il était perdu.|He told me he was lost.
o|Elle m'a demandé si j'étais français.|She asked me if I was French.
` },

{ id: "g27", icon: "🔍", level: "B2", title: "Déductions : MUST, CAN'T, MIGHT", lesson: "p26",
  rule: [
    "Pour dire à quel point on est **sûr** de quelque chose.",
    "**must** = sûrement, c'est presque certain : He's been travelling all day, he **must be** tired.",
    "**can't** = impossible : That **can't be** Tom, he's in Australia.",
    "**might / may / could** = peut-être : She **might be** at the hotel. · It **may rain** later."
  ],
  table: [["She must be French.", "Elle est sûrement française."], ["It can't be true.", "Ce n'est pas possible."], ["He might be late.", "Il sera peut-être en retard."], ["They must have left.", "Ils ont dû partir."], ["She can't have seen us.", "Elle n'a pas pu nous voir."]],
  more: [
    "Au passé : **must / can't / might + have + participe** → You **must have been** scared! · He **might have missed** the bus.",
    "⚠️ Le contraire de « must » (déduction) est **can't**, pas « mustn't » (qui veut dire « interdit »).",
    "**should** peut aussi exprimer une probabilité : The bus **should** arrive in five minutes (normalement)."
  ],
  ex: `
m|He's been working all day. He ___ be exhausted.|can't;must;might not|1|presque certain → must.
m|That ___ be Sam. Sam is in London today.|must;can't;mustn't|1|impossible → can't.
m|I'm not sure where she is. She ___ be at the beach.|must;might;can't|1|peut-être → might.
m|She isn't here yet. She must ___ the train.|miss;have missed;missed|1|déduction passée → must have + participe.
m|Le contraire de « He must be rich » (déduction) :|He mustn't be rich.;He can't be rich.;He doesn't must be rich.|1|contraire → can't.
f|You ___ have been scared! (tu as dû avoir peur)|must|déduction passée
f|They might ___ (leave) already.|have left|might have + participe
o|Ça ne peut pas être vrai.|That can't be true.
o|Elle a dû rater son train.|She must have missed her train.
` },

{ id: "g28", icon: "🧩", level: "B1", title: "Comprendre les phrasal verbs", lesson: "p21",
  rule: [
    "Un phrasal verb = **verbe + particule** (up, out, off, on, down, back…). Le sens change souvent complètement : **give** (donner) → **give up** (abandonner).",
    "La particule donne souvent une idée : **up** = complètement / vers le haut (fill **up**, eat **up**), **out** = vers l'extérieur / jusqu'au bout (find **out**, run **out**), **off** = départ / arrêt (set **off**, turn **off**), **back** = retour (come **back**, call **back**).",
    "Séparables : on peut mettre l'objet au milieu → Turn **the music** down / Turn down **the music**. Avec un **pronom**, il va obligatoirement au milieu : Turn **it** down (pas « turn down it »)."
  ],
  table: [["pick up → Pick me up at 8.", "venir chercher"], ["find out → I found out the truth.", "découvrir"], ["run out of → We ran out of water.", "ne plus avoir de"], ["look forward to → I'm looking forward to it.", "avoir hâte"]],
  more: [
    "Non séparables : **look after** the kids → look after **them** (le pronom va après).",
    "À trois éléments : run out **of**, look forward **to**, get on **with**, put up **with** → jamais séparés.",
    "Conseil : apprends-les dans une phrase entière (les cartes B1 / B2 en contiennent plus de 100)."
  ],
  ex: `
m|I ___ smoking last year. (j'ai arrêté)|gave up;gave in;gave back|0|give up = arrêter, abandonner.
m|We've run ___ milk.|out;out of;off|1|run out of + nom.
m|The music is too loud. Can you turn ___?|down it;it down;it off down|1|pronom au milieu.
m|Can you ___ my bag while I go to the toilet?|look for;look after;look up|1|surveiller → look after.
m|We ___ early to avoid the traffic. (on est partis)|set off;set up;set out of|0|partir en voyage → set off.
f|I'll ___ you up at the station. (venir chercher)|pick|pick up
f|Let's find ___ what time the museum opens.|out|find out
o|On n'a plus d'eau.|We've run out of water.
o|Je viendrai te chercher à l'aéroport.|I'll pick you up at the airport.
` },

{ id: "g29", icon: "🏷️", level: "B2", title: "Les question tags (n'est-ce pas ?)", lesson: "p14",
  rule: [
    "Petite question en fin de phrase pour demander confirmation ou relancer la conversation : It's beautiful, **isn't it**?",
    "Phrase **affirmative** → tag **négatif** : You're French, **aren't you**? · Phrase **négative** → tag **positif** : You don't like coffee, **do you**?",
    "On reprend l'**auxiliaire** de la phrase (be, have, can, will…) ou **do / does / did** s'il n'y en a pas : She lives here, **doesn't she**? · You went out, **didn't you**?",
    "Très utilisé dans le small talk britannique : Lovely day, **isn't it**?"
  ],
  table: [["It's cold, isn't it?", "Il fait froid, hein ?"], ["You can swim, can't you?", "Tu sais nager, non ?"], ["He didn't call, did he?", "Il n'a pas appelé, si ?"], ["Let's go, shall we?", "On y va ?"]],
  more: [
    "Exceptions : **I am** → **aren't I**? (I'm right, aren't I?) · **Let's** → **shall we**? · Impératif → **will you**? (Close the door, will you?)",
    "Intonation descendante = on attend juste une confirmation ; montante = vraie question.",
    "L'équivalent oral facile : « …, right? » (You're coming, **right**?)."
  ],
  ex: `
m|It's a nice day, ___?|is it;isn't it;doesn't it|1|affirmatif → tag négatif avec be.
m|You don't speak Spanish, ___?|don't you;do you;aren't you|1|négatif → tag positif.
m|She lives in London, ___?|isn't she;doesn't she;don't she|1|présent simple → does.
m|They went to the concert, ___?|didn't they;weren't they;don't they|0|prétérit → did.
m|I'm late, ___?|amn't I;aren't I;isn't I|1|exception → aren't I.
f|You can drive, ___ you?|can't // cannot|reprise de can
f|Let's go, ___ we?|shall|let's → shall we
o|Il fait froid, n'est-ce pas ?|It's cold, isn't it?
o|Tu n'as pas faim, si ?|You're not hungry, are you?
` },

{ id: "g30", icon: "⏱️", level: "B2", title: "Present perfect continu (have been + -ING)", lesson: "p17",
  rule: [
    "Formation : **have / has been + verbe-ing** → I've **been waiting**, she's **been working**.",
    "Pour une action qui a **commencé dans le passé et continue** (on insiste sur la durée) : I've **been learning** English **for** two years.",
    "Pour une action récente dont on voit **le résultat** : You're wet! Have you **been swimming**?",
    "« Ça fait une heure que j'attends » = I've **been waiting for** an hour."
  ],
  table: [["How long have you been waiting?", "Ça fait combien de temps que tu attends ?"], ["It's been raining all day.", "Il pleut depuis ce matin."], ["I've been travelling for three weeks.", "Je voyage depuis trois semaines."]],
  more: [
    "Simple vs continu : I've **read** the book (fini, résultat) / I've **been reading** the book (en cours, la durée compte).",
    "Avec un nombre / une quantité, on utilise le simple : I've **visited** five countries (pas « been visiting »).",
    "Les verbes d'état (know, like, want, be) restent au simple : I've **known** him for years."
  ],
  ex: `
m|I've ___ for the bus for forty minutes!|waited;been waiting;waiting|1|durée qui continue → been + -ing.
m|How long ___ learning English?|are you;have you been;did you|1|have you been + -ing.
m|You look tired. ___ working all day?|Have you been;Did you;Are you|0|résultat visible.
m|I've ___ three museums today.|been visiting;visited;visiting|1|avec un nombre → simple.
m|I've ___ him for ten years.|been knowing;known;knew|1|know → simple.
f|It's ___ raining since this morning.|been|has been + -ing
f|She's been ___ (work) here for six months.|working|been + -ing
o|Ça fait une heure que j'attends.|I've been waiting for an hour.
o|J'apprends l'anglais depuis deux ans.|I've been learning English for two years.
` }
);
