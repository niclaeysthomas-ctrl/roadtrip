// Phrases à traduire FR → EN.
// Format : français|réponse anglaise principale // variantes acceptées séparées par " // "
// Les contractions (I'm = I am, don't = do not...) et la ponctuation sont gérées automatiquement.
window.PHRASES = [
{ id: "p1", level: 1, name: "Se présenter", tip: "« Je suis » = I am (I'm). « J'ai 20 ans » = I am 20 (on utilise BE pour l'âge, pas HAVE !)", items: `
Je m'appelle Hugo.|My name is Hugo. // I'm Hugo. // I am Hugo.
Je suis français.|I'm French.
J'ai vingt-deux ans.|I'm twenty-two. // I'm twenty-two years old. // I am 22. // I'm 22 years old.
J'habite à Lille.|I live in Lille.
Je viens de France.|I'm from France. // I come from France.
Je suis en vacances.|I'm on holiday. // I'm on vacation.
Je parle un peu anglais.|I speak a little English.
Je ne parle pas bien anglais.|I don't speak English well. // My English isn't very good.
Je suis étudiant.|I'm a student.
Je travaille dans un restaurant.|I work in a restaurant.
C'est ma première fois ici.|It's my first time here.
Je suis ici pour une semaine.|I'm here for a week. // I'm here for one week.
Enchanté !|Nice to meet you!
Comment tu t'appelles ?|What's your name?
D'où viens-tu ?|Where are you from?
Tu parles français ?|Do you speak French?
Comment ça va ?|How are you?
Je vais bien, merci. Et toi ?|I'm fine, thanks. And you? // I'm good, thanks. And you? // I'm fine, thank you. And you?
` },

{ id: "p2", level: 1, name: "Survie & politesse", tip: "« Can you... ? » est la formule magique pour demander quelque chose poliment.",items: `
Pardon, je ne comprends pas.|Sorry, I don't understand.
Vous pouvez répéter, s'il vous plaît ?|Can you repeat, please? // Could you repeat, please? // Can you repeat that, please?
Vous pouvez parler plus lentement ?|Can you speak more slowly? // Could you speak more slowly? // Can you speak slower?
Comment dit-on « clé » en anglais ?|How do you say "clé" in English?
Qu'est-ce que ça veut dire ?|What does it mean? // What does that mean?
Vous pouvez m'aider ?|Can you help me? // Could you help me?
Excusez-moi, où sont les toilettes ?|Excuse me, where is the toilet? // Excuse me, where are the toilets? // Excuse me, where is the bathroom?
Merci beaucoup !|Thank you very much! // Thanks a lot!
Pas de problème.|No problem.
Je ne sais pas.|I don't know.
Je suis perdu.|I'm lost.
Vous pouvez l'écrire ?|Can you write it down? // Could you write it down? // Can you write it?
Une minute, s'il vous plaît.|One minute, please. // Just a minute, please.
Ce n'est pas grave.|It's okay. // It doesn't matter. // No problem.
` },

{ id: "p3", level: 1, name: "Au café & au restaurant", tip: "Pour commander : « I'd like... » (je voudrais) ou « Can I have... ? » (je peux avoir... ?).",items: `
Je voudrais un café, s'il vous plaît.|I'd like a coffee, please. // Can I have a coffee, please?
Une table pour deux, s'il vous plaît.|A table for two, please.
Je peux voir la carte ?|Can I see the menu? // Could I see the menu?
L'addition, s'il vous plaît.|The bill, please. // The check, please. // Can I have the bill, please? // Can we have the bill, please?
C'est délicieux !|It's delicious!
Je suis végétarien.|I'm vegetarian. // I'm a vegetarian.
Je suis allergique aux arachides.|I'm allergic to peanuts.
Sans glaçons, s'il vous plaît.|No ice, please. // Without ice, please.
De l'eau du robinet, s'il vous plaît.|Tap water, please. // Some tap water, please.
Je vais prendre le poulet.|I'll have the chicken.
Qu'est-ce que vous recommandez ?|What do you recommend?
C'est épicé ?|Is it spicy?
Sur place ou à emporter ?|Eat in or take away? // For here or to go?
À emporter, s'il vous plaît.|To go, please. // Take away, please.
Je peux payer par carte ?|Can I pay by card?
Le service est compris ?|Is service included? // Is the tip included?
Encore un peu de pain, s'il vous plaît.|More bread, please. // Some more bread, please. // A little more bread, please.
On a réservé au nom de Martin.|We have a reservation under Martin. // We have a booking under Martin. // We have a reservation for Martin.
` },

{ id: "p4", level: 1, name: "Directions & transports", tip: "« How do I get to... ? » = Comment je vais à... ? C'est LA phrase du voyageur.",items: `
Où est la gare ?|Where is the station? // Where is the train station?
Comment je vais à l'aéroport ?|How do I get to the airport?
C'est loin d'ici ?|Is it far from here? // Is it far?
C'est à côté.|It's near. // It's close. // It's nearby.
Tournez à gauche.|Turn left.
Allez tout droit.|Go straight on. // Go straight. // Go straight ahead.
C'est à droite.|It's on the right.
Un billet pour Londres, s'il vous plaît.|A ticket to London, please. // One ticket to London, please.
Un aller-retour, s'il vous plaît.|A return ticket, please. // A round trip, please. // A round-trip ticket, please.
À quelle heure part le train ?|What time does the train leave?
Ce bus va au centre-ville ?|Does this bus go to the city centre? // Does this bus go downtown? // Does this bus go to the town centre?
Où est l'arrêt de bus ?|Where is the bus stop?
Je descends au prochain arrêt.|I get off at the next stop. // I'm getting off at the next stop.
Combien de temps ça prend ?|How long does it take?
Vous pouvez me montrer sur la carte ?|Can you show me on the map? // Could you show me on the map?
Il y a un distributeur près d'ici ?|Is there an ATM near here? // Is there a cash machine near here? // Is there an ATM nearby?
` },

{ id: "p5", level: 1, name: "À l'hôtel", tip: "« There is / There are » = il y a. Question : « Is there... ? / Are there... ? »",items: `
J'ai une réservation.|I have a reservation. // I have a booking.
Vous avez une chambre pour ce soir ?|Do you have a room for tonight?
Pour deux nuits.|For two nights.
Le petit-déjeuner est inclus ?|Is breakfast included?
Quel est le mot de passe du wifi ?|What's the wifi password? // What is the wifi password?
La douche ne marche pas.|The shower doesn't work. // The shower isn't working.
Je peux avoir une autre serviette ?|Can I have another towel? // Could I have another towel?
À quelle heure faut-il libérer la chambre ?|What time is check-out? // What time do I have to check out?
Je peux laisser mon sac ici ?|Can I leave my bag here?
Il y a un ascenseur ?|Is there a lift? // Is there an elevator?
La chambre est trop bruyante.|The room is too noisy.
J'ai perdu ma clé.|I lost my key. // I've lost my key.
` },

{ id: "p6", level: 2, name: "Shopping", tip: "« How much is it? » (singulier) / « How much are they? » (pluriel).",items: `
C'est combien ?|How much is it? // How much is this?
C'est trop cher.|It's too expensive.
Je regarde seulement, merci.|I'm just looking, thanks. // I'm just looking, thank you.
Je peux l'essayer ?|Can I try it on?
Vous l'avez en plus grand ?|Do you have it in a bigger size? // Do you have a bigger size?
Vous l'avez dans une autre couleur ?|Do you have it in another colour? // Do you have it in another color?
Je le prends.|I'll take it.
Je peux avoir un sac ?|Can I have a bag? // Could I have a bag?
Vous acceptez les cartes ?|Do you take cards? // Do you accept cards? // Do you take card?
Gardez la monnaie.|Keep the change.
Où est la cabine d'essayage ?|Where is the fitting room? // Where's the changing room?
C'est un cadeau pour ma mère.|It's a present for my mother. // It's a gift for my mother. // It's a gift for my mom. // It's a present for my mum.
` },

{ id: "p7", level: 2, name: "Parler de ce qu'on aime", tip: "Après like / love / hate, on met le verbe en -ing : I like travelling.",items: `
J'adore voyager.|I love travelling. // I love traveling. // I love to travel.
J'aime beaucoup cette ville.|I really like this city. // I like this city a lot.
Je n'aime pas le café.|I don't like coffee.
Je préfère le thé.|I prefer tea.
Qu'est-ce que tu aimes faire ?|What do you like doing? // What do you like to do?
J'écoute beaucoup de musique anglaise.|I listen to a lot of English music.
Je regarde des séries en anglais.|I watch series in English. // I watch TV shows in English. // I watch shows in English.
Mon film préféré est Interstellar.|My favourite film is Interstellar. // My favorite movie is Interstellar. // My favourite movie is Interstellar.
Je joue au foot le week-end.|I play football at the weekend. // I play soccer on the weekend. // I play football on weekends.
Ça a l'air génial !|It looks amazing! // That sounds great! // It sounds great! // That looks amazing!
Moi aussi !|Me too!
Moi non plus.|Me neither.
` },

{ id: "p8", level: 2, name: "Ce qui se passe maintenant", tip: "Présent continu (BE + verbe-ing) pour ce qui se passe en ce moment : I am waiting.",items: `
J'attends le bus.|I'm waiting for the bus.
Il pleut.|It's raining.
Qu'est-ce que tu fais ?|What are you doing?
Je cherche mon hôtel.|I'm looking for my hotel.
On arrive !|We're coming! // We're arriving!
Je suis en train de manger.|I'm eating.
Ils regardent le match.|They're watching the game. // They're watching the match.
Je loge chez un ami.|I'm staying with a friend. // I'm staying at a friend's.
Tu m'écoutes ?|Are you listening to me?
Le bus arrive.|The bus is coming.
` },

{ id: "p9", level: 2, name: "Projets & futur", tip: "« Going to » pour un projet : I'm going to visit London. « Will » pour une décision sur le moment : I'll take it.",items: `
Demain, je vais visiter le musée.|Tomorrow I'm going to visit the museum. // I'm going to visit the museum tomorrow.
On va à la plage cet après-midi.|We're going to the beach this afternoon.
Qu'est-ce que tu fais ce soir ?|What are you doing tonight? // What are you doing this evening?
Je pars vendredi.|I'm leaving on Friday. // I leave on Friday.
Je vais louer une voiture.|I'm going to rent a car.
On se voit plus tard ?|See you later? // Shall we meet later?
Je t'appelle demain.|I'll call you tomorrow.
J'espère revenir l'année prochaine.|I hope to come back next year.
Tu veux venir avec nous ?|Do you want to come with us?
On pourrait aller boire un verre.|We could go for a drink. // We could have a drink.
` },

{ id: "p10", level: 3, name: "Raconter (passé)", tip: "Prétérit : verbes réguliers en -ed (visited), irréguliers à apprendre (go → went, see → saw, eat → ate).",items: `
Je suis arrivé hier.|I arrived yesterday.
On a visité le château.|We visited the castle.
Je suis allé à New York l'année dernière.|I went to New York last year.
J'ai vu un super concert.|I saw a great concert. // I saw an amazing concert.
On a mangé dans un petit restaurant.|We ate in a small restaurant. // We had dinner in a small restaurant. // We ate at a small restaurant.
J'ai raté mon train.|I missed my train.
J'ai perdu mon portefeuille.|I lost my wallet. // I've lost my wallet.
C'était génial !|It was amazing! // It was great! // It was awesome!
Le vol était long.|The flight was long.
Tu as passé une bonne journée ?|Did you have a good day? // Did you have a nice day?
Je n'ai pas compris.|I didn't understand.
On a beaucoup marché aujourd'hui.|We walked a lot today.
` },

{ id: "p11", level: 3, name: "Problèmes & urgences", tip: "« I need... » = j'ai besoin de... Simple et efficace.",items: `
J'ai besoin d'un médecin.|I need a doctor.
Appelez une ambulance !|Call an ambulance!
J'ai mal à la tête.|I have a headache. // I've got a headache.
J'ai mal ici.|It hurts here. // I have a pain here.
On m'a volé mon téléphone.|My phone was stolen. // Someone stole my phone.
Où est la pharmacie la plus proche ?|Where is the nearest pharmacy? // Where's the nearest chemist?
Mon vol est annulé.|My flight is cancelled. // My flight has been cancelled. // My flight is canceled.
Ma valise n'est pas arrivée.|My suitcase didn't arrive. // My suitcase hasn't arrived. // My luggage didn't arrive.
Je ne me sens pas bien.|I don't feel well. // I don't feel good.
J'ai une assurance voyage.|I have travel insurance.
Où est l'ambassade de France ?|Where is the French embassy?
Il y a une erreur sur l'addition.|There's a mistake on the bill. // There's a mistake in the bill. // There's a mistake on the check.
` },

{ id: "p12", level: 3, name: "Discuter avec des locaux", tip: "Pour relancer une conversation : « What about you? » (et toi ?) et « Really? » (c'est vrai ?).",items: `
Tu habites ici depuis longtemps ?|Have you lived here for a long time? // Have you lived here long?
Qu'est-ce que tu me conseilles de visiter ?|What do you recommend I visit? // What should I visit?
Tu connais un bon bar ?|Do you know a good bar?
C'est la première fois que je viens en Angleterre.|It's my first time in England. // This is my first time in England.
Les gens sont très sympas ici.|People are very nice here. // The people are very friendly here. // People are really friendly here.
Il fait toujours aussi froid ?|Is it always this cold?
Je dois y aller, ravi de t'avoir rencontré !|I have to go, nice to meet you! // I have to go, it was nice to meet you! // I've got to go, nice meeting you!
On peut rester en contact ?|Can we stay in touch? // Can we keep in touch?
Tu es sur Instagram ?|Are you on Instagram?
Ça fait combien de temps que tu apprends le français ?|How long have you been learning French?
Je comprends mieux que je ne parle.|I understand better than I speak.
Tu peux me corriger si je fais des erreurs.|You can correct me if I make mistakes. // Feel free to correct me if I make mistakes.
` }
];
