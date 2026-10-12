# ✈️ Roadtrip English

Application pour apprendre l'**anglais de voyage**, de **débutant à C1-C2**, pensée pour quelqu'un qui comprend déjà pas mal à l'écoute mais bloque à l'oral. Un **test de niveau** adapte toute l'appli au départ. 100 % gratuite, sans compte, fonctionne hors-ligne et s'installe sur le téléphone.

## Ce qu'il y a dedans

| | |
|---|---|
| 🎯 **Test de niveau** | Test adaptatif A1 → C1 (grammaire, vocabulaire, écoute, lecture), 12 à 30 questions, bouton « Je ne sais pas » pour éviter de deviner. Le résultat règle les cartes, les leçons, la grammaire et la lecture. Refaisable et modifiable dans les réglages. |
| 🃏 **Cartes (style Anki)** | **2 910 mots** en 65 thèmes de l'A1 au C2 (voyage, collocations, phrasal verbs, idiomes, registre soutenu, débat, actualité, science, psychologie, anglais des affaires, faux amis, argot UK/US/AUS…), chacun avec l'audio et un exemple — **deux exemples** pour les 1 170 cartes B2 → C2. Au verso, « Le mot en contexte » montre en plus des phrases de l'appli (lectures, traductions) où le mot apparaît. Répétition espacée avec les boutons *À revoir / Difficile / Bien / Facile*, et « Je connais déjà » pour écarter un mot trop facile. **Tri express** pour les faux débutants : 15 mots d'un coup, chacun marqué *nouveau*, *je comprends* (on garde seulement la carte FR → EN, pour apprendre à le dire) ou *je sais le dire* (le mot revient quand même dans un mois pour vérifier). Les nouveaux mots commencent au niveau de l'élève. Chaque mot est travaillé dans les deux sens : d'abord comprendre (EN → FR), puis le lendemain le dire (FR → EN). |
| ✍️ **Phrases à traduire** | **526 phrases** FR → EN en 43 leçons de l'A1 au C1 (present perfect, conditionnels mixtes, inversion, passif avancé, e-mails formels, débat, actualité, anglais professionnel…). Trois modes : écrire, assembler les mots (puzzle) ou **dire la phrase au micro**. Contractions, orthographe UK/US et variantes acceptées. Les phrases ratées reviennent dans le « Mélange du jour ». |
| 📐 **Grammaire** | **46 fiches** de l'A1 au C1, **1 440 exercices** (au moins 30 par fiche). Chaque fiche : *En bref* (la règle en une phrase), *La formule*, *Comment ça marche*, des exemples audio, *Les pièges des Français* (✗ phrase fautive → ✓ correction → pourquoi) et un « Pour aller plus loin ». Six types d'exercices mélangés : QCM, phrase à compléter, mots à remettre dans l'ordre, **transformer** une phrase (négation, question, passif…), **trouver l'erreur** (on touche le mot fautif) et **traduire**. Séries de 15 tirées en priorité parmi les exercices jamais faits ou ratés ; chaque erreur revient en fin de série ; série de bonnes réponses 🔥, récap « À retenir ». **Entraînement illimité** généré automatiquement pour 9 fiches (be, présent simple, do/does, a/an, -ing, was/were, prétérit, comparatifs, participes passés). **Entraînement mixte** (mon niveau, fiches travaillées, *mes erreurs*, tout le programme) et les **50 verbes irréguliers** avec quiz prétérit et participe passé. |
| 📖 **Lecture du jour** | **60 épisodes** en trois saisons : « Tom's Big Trip » (A1 → A2), « Two Brothers Down Under » (B1 → B2, Australie) et « Making It Abroad » (C1, Écosse). Le point de départ dépend du niveau. Un épisode se débloque par jour, avec lecture audio (phrase surlignée), mots cliquables, traduction, lexique, quiz et une question à laquelle répondre à voix haute. |
| 🗣️ **Parler** | **26 situations** à jouer à l'oral, de l'A1 au C1 (douane, resto, médecin, entretien, négocier son salaire, récupérer sa caution, litige avec une compagnie aérienne, conflit d'équipe…), un **« Défi 1 minute »** (60 sujets de l'A1 au C1 : on parle sans s'arrêter, avec transcription, nombre de mots, débit et connecteurs, ou enregistrement pour se réécouter), une **dictée** audio, un mode **« Répète après moi »** (shadowing avec score), un **guide de survie** (phrases magiques, urgences, faux amis) et des exercices de **prononciation** pour francophones (th, h, i/ee, -ed…). |
| 🏠 **Aujourd'hui** | Objectifs du jour, série de jours 🔥, statistiques, calendrier d'activité, conseil du jour. |
| ⚙️ **Réglages** | Accent US/UK, choix de la voix et de la vitesse, nouveaux mots par jour, **export Anki** des 2 910 cartes (étiquetées par niveau et par thème), **rappel quotidien** à ajouter à l'agenda (.ics), sauvegarde/restauration de la progression. |

## Utilisation

- **En ligne** : ouvre le lien GitHub Pages sur le téléphone, puis « Ajouter à l'écran d'accueil ».
- **En local** : ouvre `index.html` dans un navigateur, ou lance `python3 -m http.server` dans le dossier.

### Bon à savoir
- Le **micro** (reconnaissance vocale) marche sur **Chrome** (Android, ordinateur) et **Safari** récent. Sur Firefox, l'appli fonctionne mais sans vérification automatique de l'oral.
- La qualité des voix dépend de l'appareil. Si une voix sonne robotique, choisis-en une autre dans les réglages (les voix « Google », « Samantha », « Daniel » ou « Natural » sont souvent les meilleures).
- La progression est enregistrée **dans le navigateur** de l'appareil : utilise « Sauvegarder » dans les réglages pour la transférer ou la garder en sécurité.

### Importer dans Anki
Réglages → *Export Anki (.txt)*, puis dans Anki : *Fichier → Importer*, choisir le fichier. Le séparateur (tabulation), le HTML et les étiquettes par thème sont détectés automatiquement (Anki 2.1.55 ou plus récent).

## Structure
```
index.html            page unique
css/style.css         styles (clair / sombre)
js/app.js             logique (répétition espacée, exercices, voix…)
data/vocab*.js        vocabulaire (anglais|français|exemple EN|exemple FR[|exemple 2 EN|exemple 2 FR])
data/phrases.js       phrases à traduire
data/readings*.js     les 60 lectures (3 saisons)
data/situations.js    situations orales, guide de survie, prononciation
data/extra.js         leçons et situations supplémentaires
data/placement.js     questions du test de niveau
data/topics.js        sujets du « Défi 1 minute »
js/speak2.js          Défi 1 minute et dictée
js/level.js           test de niveau
data/grammar*.js      fiches de grammaire et verbes irréguliers
data/gplus*.js        En bref, formules, pièges et exercices supplémentaires
                      (types : m QCM, f compléter, o ordre, t transformer, e erreur, tr traduire)
data/gen.js           verbes, adjectifs et noms pour les exercices générés
js/grammar.js         onglet Grammaire
sw.js, manifest       mode hors-ligne / installation
```
Pour ajouter du contenu, il suffit d'ajouter des lignes dans les fichiers `data/`.
