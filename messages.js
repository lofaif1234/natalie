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
    "amoremio ti volevo scrivere una cosa lunga perchè certe volte ti dico ti amo tantissimo e mi sembra comunque di non riuscire a farti capire quanto. non perchè quelle parole sono poche ma perchè dentro ci sono tante cose che vorrei dirti e poi quando ti scrivo mi viene solamente da ripeterti che ti amo e che vorrei averti qui. quindi ora provo a scriverti tutto come mi viene senza pensare troppo a come deve uscire.\n\nio sono veramente fortunato ad essere il tuo ragazzo. ogni tanto ci penso e mi fa sorridere il fatto che prima non ci conoscevamo nemmeno e adesso sei una parte cosi importante delle mie giornate. prima non potevo sapere niente di te e ora mi viene spontaneo cercarti raccontarti quello che faccio chiederti come stai e pensare a quando possiamo sentirci. mi piace che adesso ci sei te a qui posso scrivere amore mio. mi piace sapere che quello che abbiamo e diventato questo e non lo considero una cosa da poco solamente perchè ormai ci siamo abituati a dircelo.\n\nmi piace quando mi scrivi anche senza avere niente di particolare da dirmi. puoi pure raccontarmi una cosa normalissima e io voglio sentirla lo stesso perchè sei te che me la stai raccontando. quando ti chiedo che fai non sto aspettando una risposta interessante per forza. voglio solamente sapere un po di te stare nella tua giornata e averti nella mia. mi viene voglia di raccontarti pure le cazzate piu piccole quelle che magari a un altra persona non direi nemmeno perchè non mi sembrano importanti. con te invece mi va e basta.\n\ne poi mi piace sentirti amore. mi piacciono le nostre chiamate quando giochiamo quando guardiamo la serie quando parliamo e finiamo su discorsi che non c’entrano niente con quello da qui siamo partiti. non dobbiamo organizzare chissa cosa per farmi venire voglia di stare con te. possiamo pure fare una cosa che ho gia fatto mille volte ma se ci sei anche te mi fa piu piacere. mi piace poter condividere il mio tempo con te e sapere che anche in una giornata normalissima possiamo trovarci un momento nostro.\n\nogni tanto ripenso a quando abbiamo iniziato a parlarci e a come piano piano siamo arrivati fino a qui. da me che facevo il timido per chiederti il numero a me che adesso ti scrivo amoremio continuamente e vorrei poterti dare tutti i baci che ti mando. non sapevo quanto saresti diventata importante e ora non riesco a pensare a quel periodo senza essere contento che ci siamo conosciuti. tra tutte le persone proprio te. e io sono felice che sei stata te perchè mi piace la persona che sto conoscendo e mi piace sempre di piu avere a che fare con te.\n\nsei bellissima amore mio. lo so che te lo dico tanto ma non mi viene da smettere perchè lo penso ogni volta. non lo dico solamente perchè sei la mia ragazza e allora devo farti un complimento. sei proprio bella per me e vorrei che almeno per un momento potessi guardarti senza tutti quei pensieri che ti fanno trovare subito qualcosa che non va. io non ti guardo cercando cosa cambiare. non penso che saresti bella solo se fossi diversa in qualcosa. mi piaci te adesso e vorrei averti vicina cosi come sei senza che devi prima sentirti abbastanza bella per me.\n\ne non e solamente il tuo aspetto. mi piace come parli con me come scherzi come mi rispondi quando sei dolce e tutte quelle cose piccole che magari fai senza pensarci. mi piace conoscerti pure nelle cose in qui siamo diversi. sapere cosa ti piace cosa pensi cosa vorresti fare e cosa invece non sopporti. non voglio fermarmi alle cose che so gia di te e pensare di averti capita tutta. voglio continuare a conoscerti e trovare altre cose da amare anche quelle che magari adesso non so nemmeno.\n\nmi fai sorridere tanto. certe volte basta un tuo messaggio e mi ritrovo col telefono in mano tutto contento. magari te dall’altra parte non ci fai nemmeno caso perchè hai scritto una cosa normale e io invece sono li che penso a quanto sei carina. e quando ti dico che mi manchi e perchè vorrei proprio averti vicino in quel momento. non solamente per fare qualcosa insieme ma per poterti guardare abbracciare e sapere che per un po non c’e uno schermo in mezzo.\n\nvorrei fare tante cose con te ma penso pure a quelle piu semplici. stare vicini mentre guardiamo qualcosa tenerti la mano uscire a mangiare parlare senza dover scrivere e poterti dare un bacio quando mi viene voglia invece di mandarti solamente mwah. vorrei sapere come sarebbe averti li mentre facciamo le nostre cose e ogni tanto avvicinarmi per abbracciarti. mi piace immaginare questi momenti perchè non sto pensando a una cosa qualsiasi. sto pensando che voglio farla con te.\n\ne vorrei poterti stare vicino anche quando non sei felice. non devi avere sempre voglia di parlare o essere dolce per forza per farmi piacere che ci sei. sei la mia ragazza anche quando sei stanca quando hai mille pensieri quando non sai cosa rispondere e quando non ti va di fare niente. non penso meno di te in quei momenti e non mi viene da volerti meno bene. mi viene da chiedermi come posso starti vicino e cosa ti farebbe piacere senza decidere io al posto tuo.\n\nse vuoi parlare io ti ascolto. puoi spiegarti come ti viene anche se per te non ha senso o ti sembra tutto incasinato. non devi trovare un modo perfetto per raccontarmi come stai. se non capisco subito possiamo riparlarne e se invece vuoi solamente stare un po insieme senza entrare nel discorso va bene pure quello. non devi dirmi tutto per avere il mio affetto. voglio che con me puoi sentirti libera pure di dire oggi non me la sento senza pensare che poi mi devi dare qualcosa in cambio per farti perdonare.\n\nci tengo tanto a farti sentire amata amore. non voglio che rimanga solamente una cosa che ti scrivo nei messaggi lunghi. voglio dimostrartelo ascoltandoti ricordandomi delle cose che mi dici dedicandoti tempo e facendo attenzione a come ti senti. magari non sapro fare sempre tutto giusto e qualche volta mi spieghero male. pero se ti faccio stare male voglio poterti ascoltare e capire dove ho sbagliato. quello che abbiamo conta troppo per trattarlo come se bastasse dire ti amo e poi non fare attenzione al resto.\n\nmi fa piacere esserci quando hai qualcosa da raccontare e ti rende contenta. voglio sentire pure quelle cose che magari inizi a dire e poi pensi vabbe non gli interessa. a me interessa sapere come stai vivendo la tua giornata cosa e successo e per cosa sei felice o preoccupata. mi piace fare il tifo per te dirti brava amore quando riesci in qualcosa e ricordarti che un giorno andato male non vuol dire che te non sei capace. non devi fare tutto da sola solamente per dimostrare che riesci.\n\ne pure io con te voglio essere sincero. voglio raccontarti come sto e riuscire a parlarti anche quando non so bene come fare. mi piace che possiamo conoscerci anche cosi e non solamente attraverso le cose belle. voglio che tra noi ci sia spazio per entrambi per ascoltarci e per capirci meglio. non penso che dobbiamo essere perfetti per stare bene insieme ma voglio che continuiamo a tenerci tanto a quello che abbiamo e a dimostrarcelo.\n\nsono contento di tutte le piccole cose nostre. i buongiorno le buonanotte i cuori i baci scritti i messaggi quando stiamo facendo altro e le volte in qui continuiamo a dirci ti amo. magari da fuori sembrano solamente messaggi ma per me sono momenti in qui ci cerchiamo e ci facciamo capire che ci siamo. mi fa stare bene sapere che posso scriverti una cosa dolce quando mi viene e che dall’altra parte ci sei te.\n\nquando penso a noi mi viene voglia di continuare. continuare a sentirti a giocare con te a guardare cose insieme a raccontarci le giornate e poi anche vederci e fare tutte quelle cose che per ora possiamo solamente immaginare. voglio altre conversazioni altre cose da ricordare altri momenti in qui mi viene da pensare che sono stato proprio fortunato. non voglio solamente aspettare quello che verra perchè mi piace pure quello che abbiamo adesso e voglio godermelo con te.\n\nti amo tanto piccola mia. pure quando sono impegnato e non riesco a dirtelo subito pure quando sto facendo altro e ci sentiamo dopo. non e che quello che provo esiste solamente mentre siamo in chiamata o ci stiamo scrivendo. mi accompagna pure durante il resto della giornata quando mi viene in mente qualcosa di te o penso a una cosa che voglio raccontarti appena possiamo parlare.\n\ne non devi rispondere a tutto sto messaggio con qualcosa di altrettanto lungo. mi andava di scrivertelo perchè voglio che sai quanto sono contento di averti nella mia vita e quanto amore ho per te. certe volte ti scrivo ti amo tantissimooo e vorrei che insieme a quel messaggio ti arrivasse pure un abbraccio vero. vorrei che sentissi quanto ti terrei stretta e con quanta voglia ti darei un bacio. intanto provo a fartelo arrivare cosi con tutte ste parole che spero almeno un pochino ti fanno capire.\n\namoremio sono fortunato ad essere il tuo ragazzo e voglio continuare a farti sentire quanto ci tengo a te. sei bellissima sei importante per me e mi fai felice in tante cose che magari nemmeno noti. io invece le sento e sono contento che ci sei proprio te. ora ti mando un bacio sulla fronte e un abbraccio lungo lungo di quelli che non avrei voglia di finire subito. ti amo tanto tanto piccola miaaa mwahhhh 🩷🩷🩷🩷🩷"
  ]
];
