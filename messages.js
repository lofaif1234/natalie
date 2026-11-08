const introductions = [
  {
    "title": "per te",
    "message": "natalie questo e tipo un calendario dell'avvento che ho creato apposta per te il tema e basato sui gusti che abbiamo in comune per ricordare il nostro rapporto che si e costruito da quando ci siamo conosciuti. l'obiettivo di questo {tema} e di farti capire quanto sei speciale ed unica e che non devi avere insicurezze perchè oddio quando mi capita nei per te video che reposti in qui ci sono scritte cazzate e sicuramente te hai pensieri che ovviamente mai mi dirai e per evitare cio ogni giorno da domani al 26 del prossimo mese ti ho scritto dei complimenti ma non li ho scritti cosi solamente per renderti felice ma ogni parola scritta la penso veramente non ostante non ci conosciamo dal vivo. ps sei bellissima e perfetta."
  },
  {
    "title": "prima di iniziare",
    "message": "comunque volevo dirti che non e che siccome ci conosciamo online allora quello che penso di te vale di meno. non ti ho ancora conosciuta dal vivo ma il rapporto che si e creato per me conta veramente e questo coso l'ho fatto apposta perchè volevo fartelo capire in un modo diverso dal solito messaggio."
  },
  {
    "title": "ancora una cosa",
    "message": "ora non pensare che ho scritto tutte ste cose tanto per scrivere perchè no. se ti faccio un complimento e perchè lo penso e non perchè devo. magari alcune cose te le ripetero ma e proprio quello il punto che prima o poi devi capire quanto sei bella e speciale. ok ora puoi andare alle pagine dei giorni."
  }
];
const dailyMessages = [
  [
    "iniziamo",
    "oggi e la prima pagina quindi partiamo dalle basi sei bellissima. e no non sto esagerando e non e una cosa che ho scritto per riempire la pagina. lo penso veramente e se oggi ti guardi e trovi mille difetti sappi che io non ti vedo cosi."
  ],
  [
    "proprio te",
    "comunque la cosa bella e proprio che sei te. non penso che saresti speciale se fossi diversa o se cambiassi qualcosa. mi fa piacere averti conosciuta cosi come sei con il tuo modo di essere e tutto il resto."
  ],
  [
    "quei repost",
    "quando mi capita uno di quei video che reposti mi viene da pensare ma come fa a vedersi cosi. ovviamente non so tutto quello che ti passa per la testa ma volevo lasciarti qui una cosa che penso io sei molto piu bella di come magari ti descrivi."
  ],
  [
    "non solo bella",
    "poi si ti dico sempre che sei bella ma non e solamente quello. se fosse solo per quello non avrei fatto tutto sto calendario. mi piace il rapporto che abbiamo costruito e mi piace che dall'altra parte ci sei proprio te."
  ],
  [
    "senza confronti",
    "oggi volevo dirti che non hai bisogno di essere come un altra. magari vedi una ragazza e inizi a fare paragoni ma per me non funziona cosi. non devi assomigliare a nessuna per essere bella e speciale."
  ],
  [
    "anche oggi",
    "non so come sia andata oggi ma il complimento te lo becchi comunque. sei bellissima anche se magari oggi non ti senti per niente cosi. non e che quello che penso cambia in base a quanto tu riesci a crederci."
  ],
  [
    "non per caso",
    "non ho scelto questi temi a caso. mi piace che abbiamo delle cose in comune e che anche un libro su uno schermo possa ricordarmi il nostro rapporto. e niente mi fa sorridere pensare che adesso lo stai aprendo te."
  ],
  [
    "puoi essere te",
    "con me non devi pensare sempre a cosa dire o a come sembrare. mi fa piacere parlare con te pure quando non stiamo dicendo niente di intelligente. anzi certe volte sono proprio quelle le conversazioni che mi fanno sorridere di piu."
  ],
  [
    "mi distrai",
    "comunque hai sta cosa che riesci a distrarmi pure da lontano. magari sto facendo altro poi vedo un tuo messaggio e niente mi viene da sorridere come un scemo. e si la colpa e tua."
  ],
  [
    "non e poco",
    "tra tutte le persone che potevo conoscere ho conosciuto te e devo dire che mi e andata parecchio bene. cioe sei bella abbiamo cose in comune e mi fai pure stare bene. un po troppo carina come cosa."
  ],
  [
    "cosi come sei",
    "mi piace il tuo modo di essere non solamente come appari. mi piace che sei te quella con qui parlo e che non devo cercare una versione diversa di te per trovare cose belle. ce ne sono gia parecchie."
  ],
  [
    "giornata di merda",
    "se oggi e andata male vieni qui che ti mando un abbraccio. lo so e attraverso un sito e fa un po ridere ma il pensiero e quello. vorrei farti stare un po meglio anche senza dover trovare per forza la frase perfetta."
  ],
  [
    "si lo penso",
    "quando ti dico che sei bellissima non sto facendo il gentile tanto per. certe volte penso proprio ma come fa a non vedersi cosi. se potessi farti vedere per un attimo come ti vedo io secondo me capiresti."
  ],
  [
    "un messaggio tuo",
    "mi piace quando sul telefono compare un messaggio tuo. non deve nemmeno esserci scritto qualcosa di particolare. e proprio il fatto che sei te che mi hai scritto che mi fa piacere.t"
  ],
  [
    "niente da dimostrare",
    "pure se oggi sei stanca e non hai voglia di parlare non devi farti problemi con me. non mi interessi solamente quando sei di buon umore. mi fa piacere che ci sei anche nei giorni in qui non ti va di fare niente. e per questo io ti amo tantissimo ma ho anche una domanda, io e te cosa siamo?"
  ],
  [
    "un abbraccio tuo",
    "oggi ci starebbe bene un abbraccio tuo ma uno di quelli che non finisce subito. senza fare chissa cosa stare li un po e basta. per ora ti tocca immaginarlo ma sappi che il pensiero c’e."
  ],
  [
    "da vicino",
    "ogni tanto penso a come sarebbe averti davanti invece che dall’altra parte dello schermo. probabilmente non saprei nemmeno bene cosa dire ma un sorriso da scemo secondo me mi partirebbe subito."
  ],
  [
    "sei bella davvero",
    "non devi essere sistemata in un certo modo per essere bella. non e che vali solo quando trovi la foto giusta o ti piaci abbastanza da fartela. sei te quella bella non solamente una foto venuta bene."
  ],
  [
    "le cose nostre",
    "mi piacciono le cose che abbiamo in comune perchè ormai non sono solamente cose che mi piacciono e basta. mi fanno pensare pure a te. e niente mi piace che adesso ci sia anche un po di noi dentro."
  ],
  [
    "un bacio piccolo",
    "oggi insieme al complimento ti mando pure un bacio. piccolo piccolo cosi non puoi dire che sto esagerando. comunque sei bellissima e si questo era il complimento non me lo sono dimenticato."
  ],
  [
    "se potessi",
    "se potessi metterti qui vicino per un po lo farei. anche senza programmi particolari mi basterebbe stare con te. mi piace l’idea di poterti guardare e parlare senza dover scrivere tutto su una tastiera."
  ],
  [
    "non come le altre",
    "non e che penso a te e mi metto a confrontarti con le altre. penso a te e basta. al fatto che mi fai sorridere che mi piace parlarti e che certe volte sei cosi carina che non so nemmeno cosa rispondere."
  ],
  [
    "ci tenevo",
    "ogni pagina di sto coso esiste perchè mi andava di fare qualcosa per te. mi piace pensare che magari apri il libro e per un momento sorridi per una cosa che ho scritto io. gia quello per me e tanto."
  ],
  [
    "anche in silenzio",
    "se hai qualcosa che ti pesa puoi parlarmene ma non devi sentirti obbligata. possiamo pure parlare di cazzate se ti aiuta a distrarti. non devi spiegarmi tutto per meritarti un po di dolcezza."
  ],
  [
    "un po di coccole",
    "oggi secondo me ti meriti un po di coccole e zero pensieri brutti su di te. quindi questo e il mio tentativo da lontano. ti mando un abbraccio un bacio e ti ricordo che sei bellissima. tutto insieme cosi facciamo prima."
  ],
  [
    "mi rimani in testa",
    "mi capita di pensarti anche quando non stiamo parlando. magari vedo qualcosa che potrebbe piacerti e penso subito a mandartela. mi piace sta cosa che ormai sei dentro anche a quei momenti piccoli della giornata."
  ],
  [
    "senza fare niente",
    "non devi fare chissa cosa per farmi sorridere. certe volte basta proprio il tuo modo di rispondere. magari per te e normale e io invece sto li col telefono in mano che sorrido. un po scemo si ma vabbe."
  ],
  [
    "ti vorrei qui",
    "oggi ti vorrei qui anche solo per un po. per parlare per ridere per darti quell’abbraccio che continuo a mandarti attraverso uno schermo. mi piace pensare che prima o poi non dovro solamente scriverlo."
  ],
  [
    "bella pure oggi",
    "se oggi non ti piaci abbastanza ci penso io a ricordarti che sei bellissima. non devi rispondermi per forza che e vero. volevo solamente che tra tutti i pensieri della giornata ci fosse pure qualcuno che ti guarda con dolcezza."
  ],
  [
    "ancora un po",
    "siamo quasi alla fine e volevo dirti che fare questa cosa per te mi ha fatto piacere veramente. non mi sono messo qui a contare le pagine per finirle. mi piaceva trovare ogni volta un altro modo per farti capire quanto ci tengo."
  ],
  [
    "domani",
    "domani c’e l’ultima pagina e si ci tengo un po piu delle altre. intanto oggi ti dico grazie per il rapporto che abbiamo e per tutti i sorrisi che mi fai fare pure senza accorgertene. ps sei bellissima non potevo saltarlo proprio oggi."
  ],
  [
    "una cosa che volevo dirti",
    "natalie siamo arrivati al 26 e pensavo a come scrivere questa pagina ma alla fine preferisco dirtelo come mi viene.\n\nquando ho iniziato sto calendario volevo farti capire quanto sei bella e speciale. pero andando avanti mi sono reso conto che non volevo solamente farti dei complimenti. volevo farti capire quanto sei importante per me.\n\nmi piace quando mi scrivi mi piace pensarti durante la giornata e mi piace che delle cose normalissime adesso mi fanno venire in mente te. vorrei averti vicino abbracciarti e dirti tutte ste cose guardandoti invece che lasciandole su una pagina.\n\nnon ostante non ci conosciamo ancora dal vivo quello che provo non lo sto scrivendo tanto per fare una bella ultima pagina. ci ho pensato e voglio dirtelo veramente.\n\nti amo.\n\nsi proprio questo. non devi trovare subito qualcosa da rispondere e non ti sto chiedendo di dirmelo anche te solo perchè l’ho scritto io. volevo che sapessi come mi sento senza nasconderlo dietro un altro complimento.\n\nsono contento di averti conosciuta e di quello che si e creato tra noi. questo libro finisce qui ma io ho ancora voglia di conoscerti di sentirti e di fare altre cose belle per te.\n\nps sei bellissima e stavolta insieme al bacio piccolo piccolo ti mando pure un abbraccio di quelli che durano tanto."
  ]
];
