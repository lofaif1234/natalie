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
    "con me non devi avere sempre la risposta giusta o sembrare felice per forza. mi fa piacere parlare con te anche se non hai niente di particolare da raccontare. non devi fare chissa cosa per essere una persona che conta per me."
  ],
  [
    "un pensiero mio",
    "se oggi hai pensato qualcosa di brutto su di te allora aggiungici pure quello che penso io. che sei bella che sei unica e che non meriti di trattarti come se in te ci fosse sempre qualcosa che non va."
  ],
  [
    "non e poco",
    "magari per te e una cosa normale che ci siamo conosciuti e abbiamo iniziato a parlare ma io non la considero una cosa da niente. tra tutte le persone ci siamo trovati noi e a me sta cosa fa piacere veramente."
  ],
  [
    "non devi cambiare",
    "non ti sto facendo tutti sti complimenti pensando che un giorno diventerai diversa. mi piaci come persona gia adesso. non devi prima cambiare tutte quelle cose che magari non ti piacciono di te per meritarti quello che ti scrivo."
  ],
  [
    "se oggi pesa",
    "se oggi e una giornata di merda non ti faccio il solito discorso che devi sorridere per forza. ti dico solamente che anche oggi sei una persona speciale e sono contento di averti conosciuta. pure se oggi a te sembra tutto il contrario."
  ],
  [
    "si lo penso",
    "magari stai leggendo e pensi vabbe lo dice solamente per farmi stare bene. no cioe ovvio che voglio farti stare bene ma non mi devo inventare cose belle su di te per farlo. quelle ci sono gia."
  ],
  [
    "il nostro rapporto",
    "una delle cose che mi piacciono e che il nostro rapporto si e costruito da quando ci siamo conosciuti. prima non sapevo nemmeno chi fossi e adesso sto qui a scriverti 32 pagine cioe direi che qualcosa vuol dire."
  ],
  [
    "senza dimostrare",
    "non devi dimostrarmi ogni giorno che sei speciale. se sei stanca o non hai voglia di parlare non e che improvvisamente penso meno di te. sei sempre te e non devi fare qualcosa di particolare per farmi piacere che ci sei."
  ],
  [
    "una cosa semplice",
    "oggi niente discorso enorme volevo solamente ricordarti che sei bellissima. lo so l'ho gia detto ma non e che dopo una volta scade. e valido pure oggi e pure domani."
  ],
  [
    "oltre lo schermo",
    "non ostante non ci conosciamo dal vivo io non considero finto il bene che ti voglio. dietro lo schermo ci sei te davvero e quello che penso quando ti scrivo non e meno vero solo perchè non siamo nello stesso posto."
  ],
  [
    "non sei un difetto",
    "mi dispiace pensare che magari ti fissi su una cosa di te e finisci per vedere solamente quella. io quando penso a te non penso a una lista di difetti. penso a una persona che sono contento di avere conosciuto."
  ],
  [
    "i tuoi gusti",
    "mi piace che abbiamo gusti in comune ma mi piace pure che hai i tuoi. non devi essere uguale a me in tutto. e bello conoscerti anche nelle cose che ti rendono diversa perchè fanno parte di te."
  ],
  [
    "un sorriso magari",
    "spero che sta pagina ti faccia fare anche solamente un mezzo sorriso. non perchè devi essere felice per forza ma perchè mi piace l'idea di averti lasciato una cosa bella nella giornata anche da qui."
  ],
  [
    "te lo meriti",
    "se ti dico che sei bella non devi per forza pensare che sto esagerando. magari tu non ti vedi cosi ma io si e volevo dirtelo. spero che oggi riesci a pensare anche solo per un momento che magari tutte ste cose belle su di te sono vere."
  ],
  [
    "nessuna classifica",
    "per me non sei in una gara con le altre persone. non sto facendo una classifica di chi e piu bella o piu interessante. sto parlando di te e delle cose che mi fanno pensare che sei unica."
  ],
  [
    "il tempo per te",
    "ho voluto dedicare del tempo a questa cosa perchè mi andava di fare qualcosa apposta per te. non perchè dovevo e nemmeno per avere qualcosa in cambio. semplicemente ci tenevo e mi piaceva l'idea di farti felice."
  ],
  [
    "non devi dirmi tutto",
    "magari hai pensieri che non ti va di raccontarmi e va bene non devi sentirti obbligata. volevo solamente che anche in quei momenti avessi qui qualcosa di bello da leggere senza dover spiegare niente a nessuno."
  ],
  [
    "sempre te",
    "mi piace pensare che dietro a tutte le tue insicurezze ci sei comunque te. non spariscono le cose belle che hai solamente perchè in quel momento non riesci a vederle. per me rimangono li."
  ],
  [
    "non a caso",
    "se torno a dirti che sei speciale non e perchè non ho altre parole. e perchè vorrei che fosse una di quelle cose che ti rimangono in testa invece di tutte le cazzate che magari ti fanno pensare il contrario."
  ],
  [
    "pure nei giorni no",
    "non devi essere sempre interessante sempre simpatica sempre al massimo. non sei una persona a cui voglio bene solamente quando e tutto facile. puoi avere i tuoi giorni no senza pensare che per questo vali meno."
  ],
  [
    "sono contento",
    "oggi volevo dirti una cosa che magari sembra banale ma sono contento che ci siamo conosciuti. veramente. non so se te lo dico abbastanza ma questo rapporto per me non e una cosa che c'e tanto per esserci."
  ],
  [
    "rileggi questa",
    "se oggi ti senti brutta rileggi questa sei bellissima. non e una sfida a chi ha ragione e non pretendo di cambiarti idea con una frase ma volevo che qui ci fosse anche il mio pensiero."
  ],
  [
    "quasi alla fine",
    "mancano poche pagine e spero che almeno qualcuna ti abbia fatto stare un po meglio. comunque non pensare che quando finiscono i giorni finiscono pure i complimenti perchè sarebbe un po stupido dopo tutto sto discorso."
  ],
  [
    "non scade domani",
    "domani e l'ultima pagina ma quello che ti ho scritto non ha una scadenza. se tra un po ti torna qualche insicurezza puoi rileggerti tutto e sappi che non l'ho pensato solamente il giorno in qui ho scritto."
  ],
  [
    "ultima pagina",
    "siamo al 26 novembre e questa e l'ultima pagina. alla fine quello che volevo dirti era questo sono contento di averti conosciuta il nostro rapporto per me conta e sei bellissima e speciale veramente. spero che sto coso ti abbia fatto capire almeno un po come ti vedo io. ps sei bellissima e perfetta si pure oggi."
  ]
];
