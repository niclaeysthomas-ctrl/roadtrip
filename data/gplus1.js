// Compléments de grammaire (fiches g1 à g12) : explications structurées + exercices supplémentaires.
// formula : les « formules » à retenir · mistakes : [faux, juste, pourquoi] · memo : l'idée en une phrase.
// Types d'exercices en plus de m / f / o :
//   t|consigne|phrase de départ|réponse // variantes        (transformer la phrase, réponse tapée)
//   e|phrase avec une erreur|mot faux|correction|explication (toucher le mot faux)
//   tr|phrase en français|traduction // variantes            (traduire en tapant)
window.GPLUS = window.GPLUS || {};
Object.assign(window.GPLUS, {
g1: { memo: "BE = être… mais aussi l'âge, la faim, la soif, le froid et la peur.",
  formula: ["I **am** · you / we / they **are** · he / she / it **is**", "Négation : sujet + be + **not** → I'm not, she isn't, they aren't", "Question : **Be** + sujet… ? → Are you…? Is it…?"],
  mistakes: [["I have 20 years.", "I'm 20.", "L'âge se dit avec BE."], ["I have hungry.", "I'm hungry.", "Faim, soif, froid, peur : BE + adjectif."], ["Are you agree?", "Do you agree?", "« agree » est un verbe : on utilise do."], ["She is not here? → She don't here.", "She isn't here.", "La négation de be ne prend jamais do."]],
  ex: `
t|Mets à la forme négative.|I am tired.|I'm not tired. // I am not tired.
t|Mets à la forme négative.|They are French.|They aren't French. // They're not French. // They are not French.
t|Pose la question correspondante.|She is at the hotel.|Is she at the hotel?
t|Pose la question correspondante.|You are cold.|Are you cold?
t|Mets au pluriel (we).|I am ready.|We are ready. // We're ready.
e|I have twenty-two years old.|have|am|L'âge se dit avec BE : I am 22.
e|We is on holiday.|is|are|we → are.
e|He are my brother.|are|is|he → is.
e|Are you agree with me?|Are|Do|agree est un verbe : Do you agree?
e|I have very hungry.|have|am|La faim se dit avec BE : I'm hungry.
e|She not is here.|not is|isn't|Le **not** se place après be : She isn't here.
tr|J'ai froid.|I'm cold. // I am cold.
tr|Tu as raison.|You're right. // You are right.
tr|Nous sommes en retard.|We're late. // We are late.
tr|Est-ce qu'il a peur ?|Is he scared? // Is he afraid?
tr|Elle n'est pas fatiguée.|She isn't tired. // She's not tired. // She is not tired.
tr|Quel âge as-tu ?|How old are you?
f|"Are you hungry?" "No, I ___ not."|am|réponse courte
f|It ___ very hot today.|is // 's|it → is
m|"Are you French?" "Yes, I'm." — cette réponse est…|correcte;incorrecte : il faut « Yes, I am. »;incorrecte : il faut « Yes, I do. »|1|Pas de contraction en fin de réponse courte.
m|Le contraire de « I'm right » :|I'm false.;I'm wrong.;I'm bad.|1|avoir tort = to be wrong.
` },

g2: { memo: "Au présent simple, il / elle / ça → le verbe prend un -s. C'est LA faute n°1.",
  formula: ["I / you / we / they + **verbe** → I work", "he / she / it + **verbe + s** → she work**s**", "-es après s, sh, ch, x, o (watch**es**, go**es**) · consonne + y → -ies (stud**ies**) · have → **has**"],
  mistakes: [["He work in a bank.", "He works in a bank.", "3ᵉ personne → -s."], ["She haves a car.", "She has a car.", "have → has (irrégulier)."], ["I am work every day.", "I work every day.", "Pas de « be » avec un verbe au présent simple."], ["My brother study English.", "My brother studies English.", "consonne + y → -ies."]],
  ex: `
t|Remplace « I » par « she ».|I watch series every evening.|She watches series every evening.
t|Remplace « I » par « he ».|I go to the gym on Mondays.|He goes to the gym on Mondays.
t|Remplace « we » par « my sister ».|We study at night.|My sister studies at night.
t|Remplace « they » par « Tom ».|They have two cars.|Tom has two cars.
t|Remplace « I » par « it ».|I fly to Madrid.|It flies to Madrid.
t|Remplace « you » par « the bus ».|You stop here.|The bus stops here.
e|My brother live in London.|live|lives|3ᵉ personne → -s.
e|She haves a dog.|haves|has|have → has.
e|I am work in a shop.|am|—|Pas de be avec le présent simple : I work in a shop.
e|He watchs TV every night.|watchs|watches|-ch → -es.
e|The train leave at eight.|leave|leaves|the train = it → -s.
e|My parents lives in Lille.|lives|live|parents = they → pas de -s.
tr|Mon frère travaille dans un hôtel.|My brother works in a hotel.
tr|Elle regarde des séries tous les soirs.|She watches series every evening. // She watches series every night.
tr|Il va à la salle de sport le lundi.|He goes to the gym on Mondays. // He goes to the gym on Monday.
tr|Le magasin ouvre à neuf heures.|The shop opens at nine. // The store opens at nine. // The shop opens at 9.
tr|Ma sœur a deux enfants.|My sister has two children. // My sister has two kids.
f|She always ___ (try) to speak English.|tries|consonne + y → ies
f|He ___ (fix) bikes at the weekend.|fixes|-x → -es
f|Water ___ (boil) at 100 degrees.|boils|vérité générale
m|Quelle phrase est correcte ?|She don't like coffee.;She doesn't likes coffee.;She doesn't like coffee.|2|doesn't + verbe sans s.
m|« Il pleut souvent ici. »|It often rains here.;It rains often here.;It's often raining here.|0|adverbe de fréquence avant le verbe.
` },

g3: { memo: "Au présent, pas de question ni de négation sans DO / DOES (sauf avec be, can, will…).",
  formula: ["Question : **Do / Does** + sujet + verbe (base) ? → Does she work?", "Négation : sujet + **don't / doesn't** + verbe (base) → He doesn't work.", "Après does / doesn't : **plus de -s** sur le verbe."],
  mistakes: [["Do she like it?", "Does she like it?", "she → does."], ["He doesn't works.", "He doesn't work.", "Le -s passe sur does."], ["You like pizza?", "Do you like pizza?", "À l'écrit et en anglais soigné, la question a besoin de do."], ["I no understand.", "I don't understand.", "Négation = don't, jamais « no » devant un verbe."]],
  ex: `
t|Mets à la forme négative.|She likes spicy food.|She doesn't like spicy food. // She does not like spicy food.
t|Mets à la forme négative.|We live near the beach.|We don't live near the beach. // We do not live near the beach.
t|Pose la question.|He speaks Spanish.|Does he speak Spanish?
t|Pose la question.|They work on Sundays.|Do they work on Sundays?
t|Pose la question.|The museum opens at ten.|Does the museum open at ten?
t|Mets à la forme négative.|The bus stops here.|The bus doesn't stop here. // The bus does not stop here.
e|Do your brother speak English?|Do|Does|your brother = he → does.
e|She doesn't speaks French.|speaks|speak|Après doesn't, pas de -s.
e|I no like this hotel.|no|don't|Négation avec don't.
e|Does they live here?|Does|Do|they → do.
e|He don't know the way.|don't|doesn't|he → doesn't.
e|What time does the shop closes?|closes|close|Après does, verbe à la base.
tr|Tu parles anglais ?|Do you speak English?
tr|Il ne mange pas de viande.|He doesn't eat meat. // He does not eat meat.
tr|Est-ce que ce bus va à l'aéroport ?|Does this bus go to the airport?
tr|Je ne comprends pas la question.|I don't understand the question. // I do not understand the question.
tr|Elle ne boit pas d'alcool.|She doesn't drink alcohol. // She does not drink alcohol.
tr|Où est-ce que tu habites ?|Where do you live?
f|"Does she smoke?" "No, she ___."|doesn't // does not|réponse courte
f|What ___ your father do?|does|your father → does
m|Quelle question est correcte ?|Are you like football?;Do you like football?;Like you football?|1|like est un verbe → do.
m|« Ça ne coûte pas cher. »|It doesn't cost much.;It don't cost much.;It isn't cost much.|0|it → doesn't + base.
` },

g4: { memo: "Mot interrogatif + auxiliaire + sujet + verbe. Toujours dans cet ordre.",
  formula: ["**Mot interrogatif + do/does/did + sujet + verbe** → Where do you live?", "**Mot interrogatif + be + sujet** → Where is the station?", "Si le mot interrogatif est le sujet : pas de do → **Who lives** here?"],
  mistakes: [["Where you live?", "Where do you live?", "Il manque l'auxiliaire."], ["What means this word?", "What does this word mean?", "Question au présent simple → does + base."], ["How much people?", "How many people?", "On compte les personnes → many."], ["Who did call you?", "Who called you?", "Who est sujet → pas de did."]],
  ex: `
t|Pose la question sur la partie entre crochets.|She lives [in Dublin].|Where does she live?
t|Pose la question sur la partie entre crochets.|The train leaves [at six].|What time does the train leave? // When does the train leave?
t|Pose la question sur la partie entre crochets.|It costs [twenty euros].|How much does it cost? // How much is it?
t|Pose la question sur la partie entre crochets.|They stayed [three nights].|How many nights did they stay? // How long did they stay?
t|Pose la question sur la partie entre crochets.|[Tom] booked the hotel.|Who booked the hotel?
t|Pose la question sur la partie entre crochets.|He's late [because of the traffic].|Why is he late?
e|Where you are from?|you are|are you|Dans une question, on inverse : Where **are you** from?
e|What means this word?|means this word|does this word mean|Question avec un verbe normal → **does** + base : What does this word mean?
e|How much people are coming?|much|many|personnes = dénombrable → many.
e|Who did break the glass?|did break|broke|Quand **who** est sujet, pas de did : Who broke the glass?
e|How long it takes to get there?|it takes|does it take|Question → auxiliaire **does** + base : How long does it take…?
tr|Combien de temps dure le vol ?|How long is the flight? // How long does the flight take?
tr|Qu'est-ce que tu fais ce soir ?|What are you doing tonight? // What are you doing this evening?
tr|Qui a réservé la table ?|Who booked the table? // Who reserved the table?
tr|À quelle heure ferme le musée ?|What time does the museum close? // When does the museum close?
tr|Lequel tu préfères, le rouge ou le bleu ?|Which one do you prefer, the red one or the blue one? // Which do you prefer, the red or the blue?
tr|Pourquoi tu apprends l'anglais ?|Why are you learning English? // Why do you learn English?
f|___ often do you travel?|how|fréquence
f|___ bag is this? (à qui)|whose|possession
m|« Comment est-il ? » (caractère)|How is he?;What is he like?;How is he like?|1|What… like? = description.
m|« Comment va-t-il ? » (santé)|How is he?;What is he like?;How does he?|0|How are you? = comment ça va.
f|What does she look ___? (à quoi ressemble-t-elle)|like|look like
` },

g5: { memo: "a devant un son consonne, an devant un son voyelle, the quand on sait de quoi on parle, rien pour les généralités.",
  formula: ["**a** + son consonne (a hotel, a university) · **an** + son voyelle (an hour, an umbrella)", "**the** = chose précise / déjà connue / unique", "**pas d'article** = généralités (I love music), métiers ont « a » (She's a nurse)"],
  mistakes: [["I am student.", "I'm a student.", "Métier / statut → a."], ["The life is beautiful.", "Life is beautiful.", "Généralité → pas d'article."], ["an university", "a university", "On entend « you » → son consonne."], ["two childs", "two children", "Pluriel irrégulier."]],
  ex: `
e|She's teacher.|teacher|a teacher|Métier → a.
e|I need an umbrella and a apple.|a|an|apple commence par un son voyelle.
e|The money isn't everything.|The|—|Généralité : Money isn't everything.
e|It's an university in the centre.|an|a|university se prononce « you- ».
e|There are three womans in the car.|womans|women|woman → women.
e|I bought two new furnitures.|furnitures|pieces of furniture|furniture est indénombrable.
tr|Je suis infirmière.|I'm a nurse. // I am a nurse.
tr|J'adore le café.|I love coffee.
tr|Le café de cet hôtel est excellent.|The coffee in this hotel is excellent. // The coffee at this hotel is excellent.
tr|Il attend depuis une heure.|He's been waiting for an hour. // He has been waiting for an hour.
tr|Les enfants jouent sur la plage.|The children are playing on the beach. // The kids are playing on the beach.
tr|Elle a deux chats et un chien.|She has two cats and a dog. // She's got two cats and a dog.
f|It's ___ honour to meet you.|an|h muet
f|He plays ___ guitar very well.|the|instrument → the
f|I go to work by ___ bus. (écris « - » si rien)|-|by + transport → pas d'article
m|« Le président des États-Unis »|President of the USA;the President of the USA;the President of USA|1|the + the USA.
m|Le pluriel de « person » :|persons;people;peoples|1|person → people.
m|Le pluriel de « tooth » :|tooths;teeth;teeths|1|irrégulier.
f|She is ___ honest person.|an|h muet
f|We had ___ lunch at noon. (écris « - » si rien)|-|repas → pas d'article
m|« Je vais au lit. »|I go to the bed.;I go to bed.;I go to a bed.|1|go to bed sans article.
` },

g6: { memo: "some en phrase affirmative et pour proposer, any en question et négation, much pour ce qui ne se compte pas, many pour ce qui se compte.",
  formula: ["**some** : affirmatif + offres / demandes polies (Would you like some tea?)", "**any** : questions + négations (Have you got any rooms? I don't have any cash.)", "**much** + indénombrable · **many** + pluriel · **a lot of** partout"],
  mistakes: [["I don't have some money.", "I don't have any money.", "Négation → any."], ["How much people?", "How many people?", "people se compte."], ["an advice", "some advice / a piece of advice", "advice est indénombrable."], ["There are much tourists.", "There are a lot of tourists.", "much + indénombrable seulement (et plutôt en négation)."]],
  ex: `
e|We don't have some milk left.|some|any|Négation → any.
e|How much tickets do you need?|much|many|tickets = pluriel.
e|Can you give me an advice?|an|some|advice : indénombrable.
e|There isn't many time.|many|much|time = indénombrable.
e|I have many luggages.|many luggages|a lot of luggage|**luggage** est indénombrable : pas de -s, pas de many → a lot of luggage.
e|Would you like any coffee?|any|some|Proposition polie → some.
t|Mets à la forme négative.|There are some towels in the room.|There aren't any towels in the room. // There are no towels in the room.
t|Mets à la forme interrogative.|They have some vegetarian dishes.|Do they have any vegetarian dishes?
t|Remplace « a lot of » par much ou many.|I don't have a lot of time.|I don't have much time.
t|Remplace « a lot of » par much ou many.|There aren't a lot of people.|There aren't many people.
tr|Il y a des restaurants près d'ici ?|Are there any restaurants near here? // Are there any restaurants nearby?
tr|Je voudrais de l'eau, s'il vous plaît.|I'd like some water, please. // I would like some water, please.
tr|Je n'ai pas beaucoup d'argent.|I don't have much money. // I haven't got much money.
tr|Combien de valises avez-vous ?|How many suitcases do you have? // How many suitcases have you got?
tr|Il me faut quelques informations.|I need some information.
tr|Tu veux du pain ?|Do you want some bread? // Would you like some bread?
f|There are only ___ seats left. (quelques-uns)|a few|dénombrable
f|Add ___ salt. (un peu de)|a little|indénombrable
m|« Il n'y a personne. »|There isn't nobody.;There isn't anybody.;There is anybody.|1|négation + anybody (ou There's nobody).
m|___ of my friends speak English. (aucun)|None;No;Any|0|None of…
f|I've got ___ news for you. (des)|some|news indénombrable
m|« Beaucoup de touristes viennent en été. »|Much tourists come in summer.;Many tourists come in summer.;A lot tourists come in summer.|1|many + pluriel (ou a lot of).
` },

g7: { memo: "there is + singulier, there are + pluriel. Et « il y a deux jours » se dit two days ago.",
  formula: ["**There is (There's)** + singulier / indénombrable", "**There are** + pluriel", "Question : **Is there / Are there…?** · Passé : **there was / there were** · « il y a + durée » = **… ago**"],
  mistakes: [["It has a pool in the hotel.", "There's a pool in the hotel.", "« Il y a » = there is, pas « it has »."], ["There is two beds.", "There are two beds.", "Pluriel → are."], ["I arrived there are two days.", "I arrived two days ago.", "Il y a + durée = ago."], ["Have there a lift?", "Is there a lift?", "Question : Is there…?"]],
  ex: `
e|There is three people in the queue.|is|are|Pluriel → are.
e|It has a problem with my room.|It has|There's|Il y a = there is.
e|I met him there is two years.|there is two years|two years ago|« Il y a » + durée passée = durée + **ago** : two years ago.
e|Are there a bank near here?|Are|Is|a bank = singulier.
e|There was a lot of people.|was|were|people = pluriel.
e|There aren't some towels.|some|any|Négation → any.
t|Mets au passé.|There is a problem with the shower.|There was a problem with the shower.
t|Mets au passé.|There are a lot of tourists.|There were a lot of tourists.
t|Pose la question.|There's a lift in the building.|Is there a lift in the building?
t|Mets à la forme négative.|There are buses at night.|There aren't any buses at night. // There are no buses at night.
tr|Il y a un problème avec ma réservation.|There's a problem with my booking. // There is a problem with my reservation.
tr|Il y avait beaucoup de monde au concert.|There were a lot of people at the concert. // There were lots of people at the concert.
tr|Il n'y a pas d'eau chaude.|There's no hot water. // There isn't any hot water. // There is no hot water.
tr|Est-ce qu'il y a une pharmacie près d'ici ?|Is there a pharmacy near here? // Is there a chemist's near here? // Is there a pharmacy nearby?
tr|Je suis arrivé il y a trois jours.|I arrived three days ago.
tr|Il y aura un concert ce soir.|There will be a concert tonight. // There's going to be a concert tonight.
f|There ___ going to be a storm tonight.|is // 's|futur
f|How many people ___ there in your family?|are|pluriel
m|« Il y a combien de chambres ? »|How many rooms is there?;How many rooms are there?;How much rooms are there?|1|pluriel → are.
m|« Il y a longtemps »|There is a long time;A long time ago;Since long|1|ago.
f|There ___ been an accident. (present perfect)|has // 's|there has been
m|« Il y a du wifi ? »|Is there wifi?;Has it wifi?;Are there wifi?|0|indénombrable → is.
` },

g8: { memo: "En anglais, his/her dépend du POSSESSEUR (homme ou femme), pas de l'objet.",
  formula: ["my · your · **his** (à lui) · **her** (à elle) · its · our · their", "« le … de Tom » = **Tom's** … · pluriel en -s : my parents**'** house", "Pronoms : mine, yours, his, hers, ours, theirs"],
  mistakes: [["Léa and his brother", "Léa and her brother", "Léa est une femme → her."], ["the car of my father", "my father's car", "Personne → 's."], ["It's a nice hotel. It's pool is big.", "Its pool is big.", "its (possessif) sans apostrophe."], ["This bag is my.", "This bag is mine.", "le mien = mine."]],
  ex: `
e|Anna lost his phone.|his|her|Anna → her.
e|Tom is with her girlfriend.|her|his|Tom → his.
e|The house of my parents is big.|The house of my parents|My parents' house|Personnes → 's.
e|The hotel has it's own beach.|it's|its|Possessif sans apostrophe.
e|Is this pen your?|your|yours|le tien = yours.
e|My sister's husband name is Paul.|husband|husband's|Le nom du mari → husband's name.
t|Remplace par un pronom possessif.|This is my bag.|This bag is mine. // This is mine.
t|Utilise le 's.|the car of my brother|my brother's car
t|Utilise le 's.|the bedroom of the children|the children's bedroom
t|Remplace « the » par le bon possessif (Sarah).|Sarah forgot the keys.|Sarah forgot her keys.
tr|C'est la voiture de mon père.|It's my father's car. // It's my dad's car.
tr|Elle est venue avec son frère.|She came with her brother.
tr|Il a perdu son passeport.|He lost his passport. // He's lost his passport.
tr|Ce n'est pas mon sac, c'est le sien (à elle).|It's not my bag, it's hers. // It isn't my bag, it's hers.
tr|La maison de mes parents est près de la mer.|My parents' house is near the sea. // My parents' house is by the sea.
tr|Ils ont vendu leur appartement.|They sold their flat. // They sold their apartment.
f|The dog wagged ___ tail.|its|chose / animal
m|« Un ami à moi »|a friend of me;a friend of mine;a my friend|1|a friend of mine.
m|« La fin du film »|the film's end;the end of the film;the film end|1|chose → of.
f|___ is this jacket? (à qui)|whose|possession
m|James a perdu ses clés.|James lost his keys.;James lost her keys.;James lost its keys.|0|James → his.
` },

g9: { memo: "can / could / must + verbe SANS to. have to = obligation qui vient de l'extérieur.",
  formula: ["**can / could / must / should + verbe base** (jamais to, jamais de -s)", "**have to / has to** = devoir (règle, obligation) · **don't have to** = pas obligé", "**mustn't** = interdit · **could** = poli ou passé de can"],
  mistakes: [["I can to swim.", "I can swim.", "Pas de to après can."], ["She cans drive.", "She can drive.", "can ne prend jamais de -s."], ["You mustn't pay. (= ce n'est pas obligatoire)", "You don't have to pay.", "mustn't = interdit."], ["Do you can help me?", "Can you help me?", "can n'utilise pas do."]],
  ex: `
e|I can to speak three languages.|to|—|can + verbe sans to : I can speak.
e|She cans swim very well.|cans|can|can ne change jamais.
e|Do you can repeat, please?|Do you can|Can you|can est un modal : pas de do, on inverse directement → Can you repeat?
e|He must to show his passport.|to|—|must + base.
e|You don't must smoke here.|don't must|mustn't|interdiction = mustn't.
e|She have to work on Saturday.|have|has|she → has to.
t|Mets à la forme négative.|I can swim.|I can't swim. // I cannot swim.
t|Mets au passé.|I can't sleep.|I couldn't sleep.
t|Mets au passé.|We have to wait.|We had to wait.
t|Rends la demande plus polie.|Can you help me?|Could you help me?
t|Pose la question.|She has to leave early.|Does she have to leave early?
tr|Tu n'es pas obligé de venir.|You don't have to come.
tr|Il est interdit de fumer ici.|You mustn't smoke here. // You can't smoke here. // Smoking is not allowed here.
tr|Pourriez-vous parler plus lentement ?|Could you speak more slowly? // Could you speak slower?
tr|Je n'ai pas pu dormir.|I couldn't sleep.
tr|On a dû attendre une heure.|We had to wait an hour. // We had to wait for an hour.
tr|Tu devrais réserver maintenant.|You should book now.
f|You ___ wear a seatbelt. It's the law.|must // have to|obligation
f|___ I open the window? (proposition)|shall // can // may|proposer
m|« Je saurai nager l'année prochaine. »|I will can swim next year.;I will be able to swim next year.;I can will swim next year.|1|futur de can = will be able to.
m|« Tu n'avais pas besoin de payer » (ce n'était pas obligatoire)|You mustn't pay.;You didn't have to pay.;You couldn't pay.|1|pas obligé (passé).
` },

g10: { memo: "be + -ing pour ce qui se passe maintenant ou un projet déjà organisé. Jamais avec like, want, know…",
  formula: ["**am / is / are + verbe-ing** → I'm waiting", "Orthographe : make → mak**ing** · sit → si**tt**ing · lie → l**y**ing", "Verbes d'état sans -ing : like, love, want, need, know, understand, believe, own"],
  mistakes: [["I'm wanting a coffee.", "I want a coffee.", "want = verbe d'état."], ["She is work now.", "She's working now.", "be + -ing."], ["I am go to the beach tomorrow.", "I'm going to the beach tomorrow.", "Projet → be + -ing."], ["What do you do now? (en ce moment)", "What are you doing now?", "Action en cours → présent continu."]],
  ex: `
e|Look! It rains.|rains|is raining|En ce moment → présent continu.
e|I'm knowing the answer.|I'm knowing|I know|**know** est un verbe d'état : jamais en -ing.
e|She is sit next to me.|sit|sitting|be + -ing.
e|They're waiting the bus.|waiting|waiting for|wait for.
e|He is makeing dinner.|makeing|making|e muet disparaît.
e|What do you do right now?|do you do|are you doing|What are you doing right now?
t|Mets au présent continu.|She works at home.|She's working at home. // She is working at home.
t|Mets au présent continu.|We swim in the lake.|We're swimming in the lake. // We are swimming in the lake.
t|Mets à la forme négative.|He's listening.|He isn't listening. // He's not listening. // He is not listening.
t|Pose la question.|They are coming tonight.|Are they coming tonight?
tr|Qu'est-ce que tu fais ?|What are you doing?
tr|Je cherche la gare.|I'm looking for the station. // I'm looking for the train station.
tr|On part demain matin.|We're leaving tomorrow morning. // We are leaving tomorrow morning.
tr|Il ne m'écoute pas.|He isn't listening to me. // He's not listening to me.
tr|Elle loge chez une amie.|She's staying with a friend. // She is staying with a friend.
tr|Il pleut depuis une heure.|It's been raining for an hour. // It has been raining for an hour.
f|The children are ___ (swim) in the pool.|swimming|consonne doublée
f|Why are you ___ (lie) on the floor?|lying|ie → y
m|« J'ai besoin d'aide. »|I'm needing help.;I need help.;I needing help.|1|need = verbe d'état.
m|D'habitude il conduit, mais aujourd'hui il ___ le train.|takes;is taking;take|1|exception temporaire → présent continu.
e|Listen! Somebody sing in the street.|sing|is singing|En ce moment (Listen!) → **is singing**.
t|Pose la question.|She's working today.|Is she working today?
tr|Tu m'écoutes ?|Are you listening to me?
f|We're ___ (stay) at a small hotel this week.|staying|situation temporaire
` },

g11: { memo: "going to = c'est prévu. will = je décide maintenant, je promets, je prédis.",
  formula: ["**be going to + verbe** = projet décidé avant / signe visible (Look at the clouds, it's going to rain)", "**will + verbe** = décision sur le moment, promesse, offre, prédiction", "Rendez-vous fixé : présent continu (I'm meeting Sam at 8)"],
  mistakes: [["I will to call you.", "I'll call you.", "will + verbe sans to."], ["I go to visit London next year.", "I'm going to visit London next year.", "Projet → be going to."], ["When I will arrive, I'll call you.", "When I arrive, I'll call you.", "Après when → présent."], ["The phone rings! I'm going to answer.", "I'll answer it!", "Décision immédiate → will."]],
  ex: `
e|I will to help you.|to|—|will + verbe sans to.
e|Next year we go to visit Canada.|go|are going|Projet → are going to visit.
e|I'll call you when I will arrive.|will arrive|arrive|when + présent.
e|Look at those clouds! It will rain.|will|is going to|Signe visible → going to.
e|She's go to study medicine.|go|going|be going to.
e|I promise I'm going to call you tonight.|I'm going to|I'll|Une promesse faite sur le moment → **will** (I'll call you), pas « going to ».
t|Mets au futur avec « going to ».|I visit my grandparents.|I'm going to visit my grandparents. // I am going to visit my grandparents.
t|Mets à la forme négative.|It will take long.|It won't take long. // It will not take long.
t|Pose la question.|You're going to rent a car.|Are you going to rent a car?
t|Transforme en promesse avec will.|I call you tomorrow.|I'll call you tomorrow. // I will call you tomorrow.
tr|Je vais t'aider (je viens de décider).|I'll help you. // I will help you.
tr|On va louer une voiture cet été (c'est prévu).|We're going to rent a car this summer. // We are going to rent a car this summer.
tr|Il va pleuvoir, regarde le ciel !|It's going to rain, look at the sky!
tr|Ça ne prendra pas longtemps.|It won't take long. // It will not take long.
tr|Je te rappelle dès que j'arrive.|I'll call you back as soon as I arrive. // I'll call you as soon as I get there.
tr|Qu'est-ce que tu vas faire ce week-end ?|What are you going to do this weekend? // What are you doing this weekend?
f|"It's hot in here." "I ___ open the window."|'ll // will|offre immédiate
f|___ we take a taxi? (on prend… ?)|shall|proposition
m|Au restaurant, pour commander :|I'm going to take the steak.;I'll have the steak.;I take the steak.|1|I'll have…
m|« Je vois Sam à 20 h (c'est prévu). »|I'll see Sam at 8.;I'm seeing Sam at 8.;I see Sam at 8.|1|rendez-vous → présent continu.
e|Try the cake, I'm sure you will likes it.|likes|like|Après **will** → verbe à la base, jamais de -s.
t|Mets à la forme négative.|I'm going to buy a car.|I'm not going to buy a car. // I am not going to buy a car.
tr|Je vais t'aider avec tes valises.|I'll help you with your bags. // I'll help you with your suitcases. // I will help you with your bags.
f|"I'm cold." "I ___ close the window."|'ll // will|décision prise à l'instant
tr|Qu'est-ce que tu vas faire ce week-end ?|What are you going to do this weekend? // What are you doing this weekend?
` },

g12: { memo: "was avec I / he / she / it, were avec you / we / they. Et « je suis né » = I was born.",
  formula: ["I / he / she / it **was** · you / we / they **were**", "Négation : wasn't / weren't · Question : Was it…? Were you…?", "**I was born** in… · **there was / there were** = il y avait"],
  mistakes: [["I am born in 2004.", "I was born in 2004.", "Naissance → was born."], ["We was tired.", "We were tired.", "we → were."], ["It were amazing.", "It was amazing.", "it → was."], ["Did you were there?", "Were you there?", "be n'utilise pas did."]],
  ex: `
e|We was very tired after the flight.|was|were|we → were.
e|I am born in Lille.|am|was|Naissance → was born.
e|Did you were at the party?|Did you were|Were you|Avec be, pas de did : on inverse → Were you at the party?
e|The museum weren't open.|weren't|wasn't|the museum = it → wasn't.
e|There was a lot of tourists.|was|were|tourists = pluriel.
e|How were the film?|were|was|the film = it.
t|Mets au passé.|It is a great day.|It was a great day.
t|Mets au passé.|They are at home.|They were at home.
t|Mets à la forme négative.|The hotel was expensive.|The hotel wasn't expensive. // The hotel was not expensive.
t|Pose la question.|You were tired.|Were you tired?
tr|C'était génial !|It was amazing! // It was great! // It was awesome!
tr|Je suis né en 2003.|I was born in 2003.
tr|Où étais-tu hier soir ?|Where were you last night?
tr|L'hôtel n'était pas cher.|The hotel wasn't expensive. // The hotel was cheap.
tr|Il y avait trop de monde.|There were too many people.
tr|C'était comment, ton voyage ?|How was your trip?
f|___ there any problems? (y en avait-il)|were|pluriel
f|My parents ___ (not) at home yesterday.|weren't // were not|négation pluriel
m|« Quel temps faisait-il ? »|How was the weather?;How were the weather?;What was the weather?|0|weather = singulier.
m|« Tu avais faim ? »|Did you have hungry?;Were you hungry?;Was you hungry?|1|faim → be.
e|Where was you last night?|was you|were you|you → **were** (au singulier comme au pluriel).
t|Pose la question.|The hotel was expensive.|Was the hotel expensive?
tr|Il n'y avait personne à la plage.|There was nobody on the beach. // There wasn't anybody on the beach. // There wasn't anyone on the beach. // There was no one on the beach.
f|My grandparents ___ born in Italy.|were|born → toujours was / were
tr|C'était comment, le concert ?|How was the concert?
` }
});
