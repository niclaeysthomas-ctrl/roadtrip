// Situations de voyage à jouer À L'ORAL.
// Chaque ligne : ce que dit l'autre personne|ce que TU dois dire (en français)|réponse modèle en anglais
window.SITUATIONS = [
{ id: "s1", icon: "🛂", title: "Contrôle des passeports", who: "Agent de l'immigration", lines: `
Good afternoon. Passport, please.|Donne ton passeport : « Le voici. »|Here you are. // Here it is.
What's the purpose of your visit?|Dis que c'est pour le tourisme, tu es en vacances.|Tourism. I'm on holiday. // I'm here on vacation.
How long are you staying?|Dis que tu restes deux semaines.|Two weeks. // I'm staying for two weeks.
Where are you staying?|Dis que tu loges dans un hôtel à Manhattan.|At a hotel in Manhattan. // I'm staying at a hotel in Manhattan.
Are you travelling alone?|Dis que non, tu voyages avec ton frère.|No, I'm travelling with my brother.
Do you have a return ticket?|Dis oui, et que ton vol retour est le 15 août.|Yes, my return flight is on August fifteenth. // Yes, I fly back on the fifteenth of August.
Okay. Enjoy your stay.|Remercie et souhaite une bonne journée.|Thank you, have a nice day!
` },
{ id: "s2", icon: "🏨", title: "Arrivée à l'hôtel", who: "Réceptionniste", lines: `
Hi, welcome! How can I help you?|Dis que tu as une réservation au nom de Martin.|Hi, I have a reservation under the name Martin. // I have a booking for Martin.
Let me check... Yes, a double room for three nights. Can I see your ID?|Donne ta carte d'identité : « Voilà. »|Here you are.
Thank you. Breakfast is from seven to ten.|Demande si le petit-déjeuner est inclus.|Is breakfast included?
Yes, it's included. Your room is on the fourth floor.|Demande s'il y a un ascenseur.|Is there a lift? // Is there an elevator?
Yes, just on the right. Anything else?|Demande le mot de passe du wifi.|What's the wifi password?
It's on your key card. Enjoy your stay!|Remercie.|Thank you very much!
` },
{ id: "s3", icon: "🍽️", title: "Au restaurant", who: "Serveur / serveuse", lines: `
Good evening! Do you have a reservation?|Dis non, et demande une table pour deux.|No, we don't. A table for two, please.
Sure, follow me. Here's the menu. Something to drink?|Commande une eau gazeuse et une bière.|A sparkling water and a beer, please.
Are you ready to order?|Demande ce qu'il / elle recommande.|What do you recommend?
The fish is very good today.|Dis que tu prends le poisson, avec des frites.|I'll have the fish, with chips, please. // I'll take the fish with fries, please.
How is everything?|Dis que c'est délicieux.|It's delicious, thank you! // Everything is great, thanks!
Would you like a dessert?|Dis non merci, et demande l'addition.|No, thank you. Can we have the bill, please? // No thanks. The check, please.
Here you go. Cash or card?|Dis que tu paies par carte.|By card, please. // Card, please.
` },
{ id: "s4", icon: "🗺️", title: "Demander son chemin", who: "Un passant", lines: `
Hi! You look lost. Can I help?|Dis oui, tu cherches la gare.|Yes, please. I'm looking for the station. // Yes, I'm looking for the train station.
The station? It's not far. Go straight on, then turn left at the lights.|Demande de répéter plus lentement.|Sorry, can you repeat more slowly, please? // Could you say that again slowly?
Sure. Straight on... then left... at the traffic lights.|Demande combien de temps ça prend à pied.|How long does it take on foot? // How long does it take to walk?
About ten minutes.|Demande s'il y a un bus.|Is there a bus?
Yes, the number 12, but walking is faster.|Remercie chaleureusement.|Thank you so much! // Thanks a lot for your help!
` },
{ id: "s5", icon: "🎫", title: "Acheter un billet de train", who: "Guichetier", lines: `
Next, please! Where to?|Demande un billet pour Oxford.|One ticket to Oxford, please. // A ticket to Oxford, please.
Single or return?|Dis aller-retour.|Return, please. // A return ticket, please.
When are you coming back?|Dis que tu reviens ce soir.|This evening. // I'm coming back tonight.
That's twenty-eight pounds.|Demande s'il y a une réduction étudiant.|Is there a student discount?
Do you have a student card?|Dis oui et montre-la.|Yes, here it is.
Okay, that's nineteen pounds then.|Demande de quel quai part le train.|Which platform does the train leave from?
Platform six, at ten past ten.|Remercie.|Thank you!
` },
{ id: "s6", icon: "🛍️", title: "Dans un magasin de vêtements", who: "Vendeur / vendeuse", lines: `
Hi there! Can I help you?|Dis que tu regardes seulement.|I'm just looking, thanks.
... Do you need any help?|Montre une veste et demande si tu peux l'essayer.|Yes, can I try this jacket on? // Can I try on this jacket?
Of course. The fitting rooms are at the back.|(Elle est trop petite.) Demande une taille plus grande.|It's too small. Do you have a bigger size? // Do you have it in a larger size?
Here's a large.|Demande le prix.|How much is it?
It's sixty dollars, but it's twenty percent off today.|Dis que tu la prends.|Great, I'll take it.
Would you like a bag?|Dis non merci, tu as un sac.|No, thanks. I have a bag.
` },
{ id: "s7", icon: "💊", title: "À la pharmacie", who: "Pharmacien(ne)", lines: `
Hello, what can I do for you?|Dis que tu as mal à la tête et de la fièvre.|I have a headache and a fever.
Since when?|Dis depuis hier soir.|Since last night. // Since yesterday evening.
Are you allergic to anything?|Dis non, tu n'as pas d'allergies.|No, I don't have any allergies.
Take these tablets, two every six hours.|Fais répéter : combien de cachets ?|Sorry, how many tablets? // Sorry, can you repeat? How many?
Two tablets, every six hours, with water.|Demande le prix.|How much is it? // How much are they?
Seven fifty.|Remercie et paie.|Here you are. Thank you!
` },
{ id: "s8", icon: "🍻", title: "Discuter dans un bar", who: "Un local sympa", lines: `
Hey! Is this seat taken?|Dis non, il / elle peut s'asseoir.|No, it's free. Go ahead! // No, please sit down.
Thanks! I'm Jack. Where are you from?|Présente-toi : ton prénom et ton pays.|Nice to meet you, I'm Tom. I'm from France.
France! Cool. What are you doing here?|Dis que tu voyages pendant deux semaines.|I'm travelling for two weeks. // I'm on a two-week trip.
Nice! Do you like it here?|Dis que tu adores la ville et que les gens sont sympas.|I love the city, and the people are really nice.
Your English is good!|Remercie, et dis que tu apprends.|Thank you! I'm learning. // Thanks, I'm still learning.
What do you do back home?|Dis ton métier (ou que tu es étudiant).|I work in a shop. // I'm a student.
Cool. Do you want another drink?|Accepte et propose de payer la tournée.|Yes, please! This round is on me. // Sure! My round!
` },
{ id: "s9", icon: "🚕", title: "Prendre un taxi", who: "Chauffeur de taxi", lines: `
Hi! Where to?|Donne l'adresse : 25 Baker Street.|Twenty-five Baker Street, please.
Okay. Are you in a hurry?|Dis oui, tu as un train dans trente minutes.|Yes, I have a train in thirty minutes.
No problem, it's not far. First time in London?|Dis oui, et que c'est magnifique.|Yes, it's my first time. It's beautiful!
Here we are. That's fifteen pounds.|Demande si tu peux payer par carte.|Can I pay by card?
Sure.|Donne un pourboire : « Gardez la monnaie / arrondissez à 17. »|Keep the change. // Make it seventeen.
` },
{ id: "s10", icon: "😩", title: "Un problème à l'hôtel", who: "Réceptionniste", lines: `
Hello, how can I help?|Dis que la douche ne marche pas dans ta chambre.|The shower doesn't work in my room.
Oh, I'm sorry. What's your room number?|Dis chambre 214.|Room two-one-four.
I'll send someone. Anything else?|Dis aussi que la chambre est très bruyante.|Also, the room is very noisy.
I'm sorry about that. Do you want to change rooms?|Dis oui, si possible une chambre calme.|Yes, please. A quiet room, if possible.
I have a room on the sixth floor, very quiet.|Dis que c'est parfait.|Perfect, thank you!
` },
{ id: "s11", icon: "✈️", title: "Vol annulé", who: "Agent de la compagnie", lines: `
Hello, how can I help you?|Dis que ton vol pour Paris est annulé.|My flight to Paris is cancelled. // My flight to Paris was cancelled.
Let me see your booking reference.|Donne la référence : « La voici. »|Here it is.
The next flight is tomorrow morning at seven.|Demande s'il y a un vol ce soir.|Is there a flight tonight? // Is there a flight this evening?
I'm afraid not. We can give you a hotel for the night.|Demande si le dîner est inclus.|Is dinner included?
Yes, here's a voucher for dinner.|Demande comment aller à l'hôtel.|How do I get to the hotel?
There's a free shuttle bus outside, at door four.|Remercie.|Thank you for your help.
` },
{ id: "s12", icon: "📸", title: "Demander une photo", who: "Un touriste", lines: `
(Tu vois quelqu'un près d'un monument.)|Demande poliment s'il / elle peut te prendre en photo.|Excuse me, can you take a photo of me, please? // Sorry, could you take a picture of me?
Sure! Here?|Dis : avec le pont derrière moi.|Yes, with the bridge behind me.
Okay... one, two, three! Do you want another one?|Dis oui, en mode portrait (vertical).|Yes, please. Vertical, please.
Here you go!|Remercie et propose de lui prendre une photo aussi.|Thank you! Do you want me to take one of you? // Thanks! Can I take one of you?
` }
];

// Guide de survie : les phrases à connaître par cœur.
window.SURVIVAL = [
{ title: "Les 10 phrases magiques", items: [
["Sorry, I don't understand.", "Pardon, je ne comprends pas."],
["Can you repeat, please?", "Vous pouvez répéter, s'il vous plaît ?"],
["Can you speak more slowly?", "Vous pouvez parler plus lentement ?"],
["How do you say ... in English?", "Comment dit-on ... en anglais ?"],
["What does ... mean?", "Que veut dire ... ?"],
["Can you help me, please?", "Vous pouvez m'aider ?"],
["Where is ...?", "Où est ... ?"],
["How much is it?", "C'est combien ?"],
["I'd like ..., please.", "Je voudrais ..., s'il vous plaît."],
["Can I have ...?", "Je peux avoir ... ?"]]},
{ title: "Gagner du temps pour réfléchir", items: [
["Let me think...", "Laisse-moi réfléchir..."],
["How can I say...", "Comment dire..."],
["It's like a...", "C'est comme un..."],
["I mean...", "Je veux dire..."],
["You know what I mean?", "Tu vois ce que je veux dire ?"],
["Sorry, my English isn't perfect.", "Désolé, mon anglais n'est pas parfait."]]},
{ title: "Réagir naturellement", items: [
["Really?", "C'est vrai ?"],
["That's great!", "C'est super !"],
["No way!", "Pas possible !"],
["Me too!", "Moi aussi !"],
["Me neither.", "Moi non plus."],
["I see.", "Je vois."],
["Sounds good!", "Ça me va / Ça marche !"],
["Never mind.", "Laisse tomber / Pas grave."],
["What about you?", "Et toi ?"]]},
{ title: "Urgences", items: [
["Help!", "À l'aide !"],
["Call an ambulance!", "Appelez une ambulance !"],
["Call the police!", "Appelez la police !"],
["I need a doctor.", "J'ai besoin d'un médecin."],
["I lost my passport.", "J'ai perdu mon passeport."],
["My wallet was stolen.", "On m'a volé mon portefeuille."],
["Where is the nearest hospital?", "Où est l'hôpital le plus proche ?"],
["Emergency numbers: 999 (UK) · 911 (US, Canada) · 112 (Europe) · 000 (Australia)", "Numéros d'urgence"]]},
{ title: "Faux amis à éviter", items: [
["actually = en fait", "≠ actuellement (currently)"],
["library = bibliothèque", "≠ librairie (bookshop)"],
["sensible = raisonnable", "≠ sensible (sensitive)"],
["to attend = assister à", "≠ attendre (to wait)"],
["deception = tromperie", "≠ déception (disappointment)"],
["a coin = une pièce", "≠ un coin (a corner)"],
["a car = une voiture", "≠ un car (a coach)"],
["to rest = se reposer", "≠ rester (to stay)"],
["chips (UK) = frites", "chips (US) = chips"],
["pants (UK) = slip", "pants (US) = pantalon"]]}
];

// Prononciation : les pièges des francophones.
window.PRONUNCIATION = [
{ title: "Le « th »", tip: "Mets le bout de la langue entre les dents et souffle. Ce n'est ni « z » ni « f » ni « s ».", examples: ["think", "three", "thank you", "the", "this", "brother", "mother", "with"] },
{ title: "Le « h » se prononce !", tip: "Souffle comme sur une vitre pour faire de la buée. hat ≠ at, hair ≠ air.", examples: ["hello", "hotel", "house", "happy", "hungry", "help", "how", "here"] },
{ title: "i court vs ee long", tip: "« ship » (bateau, son court) ≠ « sheep » (mouton, son long). « live » ≠ « leave ».", examples: ["ship", "sheep", "live", "leave", "sit", "seat", "fill", "feel"] },
{ title: "Les finales en -ed", tip: "Après t / d → « id » (wanted). Sinon on n'ajoute PAS de syllabe : walked = « walkt », played = « playd ».", examples: ["walked", "played", "wanted", "needed", "stopped", "visited", "arrived", "asked"] },
{ title: "L'accent tonique", tip: "En anglais, une syllabe est plus forte que les autres. En français tout est plat : force-toi à exagérer !", examples: ["HOtel", "comFORtable", "reSTAUrant", "baNAna", "PHOtograph", "phoTOgraphy", "ENglish", "toMOrrow"] },
{ title: "Le « r » anglais", tip: "Pas de « r » qui racle la gorge. La langue recule sans toucher le palais. En anglais britannique, on ne le prononce souvent pas en fin de mot (car, water).", examples: ["red", "right", "really", "room", "car", "water", "very", "sorry"] },
{ title: "Les mots qui piègent", tip: "Ils ne se prononcent pas comme ils s'écrivent.", examples: ["women", "Wednesday", "island", "receipt", "comfortable", "vegetable", "clothes", "friend"] },
{ title: "Les formes courtes (contractions)", tip: "À l'oral, on contracte presque toujours. Ça sonne beaucoup plus naturel.", examples: ["I'm", "you're", "it's", "don't", "can't", "I'll", "I'd like", "what's"] }
];
