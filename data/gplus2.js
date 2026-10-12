// Compléments de grammaire (fiches g13 à g24). Même format que gplus1.js.
window.GPLUS = window.GPLUS || {};
Object.assign(window.GPLUS, {
g13: { memo: "Action terminée à un moment précis du passé → prétérit (-ed ou forme irrégulière). Question et négation avec did + base.",
  formula: ["Affirmatif : verbe**-ed** (visited) ou forme irrégulière (went, saw, ate)", "Négation : **didn't + base** → I didn't go", "Question : **Did + sujet + base** ? → Did you see it?"],
  mistakes: [["I didn't went.", "I didn't go.", "Après didn't → base."], ["Did you saw it?", "Did you see it?", "Après did → base."], ["Yesterday I have visited the castle.", "Yesterday I visited the castle.", "Moment précis → prétérit, pas present perfect."], ["I goed to London.", "I went to London.", "go est irrégulier."]],
  ex: `
e|I didn't went to work yesterday.|went|go|didn't + base.
e|Did you saw the castle?|saw|see|did + base.
e|Last summer we have visited Spain.|have visited|visited|Moment précis → prétérit.
e|She buyed a new jacket.|buyed|bought|buy → bought.
e|We eated in a small restaurant.|eated|ate|eat → ate.
e|He catched the last train.|catched|caught|catch → caught.
t|Mets au passé.|I take the bus.|I took the bus.
t|Mets au passé.|She doesn't understand.|She didn't understand.
t|Mets au passé.|We spend a week in Rome.|We spent a week in Rome.
t|Pose la question au passé.|You liked the film.|Did you like the film?
t|Mets à la forme négative.|They found the hotel.|They didn't find the hotel. // They did not find the hotel.
t|Mets au passé.|He forgets his keys.|He forgot his keys.
tr|J'ai perdu mon portefeuille hier.|I lost my wallet yesterday.
tr|On a mangé du poisson au déjeuner.|We had fish for lunch. // We ate fish for lunch.
tr|Tu as aimé le concert ?|Did you like the concert? // Did you enjoy the concert?
tr|Il n'a rien dit.|He didn't say anything. // He said nothing.
tr|Elle m'a envoyé un message ce matin.|She sent me a message this morning. // She texted me this morning.
tr|On s'est rencontrés il y a deux ans.|We met two years ago.
f|We ___ (choose) the cheapest room.|chose|choose → chose
f|I ___ (think) it was closed.|thought|think → thought
f|She ___ (stop) the car.|stopped|consonne doublée
m|« J'ai vécu à Paris de 2015 à 2018. » (c'est fini)|I lived in Paris from 2015 to 2018.;I have lived in Paris from 2015 to 2018.;I was living in Paris from 2015 to 2018.|0|période terminée → prétérit.
m|Prononciation de « walked » :|walk-ID;walkt;walk-ED|1|après k → « t ».
` },

g14: { memo: "at = point précis (heure, adresse), on = jour / surface, in = mois, année, ville, à l'intérieur.",
  formula: ["Temps : **at** 8 o'clock · **on** Monday / on July 4th · **in** May / in 2025 / in the morning", "Lieu : **at** the station / at home · **on** the table / on the bus · **in** London / in the car", "Pas de préposition devant next, last, this, every, today, tomorrow"],
  mistakes: [["in Monday", "on Monday", "Jour → on."], ["at the morning", "in the morning", "Partie de la journée → in (mais at night)."], ["I'm going in next week.", "I'm going next week.", "Pas de préposition devant next."], ["I'm in the bus.", "I'm on the bus.", "Bus, train, avion → on."]],
  ex: `
e|See you in Monday!|in|on|Jour → on.
e|We arrived at the morning.|at|in|in the morning.
e|She was born on 1998.|on|in|Année → in.
e|I'll see you in next week.|in|—|Pas de préposition devant next.
e|She left her phone at the bus.|at|on|Dans un bus, un train, un avion = **on** the bus / on the train.
e|They live at Paris.|at|in|Ville → in.
e|I'll call you on 6 o'clock.|on|at|Heure → at.
tr|Le train part à 10 h 30.|The train leaves at 10:30. // The train leaves at half past ten.
tr|On part en vacances en juillet.|We're going on holiday in July. // We go on holiday in July. // We're going on vacation in July.
tr|Mon anniversaire est le 3 mai.|My birthday is on the third of May. // My birthday is on May third. // My birthday is on May 3rd.
tr|Je suis dans le train.|I'm on the train. // I am on the train.
tr|Retrouvons-nous à la gare.|Let's meet at the station.
tr|Il travaille la nuit.|He works at night.
tr|Je suis à la maison ce week-end.|I'm at home this weekend. // I am at home this weekend.
f|The keys are ___ the table.|on|surface
f|There's a café ___ the corner of the street.|on // at|au coin de la rue
f|Is there a bathroom ___ the plane?|on|avion
f|I'll finish it ___ the weekend. (UK)|at|UK : at the weekend
m|« Dans dix minutes »|in ten minutes;after ten minutes;on ten minutes|0|dans + durée = in.
m|« Je vais chez moi. »|I go to home.;I go home.;I go at home.|1|go home sans préposition.
m|« Elle est à l'hôpital (malade). »|She's at the hospital.;She's in hospital.;She's on hospital.|1|UK : in hospital.
` },

g15: { memo: "Mot court → -er / the -est. Mot long → more / the most. good → better → the best.",
  formula: ["Court : cheap → cheap**er than** → **the** cheap**est**", "Long : expensive → **more** expensive **than** → **the most** expensive", "Irréguliers : good / better / best · bad / worse / worst · far / further / furthest · Égalité : **as … as**"],
  mistakes: [["more cheap", "cheaper", "Mot court → -er."], ["more better", "better", "Jamais more + -er."], ["bigger that", "bigger than", "que = than."], ["the most good", "the best", "good est irrégulier."]],
  ex: `
e|This hotel is more cheap than the other.|more cheap|cheaper|Mot court → -er.
e|London is more big than Lille.|more big|bigger|big → bigger.
e|It's the most good pizza in town.|most good|best|good → the best.
e|My English is more better now.|more better|better|Jamais more + -er.
e|The train is faster that the bus.|that|than|que = than.
e|It's as expensive than Paris.|than|as|as … as.
t|Fais une comparaison avec « than ».|The train is fast. The bus is slow. (train)|The train is faster than the bus.
t|Mets au superlatif.|It's a beautiful beach. (in the world)|It's the most beautiful beach in the world.
t|Exprime l'égalité.|Rome is big. Madrid is big too.|Rome is as big as Madrid.
t|Exprime le contraire avec « not as … as ».|London is more expensive than Lille.|Lille is not as expensive as London. // Lille isn't as expensive as London.
tr|C'est le pire hôtel de la ville.|It's the worst hotel in town. // It's the worst hotel in the city.
tr|Ton anglais est meilleur que le mien.|Your English is better than mine.
tr|Le métro est plus rapide que le taxi.|The underground is faster than a taxi. // The subway is faster than the taxi. // The metro is faster than the taxi.
tr|C'est moins cher en ligne.|It's cheaper online. // It's less expensive online.
tr|Plus tu pratiques, plus c'est facile.|The more you practise, the easier it gets. // The more you practice, the easier it gets.
tr|Elle est aussi grande que son frère.|She's as tall as her brother. // She is as tall as her brother.
f|This is the ___ (hot) day of the year.|hottest|consonne doublée
f|The second test was ___ (easy) than the first.|easier|y → ier
f|Which is the ___ (far) city from here?|furthest // farthest|irrégulier
m|« De plus en plus cher »|more and more expensive;more expensive and more;the more expensive|0|more and more.
m|« Le plus intéressant de tous »|the more interesting of all;the most interesting of all;the interestingest|1|long → the most.
` },

g16: { memo: "have / has + participe passé : une expérience sans date, ou un passé qui a un effet maintenant.",
  formula: ["**have / has + participe passé** → I've seen, she's been", "Avec **ever** (déjà ?), **never**, **just** (venir de), **already**, **yet** (déjà / pas encore)", "Dès qu'il y a une date précise (yesterday, in 2020) → prétérit"],
  mistakes: [["I have seen him yesterday.", "I saw him yesterday.", "Date précise → prétérit."], ["Have you ever went to Spain?", "Have you ever been to Spain?", "Participe passé : been."], ["She has finish.", "She has finished.", "have + participe."], ["I didn't finish yet.", "I haven't finished yet.", "yet → present perfect."]],
  ex: `
e|I have visited London last year.|have visited|visited|last year → prétérit.
e|Have you ever went to Ireland?|went|been|Participe passé de go (expérience) : been.
e|She has eat sushi before.|eat|eaten|have + participe.
e|I didn't finish my work yet.|didn't finish|haven't finished|yet → present perfect.
e|He's just arrive.|arrive|arrived|has + participe.
e|We have already saw this film.|saw|seen|see → seen.
t|Mets au present perfect.|I lose my keys.|I've lost my keys. // I have lost my keys.
t|Pose la question avec « ever ».|You eat haggis.|Have you ever eaten haggis?
t|Mets à la forme négative avec « yet ».|They have booked the hotel.|They haven't booked the hotel yet. // They have not booked the hotel yet.
t|Ajoute « just ».|She has left.|She has just left. // She's just left.
tr|Je ne suis jamais allé aux États-Unis.|I've never been to the United States. // I have never been to the USA. // I've never been to the US.
tr|Tu as déjà mangé ?|Have you eaten yet? // Have you already eaten?
tr|Il vient de partir.|He's just left. // He has just left.
tr|J'ai oublié mon mot de passe.|I've forgotten my password. // I have forgotten my password. // I forgot my password.
tr|On a déjà visité ce musée.|We've already visited this museum. // We have already visited this museum.
tr|C'est la meilleure pizza que j'aie jamais mangée.|It's the best pizza I've ever eaten. // It's the best pizza I've ever had.
f|Have you ___ (write) to your parents?|written|irrégulier
f|She's ___ (be) to Japan three times.|been|be → been
f|I've ___ (know) him for years.|known|know → known
m|« Il est allé à Londres (il y est encore). »|He's been to London.;He's gone to London.;He went to London.|1|gone = parti, pas revenu.
m|« Combien de pays as-tu visités ? »|How many countries did you visit?;How many countries have you visited?;How many countries you visited?|1|expérience globale → present perfect.
` },

g17: { memo: "Le français dit « j'habite ici depuis 3 ans » au présent. L'anglais : I've lived here for 3 years.",
  formula: ["**for** + durée (for two hours, for ages)", "**since** + point de départ (since Monday, since 2019, since I was a child)", "« depuis » = **present perfect (simple ou continu)**, jamais le présent simple"],
  mistakes: [["I live here since 2020.", "I've lived here since 2020.", "Depuis → present perfect."], ["I've been here since three days.", "I've been here for three days.", "Durée → for."], ["I know him for years.", "I've known him for years.", "know ne se met pas en -ing, mais au present perfect."], ["Since how long are you here?", "How long have you been here?", "Depuis combien de temps → How long have you…?"]],
  ex: `
e|I live in Lille since 2019.|live|have lived|Depuis → present perfect.
e|We've been here since three days.|since|for|Durée → for.
e|I know her for ten years.|know|have known|Depuis → present perfect.
e|She's worked here for January.|for|since|Point de départ → since.
e|Since how long do you study English?|Since how long do you study|How long have you been studying|How long have you been studying English?
e|I haven't seen him since two weeks.|since|for|Durée → for.
t|Réécris avec « for ».|I moved here three years ago. I still live here.|I've lived here for three years. // I have lived here for three years. // I've been living here for three years.
t|Réécris avec « since ».|I started learning English in 2020. I'm still learning.|I've been learning English since 2020. // I have been learning English since 2020. // I've learned English since 2020.
t|Pose la question avec « How long ».|You live in this flat.|How long have you lived in this flat? // How long have you been living in this flat?
tr|Je la connais depuis l'école.|I've known her since school. // I have known her since school.
tr|Ça fait une heure qu'on attend.|We've been waiting for an hour. // We have been waiting for an hour.
tr|Depuis combien de temps tu travailles ici ?|How long have you been working here? // How long have you worked here?
tr|Je n'ai pas vu mes parents depuis Noël.|I haven't seen my parents since Christmas.
tr|Il habite à Londres depuis cinq ans.|He's lived in London for five years. // He has lived in London for five years. // He's been living in London for five years.
tr|Il est parti il y a deux heures.|He left two hours ago.
f|It's been raining ___ this morning.|since|point de départ
f|I haven't eaten ___ hours.|for|durée
f|We ___ (be) friends since we were kids.|have been // 've been|depuis → present perfect
m|« J'ai fini il y a cinq minutes. »|I've finished five minutes ago.;I finished five minutes ago.;I finish since five minutes.|1|ago → prétérit.
m|« C'est la première fois que je viens ici. »|It's the first time I come here.;It's the first time I've come here.;It's the first time I came here.|1|the first time + present perfect.
` },

g18: { memo: "Past continuous = le décor (« je marchais »), prétérit = l'événement (« j'ai vu »).",
  formula: ["**was / were + verbe-ing** → I was walking", "**when + prétérit** interrompt : I was walking **when** I **saw** him", "**while + past continuous** : **While** I was sleeping, …"],
  mistakes: [["I was walk home.", "I was walking home.", "was + -ing."], ["When I was arriving, he left.", "When I arrived, he was leaving.", "L'action courte = prétérit."], ["I was knowing the answer.", "I knew the answer.", "know ne se met pas en -ing."], ["They was waiting.", "They were waiting.", "they → were."]],
  ex: `
e|I was walk to the station when it started to rain.|walk|walking|was + -ing.
e|They was waiting for us.|was|were|they → were.
e|While I slept, someone was stealing my bag.|slept|was sleeping|while + past continuous (décor).
e|I was knowing her name.|was knowing|knew|know : pas de -ing.
e|What did you do at 8 last night? (en cours)|did you do|were you doing|Action en cours → past continuous.
e|When the phone was ringing, I answered it.|was ringing|rang|Action courte → prétérit.
t|Mets au past continuous.|I read a book.|I was reading a book.
t|Relie avec « when ».|I was cooking. The lights went out.|I was cooking when the lights went out.
t|Relie avec « while ».|We were driving. It started to snow.|While we were driving, it started to snow.
t|Pose la question.|She was sleeping.|Was she sleeping?
tr|Il pleuvait quand on est sortis.|It was raining when we went out. // It was raining when we left.
tr|Qu'est-ce que tu faisais à minuit ?|What were you doing at midnight?
tr|Je regardais un film quand tu as appelé.|I was watching a film when you called. // I was watching a movie when you called.
tr|Pendant qu'il conduisait, je dormais.|While he was driving, I was sleeping. // While he was driving, I was asleep.
tr|Le soleil brillait et les oiseaux chantaient.|The sun was shining and the birds were singing.
tr|On attendait depuis une heure quand le bus est arrivé.|We had been waiting for an hour when the bus arrived.
f|I ___ (have) a shower when you texted me.|was having|action en cours
f|They ___ (not / listen) when I explained.|weren't listening // were not listening|négation
m|« Je marchais dans la rue et j'ai vu Tom. »|I walked down the street and I was seeing Tom.;I was walking down the street and I saw Tom.;I was walking down the street and I was seeing Tom.|1|décor + action.
m|Quelle phrase est correcte ?|While I was in Rome, I visited the Colosseum.;While I visited Rome, I was visiting the Colosseum.;While I was visiting Rome, I was visit the Colosseum.|0|while + was + prétérit OK.
e|I was cooking when you were calling.|were calling|called|L'action courte qui interrompt → prétérit simple : when you **called**.
t|Mets au past continuous.|I read a book.|I was reading a book.
tr|Il neigeait quand on est arrivés.|It was snowing when we arrived.
` },

g19: { memo: "used to + verbe = « avant, je… » (c'est fini). be used to + -ing = « avoir l'habitude de ».",
  formula: ["**used to + verbe** : habitude passée terminée → I used to smoke", "**didn't use to / Did … use to** (sans d)", "**be / get used to + nom ou -ing** : être habitué / s'habituer → I'm used to driving on the left"],
  mistakes: [["I use to play football (avant).", "I used to play football.", "Habitude passée → used to."], ["I didn't used to like it.", "I didn't use to like it.", "Après did → use."], ["I'm used to drive on the left.", "I'm used to driving on the left.", "be used to + -ing."], ["I usually used to wake up early. (aujourd'hui)", "I usually wake up early.", "Habitude présente → présent simple."]],
  ex: `
e|I use to live in Paris, but now I live in Lille.|use|used|Habitude passée → used to.
e|Did you used to play tennis?|used|use|Après did → use.
e|I'm not used to wake up so early.|wake|waking|be used to + -ing.
e|She's getting used to work at night.|work|working|get used to + -ing.
e|I'm used to have tea in the morning. (j'en ai l'habitude)|have|having|be used to + -ing.
t|Réécris avec « used to ».|When I was a child, I played outside every day.|When I was a child, I used to play outside every day.
t|Mets à la forme négative.|He used to smoke.|He didn't use to smoke. // He did not use to smoke.
t|Pose la question.|You used to have long hair.|Did you use to have long hair?
t|Réécris avec « be used to ».|Driving on the left is normal for me now.|I'm used to driving on the left. // I am used to driving on the left.
tr|Avant, j'étais très timide.|I used to be very shy.
tr|Je n'ai pas l'habitude du froid.|I'm not used to the cold. // I am not used to the cold.
tr|Tu vas t'y habituer.|You'll get used to it. // You will get used to it.
tr|On allait à la plage tous les étés.|We used to go to the beach every summer.
tr|Avant, il n'aimait pas les légumes.|He didn't use to like vegetables.
tr|Je m'habitue à l'accent écossais.|I'm getting used to the Scottish accent.
f|There ___ to be a cinema here. (avant)|used|used to
f|It took me a month to get used ___ the food.|to|get used to
m|« D'habitude, je prends le métro. »|I use to take the metro.;I usually take the metro.;I used to take the metro.|1|habitude actuelle → usually.
m|« Il me racontait des histoires tous les soirs » (habitude passée, style récit)|He would tell me stories every night.;He was used to tell me stories every night.;He uses to tell me stories every night.|0|would = habitude passée.
e|I am used to get up at 6.|get|getting|be used to + **-ing**.
t|Réécris avec « used to ».|I smoked before, but I don't now.|I used to smoke.
tr|Avant, je détestais les légumes.|I used to hate vegetables.
f|It took me a month to get used to ___ (live) alone.|living|get used to + -ing
tr|Tu vas t'y habituer.|You'll get used to it. // You will get used to it.
` },

g20: { memo: "If + présent, will + verbe. Jamais de will après if, when, as soon as, until.",
  formula: ["**If + présent, will + verbe** → If it rains, we'll stay in.", "Même règle après **when, as soon as, before, after, until, unless**", "Vérité générale : **If + présent, présent** → If you heat ice, it melts."],
  mistakes: [["If it will rain, we stay home.", "If it rains, we'll stay home.", "if + présent, will dans l'autre partie."], ["I'll call you when I will arrive.", "I'll call you when I arrive.", "when + présent."], ["Unless you don't hurry, you'll miss it.", "Unless you hurry, you'll miss it.", "unless = if not : pas de double négation."], ["If you will need help, call me.", "If you need help, call me.", "if + présent."]],
  ex: `
e|If it will rain tomorrow, we'll stay in.|will rain|rains|if + présent.
e|I'll text you when I will get there.|will get|get|when + présent.
e|If you heat water to 100°C, it will boils.|will boils|boils|Vérité générale → présent.
e|Unless you don't book, there won't be any seats.|don't book|book|unless = if not.
e|If she studies, she pass the exam.|pass|will pass|Résultat futur → will.
e|We'll wait until he will arrive.|will arrive|arrives|until + présent.
t|Relie avec « if ».|You hurry. You'll catch the train.|If you hurry, you'll catch the train. // If you hurry, you will catch the train.
t|Réécris avec « unless ».|If you don't book, you won't get a table.|Unless you book, you won't get a table.
t|Relie avec « as soon as ».|I'll call you. I arrive.|I'll call you as soon as I arrive.
t|Mets à la forme négative la deuxième partie.|If it rains, we'll go to the beach.|If it rains, we won't go to the beach.
tr|S'il fait beau, on ira à la plage.|If the weather is nice, we'll go to the beach. // If it's sunny, we'll go to the beach.
tr|Je t'appellerai quand j'arriverai.|I'll call you when I arrive. // I'll call you when I get there.
tr|Si tu ne te dépêches pas, tu vas rater le bus.|If you don't hurry, you'll miss the bus. // Unless you hurry, you'll miss the bus.
tr|On ne partira pas avant que tu sois prêt.|We won't leave until you're ready. // We won't leave before you're ready.
tr|Si tu as faim, il y a des sandwichs.|If you're hungry, there are some sandwiches. // If you're hungry, there are sandwiches.
tr|Dès que j'aurai l'argent, je réserverai.|As soon as I have the money, I'll book. // As soon as I get the money, I'll book.
f|If you ___ (not / like) it, you can change it.|don't like // do not like|if + présent
f|What will you do if the flight ___ (be) cancelled?|is|if + présent
m|« Si tu mélanges le bleu et le jaune, tu obtiens du vert. »|If you mix blue and yellow, you get green.;If you will mix blue and yellow, you get green.;If you mix blue and yellow, you would get green.|0|vérité générale.
m|« Prends un parapluie au cas où il pleuvrait. »|Take an umbrella if it will rain.;Take an umbrella in case it rains.;Take an umbrella unless it rains.|1|in case + présent.
e|If you will need help, call me.|will need|need|Après **if**, présent même pour le futur.
t|Relie avec « if ».|You don't hurry. You'll miss the bus.|If you don't hurry, you'll miss the bus. // If you don't hurry, you will miss the bus.
tr|Je te préviens dès que je sais.|I'll let you know as soon as I know. // I'll tell you as soon as I know.
` },

g21: { memo: "Situation imaginaire : If + prétérit, would + verbe. « À ta place » = If I were you.",
  formula: ["**If + prétérit, would + verbe** → If I had time, I'd travel.", "**If I were you, I'd…** = à ta place, je…", "**could / might** peuvent remplacer would"],
  mistakes: [["If I would have money, I would travel.", "If I had money, I would travel.", "Jamais would après if."], ["If I was you, I will go.", "If I were you, I'd go.", "Imaginaire → would."], ["I would like that you come.", "I'd like you to come.", "would like + quelqu'un + to."], ["If I had a car, I drive to work.", "If I had a car, I'd drive to work.", "Résultat imaginaire → would."]],
  ex: `
e|If I would have more time, I would learn Japanese.|would have|had|if + prétérit.
e|If I was you, I will accept the job.|will|would|Imaginaire → would.
e|If we had a car, we drive to the coast.|drive|would drive|Résultat → would.
e|I would like that you stay.|that you stay|you to stay|would like + sb + to.
e|What you would do if you won the lottery?|you would|would you|Question : would + sujet.
e|If I knew the answer, I will tell you.|will|would|Imaginaire → would.
t|Rends la situation imaginaire.|If I have money, I'll buy a house.|If I had money, I'd buy a house. // If I had money, I would buy a house.
t|Donne un conseil avec « If I were you ».|You should take the train.|If I were you, I'd take the train. // If I were you, I would take the train.
t|Rends la situation imaginaire.|If it's sunny, we'll go out.|If it was sunny, we'd go out. // If it were sunny, we would go out. // If it was sunny, we would go out.
t|Pose la question.|You would live abroad.|Would you live abroad?
tr|Si j'étais riche, je voyagerais tout le temps.|If I were rich, I'd travel all the time. // If I was rich, I would travel all the time.
tr|À ta place, je réserverais maintenant.|If I were you, I'd book now. // If I were you, I would book now.
tr|Qu'est-ce que tu ferais si tu perdais ton passeport ?|What would you do if you lost your passport?
tr|Ce serait génial si tu pouvais venir.|It would be great if you could come. // It'd be great if you could come.
tr|Si je parlais mieux, je serais plus à l'aise.|If I spoke better, I'd be more comfortable. // If I spoke better, I would feel more confident.
tr|Je voudrais que tu m'aides.|I'd like you to help me. // I would like you to help me.
f|If I ___ (can) drive, I'd rent a car.|could|prétérit de can
f|She ___ (be) happier if she lived by the sea.|would be // 'd be|résultat imaginaire
m|1er ou 2e conditionnel ? « S'il neigeait en juillet… »|If it snows in July, we'll ski.;If it snowed in July, we'd ski.;If it will snow in July, we ski.|1|improbable → 2e conditionnel.
m|« Ça m'étonnerait. »|It would surprise me.;It will surprise me.;It surprises me.|0|conditionnel.
e|If I would know the answer, I'd tell you.|would know|knew|Pas de **would** après if : If I knew…
t|Transforme au 2e conditionnel.|If I have money, I'll buy a boat.|If I had money, I would buy a boat. // If I had money, I'd buy a boat.
tr|Qu'est-ce que tu ferais à ma place ?|What would you do if you were me? // What would you do in my place? // What would you do in my shoes?
` },

g22: { memo: "Passif = be (au bon temps) + participe passé. On l'utilise quand l'action compte plus que celui qui la fait.",
  formula: ["Présent : **is / are + participe** → English is spoken here", "Passé : **was / were + participe** → It was built in 1850", "Present perfect : **has / have been + participe** · Modal : **can / must be + participe**"],
  mistakes: [["The castle built in 1200.", "The castle was built in 1200.", "Il manque be."], ["My bag has stolen.", "My bag has been stolen.", "has been + participe."], ["English is speak here.", "English is spoken here.", "Participe passé."], ["The room will clean.", "The room will be cleaned.", "will be + participe."]],
  ex: `
e|The bridge built in 1890.|built|was built|Il manque be.
e|My wallet has stolen.|has stolen|has been stolen|has been + participe.
e|French is speak in Quebec.|speak|spoken|Participe passé.
e|The room will clean this afternoon.|will clean|will be cleaned|will be + participe.
e|Tickets can bought online.|can bought|can be bought|modal + be + participe.
e|I was tell to wait here.|tell|told|was + participe.
t|Mets au passif.|They built the castle in 1200.|The castle was built in 1200.
t|Mets au passif.|Someone has stolen my bike.|My bike has been stolen.
t|Mets au passif.|They serve breakfast at 8.|Breakfast is served at 8. // Breakfast is served at eight.
t|Mets au passif.|They will cancel the concert.|The concert will be cancelled. // The concert will be canceled.
t|Mets au passif.|You must show your passport.|Your passport must be shown.
tr|Le vol a été annulé.|The flight was cancelled. // The flight has been cancelled. // The flight was canceled.
tr|On parle anglais ici.|English is spoken here.
tr|On m'a demandé d'attendre.|I was asked to wait.
tr|Le musée est en cours de rénovation.|The museum is being renovated.
tr|Ce livre a été écrit par une Française.|This book was written by a French woman. // This book was written by a Frenchwoman.
tr|Les chiens ne sont pas autorisés.|Dogs are not allowed. // Dogs aren't allowed.
f|The results will ___ announced tomorrow.|be|will be + participe
f|The road ___ (close) since Monday.|has been closed|present perfect passif
m|« On construit un nouvel hôtel. »|A new hotel is building.;A new hotel is being built.;A new hotel is built now.|1|en cours → is being + participe.
m|« Je suis né à Lille. »|I am born in Lille.;I was born in Lille.;I have born in Lille.|1|was born.
` },

g23: { memo: "who pour les personnes, which pour les choses, where pour les lieux, whose pour « dont » (possession).",
  formula: ["**who** (personne) · **which** (chose) · **that** (les deux, à l'oral)", "**where** = où · **whose** = dont (possession) · **when** = où (temps)", "Pronom complément → on peut le supprimer : the film (that) I saw"],
  mistakes: [["The man which helped me.", "The man who helped me.", "Personne → who."], ["The city where I live in.", "The city where I live / the city I live in.", "Pas de double « où »."], ["The girl who her bag was stolen.", "The girl whose bag was stolen.", "Possession → whose."], ["My brother, that lives in London, …", "My brother, who lives in London, …", "Après virgule → pas de that."]],
  ex: `
e|The woman which helped us was very kind.|which|who|Personne → who.
e|This is the hotel who we stayed in.|who|which|Chose → which (ou that).
e|That's the guy who his car broke down.|who his|whose|Possession → whose.
e|The town where I grew up in is small.|in|—|where = in which : pas de « in » en plus.
e|My sister, that lives in Rome, is visiting.|that|who|Après virgule → who.
e|The day where we met was rainy.|where|when|Temps → when.
t|Relie les deux phrases avec « who ».|I met a man. He speaks six languages.|I met a man who speaks six languages.
t|Relie avec « which ».|We stayed in a hotel. It was near the beach.|We stayed in a hotel which was near the beach. // We stayed in a hotel that was near the beach.
t|Relie avec « whose ».|That's the girl. Her phone was stolen.|That's the girl whose phone was stolen.
t|Relie avec « where ».|This is the café. We first met there.|This is the café where we first met.
tr|C'est le gars qui travaille à l'accueil.|That's the guy who works at reception. // He's the guy who works at the reception.
tr|Le film qu'on a vu était génial.|The film we saw was great. // The movie we saw was amazing. // The film that we saw was great.
tr|La ville où j'ai grandi est près de la mer.|The town where I grew up is near the sea. // The city where I grew up is by the sea.
tr|J'ai un ami dont le père est pilote.|I have a friend whose father is a pilot. // I've got a friend whose dad is a pilot.
tr|C'est ce dont j'ai besoin.|That's what I need.
tr|Le jour où on est arrivés, il pleuvait.|The day we arrived, it was raining. // The day when we arrived, it was raining.
f|The book ___ you lent me is great.|that // which|chose (supprimable)
f|Do you know anyone ___ speaks Japanese?|who // that|personne
m|« Ce que j'aime, c'est la mer. »|What I love is the sea.;That I love is the sea.;Which I love is the sea.|0|ce que = what.
m|« Il a perdu son passeport, ce qui l'a mis en retard. »|…, what made him late.;…, which made him late.;…, that made him late.|1|reprend la phrase → which.
e|The people which live next door are noisy.|which|who|Des personnes → **who** (ou that).
t|Relie avec un pronom relatif.|I have a friend. She speaks five languages.|I have a friend who speaks five languages. // I have a friend that speaks five languages.
tr|C'est la ville où je suis né.|It's the town where I was born. // It's the city where I was born. // This is the town where I was born. // This is the city where I was born.
` },

g24: { memo: "Certains verbes veulent -ing (enjoy, avoid, mind…), d'autres to + verbe (want, decide, hope…). Après une préposition : toujours -ing.",
  formula: ["**+ -ing** : enjoy, avoid, mind, finish, suggest, keep, can't stand, look forward to", "**+ to** : want, need, decide, hope, plan, promise, agree, refuse, manage, would like", "**préposition + -ing** : before leaving, thanks for helping, interested in learning"],
  mistakes: [["I enjoy to travel.", "I enjoy travelling.", "enjoy + -ing."], ["I look forward to see you.", "I look forward to seeing you.", "« to » est une préposition ici → -ing."], ["He suggested us to go.", "He suggested going / that we go.", "suggest n'accepte pas « to »."], ["I'm interested to learn.", "I'm interested in learning.", "in + -ing."]],
  ex: `
e|I enjoy to meet new people.|to meet|meeting|enjoy + -ing.
e|We decided staying another night.|staying|to stay|decide + to.
e|I'm looking forward to see you.|see|seeing|look forward to + -ing.
e|He suggested us to take a taxi.|us to take|taking|suggest + -ing.
e|Thanks for help me.|help|helping|préposition + -ing.
e|Would you mind to close the door?|to close|closing|mind + -ing.
e|She avoided to answer.|to answer|answering|avoid + -ing.
t|Complète avec « enjoy ».|I travel. I love it.|I enjoy travelling. // I enjoy traveling.
t|Réécris avec « decided ».|We'll rent a car. That's our decision.|We decided to rent a car.
t|Réécris avec « before ».|I had breakfast, then I left.|I had breakfast before leaving.
t|Réécris avec « without ».|He left. He didn't pay.|He left without paying.
tr|J'ai hâte de te voir.|I'm looking forward to seeing you. // I can't wait to see you.
tr|Il a refusé de payer.|He refused to pay.
tr|Arrête de parler !|Stop talking!
tr|Je me suis arrêté pour acheter de l'eau.|I stopped to buy some water. // I stopped to buy water.
tr|N'oublie pas de fermer la porte.|Don't forget to lock the door. // Don't forget to close the door.
tr|Je me souviens de l'avoir rencontré.|I remember meeting him.
f|I can't stand ___ (wait) in queues.|waiting|can't stand + -ing
f|We managed ___ (find) a room.|to find|manage + to
f|She's good at ___ (draw).|drawing|préposition + -ing
m|« J'ai essayé de dormir » (effort)|I tried sleeping.;I tried to sleep.;I tried sleep.|1|effort → try to.
` }
});
