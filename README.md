# ✈️ Roadtrip English

Application pour apprendre l'**anglais de voyage**, pensée pour un niveau **A1** qui comprend déjà pas mal à l'écoute mais bloque à l'oral. 100 % gratuite, sans compte, fonctionne hors-ligne et s'installe sur le téléphone.

## Ce qu'il y a dedans

| | |
|---|---|
| 🃏 **Cartes (style Anki)** | **837 mots** en 18 thèmes (aéroport, hôtel, resto, directions, santé…), chacun avec un exemple et l'audio. Répétition espacée avec les boutons *À revoir / Difficile / Bien / Facile*. Chaque mot est travaillé dans les deux sens : d'abord comprendre (EN → FR), puis le lendemain le dire (FR → EN). |
| ✍️ **Phrases à traduire** | **158 phrases** FR → EN en 12 leçons et 3 niveaux. Trois modes : écrire, assembler les mots (puzzle) ou **dire la phrase au micro**. Contractions, orthographe UK/US et variantes acceptées. Les phrases ratées reviennent dans le « Mélange du jour ». |
| 📖 **Lecture du jour** | **30 épisodes** de « Tom's Big Trip » : un Français timide qui voyage de Londres à la Californie. Un épisode se débloque par jour, avec lecture audio (phrase surlignée), mots cliquables, traduction, lexique, quiz et une question à laquelle répondre à voix haute. |
| 🗣️ **Parler** | **12 situations** à jouer à l'oral (douane, hôtel, resto, pharmacie, taxi, vol annulé…), un mode **« Répète après moi »** (shadowing avec score), un **guide de survie** (phrases magiques, urgences, faux amis) et des exercices de **prononciation** pour francophones (th, h, i/ee, -ed…). |
| 🏠 **Aujourd'hui** | Objectifs du jour, série de jours 🔥, statistiques, calendrier d'activité, conseil du jour. |
| ⚙️ **Réglages** | Accent US/UK, choix de la voix et de la vitesse, nouveaux mots par jour, **export Anki** des 837 cartes, sauvegarde/restauration de la progression. |

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
sw.js, manifest       mode hors-ligne / installation
```
Pour ajouter du contenu, il suffit d'ajouter des lignes dans les fichiers `data/`.
