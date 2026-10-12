// Compléments de grammaire (fiches g25 à g35). Même format que gplus1.js.
window.GPLUS = window.GPLUS || {};
Object.assign(window.GPLUS, {
g25: { memo: "Pour réécrire le passé : If + had + participe, would have + participe. Regret : I wish I had… / I should have…",
  formula: ["**If + had + participe, would have + participe** → If I had known, I would have come.", "**should have / could have + participe** = j'aurais dû / j'aurais pu", "**I wish + prétérit** (regret présent) · **I wish + had + participe** (regret passé)"],
  mistakes: [["If I would have known, I would have come.", "If I had known, I would have come.", "Jamais would après if."], ["I should have came.", "I should have come.", "should have + participe passé."], ["I wish I have more time.", "I wish I had more time.", "wish + prétérit."], ["If I had knew…", "If I had known…", "Participe : known."]],
  ex: `
e|If I would have known, I would have helped.|would have known|had known|if + had + participe.
e|You should have tell me.|tell|told|should have + participe.
e|I wish I have more holidays.|have|had|wish + prétérit.
e|If we had left earlier, we wouldn't miss the train. (hier)|wouldn't miss|wouldn't have missed|Résultat passé → would have + participe.
e|I wish I learned English when I was young.|learned|had learned|Regret passé → had + participe.
e|We could have took a taxi.|took|taken|could have + participe.
t|Réécris au 3e conditionnel.|I didn't know. I didn't come.|If I had known, I would have come. // If I'd known, I'd have come.
t|Exprime le regret avec « I wish ».|I didn't study harder.|I wish I had studied harder. // I wish I'd studied harder.
t|Exprime le reproche avec « should have ».|You didn't call me.|You should have called me.
t|Réécris au 3e conditionnel.|It rained, so we didn't go to the beach.|If it hadn't rained, we would have gone to the beach. // If it hadn't rained, we'd have gone to the beach.
tr|Si j'avais su, je serais venu.|If I had known, I would have come. // If I'd known, I'd have come.
tr|Tu aurais dû me le dire.|You should have told me.
tr|On aurait pu prendre le train.|We could have taken the train.
tr|J'aimerais être plus grand.|I wish I were taller. // I wish I was taller.
tr|Si on n'avait pas raté le bus, on serait arrivés à l'heure.|If we hadn't missed the bus, we would have arrived on time. // If we hadn't missed the bus, we'd have arrived on time.
tr|Je regrette de ne pas t'avoir écouté.|I wish I had listened to you. // I regret not listening to you. // I wish I'd listened to you.
f|If she had asked, I ___ ___ ___ (help) her.|would have helped // 'd have helped|résultat passé
f|I wish I ___ ___ (not / say) that.|hadn't said // had not said|regret passé
m|« Si seulement j'avais pris mon parapluie ! »|If only I took my umbrella!;If only I had taken my umbrella!;If only I would take my umbrella!|1|regret passé.
m|« Il aurait dû partir plus tôt. »|He should leave earlier.;He should have left earlier.;He must have left earlier.|1|reproche → should have.
e|If I had seen you, I would say hello.|would say|would have said|Passé → 3e conditionnel : **would have said**.
t|Exprime le regret avec « I wish ».|I didn't take the job.|I wish I had taken the job. // I wish I'd taken the job.
tr|J'aurais dû réserver plus tôt.|I should have booked earlier. // I should've booked earlier.
` },

g26: { memo: "Quand on rapporte des paroles, on recule d'un temps et on change les repères (today → that day).",
  formula: ["présent → prétérit · prétérit / present perfect → had + participe · will → would · can → could", "**say** (something) · **tell** (somebody) something", "Question rapportée : **asked if / where + sujet + verbe** (sans do, sans inversion)"],
  mistakes: [["He said me he was tired.", "He told me he was tired.", "tell + personne."], ["She asked me where was the station.", "She asked me where the station was.", "Pas d'inversion dans la question rapportée."], ["He asked if I do speak English.", "He asked if I spoke English.", "Pas de do."], ["He told he would come.", "He said he would come.", "tell a besoin d'une personne."]],
  ex: `
e|He said me that he was lost.|said|told|tell + personne.
e|She asked me where was the bank.|was the bank|the bank was|Pas d'inversion.
e|He asked if I do like coffee.|do like|liked|Pas de do, temps reculé.
e|They told that they would call.|told|said|tell a besoin d'un complément de personne.
e|She said she will come tomorrow.|will|would|will → would.
e|He told me to not worry.|to not|not to|not to + verbe.
t|Rapporte au discours indirect.|"I'm tired," he said.|He said he was tired. // He said that he was tired.
t|Rapporte au discours indirect.|"I'll call you," she told me.|She told me she would call me. // She told me that she'd call me.
t|Rapporte au discours indirect.|"Where is the station?" he asked me.|He asked me where the station was.
t|Rapporte au discours indirect.|"Do you speak English?" she asked me.|She asked me if I spoke English. // She asked me whether I spoke English.
t|Rapporte au discours indirect.|"Don't touch it!" he told us.|He told us not to touch it.
t|Rapporte au discours indirect.|"I've lost my keys," she said.|She said she had lost her keys. // She said that she'd lost her keys.
tr|Il m'a dit qu'il était fatigué.|He told me he was tired. // He told me that he was tired.
tr|Elle m'a demandé si j'étais français.|She asked me if I was French. // She asked me whether I was French.
tr|Ils nous ont dit de ne pas nous inquiéter.|They told us not to worry.
tr|Tu sais où est la gare ?|Do you know where the station is?
tr|Il a dit qu'il viendrait le lendemain.|He said he would come the next day. // He said that he'd come the following day.
tr|Je lui ai demandé ce qu'il voulait.|I asked him what he wanted.
f|She asked me what time it ___.|was|temps reculé
f|He ___ me he had finished. (dire à)|told|tell + personne
m|"I can swim." → He said he ___ swim.|can;could;will|1|can → could.
m|« Pouvez-vous me dire où sont les toilettes ? »|Can you tell me where are the toilets?;Can you tell me where the toilets are?;Can you tell me where do the toilets are?|1|question indirecte.
` },

g27: { memo: "must = je suis presque sûr · can't = impossible · might / may / could = peut-être. Au passé : + have + participe.",
  formula: ["Présent : **must / can't / might + verbe** → He must be tired.", "Passé : **must / can't / might + have + participe** → She must have missed the bus.", "Le contraire de must (déduction) = **can't** (pas mustn't)"],
  mistakes: [["He mustn't be at home, the lights are off.", "He can't be at home.", "Déduction négative → can't."], ["She must missed the train.", "She must have missed the train.", "Passé → must have + participe."], ["It can rain later (= peut-être).", "It might rain later.", "Possibilité ponctuelle → might / may."], ["He might has left.", "He might have left.", "Après un modal → have, jamais has."]],
  ex: `
e|He mustn't be French, he doesn't speak a word.|mustn't|can't|Déduction négative → can't.
e|She must missed the bus.|missed|have missed|must have + participe.
e|They might has gone home.|has|have|modal + have.
e|It can rain this afternoon, take an umbrella.|can|might|Possibilité ponctuelle → might.
e|You must be exhausted after that hike yesterday. (sur hier)|be|have been|Déduction sur le passé.
e|That can't is true!|is|be|modal + base.
t|Exprime une forte probabilité avec « must ».|I'm sure he is tired.|He must be tired.
t|Exprime l'impossibilité avec « can't ».|I'm sure it isn't Tom; he's in Australia.|It can't be Tom; he's in Australia. // That can't be Tom; he's in Australia.
t|Exprime une possibilité avec « might ».|Perhaps she is at the beach.|She might be at the beach.
t|Mets au passé avec « must have ».|I'm sure they got lost.|They must have got lost. // They must have gotten lost.
tr|Il doit être fatigué.|He must be tired.
tr|Ça ne peut pas être vrai.|That can't be true. // It can't be true.
tr|Il est peut-être en retard.|He might be late. // He may be late.
tr|Elle a dû oublier.|She must have forgotten.
tr|Ils n'ont pas pu partir sans nous.|They can't have left without us. // They couldn't have left without us.
tr|J'ai peut-être laissé mes clés à l'hôtel.|I might have left my keys at the hotel. // I may have left my keys at the hotel.
f|You ___ have been scared! (déduction)|must|déduction passée
f|He ___ have seen us, he didn't wave. (impossible)|can't // cannot // couldn't|impossibilité passée
m|« Il pourrait pleuvoir. »|It could rain.;It can rains.;It must rain.|0|possibilité.
m|« Le bus devrait arriver dans 5 minutes. » (normalement)|The bus must arrive in 5 minutes.;The bus should arrive in 5 minutes.;The bus can arrive in 5 minutes.|1|probabilité attendue → should.
e|She must to be at home, her car is outside.|must to be|must be|Pas de **to** après must.
t|Déduction sur le passé.|He must be lost.|He must have got lost. // He must have been lost.
tr|Ça ne peut pas être vrai.|That can't be true. // It can't be true.
` },

g28: { memo: "Un phrasal verb = verbe + particule, et le sens change. Avec un pronom, il se place au milieu : turn it off.",
  formula: ["**verbe + particule** : give up (abandonner), find out (découvrir), set off (partir)", "Séparable : turn **the TV** off / turn off **the TV** · pronom : turn **it** off (obligatoire au milieu)", "À trois éléments, jamais séparés : run out **of**, look forward **to**, put up **with**"],
  mistakes: [["Turn off it.", "Turn it off.", "Pronom au milieu."], ["We ran out milk.", "We ran out of milk.", "run out of + nom."], ["I look forward to see you.", "I look forward to seeing you.", "to = préposition → -ing."], ["Can you pick up me?", "Can you pick me up?", "Pronom au milieu."]],
  ex: `
e|The music is too loud, turn down it.|down it|it down|Pronom au milieu.
e|We've run out petrol.|out|out of|run out of.
e|Can you pick up me at the airport?|up me|me up|Pronom au milieu.
e|I can't put up this noise.|up|up with|put up with.
e|She came up an amazing idea.|up|up with|come up with.
e|Don't give up never.|never|—|Don't give up (pas de double négation) / Never give up.
t|Remplace par un pronom.|Turn off the lights.|Turn them off.
t|Remplace par un pronom.|I'll pick up my brother.|I'll pick him up.
t|Remplace le verbe par un phrasal verb (abandonner).|Don't abandon now!|Don't give up now!
t|Remplace par un phrasal verb (découvrir).|Let's discover what time it opens.|Let's find out what time it opens.
tr|On n'a plus d'eau.|We've run out of water. // We have run out of water.
tr|Je viendrai te chercher à la gare.|I'll pick you up at the station. // I'll pick you up from the station.
tr|On part tôt demain.|We're setting off early tomorrow. // We set off early tomorrow.
tr|Je ne supporte plus son attitude.|I can't put up with his attitude any more. // I can't put up with his attitude anymore. // I can't stand his attitude any more.
tr|Elle a eu une super idée.|She came up with a great idea. // She came up with a brilliant idea.
tr|On a fini par dormir dans la voiture.|We ended up sleeping in the car.
f|Hold ___, I'm coming! (patiente)|on|hold on
f|Could you look ___ my bag for a minute? (surveiller)|after|look after
f|I get ___ well with my flatmates. (s'entendre)|on|get on with
m|« Le concert a été annulé. »|The concert was called off.;The concert was called out.;The concert was called up.|0|call off = annuler.
e|Can you turn on it?|turn on it|turn it on|Avec un pronom, il va au milieu : turn **it** on.
f|I'll ___ (passer te prendre) you up at 7.|pick|pick up = aller chercher
tr|Je cherche mes clés.|I'm looking for my keys.
` },

g29: { memo: "Phrase affirmative → tag négatif, phrase négative → tag positif. On reprend l'auxiliaire.",
  formula: ["**affirmatif, auxiliaire négatif + pronom ?** → It's cold, isn't it?", "**négatif, auxiliaire positif + pronom ?** → You don't smoke, do you?", "Exceptions : I am → **aren't I** · Let's → **shall we** · impératif → **will you**"],
  mistakes: [["She lives here, isn't she?", "She lives here, doesn't she?", "Présent simple → does."], ["You're French, isn't it?", "You're French, aren't you?", "On reprend le sujet : you."], ["I'm late, amn't I?", "I'm late, aren't I?", "Exception."], ["It didn't work, didn't it?", "It didn't work, did it?", "Négatif → tag positif."]],
  ex: `
e|She works here, isn't she?|isn't|doesn't|Présent simple → does.
e|You're from Spain, isn't it?|isn't it|aren't you|On reprend le sujet.
e|They didn't come, didn't they?|didn't they|did they|Négatif → positif.
e|Let's go, don't we?|don't we|shall we|Let's → shall we.
e|I'm right, amn't I?|amn't|aren't|Exception : aren't I.
e|He can swim, can he?|can he|can't he|Affirmatif → négatif.
t|Ajoute le question tag.|It's a lovely day.|It's a lovely day, isn't it?
t|Ajoute le question tag.|You haven't seen my keys.|You haven't seen my keys, have you?
t|Ajoute le question tag.|She went to Rome.|She went to Rome, didn't she?
t|Ajoute le question tag.|We should book now.|We should book now, shouldn't we?
t|Ajoute le question tag.|Close the door.|Close the door, will you?
tr|Il fait froid, hein ?|It's cold, isn't it?
tr|Tu n'as pas faim, si ?|You're not hungry, are you? // You aren't hungry, are you?
tr|Il sait conduire, non ?|He can drive, can't he?
tr|On y va ?|Let's go, shall we? // Shall we go?
tr|Tu viens, n'est-ce pas ?|You're coming, aren't you?
tr|Elle n'a pas appelé, si ?|She didn't call, did she? // She hasn't called, has she?
f|Nobody called, ___ they?|did|nobody = négatif
f|There's a problem, ___ there?|isn't|there is → isn't there
m|You'll help me, ___?|won't you;will you;don't you|0|will → won't.
m|Everyone was there, ___?|wasn't it;weren't they;wasn't they|1|everyone → they.
` },

g30: { memo: "have been + -ing : une action qui dure depuis un moment (et continue souvent), ou qui vient de s'arrêter avec un résultat visible.",
  formula: ["**have / has been + verbe-ing** → I've been waiting for an hour.", "Simple vs continu : I've **read** the book (fini) / I've **been reading** it (en cours)", "Avec un nombre ou un verbe d'état → present perfect simple (I've visited 3 museums · I've known him…)"],
  mistakes: [["I wait for an hour.", "I've been waiting for an hour.", "Durée jusqu'à maintenant."], ["I've been knowing him for years.", "I've known him for years.", "know : verbe d'état."], ["I've been visiting five museums today.", "I've visited five museums today.", "Nombre → simple."], ["She's been work here since May.", "She's been working here since May.", "been + -ing."]],
  ex: `
e|I wait for the bus for forty minutes.|wait|have been waiting|Durée → present perfect continu.
e|I've been knowing her since school.|been knowing|known|Verbe d'état → simple.
e|She's been work here since June.|work|working|been + -ing.
e|We've been visiting three castles today.|been visiting|visited|Nombre → simple.
e|How long are you learning English?|are you learning|have you been learning|Depuis combien de temps → have you been.
e|It's been rain all day.|rain|raining|been + -ing.
t|Réécris avec le present perfect continu.|I started waiting an hour ago. I'm still waiting.|I've been waiting for an hour. // I have been waiting for an hour.
t|Pose la question avec « How long ».|You're learning Spanish.|How long have you been learning Spanish?
t|Réécris avec « since ».|It started raining this morning. It's still raining.|It's been raining since this morning. // It has been raining since this morning.
t|Explique le résultat visible.|You're out of breath. (run)|You've been running. // Have you been running?
tr|Ça fait une heure que je t'attends !|I've been waiting for you for an hour! // I have been waiting for you for an hour!
tr|Depuis combien de temps tu voyages ?|How long have you been travelling? // How long have you been traveling?
tr|Il pleut depuis ce matin.|It's been raining since this morning. // It has been raining since this morning.
tr|J'apprends l'anglais depuis deux ans.|I've been learning English for two years. // I have been learning English for two years.
tr|Tu as l'air fatigué, tu as travaillé toute la nuit ?|You look tired, have you been working all night?
tr|On parle de toi toute la soirée.|We've been talking about you all evening. // We have been talking about you all evening.
f|She's ___ ___ (study) for three hours.|been studying|been + -ing
f|I've ___ (read) three books this month.|read|nombre → simple
m|« J'ai peint la cuisine » (c'est fini, regarde !)|I've painted the kitchen.;I've been painting the kitchen.;I painted the kitchen since.|0|résultat terminé → simple.
m|« J'ai peint toute la journée » (j'en ai sur les mains)|I've painted all day.;I've been painting all day.;I paint all day.|1|activité qui a duré → continu.
e|She's been studying since three hours.|since|for|Durée → **for** ; point de départ → since.
t|Mets au present perfect continu.|I wait for you.|I've been waiting for you. // I have been waiting for you.
tr|Ça fait combien de temps que tu attends ?|How long have you been waiting?
` },

g31: { memo: "will be + -ing = en train de, à un moment futur. will have + participe = déjà fini avant un moment futur.",
  formula: ["**will be + -ing** → This time tomorrow I'll be flying.", "**will have + participe** → By June I'll have finished.", "**by / by the time** + présent → By the time you arrive…"],
  mistakes: [["By Friday I will finish. (déjà fini)", "By Friday I'll have finished.", "Fini avant un moment futur."], ["By the time you will arrive…", "By the time you arrive…", "by the time + présent."], ["Tomorrow at 8 I will work.", "Tomorrow at 8 I'll be working.", "En cours à ce moment-là."], ["I'll have finish.", "I'll have finished.", "will have + participe."]],
  ex: `
e|By the time you will get here, we'll have eaten.|will get|get|by the time + présent.
e|I'll have finish the report by Monday.|finish|finished|will have + participe.
e|This time tomorrow I will lie on the beach.|will lie|will be lying|En cours → will be + -ing.
e|By next year she will be finishing her degree. (terminé)|will be finishing|will have finished|Terminé → will have + participe.
e|Will you be need the car tonight?|need|needing|will be + -ing.
t|Mets au futur continu.|At 9 tomorrow, I work.|At 9 tomorrow, I'll be working. // At 9 tomorrow, I will be working.
t|Mets au futur antérieur.|I finish the book by Sunday.|I'll have finished the book by Sunday. // I will have finished the book by Sunday.
t|Pose la question polie au futur continu.|Do you need a taxi?|Will you be needing a taxi?
t|Mets au futur antérieur négatif.|We arrive by noon.|We won't have arrived by noon. // We will not have arrived by noon.
tr|Demain à cette heure-ci, je serai sur la plage.|This time tomorrow, I'll be on the beach. // This time tomorrow I'll be lying on the beach.
tr|D'ici la fin de l'année, j'aurai appris 1 000 mots.|By the end of the year, I'll have learned 1,000 words. // By the end of the year I will have learnt a thousand words.
tr|Quand tu arriveras, on sera déjà partis.|By the time you arrive, we'll have already left. // When you arrive, we'll already have left.
tr|Est-ce que vous utiliserez la cuisine ce soir ?|Will you be using the kitchen tonight? // Will you be using the kitchen this evening?
tr|À 20 h, je serai en train de dîner.|At 8 p.m., I'll be having dinner. // At eight, I'll be having dinner.
tr|Dans un mois, ça fera un an que je vis ici.|In a month, I'll have been living here for a year. // In a month, I'll have lived here for a year.
f|By 2030, they ___ ___ ___ (build) the new airport.|will have built|futur antérieur
f|Don't call at 7, I ___ ___ ___ (drive).|will be driving // 'll be driving|futur continu
m|« Il sera sûrement en train de dormir. »|He'll sleep.;He'll be sleeping.;He'll have slept.|1|supposition sur l'action en cours.
` },

g32: { memo: "Condition passée + résultat présent, ou trait permanent + résultat passé : on mélange les temps.",
  formula: ["Passé → présent : **If + had + participe, would + verbe**", "Présent → passé : **If + prétérit, would have + participe**", "Indice : « maintenant / aujourd'hui » dans le résultat → would + base"],
  mistakes: [["If I would have studied, I'd have a better job now.", "If I had studied, I'd have a better job now.", "Jamais would après if."], ["If I studied more, I would be fluent now. (je n'ai pas étudié avant)", "If I had studied more, I would be fluent now.", "Condition passée → had + participe."], ["If she wasn't shy, she would talk to him yesterday.", "…she would have talked to him yesterday.", "Résultat passé → would have."], ["If I had taken the job, I would have lived in London now.", "…I would be living in London now.", "Résultat présent → would + base."]],
  ex: `
e|If I had learned English at school, I would have been fluent now.|would have been|would be|Résultat présent → would be.
e|If he wasn't so lazy, he would pass the exam last week.|would pass|would have passed|Résultat passé.
e|If we booked last month, we would have a room now.|booked|had booked|Condition passée.
e|If I would have taken that flight, I'd be in Rome now.|would have taken|had taken|Jamais would après if.
e|If she were more careful, she wouldn't lose her passport yesterday.|wouldn't lose|wouldn't have lost|Résultat passé.
t|Combine en conditionnel mixte (passé → présent).|I didn't save money. I can't travel now.|If I had saved money, I could travel now. // If I had saved money, I would be able to travel now. // If I'd saved money, I could travel now.
t|Combine en conditionnel mixte (présent → passé).|I'm not brave. I didn't speak to her.|If I were braver, I would have spoken to her. // If I was braver, I'd have spoken to her.
t|Combine (passé → présent).|We missed the train. We're stuck here.|If we hadn't missed the train, we wouldn't be stuck here.
t|Combine (présent → passé).|He doesn't speak English. He didn't get the job.|If he spoke English, he would have got the job. // If he spoke English, he'd have gotten the job.
tr|Si je n'avais pas raté le bus, je serais chez moi maintenant.|If I hadn't missed the bus, I would be at home now. // If I hadn't missed the bus, I'd be home now.
tr|Si j'étais plus organisé, je n'aurais pas oublié mon billet.|If I were more organised, I wouldn't have forgotten my ticket. // If I was more organized, I wouldn't have forgotten my ticket.
tr|Si on avait réservé, on ne ferait pas la queue.|If we had booked, we wouldn't be queuing. // If we'd booked, we wouldn't be waiting in line.
tr|S'il parlait anglais, il aurait compris.|If he spoke English, he would have understood. // If he spoke English, he'd have understood.
tr|Si j'avais accepté ce travail, je vivrais à Londres.|If I had accepted that job, I would live in London. // If I'd taken that job, I'd be living in London.
f|If I ___ (not / eat) so much, I wouldn't feel sick now.|hadn't eaten // had not eaten|condition passée
f|If she ___ (be) taller, she would have become a model.|were // was|trait permanent
m|Quelle phrase est un conditionnel mixte ?|If it rains, I'll stay.;If I'd listened, I wouldn't be lost now.;If I had money, I'd buy it.|1|passé → présent.
e|If I had studied medicine, I would have been a doctor now.|would have been|would be|Résultat présent (now) → **would be**.
t|Conditionnel mixte (passé → présent).|I didn't sleep. I'm tired now.|If I had slept, I wouldn't be tired now. // If I'd slept, I wouldn't be tired now.
tr|Si j'avais pris le train, je serais déjà là.|If I had taken the train, I would already be there. // If I'd taken the train, I'd already be there. // If I had taken the train, I would be there already. // If I'd taken the train, I'd be there already.
` },

g33: { memo: "unless = sauf si · as long as / provided = à condition que · in case = au cas où · otherwise = sinon.",
  formula: ["**unless** + présent = if … not", "**as long as / provided (that)** = à condition que · **in case** = par précaution", "Soutenu : **Should** you need… · **Had** I known… · **Were** I you… (if supprimé, inversion)"],
  mistakes: [["Unless you don't hurry…", "Unless you hurry…", "Pas de double négation."], ["Take a jacket if it gets cold. (par précaution)", "Take a jacket in case it gets cold.", "Précaution → in case."], ["Provided you will come…", "Provided you come…", "+ présent."], ["If I had known, I would come. (passé)", "Had I known, I would have come.", "Passé → would have."]],
  ex: `
e|We'll go unless it doesn't rain.|doesn't rain|rains|unless = if not.
e|You can borrow it as long as you will give it back.|will give|give|+ présent.
e|Take some cash if the card doesn't work. (précaution)|if|in case|Précaution → in case.
e|Had I know, I would have come.|know|known|Had + participe.
e|Should you needing help, call me.|needing|need|Should + base.
t|Réécris avec « unless ».|If you don't book, you won't get in.|Unless you book, you won't get in.
t|Réécris avec « provided ».|You can come if you don't make noise.|You can come provided you don't make noise. // You can come provided that you don't make noise.
t|Réécris avec l'inversion « Had ».|If I had known, I would have helped.|Had I known, I would have helped.
t|Réécris avec l'inversion « Should ».|If you need anything, call reception.|Should you need anything, call reception.
t|Réécris avec « otherwise ».|If we don't leave now, we'll be late.|We need to leave now, otherwise we'll be late. // Let's leave now, otherwise we'll be late.
tr|Sauf s'il pleut, on fera la randonnée.|Unless it rains, we'll do the hike. // Unless it rains, we'll go hiking.
tr|Prends de l'eau au cas où.|Take some water just in case. // Take some water in case.
tr|Tu peux rester à condition d'être discret.|You can stay as long as you're quiet. // You can stay provided you're quiet.
tr|Sans la pluie, la journée aurait été parfaite.|But for the rain, the day would have been perfect. // Without the rain, the day would have been perfect.
tr|Imagine que tu perdes ton passeport, que ferais-tu ?|Suppose you lost your passport, what would you do? // Supposing you lost your passport, what would you do?
tr|Même s'il pleut, on y va.|Even if it rains, we're going.
f|___ I you, I wouldn't sign it. (si j'étais toi, soutenu)|were|inversion
f|We'll miss the bus ___ we run. (sauf si)|unless|sauf si
m|« Même s'il fait froid, on se baigne » (il fait vraiment froid)|Even if it's cold, we swim.;Even though it's cold, we're swimming.;Unless it's cold, we swim.|1|fait réel → even though.
` },

g34: { memo: "Après un mot négatif ou restrictif en tête de phrase, on inverse comme dans une question : Never have I…",
  formula: ["**Never / Rarely / Seldom + auxiliaire + sujet** → Never have I seen…", "**Not only + auxiliaire + sujet …, but … also** · **Hardly … when** · **No sooner … than**", "Présent / prétérit simple : on ajoute **do / does / did** → Rarely do I…, Little did she know…"],
  mistakes: [["Never I have seen this.", "Never have I seen this.", "Inversion."], ["Not only he was late, but…", "Not only was he late, but…", "Inversion après not only."], ["No sooner had I arrived when…", "No sooner had I arrived than…", "no sooner … than."], ["Rarely I eat meat.", "Rarely do I eat meat.", "Présent simple → do."]],
  ex: `
e|Never I have been so scared.|I have|have I|Inversion.
e|Not only the hotel was expensive, but it was dirty.|the hotel was|was the hotel|Inversion après not only.
e|No sooner had we arrived when it rained.|when|than|no sooner … than.
e|Rarely I see such kindness.|I see|do I see|Présent → do + sujet.
e|Little she knew what was coming.|she knew|did she know|Prétérit → did.
e|Hardly had we sat down than the phone rang.|than|when|hardly … when.
t|Réécris en commençant par « Never ».|I have never seen such a view.|Never have I seen such a view.
t|Réécris en commençant par « Not only ».|He lost his bag and he missed the flight.|Not only did he lose his bag, but he also missed the flight. // Not only did he lose his bag, he also missed the flight.
t|Réécris en commençant par « Hardly ».|We had just arrived when it started to rain.|Hardly had we arrived when it started to rain.
t|Réécris en commençant par « Only when ».|I understood my mistake only when I got home.|Only when I got home did I understand my mistake.
t|Réécris en commençant par « Under no circumstances ».|You must not open this door.|Under no circumstances must you open this door. // Under no circumstances should you open this door.
tr|Jamais je n'ai vu une telle foule.|Never have I seen such a crowd.
tr|Non seulement il est drôle, mais il est aussi intelligent.|Not only is he funny, but he's also smart. // Not only is he funny, he is also intelligent.
tr|À peine étais-je arrivé que le téléphone a sonné.|Hardly had I arrived when the phone rang. // No sooner had I arrived than the phone rang.
tr|Rarement ai-je mangé aussi bien.|Rarely have I eaten so well.
tr|En aucun cas tu ne dois lui dire.|Under no circumstances should you tell him. // Under no circumstances must you tell her.
tr|Je ne savais pas que ce voyage changerait ma vie.|Little did I know that this trip would change my life. // I didn't know this trip would change my life.
f|Seldom ___ he complain. (présent)|does|présent simple
m|Quelle phrase est correcte ?|Not until I saw her I recognised her.;Not until I saw her did I recognise her.;Not until did I see her I recognised her.|1|not until … + inversion dans la principale.
` },

g35: { memo: "Pour mettre en relief : It was X who… / What I need is… / All I want is…",
  formula: ["**It is / was + élément + who / that…** → It was Tom who booked.", "**What + sujet + verbe + is / was…** → What I need is sleep.", "**All + sujet + verbe + is…** → All I want is a coffee."],
  mistakes: [["What I need are holidays.", "What I need is a holiday.", "What… → is (singulier)."], ["It was Tom which booked.", "It was Tom who booked.", "Personne → who."], ["The thing what I like…", "The thing (that) I like… / What I like…", "what remplace « the thing that »."], ["All what I want is…", "All I want is…", "Pas de what après all."]],
  ex: `
e|What I need are a long holiday.|are|is|What… → is.
e|It was my sister which found the flat.|which|who|Personne → who.
e|All what I want is to sleep.|what|—|All I want is…
e|It is in 2019 that we met.|is|was|Passé → was.
e|The thing what annoys me is the noise.|what|that|the thing that / what annoys me.
t|Mets en relief l'élément entre crochets (It was … who).|[My brother] organised the trip.|It was my brother who organised the trip. // It was my brother who organized the trip.
t|Mets en relief avec « What ».|I need a good night's sleep.|What I need is a good night's sleep.
t|Mets en relief avec « All ».|I only want a coffee.|All I want is a coffee.
t|Mets en relief l'élément entre crochets (It was … that).|We met [in Dublin].|It was in Dublin that we met.
t|Mets en relief avec « What happened was ».|We missed the last train.|What happened was that we missed the last train. // What happened was we missed the last train.
tr|C'est mon frère qui a tout payé.|It was my brother who paid for everything.
tr|Ce que je ne comprends pas, c'est pourquoi il est parti.|What I don't understand is why he left.
tr|Tout ce que tu as à faire, c'est demander.|All you have to do is ask.
tr|Ce qui m'a plu, c'est l'ambiance.|What I liked was the atmosphere. // What I liked was the vibe.
tr|C'est à Londres que tout a commencé.|It was in London that it all started. // It was in London that everything started.
tr|Ce dont on a besoin, c'est d'un plan.|What we need is a plan.
f|___ surprised me most was the food. (ce qui)|what|ce qui → what
f|It ___ the noise that kept me awake.|was|passé
m|« La raison pour laquelle je suis venu, c'est pour apprendre. »|The reason why I came is to learn.;The reason because I came is to learn.;The reason which I came is to learn.|0|the reason why.
` }
});
