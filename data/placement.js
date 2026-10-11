// Test de niveau. 8 questions par niveau, 6 tirées au hasard à chaque test.
// sk : g = grammaire, v = vocabulaire, l = écoute (audio lu par la voix de synthèse), r = lecture.
// Une ligne : niveau|compétence|question|choix1;choix2;choix3;choix4|index bonne réponse|texte audio (écoute) ou texte à lire (lecture)
window.PLACEMENT = `
A1|g|She ___ from Spain.|is;are;am;be|0|
A1|g|___ you like coffee?|Do;Does;Are;Is|0|
A1|v|« La gare » se dit :|the station;the store;the street;the stage|0|
A1|v|Le contraire de « cheap » :|expensive;easy;small;old|0|
A1|l|Quelle heure est-il ?|7 h 30;6 h 30;7 h 15;7 h 45|0|What time is it? It's half past seven.
A1|l|Que cherche la personne ?|les toilettes;la sortie;la banque;la gare|0|Excuse me, where is the toilet, please?
A1|g|There ___ two beds in the room.|are;is;have;be|0|
A1|r|Où travaille Sam ?|dans un café;dans une école;à Leeds avec sa sœur;dans un hôtel|0|Hi, I'm Sam. I live in Leeds with my sister. I work in a café near the station.
A2|g|I ___ to London last summer.|went;go;gone;have go|0|
A2|g|Look! It ___.|is raining;rains;rained;rain|0|
A2|g|This hotel is ___ than the other one.|cheaper;more cheap;cheapest;most cheap|0|
A2|v|« Réserver une table » :|to book a table;to keep a table;to hold a board;to save a desk|0|
A2|v|I'm ___ for my keys. I can't find them.|looking;watching;seeing;searching at|0|
A2|l|Que se passe-t-il ?|Le train a 20 minutes de retard.;Le train est annulé.;Le train part dans 20 minutes.;Le train change de quai.|0|The train to Manchester has been delayed by twenty minutes. We apologise for the inconvenience.
A2|g|We ___ visit the museum tomorrow. It's already planned.|are going to;will to;going;goes to|0|
A2|r|Peut-on aller à la piscine jeudi ?|Non;Oui;Seulement le matin;Le texte ne le dit pas|0|Dear guests, breakfast is served from seven to ten in the restaurant on the ground floor. Please note that the swimming pool is closed for cleaning until Friday.
B1|g|I ___ in Lille since 2019.|have lived;live;am living;lived|0|
B1|g|If it rains tomorrow, we ___ stay at home.|will;would;are;would have|0|
B1|g|The castle ___ in the 12th century.|was built;built;has built;is building|0|
B1|v|« Je ne peux pas me le permettre (financièrement) » :|I can't afford it.;I can't allow it.;I can't permit me.;I can't offer it.|0|
B1|v|Can you ___ the music down? I'm trying to sleep.|turn;put;take;make|0|
B1|l|Que répond la personne ?|Elle refuse l'invitation.;Elle accepte l'invitation.;Elle propose de venir lundi.;Elle a fini son travail.|0|I'd love to come, but I've got loads of work to finish before Monday, so I'll have to give it a miss this time.
B1|g|He told me that he ___ tired.|was;is;were;has|0|
B1|r|Cet avis est :|globalement positif;très négatif;neutre;uniquement sur le bruit|0|Although the hostel was a bit noisy, the staff were incredibly helpful and the location couldn't have been better.
B2|g|If I ___ about the strike, I would have taken the bus.|had known;knew;have known;would know|0|
B2|g|I'm not used to ___ on the left.|driving;drive;drove;be driving|0|
B2|g|She must ___ the train: she isn't here yet.|have missed;miss;missed;be missed|0|
B2|v|« Ça vaut le coup » :|It's worth it.;It deserves the shot.;It's worth to.;It costs the hit.|0|
B2|v|The flight was cancelled, so the airline had to ___ the passengers.|compensate;reward;repay at;award|0|
B2|l|Comment était le voyage ?|Un peu décevant, malgré de superbes paysages.;Parfait du début à la fin.;Horrible, paysages compris.;Sans intérêt et sans beaux paysages.|0|To be honest, the trip didn't quite live up to my expectations, although the scenery was breathtaking.
B2|g|I wish I ___ more time to travel.|had;have;would;will have|0|
B2|r|Ce panneau signifie que l'aile est :|est partiellement inaccessible pour une durée indéterminée.;est fermée définitivement.;rouvre demain.;est désormais gratuite.|0|Visitors are advised that, owing to ongoing renovation work, access to the east wing will be restricted until further notice.
C1|g|Hardly ___ arrived when it started to rain.|had we;we had;did we;we did|0|
C1|g|___ I known, I would have helped.|Had;If;Were;Should|0|
C1|v|« Elle a de la répartie » :|She's quick-witted.;She's quick-tempered.;She's short-sighted.;She's light-headed.|0|
C1|v|The negotiations reached a ___: neither side would give in.|deadlock;lockdown;breakthrough;standpoint|0|
C1|l|Qu'est-il arrivé ?|Ils ont raté la correspondance à cause du retard.;Ils ont eu la correspondance largement à temps.;Il n'y a pas eu de retard.;Ils ont changé de vol volontairement.|0|Had it not been for the delay, we'd have made the connection with time to spare.
C1|g|It's high time we ___.|left;leave;will leave;leaving|0|
C1|v|Quel verbe signifie « aggraver (une situation) » ?|exacerbate;alleviate;mitigate;eradicate|0|
C1|r|Selon l'auteur, cette mesure :|pénalise surtout les petits budgets, malgré son objectif affiché.;réduit efficacement le surtourisme.;avantage les voyageurs à petit budget.;n'a pas d'objectif clair.|0|The new policy, while ostensibly aimed at curbing over-tourism, has been criticised for disproportionately penalising budget travellers.
`;
