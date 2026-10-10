// Lecture du jour — « Tom's Big Trip », épisodes 1 à 15.
// q = questions [question, [choix...], index de la bonne réponse]
window.READINGS = window.READINGS || [];
window.READINGS.push(
{ title: "Hello, I'm Tom", level: "A1", place: "Lille 🇫🇷",
  text: `Hello! My name is Tom. I am twenty-two years old and I live in Lille, in the north of France. I work in a sports shop. I like football, music and films.
I understand a lot of English because I watch series and videos in English every day. But when I speak, it's difficult. I am shy and I don't find the words.
Next week, I am going on a big trip. First London, then Scotland, Ireland, New York and California! I am excited and a little scared.
My plan is simple: speak English every day, make mistakes and learn. Are you ready? Let's go!`,
  fr: `Bonjour ! Je m'appelle Tom. J'ai vingt-deux ans et j'habite à Lille, dans le nord de la France. Je travaille dans un magasin de sport. J'aime le foot, la musique et les films.
Je comprends beaucoup d'anglais parce que je regarde des séries et des vidéos en anglais tous les jours. Mais quand je parle, c'est difficile. Je suis timide et je ne trouve pas les mots.
La semaine prochaine, je pars pour un grand voyage. D'abord Londres, puis l'Écosse, l'Irlande, New York et la Californie ! Je suis impatient et un peu effrayé.
Mon plan est simple : parler anglais tous les jours, faire des erreurs et apprendre. Tu es prêt ? C'est parti !`,
  glossary: { "shy": "timide", "trip": "voyage", "first": "d'abord", "then": "puis", "excited": "impatient, enthousiaste", "scared": "effrayé", "mistakes": "erreurs", "ready": "prêt", "sports shop": "magasin de sport", "words": "mots" },
  q: [["Where does Tom live?", ["In London", "In Lille", "In Paris"], 1],
      ["What is difficult for Tom?", ["Understanding English", "Speaking English", "Watching series"], 1],
      ["What is Tom's plan?", ["Speak English every day", "Speak French every day", "Stay at home"], 0]],
  speak: "Introduce yourself: What's your name? How old are you? Where do you live?" },

{ title: "At the airport", level: "A1", place: "Lille → London ✈️",
  text: `Today is the big day. Tom is at the airport with his backpack and a small suitcase. He goes to the check-in desk.
"Good morning. Can I see your passport, please?" asks the woman.
"Yes, here it is," says Tom.
"Thank you. Window or aisle seat?"
"Window, please."
"Here is your boarding pass. Gate twelve. Boarding is at ten fifteen."
Tom says "Thank you!" and smiles. His first conversation in English! It was short, but it was good.
Then he goes through security. He waits at gate twelve and drinks a coffee. At ten fifteen, he gets on the plane.`,
  fr: `Aujourd'hui, c'est le grand jour. Tom est à l'aéroport avec son sac à dos et une petite valise. Il va au comptoir d'enregistrement.
« Bonjour. Je peux voir votre passeport, s'il vous plaît ? » demande la femme.
« Oui, le voici », dit Tom.
« Merci. Côté hublot ou côté couloir ? »
« Hublot, s'il vous plaît. »
« Voici votre carte d'embarquement. Porte douze. L'embarquement est à dix heures quinze. »
Tom dit « Merci ! » et sourit. Sa première conversation en anglais ! Elle était courte, mais elle était bien.
Ensuite, il passe la sécurité. Il attend à la porte douze et boit un café. À dix heures quinze, il monte dans l'avion.`,
  glossary: { "backpack": "sac à dos", "suitcase": "valise", "check-in desk": "comptoir d'enregistrement", "here it is": "le voici", "window": "hublot / fenêtre", "aisle": "couloir (avion)", "boarding pass": "carte d'embarquement", "gate": "porte d'embarquement", "goes through": "passe (par)", "gets on": "monte dans" },
  q: [["What seat does Tom want?", ["Aisle", "Window", "Middle"], 1],
      ["What is the gate number?", ["Two", "Twenty", "Twelve"], 2],
      ["What does Tom drink at the gate?", ["A tea", "A coffee", "A beer"], 1]],
  speak: "Imagine you are at check-in. Say: 'Hello, here is my passport. A window seat, please.'" },

{ title: "Welcome to London", level: "A1", place: "London 🇬🇧",
  text: `The plane lands in London at eleven o'clock. Tom takes the train to the city centre. Then he takes the Underground. The Londoners call it "the Tube".
London is big and busy. There are red buses, black taxis and people everywhere. Everybody walks very fast!
Tom's hostel is near King's Cross station. He goes to reception.
"Hi, I have a reservation. My name is Tom Lefebvre."
"Welcome! Yes, three nights. You're in room fourteen. Here's your key card. Breakfast is from seven to ten."
"Great, thank you! What's the wifi password?"
"It's on the card. Enjoy your stay!"`,
  fr: `L'avion atterrit à Londres à onze heures. Tom prend le train jusqu'au centre-ville. Puis il prend le métro. Les Londoniens l'appellent « le Tube ».
Londres est grande et animée. Il y a des bus rouges, des taxis noirs et des gens partout. Tout le monde marche très vite !
L'auberge de Tom est près de la gare de King's Cross. Il va à la réception.
« Bonjour, j'ai une réservation. Je m'appelle Tom Lefebvre. »
« Bienvenue ! Oui, trois nuits. Vous êtes dans la chambre quatorze. Voici votre carte-clé. Le petit-déjeuner est de sept à dix heures. »
« Super, merci ! Quel est le mot de passe du wifi ? »
« Il est sur la carte. Bon séjour ! »`,
  glossary: { "lands": "atterrit", "Underground": "métro de Londres", "busy": "animé, plein de monde", "everywhere": "partout", "everybody": "tout le monde", "hostel": "auberge de jeunesse", "near": "près de", "key card": "carte-clé", "enjoy your stay": "bon séjour" },
  q: [["What do Londoners call the Underground?", ["The Metro", "The Tube", "The Subway"], 1],
      ["How many nights does Tom stay at the hostel?", ["Two", "Three", "Four"], 1],
      ["Where is the wifi password?", ["On the card", "On the wall", "On the bed"], 0]],
  speak: "You arrive at a hotel. Say your name, the number of nights, and ask for the wifi password." },

{ title: "Breakfast and a new friend", level: "A1", place: "London 🇬🇧",
  text: `In the morning, Tom goes downstairs for breakfast. There is bread, eggs, beans, cereal, tea and coffee. The English breakfast is very big!
A girl sits at his table. "Hi! Is this seat free?"
"Yes, of course," says Tom.
"I'm Maya. I'm from Toronto, in Canada. And you?"
"I'm Tom. I'm from France."
"Oh, cool! Is it your first time in London?"
"Yes, it is. And you?"
"No, it's my second time. Today I'm going to the British Museum. It's free! Do you want to come?"
Tom is nervous, but he says yes. Maya speaks slowly, and Tom understands everything.`,
  fr: `Le matin, Tom descend pour le petit-déjeuner. Il y a du pain, des œufs, des haricots, des céréales, du thé et du café. Le petit-déjeuner anglais est très copieux !
Une fille s'assoit à sa table. « Salut ! Cette place est libre ? »
« Oui, bien sûr », dit Tom.
« Je suis Maya. Je viens de Toronto, au Canada. Et toi ? »
« Je suis Tom. Je viens de France. »
« Oh, cool ! C'est ta première fois à Londres ? »
« Oui. Et toi ? »
« Non, c'est ma deuxième fois. Aujourd'hui, je vais au British Museum. C'est gratuit ! Tu veux venir ? »
Tom est nerveux, mais il dit oui. Maya parle lentement, et Tom comprend tout.`,
  glossary: { "downstairs": "en bas", "beans": "haricots", "seat": "place, siège", "free": "libre / gratuit", "second": "deuxième", "do you want to come?": "tu veux venir ?", "nervous": "nerveux", "slowly": "lentement", "everything": "tout" },
  q: [["Where is Maya from?", ["Canada", "England", "Australia"], 0],
      ["Is it Maya's first time in London?", ["Yes", "No, it's her second time", "No, it's her third time"], 1],
      ["How much is the British Museum?", ["Ten pounds", "Five pounds", "It's free"], 2]],
  speak: "Answer Maya: 'Is it your first time in London? Where are you from?'" },

{ title: "The British Museum", level: "A1", place: "London 🇬🇧",
  text: `The British Museum is huge. There are mummies from Egypt, statues from Greece and old objects from all over the world.
"Where do you want to start?" asks Maya.
"I don't know... The mummies?"
"Good idea! Let's go!"
They look at a map. The mummies are upstairs, in rooms sixty-two and sixty-three. There are a lot of people.
Tom wants to ask a question to a guide. He thinks for ten seconds in his head. Then he says: "Excuse me, where are the toilets, please?"
"Downstairs, on the left," says the guide.
"Thank you!" Small victory! Tom is happy.`,
  fr: `Le British Museum est immense. Il y a des momies d'Égypte, des statues de Grèce et de vieux objets du monde entier.
« Tu veux commencer par où ? » demande Maya.
« Je ne sais pas... Les momies ? »
« Bonne idée ! Allons-y ! »
Ils regardent un plan. Les momies sont à l'étage, dans les salles soixante-deux et soixante-trois. Il y a beaucoup de monde.
Tom veut poser une question à un guide. Il réfléchit dix secondes dans sa tête. Puis il dit : « Excusez-moi, où sont les toilettes, s'il vous plaît ? »
« En bas, à gauche », dit le guide.
« Merci ! » Petite victoire ! Tom est content.`,
  glossary: { "huge": "immense", "mummies": "momies", "all over the world": "du monde entier", "where do you want to start?": "tu veux commencer par où ?", "let's go": "allons-y", "upstairs": "à l'étage", "downstairs": "en bas", "on the left": "à gauche", "victory": "victoire" },
  q: [["Where are the mummies?", ["Downstairs", "Upstairs", "Outside"], 1],
      ["What does Tom ask the guide?", ["Where the café is", "Where the toilets are", "Where the exit is"], 1],
      ["How does Tom feel after?", ["Happy", "Sad", "Angry"], 0]],
  speak: "Ask a guide where the toilets are, and where the exit is." },

{ title: "Fish and chips", level: "A1", place: "London 🇬🇧",
  text: `It's one o'clock and Tom is hungry. Maya knows a good fish and chips shop near the museum.
"Hi, what can I get you?" asks the man.
"Fish and chips, please," says Maya.
"Same for me, please," says Tom. "And a Coke."
"Eat in or take away?"
Tom doesn't understand. Maya helps him: "He's asking if we want to eat here or outside."
"Oh! Take away, please."
"That's twenty-four pounds, please."
They pay by card and eat in a small park. The fish is hot and the chips are delicious. Tom learns a new expression: "Same for me." Very useful!`,
  fr: `Il est une heure et Tom a faim. Maya connaît un bon fish and chips près du musée.
« Bonjour, qu'est-ce que je vous sers ? » demande l'homme.
« Fish and chips, s'il vous plaît », dit Maya.
« Pareil pour moi, s'il vous plaît », dit Tom. « Et un Coca. »
« Sur place ou à emporter ? »
Tom ne comprend pas. Maya l'aide : « Il demande si on veut manger ici ou dehors. »
« Oh ! À emporter, s'il vous plaît. »
« Ça fera vingt-quatre livres, s'il vous plaît. »
Ils paient par carte et mangent dans un petit parc. Le poisson est chaud et les frites sont délicieuses. Tom apprend une nouvelle expression : « Same for me. » Très utile !`,
  glossary: { "hungry": "qui a faim", "what can I get you?": "qu'est-ce que je vous sers ?", "same for me": "pareil pour moi", "eat in": "manger sur place", "take away": "à emporter", "pounds": "livres (£)", "pay by card": "payer par carte", "useful": "utile" },
  q: [["What does Tom drink?", ["A beer", "A Coke", "Water"], 1],
      ["Where do they eat?", ["In the shop", "In a park", "At the hostel"], 1],
      ["How much is it?", ["£14", "£24", "£42"], 1]],
  speak: "Order food: 'Fish and chips, please. Same for me. Take away, please.'" },

{ title: "Lost in the Tube", level: "A1", place: "London 🇬🇧",
  text: `The next day, Maya visits a friend, so Tom is alone. He wants to go to Camden Market. He takes the Tube, but he takes the wrong line!
He gets off the train and looks at the map. He doesn't understand. He is lost.
A woman sees him. "Are you okay? Can I help you?"
"Yes, please. I want to go to Camden Town. Where is it?"
"Ah, you're on the wrong line. Take the Northern line, direction Edgware. It's three stops."
"Northern line... three stops. Thank you very much!"
"No problem. Have a nice day!"
Twenty minutes later, Tom is in Camden. People in London are kind!`,
  fr: `Le lendemain, Maya rend visite à une amie, donc Tom est seul. Il veut aller au marché de Camden. Il prend le métro, mais il se trompe de ligne !
Il descend du train et regarde le plan. Il ne comprend pas. Il est perdu.
Une femme le voit. « Ça va ? Je peux vous aider ? »
« Oui, s'il vous plaît. Je veux aller à Camden Town. C'est où ? »
« Ah, vous êtes sur la mauvaise ligne. Prenez la Northern line, direction Edgware. C'est à trois arrêts. »
« Northern line... trois arrêts. Merci beaucoup ! »
« Pas de problème. Bonne journée ! »
Vingt minutes plus tard, Tom est à Camden. Les gens à Londres sont gentils !`,
  glossary: { "alone": "seul", "wrong": "mauvais (pas le bon)", "line": "ligne", "gets off": "descend", "lost": "perdu", "stops": "arrêts", "later": "plus tard", "kind": "gentil" },
  q: [["Why is Tom alone?", ["Maya is sick", "Maya visits a friend", "Maya goes home"], 1],
      ["Which line does Tom need?", ["The Northern line", "The Central line", "The Circle line"], 0],
      ["How many stops is it?", ["Two", "Three", "Five"], 1]],
  speak: "You are lost. Ask someone: 'Excuse me, I want to go to... Where is it?'" },

{ title: "Shopping in Camden", level: "A1", place: "London 🇬🇧",
  text: `Camden Market is colourful and noisy. There are shops with clothes, old records, jewellery and food from every country.
Tom sees a black jacket. He loves it.
"Hi! Can I try it on?"
"Sure! The fitting room is at the back."
The jacket is too small. "Do you have it in a bigger size?"
"Let me check... Yes, here's a large."
The large is perfect. "How much is it?"
"Forty-five pounds."
"Hmm, it's a bit expensive. Thirty-five?"
The seller laughs. "Forty, and it's yours."
"Deal!" says Tom. He is proud: he speaks English and he negotiates!`,
  fr: `Le marché de Camden est coloré et bruyant. Il y a des boutiques de vêtements, de vieux vinyles, des bijoux et de la nourriture de tous les pays.
Tom voit une veste noire. Il l'adore.
« Bonjour ! Je peux l'essayer ? »
« Bien sûr ! La cabine d'essayage est au fond. »
La veste est trop petite. « Vous l'avez en plus grand ? »
« Je vérifie... Oui, voici un L. »
Le L est parfait. « C'est combien ? »
« Quarante-cinq livres. »
« Hmm, c'est un peu cher. Trente-cinq ? »
Le vendeur rit. « Quarante, et elle est à vous. »
« Marché conclu ! » dit Tom. Il est fier : il parle anglais et il négocie !`,
  glossary: { "colourful": "coloré", "noisy": "bruyant", "records": "disques, vinyles", "try it on": "l'essayer (vêtement)", "fitting room": "cabine d'essayage", "at the back": "au fond", "bigger size": "taille plus grande", "a bit": "un peu", "deal!": "marché conclu !", "proud": "fier" },
  q: [["What does Tom buy?", ["A T-shirt", "A jacket", "Shoes"], 1],
      ["What is the first price?", ["£35", "£40", "£45"], 2],
      ["What size is perfect?", ["Small", "Medium", "Large"], 2]],
  speak: "In a shop, ask: 'Can I try it on? Do you have it in a bigger size? How much is it?'" },

{ title: "Goodbye, London", level: "A1", place: "London → Edinburgh 🚆",
  text: `It's Tom's last morning in London. He says goodbye to Maya.
"Thank you for everything, Maya. Your help was amazing."
"You're welcome! Your English is better every day. Let's stay in touch!"
They follow each other on Instagram. Then Tom goes to King's Cross station. He buys a ticket to Edinburgh, in Scotland.
"A single to Edinburgh, please."
"That's sixty-two pounds. The train leaves from platform nine at eleven thirty."
The train journey is four and a half hours. Tom looks out of the window: green fields, sheep, small villages and the sea. Beautiful!`,
  fr: `C'est le dernier matin de Tom à Londres. Il dit au revoir à Maya.
« Merci pour tout, Maya. Ton aide a été géniale. »
« De rien ! Ton anglais est meilleur chaque jour. Restons en contact ! »
Ils se suivent sur Instagram. Puis Tom va à la gare de King's Cross. Il achète un billet pour Édimbourg, en Écosse.
« Un aller simple pour Édimbourg, s'il vous plaît. »
« Ça fait soixante-deux livres. Le train part du quai neuf à onze heures trente. »
Le trajet en train dure quatre heures et demie. Tom regarde par la fenêtre : des champs verts, des moutons, de petits villages et la mer. Magnifique !`,
  glossary: { "last": "dernier", "thank you for everything": "merci pour tout", "better": "meilleur", "stay in touch": "rester en contact", "single": "aller simple (UK)", "platform": "quai", "journey": "trajet", "fields": "champs", "sheep": "moutons" },
  q: [["Where is Tom going?", ["Dublin", "Edinburgh", "Manchester"], 1],
      ["What platform does the train leave from?", ["Nine", "Nine and three quarters", "Eleven"], 0],
      ["How long is the journey?", ["Two hours", "Four and a half hours", "Six hours"], 1]],
  speak: "Buy a train ticket: 'A single to Edinburgh, please. What time does the train leave?'" },

{ title: "Scottish accent!", level: "A1+", place: "Edinburgh 🏴",
  text: `Edinburgh is a beautiful old city with a big castle on a hill. Tom arrives at his guesthouse. The owner is a man called Angus.
"Hello there! You must be Tom. Did you have a good trip?"
Tom doesn't understand everything. The Scottish accent is very different!
"Sorry, can you repeat, please? Slowly?"
Angus smiles. "Of course, lad. Did — you — have — a good — trip?"
"Ah! Yes, it was very nice, thank you."
"Grand. Your room is upstairs. Breakfast is at eight. And tonight, try the haggis at the pub on the corner!"
"What is haggis?"
"Ha! Better not to ask. Just try it!"`,
  fr: `Édimbourg est une belle ville ancienne avec un grand château sur une colline. Tom arrive à sa maison d'hôtes. Le propriétaire est un homme qui s'appelle Angus.
« Bonjour ! Tu dois être Tom. Tu as fait bon voyage ? »
Tom ne comprend pas tout. L'accent écossais est très différent !
« Pardon, vous pouvez répéter, s'il vous plaît ? Lentement ? »
Angus sourit. « Bien sûr, mon garçon. Tu — as — fait — bon — voyage ? »
« Ah ! Oui, c'était très bien, merci. »
« Parfait. Ta chambre est à l'étage. Le petit-déjeuner est à huit heures. Et ce soir, goûte le haggis au pub du coin ! »
« C'est quoi le haggis ? »
« Ha ! Mieux vaut ne pas demander. Goûte, c'est tout ! »`,
  glossary: { "castle": "château", "hill": "colline", "guesthouse": "maison d'hôtes", "owner": "propriétaire", "you must be...": "tu dois être...", "did you have a good trip?": "tu as fait bon voyage ?", "lad": "mon gars (Écosse)", "grand": "parfait (Écosse, Irlande)", "on the corner": "au coin de la rue", "better not to ask": "mieux vaut ne pas demander" },
  q: [["What is on the hill in Edinburgh?", ["A church", "A castle", "A stadium"], 1],
      ["Why doesn't Tom understand Angus?", ["Angus speaks French", "The accent is different", "Angus whispers"], 1],
      ["What does Angus recommend?", ["Fish and chips", "Haggis", "Pizza"], 1]],
  speak: "Someone speaks too fast. Ask politely: 'Sorry, can you repeat, please? Slowly?'" },

{ title: "Haggis and a ceilidh", level: "A2", place: "Edinburgh 🏴",
  text: `In the evening, Tom goes to the pub on the corner. He orders haggis with "neeps and tatties" (turnips and potatoes). It's spicy and surprisingly good!
After dinner, there is a ceilidh — a traditional Scottish dance party. There is live music with a violin and an accordion. Everybody dances, even old people!
A woman takes Tom's hand. "Come on, you have to dance!"
"But I don't know how!"
"Nobody knows! Just follow me!"
Tom dances for two hours. He makes a lot of mistakes, but he laughs a lot. He talks with people from Scotland, Germany and Australia. He forgets to be shy.`,
  fr: `Le soir, Tom va au pub du coin. Il commande du haggis avec des « neeps and tatties » (navets et pommes de terre). C'est épicé et étonnamment bon !
Après le dîner, il y a un ceilidh — une fête de danse traditionnelle écossaise. Il y a de la musique live avec un violon et un accordéon. Tout le monde danse, même les personnes âgées !
Une femme prend la main de Tom. « Allez, tu dois danser ! »
« Mais je ne sais pas danser ! »
« Personne ne sait ! Suis-moi, c'est tout ! »
Tom danse pendant deux heures. Il fait beaucoup d'erreurs, mais il rit beaucoup. Il parle avec des gens d'Écosse, d'Allemagne et d'Australie. Il oublie d'être timide.`,
  glossary: { "orders": "commande", "turnips": "navets", "surprisingly": "étonnamment", "live music": "musique en direct", "even": "même", "come on": "allez !", "you have to": "tu dois", "nobody": "personne", "follow me": "suis-moi", "forgets": "oublie" },
  q: [["What is a ceilidh?", ["A Scottish dish", "A dance party", "A castle"], 1],
      ["How long does Tom dance?", ["Ten minutes", "One hour", "Two hours"], 2],
      ["What does Tom forget?", ["His wallet", "To be shy", "His jacket"], 1]],
  speak: "Describe the last party or concert you went to. Was it fun?" },

{ title: "Climbing Arthur's Seat", level: "A2", place: "Edinburgh 🏴",
  text: `Arthur's Seat is a small mountain in the middle of Edinburgh. Tom wakes up early to climb it.
The weather is typical for Scotland: in the morning it's sunny, then it rains, then it's windy, then sunny again! Tom is happy he has his new jacket from Camden.
At the top, he meets an old man with a dog.
"Lovely view, isn't it?" says the man.
"Yes, it's amazing! You can see all the city and the sea."
"Where are you from, son?"
"France. I'm travelling for one month."
"Good for you! When I was young, I travelled a lot too. Enjoy every day!"
Tom thinks about this advice all day.`,
  fr: `Arthur's Seat est une petite montagne au milieu d'Édimbourg. Tom se lève tôt pour la gravir.
Le temps est typique de l'Écosse : le matin il fait soleil, puis il pleut, puis il y a du vent, puis du soleil à nouveau ! Tom est content d'avoir sa nouvelle veste de Camden.
Au sommet, il rencontre un vieil homme avec un chien.
« Jolie vue, n'est-ce pas ? » dit l'homme.
« Oui, c'est incroyable ! On voit toute la ville et la mer. »
« D'où viens-tu, fiston ? »
« De France. Je voyage pendant un mois. »
« Tant mieux pour toi ! Quand j'étais jeune, j'ai beaucoup voyagé aussi. Profite de chaque jour ! »
Tom pense à ce conseil toute la journée.`,
  glossary: { "in the middle of": "au milieu de", "wakes up": "se réveille", "to climb": "gravir, escalader", "windy": "venteux", "at the top": "au sommet", "lovely": "joli, charmant", "isn't it?": "n'est-ce pas ?", "son": "fiston", "good for you!": "tant mieux pour toi !", "advice": "conseil" },
  q: [["What is Arthur's Seat?", ["A small mountain", "A castle", "A pub"], 0],
      ["What is the weather like?", ["Always sunny", "It changes a lot", "It snows"], 1],
      ["How long is Tom travelling?", ["One week", "Two weeks", "One month"], 2]],
  speak: "What's the weather like today where you are? Describe it." },

{ title: "Ferry to Ireland", level: "A2", place: "Scotland → Dublin ⛴️",
  text: `Tom takes a bus to the coast and then a ferry to Ireland. The ferry is big, with restaurants, shops and even a small cinema.
The sea is rough and Tom feels sick. He goes to the café and asks for help.
"Excuse me, do you have something for seasickness?"
"Yes, we sell tablets at the shop. And try to look at the horizon. It helps."
"Thank you. Can I have a ginger tea too?"
"Sure, that's two euros fifty."
Tom sits near the window and looks at the horizon. After thirty minutes, he feels better. Two hours later, the ferry arrives in Dublin. A new country, a new adventure!`,
  fr: `Tom prend un bus jusqu'à la côte, puis un ferry pour l'Irlande. Le ferry est grand, avec des restaurants, des boutiques et même un petit cinéma.
La mer est agitée et Tom a mal au cœur. Il va au café et demande de l'aide.
« Excusez-moi, vous avez quelque chose contre le mal de mer ? »
« Oui, on vend des comprimés à la boutique. Et essayez de regarder l'horizon. Ça aide. »
« Merci. Je peux avoir un thé au gingembre aussi ? »
« Bien sûr, ça fait deux euros cinquante. »
Tom s'assoit près de la fenêtre et regarde l'horizon. Après trente minutes, il se sent mieux. Deux heures plus tard, le ferry arrive à Dublin. Un nouveau pays, une nouvelle aventure !`,
  glossary: { "coast": "côte", "rough": "agitée (mer)", "feels sick": "a la nausée", "seasickness": "mal de mer", "tablets": "comprimés", "try to": "essaie de", "it helps": "ça aide", "ginger": "gingembre", "feels better": "se sent mieux" },
  q: [["Why does Tom feel sick?", ["He ate too much", "The sea is rough", "He is tired"], 1],
      ["What does Tom drink?", ["Coffee", "Ginger tea", "Water"], 1],
      ["What currency do they use on the ferry?", ["Pounds", "Dollars", "Euros"], 2]],
  speak: "You don't feel well. Say: 'Excuse me, I feel sick. Do you have something for...?'" },

{ title: "The craic in Dublin", level: "A2", place: "Dublin 🇮🇪",
  text: `Dublin is smaller than London, but it's full of life. The streets are full of pubs, and in every pub there is music.
Tom stays with Ciarán, a guy from Couchsurfing. Ciarán is twenty-five and works as a nurse.
"Welcome to Dublin, Tom! Tonight we're going to Temple Bar. The craic is great there!"
"Sorry, what is 'the craic'?"
"Ha! It's an Irish word. It means fun, good times, good conversation. Like: 'How's the craic?' means 'How are you? What's new?'"
"How's the craic?" repeats Tom with a terrible accent.
Ciarán laughs. "Not bad! We'll make an Irishman out of you!"`,
  fr: `Dublin est plus petite que Londres, mais elle est pleine de vie. Les rues sont pleines de pubs, et dans chaque pub il y a de la musique.
Tom loge chez Ciarán, un gars de Couchsurfing. Ciarán a vingt-cinq ans et travaille comme infirmier.
« Bienvenue à Dublin, Tom ! Ce soir, on va à Temple Bar. Il y a une super ambiance là-bas ! »
« Pardon, c'est quoi "the craic" ? »
« Ha ! C'est un mot irlandais. Ça veut dire l'amusement, les bons moments, la bonne conversation. Par exemple : "How's the craic?" veut dire "Comment ça va ? Quoi de neuf ?" »
« How's the craic? » répète Tom avec un accent horrible.
Ciarán rit. « Pas mal ! On va faire de toi un Irlandais ! »`,
  glossary: { "smaller than": "plus petit que", "full of life": "plein de vie", "stays with": "loge chez", "guy": "gars, mec", "nurse": "infirmier/infirmière", "the craic": "l'ambiance, le fun (Irlande)", "it means": "ça veut dire", "what's new?": "quoi de neuf ?", "not bad": "pas mal" },
  q: [["What is Ciarán's job?", ["Doctor", "Nurse", "Teacher"], 1],
      ["What does 'the craic' mean?", ["Fun and good times", "A type of beer", "A street"], 0],
      ["Is Dublin bigger than London?", ["Yes", "No, it's smaller", "They are the same"], 1]],
  speak: "Explain a French expression to an English speaker: 'It means...'" },

{ title: "Ordering at the bar", level: "A2", place: "Dublin 🇮🇪",
  text: `In the pub, it's Tom's turn to buy drinks. In Ireland and the UK, people often buy "rounds": one person pays for the drinks of the group, then the next person pays for the next round.
The bar is very busy. Tom waits and then catches the barman's eye.
"What can I get you?"
"Two pints, please. And a lemonade for my friend Sarah."
"Pints of what?"
"Oh, sorry... Of Guinness, please."
"Coming right up. That's sixteen euros twenty."
Tom brings the drinks to the table. "Cheers!" says everybody. The music starts, and a man starts to sing an old Irish song. The whole pub sings with him.`,
  fr: `Au pub, c'est au tour de Tom d'acheter les boissons. En Irlande et au Royaume-Uni, les gens paient souvent des « tournées » : une personne paie les boissons du groupe, puis la personne suivante paie la tournée suivante.
Le bar est plein. Tom attend, puis attire le regard du barman.
« Qu'est-ce que je vous sers ? »
« Deux pintes, s'il vous plaît. Et une limonade pour mon amie Sarah. »
« Des pintes de quoi ? »
« Oh, pardon... De Guinness, s'il vous plaît. »
« Ça arrive tout de suite. Ça fait seize euros vingt. »
Tom apporte les boissons à la table. « Santé ! » dit tout le monde. La musique commence, et un homme se met à chanter une vieille chanson irlandaise. Tout le pub chante avec lui.`,
  glossary: { "it's Tom's turn": "c'est au tour de Tom", "round": "tournée", "next": "suivant", "catches the barman's eye": "attire le regard du barman", "pint": "pinte (≈ 0,57 l)", "coming right up": "ça arrive tout de suite", "brings": "apporte", "the whole pub": "tout le pub" },
  q: [["What is a 'round'?", ["A type of beer", "One person pays for the group", "A song"], 1],
      ["What does Sarah drink?", ["Guinness", "Lemonade", "Wine"], 1],
      ["What happens at the end?", ["Everybody leaves", "Everybody sings", "Tom dances"], 1]],
  speak: "Order drinks for your friends: 'Two..., please. And a... for my friend.'" }
);
