// Grammaire — fiches 1 à 8.
// rule : explication (paragraphes ; **gras** autorisé). table : lignes [anglais, français].
// more : « Pour aller plus loin » (exceptions, nuances).
// ex : exercices, une ligne par exercice :
//   m|question|choix1;choix2;choix3|index de la bonne réponse|explication
//   f|phrase avec ___|réponse // variante|indice
//   o|phrase en français|phrase anglaise à reconstituer
window.GRAMMAR = window.GRAMMAR || [];
window.GRAMMAR.push(
{ id: "g1", icon: "🧱", level: "A1", title: "Le verbe TO BE (être)", lesson: "p1",
  rule: [
    "C'est LE verbe de base. Il change selon la personne : **I am**, **you / we / they are**, **he / she / it is**.",
    "À l'oral, on contracte presque toujours : **I'm, you're, he's, she's, it's, we're, they're**.",
    "Négation : on ajoute **not** après le verbe → I'm **not** tired. She **isn't** here. They **aren't** French.",
    "Question : on inverse → **Are** you French? **Is** it far?",
    "⚠️ Piège des Français : l'âge, la faim, la soif, le froid se disent avec BE, pas avec HAVE → **I'm 20** (j'ai 20 ans), **I'm hungry** (j'ai faim), **I'm cold** (j'ai froid)."
  ],
  table: [["I am · I'm", "je suis"], ["you are · you're", "tu es / vous êtes"], ["he / she / it is · he's", "il / elle est"], ["we are · we're", "nous sommes"], ["they are · they're", "ils / elles sont"]],
  more: [
    "Réponses courtes : « Are you tired? » → **Yes, I am.** / **No, I'm not.** On ne contracte jamais un « yes » : « Yes, I'm » est faux.",
    "Deux négations possibles : **he isn't** = **he's not** (les deux sont corrects). Mais pour « I » : seulement **I'm not**.",
    "Autres expressions avec BE : to be afraid (avoir peur), to be right / wrong (avoir raison / tort), to be late (être en retard), to be thirsty (avoir soif)."
  ],
  ex: `
m|She ___ my sister.|am;is;are|1|he / she / it → is.
m|We ___ on holiday.|is;am;are|2|we → are.
m|« J'ai 22 ans » se dit :|I have 22 years.;I am 22.;I have 22.|1|L'âge se dit avec BE : I am 22 (years old).
m|« Are you French? » — « Yes, ___ »|I'm;I am;I are|1|On ne contracte pas une réponse courte : Yes, I am.
f|I ___ hungry. (j'ai faim)|am // 'm|La faim se dit avec BE.
f|They ___ not here. (ils ne sont pas)|are|they → are
f|___ it far from here? (question)|is|Question : on inverse → Is it… ?
o|Je ne suis pas fatigué.|I'm not tired.
o|Est-ce que tu as froid ?|Are you cold?
` },

{ id: "g2", icon: "🔁", level: "A1", title: "Le présent simple", lesson: "p1",
  rule: [
    "Pour les habitudes, les vérités générales et ce qu'on fait souvent : I **work** in a shop. I **live** in Lille. She **likes** pizza.",
    "Le verbe ne change pas… sauf avec **he / she / it** : on ajoute un **-s**. I work → she work**s**. They play → he play**s**.",
    "C'est l'erreur n°1 des francophones : pense au « -s de la 3ᵉ personne » !",
    "Avec le présent simple, on utilise souvent : **every day**, **always**, **usually**, **often**, **sometimes**, **never**."
  ],
  table: [["I / you / we / they work", "je travaille…"], ["he / she / it works", "il / elle travaille"], ["I have → she has", "irrégulier"], ["I go → he goes", "+ es"], ["I study → she studies", "y → ies"]],
  more: [
    "Orthographe du -s : après **-s, -sh, -ch, -x, -o** on met **-es** : watches, goes, does, fixes, washes.",
    "Consonne + **y** → **-ies** : study → studies, fly → flies. Mais voyelle + y garde le y : play → plays, buy → buys.",
    "**have** devient **has** : She has a car.",
    "Place des adverbes : AVANT le verbe (I **often** take the bus) mais APRÈS be (I'm **always** late)."
  ],
  ex: `
m|He ___ in a hotel.|work;works;working|1|he → verbe + s.
m|They ___ football on Sunday.|plays;play;playing|1|they → pas de s.
m|My brother ___ English every day.|study;studys;studies|2|consonne + y → ies.
m|She ___ a big suitcase.|have;has;haves|1|have → has avec he / she / it.
f|My sister ___ (watch) series in English.|watches|-ch → -es
f|Tom ___ (go) to work by bus.|goes|go → goes
f|I ___ (live) in France.|live|I → pas de s
o|Il prend toujours le métro.|He always takes the subway.
o|Nous habitons près de la mer.|We live near the sea.
` },

{ id: "g3", icon: "❔", level: "A1", title: "Questions et négation : DO / DOES", lesson: "p7",
  rule: [
    "Au présent simple, pour poser une question ou dire « ne… pas », on a besoin de l'auxiliaire **do** (ou **does** avec he / she / it).",
    "Question : **Do** you speak English? **Does** she like coffee?",
    "Négation : I **don't** (do not) understand. He **doesn't** (does not) eat meat.",
    "⚠️ Après **does / doesn't**, le verbe perd son -s : She likes → **Does** she **like**…? / She **doesn't like**… (pas « doesn't likes »)."
  ],
  table: [["Do you speak French?", "Tu parles français ?"], ["Does he work here?", "Il travaille ici ?"], ["I don't know.", "Je ne sais pas."], ["She doesn't drink coffee.", "Elle ne boit pas de café."]],
  more: [
    "BE et CAN n'utilisent jamais do : on dit **Are you** tired? / **Can you** help me? (et pas « Do you are… »).",
    "Réponses courtes : « Do you like it? » → **Yes, I do.** / **No, I don't.** « Does he? » → **Yes, he does.**",
    "**do** peut aussi être un vrai verbe (faire) : What **do** you **do**? = Qu'est-ce que tu fais dans la vie ?"
  ],
  ex: `
m|___ you speak English?|Are;Do;Does|1|you → do.
m|___ she live in London?|Do;Is;Does|2|she → does.
m|He ___ like fish.|don't;doesn't;isn't|1|he → doesn't.
m|Quelle phrase est correcte ?|She doesn't likes tea.;She doesn't like tea.;She don't like tea.|1|Après doesn't, le verbe perd son -s.
m|« Do you like pizza? » — « Yes, ___ »|I like;I do;I am|1|Réponse courte avec do.
f|I ___ understand. (je ne comprends pas)|don't // do not|négation avec I
f|___ the bus stop here? (Est-ce que le bus s'arrête ici ?)|does|the bus = it → does
o|Est-ce que tu habites ici ?|Do you live here?
o|Il ne parle pas français.|He doesn't speak French.
` },

{ id: "g4", icon: "🕵️", level: "A1", title: "Les mots interrogatifs (WH- questions)", lesson: "p4",
  rule: [
    "Pour une question ouverte, on commence par le mot interrogatif, puis on garde l'ordre d'une question : **Mot + auxiliaire + sujet + verbe**.",
    "**Where** do you live? · **What** do you want? · **When** does the train leave? · **Why** are you here?",
    "Avec BE : **Where is** the station? · **How are** you?",
    "En français on dit souvent « Tu habites où ? ». En anglais, le mot interrogatif est TOUJOURS au début."
  ],
  table: [["what", "quoi / quel"], ["where", "où"], ["when", "quand"], ["who", "qui"], ["why", "pourquoi"], ["how", "comment"], ["how much / how many", "combien"], ["what time", "à quelle heure"], ["how long", "combien de temps"], ["which", "lequel / quel (parmi un choix)"]],
  more: [
    "**how much** + chose qu'on ne compte pas (money, water, time) / prix : How much is it? · **how many** + pluriel : How many people?",
    "Quand **who** ou **what** est le sujet, pas de do : **Who lives** here? (Qui habite ici ?) mais **Who do** you know? (Qui connais-tu ?).",
    "Avec une préposition, elle va souvent à la fin : **Where** are you **from**? · **Who** are you waiting **for**?"
  ],
  ex: `
m|___ is the toilet?|What;Where;Who|1|où → where.
m|___ much is this jacket?|How;What;Which|0|prix → how much.
m|___ people are there?|How much;How many;How long|1|personnes = on compte → how many.
m|Quelle question est correcte ?|Where you live?;Where do you live?;You live where?|1|Mot + do + sujet + verbe.
f|___ time does the museum open?|what|à quelle heure
f|___ long is the flight?|how|combien de temps
f|Where are you ___? (D'où viens-tu ?)|from|la préposition à la fin
o|Quand est-ce que le train part ?|When does the train leave?
o|Pourquoi le magasin est fermé ?|Why is the shop closed?
` },

{ id: "g5", icon: "🍎", level: "A1", title: "A / AN / THE et les pluriels", lesson: "p3",
  rule: [
    "**a** = un / une, devant un son de consonne : **a** ticket, **a** room, **a** university (on entend « you »).",
    "**an** = un / une, devant un son de voyelle : **an** apple, **an** hour (le h est muet), **an** umbrella.",
    "**the** = le / la / les (chose précise ou déjà connue) : **The** hotel is near **the** station.",
    "Pluriel : on ajoute **-s** en général : ticket**s**, room**s**. L'adjectif ne prend JAMAIS de s : big room**s** (pas « bigs »)."
  ],
  table: [["a bag · an apple", "un sac · une pomme"], ["the bus", "le bus"], ["a man → two men", "pluriel irrégulier"], ["a woman → women", ""], ["a child → children", ""], ["a person → people", ""], ["a foot → feet · a tooth → teeth", ""]],
  more: [
    "Pas d'article pour parler en général : **I love music.** (J'aime la musique.) · **Coffee is expensive here.** Le français met « le / la », l'anglais non.",
    "On met « a » devant un métier : **I'm a student.** · She's **a** nurse. (En français : « je suis étudiant », sans article.)",
    "Pluriel en -es après s, sh, ch, x : bus**es**, glass**es**, sandwich**es**. Consonne + y → ies : city → cit**ies**.",
    "Expressions sans article : go **to bed**, go **to work**, go **home**, **by bus**, **at night**."
  ],
  ex: `
m|I want ___ apple.|a;an;the|1|son de voyelle → an.
m|It's ___ hour from here.|a;an;the|1|h muet (« our ») → an.
m|She's ___ teacher.|—;a;an|1|on met a devant un métier.
m|J'adore la musique.|I love the music.;I love music.;I love a music.|1|en général → pas d'article.
m|Pluriel de « child » :|childs;children;childrens|1|pluriel irrégulier.
f|Two ___, please. (deux billets)|tickets|pluriel en -s
f|There are three ___ in the car. (personnes)|people|person → people
o|L'hôtel est près de la gare.|The hotel is near the station.
o|Je suis étudiant.|I'm a student.
` },

{ id: "g6", icon: "🥤", level: "A1", title: "SOME / ANY · MUCH / MANY / A LOT OF", lesson: "p3",
  rule: [
    "**some** = du, de la, des, quelques, dans une phrase affirmative : I want **some** water. There are **some** good restaurants.",
    "**any** = du, des… dans les questions et les négations : Do you have **any** rooms? · I don't have **any** money.",
    "**a lot of** = beaucoup de, avec tout : **a lot of** people, **a lot of** time.",
    "**much** (indénombrable) et **many** (pluriel) surtout en question et négation : How **much** money? · Not **many** tourists."
  ],
  table: [["Can I have some bread?", "Je peux avoir du pain ? (demande polie → some)"], ["Do you have any questions?", "Vous avez des questions ?"], ["I don't have much time.", "Je n'ai pas beaucoup de temps."], ["There aren't many people.", "Il n'y a pas beaucoup de monde."]],
  more: [
    "Dénombrable = qu'on peut compter (a ticket, two tickets). Indénombrable = pas de pluriel : **water, money, bread, information, advice, luggage, furniture, news**.",
    "⚠️ On ne dit pas « an information » ni « luggages » : **some information**, **my luggage**.",
    "Quand on PROPOSE ou DEMANDE quelque chose poliment, on utilise **some** même en question : Would you like **some** coffee?",
    "**a few** (quelques, dénombrable) / **a little** (un peu de, indénombrable) : a few days, a little sugar."
  ],
  ex: `
m|Do you have ___ rooms for tonight?|some;any;much|1|question → any.
m|I'd like ___ water, please.|any;some;many|1|phrase affirmative / demande → some.
m|How ___ money do you need?|many;much;lot|1|money = indénombrable → much.
m|There are ___ tourists in summer.|a lot of;much;any|0|affirmatif + pluriel → a lot of.
m|Quelle phrase est correcte ?|I have two luggages.;I have two bags.;I have two luggage.|1|luggage est indénombrable : on compte des « bags ».
f|I don't have ___ cash. (pas de liquide)|any|négation → any
f|How ___ nights? (combien de nuits)|many|nights = pluriel
o|Je peux avoir du pain ?|Can I have some bread?
o|Il n'y a pas beaucoup de monde.|There aren't many people.
` },

{ id: "g7", icon: "📍", level: "A1", title: "THERE IS / THERE ARE (il y a)", lesson: "p5",
  rule: [
    "**there is** (there's) + singulier : **There's** a bank near here.",
    "**there are** + pluriel : **There are** two beds in the room.",
    "Question : **Is there** a lift? · **Are there** any restaurants?",
    "Négation : **There isn't** a pharmacy. · **There aren't** any taxis."
  ],
  table: [["There's a problem.", "Il y a un problème."], ["There are a lot of people.", "Il y a beaucoup de monde."], ["Is there wifi?", "Il y a du wifi ?"], ["There isn't any hot water.", "Il n'y a pas d'eau chaude."]],
  more: [
    "Au passé : **there was** (singulier) / **there were** (pluriel) : There was a lot of traffic.",
    "⚠️ « Il y a » + durée ne se traduit PAS par there is : « il y a deux jours » = **two days ago**.",
    "Réponses courtes : « Is there a bus? » → **Yes, there is.** / **No, there isn't.**"
  ],
  ex: `
m|___ a supermarket near here?|Is there;Are there;There is|0|question au singulier.
m|___ three bedrooms in the flat.|There is;There are;It has|1|pluriel → there are.
m|___ any towels in the bathroom.|There isn't;There aren't;There not|1|towels = pluriel.
m|« Je suis arrivé il y a deux jours. »|I arrived there are two days.;I arrived two days ago.;I arrived since two days.|1|il y a + durée = ago.
f|___ there a lift? (Il y a un ascenseur ?)|is|singulier
f|There ___ a lot of traffic yesterday.|was|passé singulier
o|Il y a un problème avec la douche.|There's a problem with the shower.
o|Il y a des restaurants près d'ici ?|Are there any restaurants near here?
` },

{ id: "g8", icon: "🎒", level: "A1", title: "MY / YOUR… et le 's (possession)", lesson: "p1",
  rule: [
    "Les adjectifs possessifs : **my, your, his** (à lui), **her** (à elle), **its** (à une chose), **our, their**.",
    "Contrairement au français, ça dépend du POSSESSEUR, pas de l'objet : « sa valise » → **his** suitcase (Tom) / **her** suitcase (Anna).",
    "Le **'s** sert à dire « de quelqu'un » : **Tom's** phone = le téléphone de Tom. **My brother's** car = la voiture de mon frère.",
    "Pour « le mien, le tien… » : **mine, yours, his, hers, ours, theirs** → This bag is **mine**."
  ],
  table: [["my / mine", "mon, ma / le mien"], ["your / yours", "ton, votre / le tien"], ["his / his", "son, sa (à lui)"], ["her / hers", "son, sa (à elle)"], ["our / ours", "notre / le nôtre"], ["their / theirs", "leur / le leur"]],
  more: [
    "Pluriel en -s : on met juste l'apostrophe → my **parents'** house (la maison de mes parents).",
    "**its** (possessif, sans apostrophe) ≠ **it's** (= it is). The hotel and **its** pool. / **It's** hot.",
    "Pour les choses, on utilise plutôt **of** : the end **of** the street, the name **of** the hotel.",
    "Question : **Whose** bag is this? = À qui est ce sac ?"
  ],
  ex: `
m|Anna is here with ___ brother.|his;her;its|1|à Anna → her.
m|Tom lost ___ passport.|his;her;their|0|à Tom → his.
m|« Le téléphone de Léa » :|the phone of Léa;Léa's phone;Léa phone|1|personne → 's.
m|This bag is ___.|my;mine;me|1|« le mien » → mine.
m|Quelle phrase est correcte ?|It's a nice hotel.;Its a nice hotel.;It a nice hotel.|0|it's = it is.
f|We love ___ new flat. (notre)|our|nous → our
f|Is this ___ phone? (ton)|your|you → your
o|C'est la voiture de mon frère.|It's my brother's car.
o|Ils ont perdu leurs clés.|They lost their keys.
` }
);
