# ✈️ Roadtrip English

Application pour apprendre l'**anglais de voyage**, de **débutant à B2**, pensée pour quelqu'un qui comprend déjà pas mal à l'écoute mais bloque à l'oral. Un **test de niveau** adapte toute l'appli au départ. 100 % gratuite, sans compte, fonctionne hors-ligne et s'installe sur le téléphone.

## Ce qu'il y a dedans

| | |
|---|---|
| 🎯 **Test de niveau** | Test adaptatif A1 → C1 (grammaire, vocabulaire, écoute, lecture), 12 à 30 questions, bouton « Je ne sais pas » pour éviter de deviner. Le résultat règle les cartes, les leçons, la grammaire et la lecture. Refaisable et modifiable dans les réglages. |
| 🃏 **Cartes (style Anki)** | **1 737 mots** en 38 thèmes de l'A1 au B2 (voyage, phrasal verbs, idiomes, expressions de conversation, travail, société, argot…), chacun avec un exemple et l'audio. Répétition espacée avec les boutons *À revoir / Difficile / Bien / Facile*, et « Je connais déjà » pour écarter un mot trop facile. Les nouveaux mots commencent au niveau de l'élève. Chaque mot est travaillé dans les deux sens : d'abord comprendre (EN → FR), puis le lendemain le dire (FR → EN). |
| ✍️ **Phrases à traduire** | **358 phrases** FR → EN en 29 leçons de l'A1 au B2 (present perfect, conditionnels, discours rapporté, déductions, idiomes, négocier…). Trois modes : écrire, assembler les mots (puzzle) ou **dire la phrase au micro**. Contractions, orthographe UK/US et variantes acceptées. Les phrases ratées reviennent dans le « Mélange du jour ». |
| 📐 **Grammaire** | **30 fiches** de l'A1 au B2, regroupées par niveau (des bases jusqu'au present perfect, aux conditionnels, au passif, au discours rapporté, aux déductions, aux question tags…). Chaque fiche : l'essentiel en 2 minutes, un tableau avec audio, un « Pour aller plus loin » repliable, puis 9-10 exercices corrigés (QCM, phrase à compléter, mots à remettre dans l'ordre) et un lien vers la leçon de traduction associée. Plus les **50 verbes irréguliers** indispensables avec un quiz. |
| 📖 **Lecture du jour** | **50 épisodes** en deux saisons : « Tom's Big Trip » (A1 → A2) et « Two Brothers Down Under » (B1 → B2, Australie). Le point de départ dépend du niveau. Un épisode se débloque par jour, avec lecture audio (phrase surlignée), mots cliquables, traduction, lexique, quiz et une question à laquelle répondre à voix haute. |
| 🗣️ **Parler** | **21 situations** à jouer à l'oral, de l'A1 au B2 (douane, resto, surréservation, médecin, litige de location, entretien d'embauche, débat…), un mode **« Répète après moi »** (shadowing avec score), un **guide de survie** (phrases magiques, urgences, faux amis) et des exercices de **prononciation** pour francophones (th, h, i/ee, -ed…). |
| 🏠 **Aujourd'hui** | Objectifs du jour, série de jours 🔥, statistiques, calendrier d'activité, conseil du jour. |
| ⚙️ **Réglages** | Accent US/UK, choix de la voix et de la vitesse, nouveaux mots par jour, **export Anki** des 1 737 cartes, sauvegarde/restauration de la progression. |

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
data/vocab*.js        vocabulaire (anglais|français|exemple EN|exemple FR)
data/phrases.js       phrases à traduire
data/readings*.js     les 30 lectures
data/situations.js    situations orales, guide de survie, prononciation
data/extra.js         leçons et situations supplémentaires
data/placement.js     questions du test de niveau
js/level.js           test de niveau
data/grammar*.js      fiches de grammaire et verbes irréguliers
js/grammar.js         onglet Grammaire
sw.js, manifest       mode hors-ligne / installation
```
Pour ajouter du contenu, il suffit d'ajouter des lignes dans les fichiers `data/`.
