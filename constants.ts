
import { Operator, Author, Testimonial, NewsArticle, QuizQuestion } from './types';

export const AUTHORS: Record<string, Author> = {
  'matteo-rinaldi': {
    id: 'matteo-rinaldi',
    name: 'Matteo Rinaldi',
    role: 'Senior Betting Analyst',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop', 
    bio: 'Ex quotista londinese tornato in patria. Odia le multiple a 20 eventi, ama gli Handicap Asiatici e sostiene che l\'XG (Expected Goals) sia più importante del risultato finale. La sua filosofia: "Se il banco vince sempre, è perché tu giochi male."',
    expertise: ['Money Management', 'Asian Markets', 'Normativa ADM', 'Psicologia del Gioco'],
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  }
};

// Helper for badges to ensure type safety
const getBadges = (badges: string[]) => badges as ('HOT' | 'NEW' | 'TOP' | 'ESCLUSIVO')[];

const BASE_OPERATORS: Operator[] = [
  // 1. STAKE.IT
  {
    id: 'stake-it',
    name: 'Stake.it',
    logoUrl: 'https://logo.clearbit.com/stake.com', 
    licenseNumber: 'Conc. GAD 15469',
    rating: 4.9,
    features: ['Quote Top su Calcio e Tennis', 'UX Moderna 2026', 'Prelievi Lampo'],
    badges: getBadges(['HOT', 'NEW', 'TOP']),
    description: 'La nuova frontiera. Piattaforma così veloce che le altre sembrano girare su un 56k.',
    expertTake: "Finalmente un sito che non sembra disegnato nel 2008. Stake ha capito che vogliamo velocità, non banner lampeggianti. Le quote sul tennis sono illegali (in senso buono), ma se cercate l'ippica o il bingo della domenica, avete sbagliato indirizzo.",
    bottomLine: "Il miglior sito per chi vive nel 2026 e non nel 1990. Velocità e quote pure.",
    fullReview: `
      <h3>La Rivoluzione "Mobile-Native"</h3>
      <p>
        Parliamoci chiaro: la maggior parte dei siti ADM sono dei dinosauri. Stake.it è l'asteroide. Hanno portato in Italia l'esperienza utente che ha reso Stake.com un colosso mondiale, ovviamente adattandola alle nostre (noiose ma necessarie) normative.
      </p>
      
      <h4>Quote e Payout: Dove sono i soldi?</h4>
      <p>
        Ho analizzato il payout sulla Serie A. Mentre la media italiana rantola intorno al 94.5%, Stake si piazza comodamente sopra il <strong>96%</strong> sui mercati 1X2. 
        Sull'ATP di Tennis siamo a livelli di eccellenza. Attenzione però: sui campionati minori (tipo Serie C uzbeka) l'aggio sale. Non sono una onlus, dopotutto.
      </p>

      <h4>L'Esperienza Utente (UX)</h4>
      <p>
        Non c'è un'app da scaricare che pesa 200MB. Il sito mobile <em>è</em> l'app. È una Progressive Web App (PWA) che funziona meglio di qualsiasi app nativa che ho testato quest'anno. Niente crash, niente logout improvvisi mentre stai per chiudere una live.
      </p>

      <h4>Il verdetto onesto</h4>
      <p>
        Manca lo streaming? Sì (per ora). Manca l'ippica? Sì. Manca il Totocalcio? Per fortuna sì. Stake fa una cosa sola: scommesse sportive pure, veloci, con quote alte. Se sei uno scommettitore "chirurgico", è il top. Se vuoi giocare ai cavalli mentre gratti un biglietto virtuale, vai su Snai.
      </p>
    `,
    promoLongDescription: `
      <h3>Guida al Bonus Stake 2026</h3>
      <p>Il codice <strong>NEWBONUS</strong> è l'unica chiave per accedere all'offerta esclusiva di benvenuto. A differenza dei bonus standard che trovi in giro, questo pacchetto è stato negoziato direttamente per i nostri lettori.</p>
      <h4>Come Funziona</h4>
      <ul>
        <li><strong>Step 1:</strong> Registrati inserendo il codice nel campo "Codice Promozionale" (o Partner Code).</li>
        <li><strong>Step 2:</strong> Invia il documento d'identità entro 30 giorni.</li>
        <li><strong>Step 3:</strong> Effettua un deposito di almeno 20€.</li>
      </ul>
      <p>Il bonus viene accreditato in tre tranche settimanali per favorire un gioco responsabile e costante, piuttosto che il "tutto e subito". Il rollover è di 6x, decisamente onesto per il mercato italiano attuale.</p>
    `, 
    pros: ['Interfaccia più veloce del mercato', 'Payout Serie A > 96%', 'Cashout fluidissimo', 'Assistenza live che risponde davvero'],
    cons: ['Niente Streaming TV', 'Manca Ippica', 'No Combo Bet complesse'],
    ratingBreakdown: { odds: 4.9, app: 5.0, support: 4.5, bonuses: 4.7 },
    promoCode: 'NEWBONUS',
    bonusOffer: '100% fino a 500€',
    link: 'https://www.stake.it',
    category: 'hybrid',
    reviewAuthor: 'Matteo Rinaldi',
    reviewDate: '2026-02-15',
    authorId: 'matteo-rinaldi'
  },
  // 2. BET365
  {
    id: 'bet365-it',
    name: 'bet365',
    logoUrl: 'https://logo.clearbit.com/bet365.com',
    licenseNumber: 'Conc. GAD 15253',
    rating: 4.9,
    features: ['Re dello Streaming', 'Bet Builder Avanzato', 'Palinsesto Infinito'],
    badges: getBadges(['TOP', 'HOT']),
    description: 'Il gigante verde. Brutto da vedere come una cartella delle tasse, ma imbattibile per sostanza.',
    expertTake: "L'app sembra il Televideo del 1998. È verde, brutta e piena di scritte piccole. Ma sapete una cosa? Funziona. Sempre. E lo streaming live è meglio di certi abbonamenti TV che pagate. Se volete fare i designer andate altrove, se volete scommettere live, restate qui.",
    bottomLine: "Se devi avere un solo conto gioco, deve essere questo. Non si discute.",
    fullReview: `
      <h3>Il Re è nudo (ma vince sempre)</h3>
      <p>
        bet365 è come quella vecchia Mercedes diesel che ha 500.000 km e non si ferma mai. Non ha bisogno di essere bella. Ha bisogno di farti piazzare una copertura live sul terzo set del campionato vietnamita di Ping Pong alle 3 di notte. E lo fa.
      </p>

      <h4>Live Betting e Streaming</h4>
      <p>
        Qui non c'è partita. Nessuno in Italia ha la copertura live di bet365. Puoi letteralmente guardare una partita di NBA in una finestra e scommettere sul prossimo punto in tempo reale senza lag. Il ritardo dello streaming è minimo (pochi secondi), il che è oro colato per chi fa trading sportivo.
      </p>

      <h4>Il "Bet Builder"</h4>
      <p>
        Hanno inventato loro la funzione "Crea Scommessa". Vuoi mettere insieme "Haaland segna", "Over 2.5 cartellini" e "Meno di 9 calci d'angolo" nella stessa partita? Qui puoi farlo e la quota che esce è spesso sensata. Altri operatori ci provano a copiarlo, ma spesso ti bloccano le combinazioni.
      </p>

      <h4>Difetti?</h4>
      <p>
        Sì. I bonus per i già iscritti sono rari come la neve a Ferragosto. Una volta preso il benvenuto, non aspettatevi regali. bet365 sa di essere il migliore e non ha bisogno di "comprarti" con promozioni settimanali.
      </p>
    `,
    promoLongDescription: `
      <h3>Analisi Bonus bet365</h3>
      <p>Il codice <strong>365ITALIA</strong> (o NEWBONUS) attiva l'offerta standard. Bet365 non fa promozioni "da urlo" con cifre astronomiche perché punta sulla qualità del prodotto.</p>
      <p>Il bonus è solitamente del 100% sul primo deposito fino a 100€. La cosa fantastica? I requisiti di puntata sono bassissimi (spesso basta giocare l'importo una volta a quota 1.50). È il bonus più facile da sbloccare in assoluto.</p>
    `,
    pros: ['Streaming Live ineguagliabile (NBA, Liga, Tennis)', 'Cash Out Parziale e Auto-Cash Out', 'Palinsesto profondissimo', 'Pagamenti puntualissimi'],
    cons: ['Grafica datata (Televideo style)', 'Poche promozioni ricorrenti per vecchi clienti'],
    ratingBreakdown: { odds: 4.7, app: 4.8, support: 4.9, bonuses: 4.5 },
    promoCode: 'NEWBONUS',
    bonusOffer: '100% fino a 100€',
    link: 'https://www.bet365.it',
    category: 'sports',
    reviewAuthor: 'Matteo Rinaldi',
    reviewDate: '2026-03-10',
    authorId: 'matteo-rinaldi'
  },
  // 3. BETWAY
  {
    id: 'betway-it',
    name: 'Betway',
    logoUrl: 'https://logo.clearbit.com/betway.com',
    licenseNumber: 'Conc. GAD 15216',
    rating: 4.7,
    features: ['Club Scommesse', 'Top per eSports', 'Quote Maggiorate'],
    badges: getBadges(['NEW']),
    description: 'Specialisti nel calcio e leader assoluti negli eSports. Programma fedeltà unico.',
    expertTake: "Se segui gli eSports e scommetti su LoL o CS:GO, Betway è l'unica scelta seria. Per il resto? Il Club Scommesse è letteralmente denaro gratis (10€ a settimana) se hai la costanza di giocarlo. Un bancomat per chi è disciplinato.",
    bottomLine: "Eccellente per eSports e per chi vuole una rendita settimanale di bonus.",
    fullReview: `
      <h3>Il Paradiso della Costanza</h3>
      <p>
        Betway ha capito una cosa: gli scommettitori amano la routine. Il loro "Club Scommesse" è geniale nella sua semplicità. Piazzi 25€ di multiple in una settimana (anche a quote basse, basta arrivare a 3.00 totale) e loro ti danno 10€. Ogni. Singola. Settimana.
        Matematicamente, è un ritorno garantito che abbatte l'aggio del banco.
      </p>

      <h4>eSports: Non è un gioco</h4>
      <p>
        Mentre altri mettono gli eSports in un angolino tra le freccette e il cricket, Betway ha una sezione dedicata che sembra un sito a parte. Mercati specifici come "Primo a uccidere il Barone" o "Mappa 2 Vincitore" sono standard qui.
      </p>

      <h4>Attenzione alle Quote</h4>
      <p>
        Nota dolente: sui mercati principali di Serie A (1X2), Betway tende a essere un po' conservativa. Spesso troverete quote leggermente più basse di Stake o Betfair. Compensano con le quote maggiorate giornaliere, che però hanno limiti di puntata bassi.
      </p>
    `,
    promoLongDescription: `
       <h3>Bonus Betway: Attenzione ai dettagli</h3>
       <p>Il codice <strong>NEWBONUS</strong> ti qualifica per il pacchetto di benvenuto. Betway spesso divide il bonus in due parti: una parte subito dopo il deposito e una parte legata al volume di gioco.</p>
       <p>Consiglio Pro: Iscriviti subito al "Club Scommesse" dopo la registrazione. È cumulabile con il bonus di benvenuto e ti garantisce extra budget ogni lunedì.</p>
    `,
    pros: ['Club Scommesse (Bonus ricorrente)', 'Miglior sito per eSports in Italia', 'Interfaccia pulitissima', 'Quote Maggiorate giornaliere'],
    cons: ['Quote base talvolta inferiori ai top player', 'Chat a volte lenta'],
    ratingBreakdown: { odds: 4.3, app: 4.5, support: 4.6, bonuses: 4.9 },
    promoCode: 'NEWBONUS',
    bonusOffer: 'Fino a 260€ Bonus',
    link: 'https://betway.it',
    category: 'sports',
    reviewAuthor: 'Matteo Rinaldi',
    reviewDate: '2026-01-20',
    authorId: 'matteo-rinaldi'
  },
  // 4. SNAI
  {
    id: 'snai-it',
    name: 'SNAI',
    logoUrl: 'https://logo.clearbit.com/snai.it',
    licenseNumber: 'Conc. GAD 15215',
    rating: 4.8,
    features: ['Ippica Storica', 'Diretta TV', 'Bonus Registrazione'],
    badges: getBadges(['TOP']),
    description: 'La storia del betting. Se vuoi giocare ai cavalli o al Totocalcio, è qui che devi venire.',
    expertTake: "Snai è come la mamma: c'è sempre. Volete l'Ippica? C'è. Volete i Virtuali? Ci sono. Volete il Bingo? C'è. L'app è un po' un centro commerciale affollato, ma non manca nulla. Unica pecca: i prelievi non sono istantanei come su Stake.",
    bottomLine: "Il pacchetto completo all'italiana. Indispensabile per gli amanti delle cavalli.",
    fullReview: `
      <h3>Il Colosso Italiano</h3>
      <p>
        Snai non è solo un sito, è un pezzo di cultura italiana. Hanno integrato tutto il loro ecosistema di agenzie fisiche nel digitale. 
      </p>

      <h4>Ippica e Virtuali</h4>
      <p>
        Qui Snai gioca un altro campionato. Se ti piace studiare le corse, guardare i video delle prestazioni passate dei cavalli e scommettere a quota fissa o totalizzatore, non c'è alternativa. Punto.
        Anche i Virtuali sono di alto livello, perfetti per quei 5 minuti di noia tra un tempo e l'altro delle partite vere.
      </p>

      <h4>Il Bonus Free</h4>
      <p>
        Sono tra i pochi a dare ancora un bonus "senza deposito" vero (attualmente 15€). Certo, sono soldi che vanno girati varie volte prima di diventare prelevabili, ma caval donato non si guarda in bocca (restiamo in tema ippica).
      </p>

      <h4>L'esperienza desktop</h4>
      <p>
        Il sito desktop è... denso. C'è troppa roba. A volte trovare quella specifica partita di Serie B richiede un po' di caccia al tesoro tra banner di slot e lotterie.
      </p>
    `,
    pros: ['Bonus Senza Deposito (Rarità)', 'Palinsesto Ippica N.1 indiscusso', 'Snail Pay per ricaricare in tabaccheria', 'Streaming Serie C e Basket'],
    cons: ['Sito desktop caotico', 'Verifica conto a volte lenta'],
    ratingBreakdown: { odds: 4.5, app: 4.4, support: 4.8, bonuses: 4.9 },
    promoCode: 'BB_SPORT',
    bonusOffer: '15€ Free + 300€',
    link: 'https://www.snai.it',
    category: 'sports',
    reviewAuthor: 'Matteo Rinaldi',
    reviewDate: '2026-02-28',
    authorId: 'matteo-rinaldi'
  },
  // 5. EUROBET
  {
    id: 'eurobet-it',
    name: 'Eurobet',
    logoUrl: 'https://logo.clearbit.com/eurobet.it',
    licenseNumber: 'Conc. GAD 15016',
    rating: 4.7,
    features: ['Miglior App Mobile', 'Priority Club', 'Quote Combo'],
    badges: getBadges(['TOP']),
    description: 'Eccellenza mobile. Hanno capito prima degli altri che scommettiamo dal divano, non dalla scrivania.',
    expertTake: "L'App di Eurobet è probabilmente la migliore in Italia per design. È pulita, ha le gesture swipe e non si blocca. Se sei un 'high roller' (uno che gioca forte), il loro Priority Club è l'unico che ti tratta davvero coi guanti bianchi.",
    bottomLine: "La scelta VIP e Mobile-First.",
    fullReview: `
      <h3>Design e Funzionalità</h3>
      <p>
        Eurobet ha investito milioni nella UX e si vede. Piazzare una scommessa live richiede letteralmente 3 tap. Hanno una funzione di "prenotazione" scommessa fantastica se vuoi giocarla poi in agenzia.
      </p>

      <h4>Le "Combo Bet"</h4>
      <p>
        Se ti piace giocare "1 + Over 2.5 + Goal + Marcatore", Eurobet ha spesso quote migliori degli altri su queste combinazioni complesse. Hanno un algoritmo che spinge molto sulle combo, offrendo valore rispetto alla singola.
      </p>

      <h4>Priority Club</h4>
      <p>
        Non è per tutti, ma se muovi volumi importanti, il Priority Club di Eurobet offre prelievi prioritari, un manager su WhatsApp e biglietti per lo stadio. È l'unico vero servizio VIP in Italia degno di questo nome.
      </p>
    `,
    pros: ['App Mobile numero 1 per usabilità', 'Priority Club (Servizio VIP vero)', 'Ottime quote sulle Combo', 'Prelievi PayPal immediati'],
    cons: ['Quote singole 1X2 a volte nella media', 'Bonus benvenuto complesso da sbloccare tutto'],
    ratingBreakdown: { odds: 4.5, app: 5.0, support: 4.7, bonuses: 4.5 },
    promoCode: 'EURO2026',
    bonusOffer: '300€ Welcome Bonus',
    link: 'https://www.eurobet.it',
    category: 'sports',
    reviewAuthor: 'Matteo Rinaldi',
    reviewDate: '2026-03-05',
    authorId: 'matteo-rinaldi'
  },
  // 6. PLANETWIN365
  {
    id: 'planetwin365-it',
    name: 'Planetwin365',
    logoUrl: 'https://logo.clearbit.com/planetwin365.it',
    licenseNumber: 'Conc. GAD 15242',
    rating: 4.6,
    features: ['Market Movers', 'Migliaia di Quote', 'Bonus Multipla'],
    badges: getBadges([]),
    description: 'Il paradiso per chi ama le statistiche e le multiple chilometriche.',
    expertTake: "Apri Planetwin e ti senti male per quante quote ci sono. Hanno quote anche sul campionato amatoriale finlandese. Se ti piacciono i 'lenzuoli' (le multiple con 20 eventi), il loro bonus progressivo è il più alto. Grafica un po' 'Luna Park', ma sostanza da vendere.",
    bottomLine: "Per i cacciatori di quote esotiche e amanti delle multiple.",
    fullReview: `
      <h3>Quantità sopra la Qualità (visiva)</h3>
      <p>
        Planetwin365 è brutale. Ti sbatte in faccia 4000 quote per singola partita. Asian Handicap, somma gol, minuti dei gol, combo impossibili. Se sei uno studioso del betting, qui trovi valore nelle pieghe del palinsesto dove gli altri bookmaker non guardano.
      </p>

      <h4>Market Movers</h4>
      <p>
        Una chicca: ti fanno vedere graficamente dove sta andando il mercato. Se la quota del 1 sta crollando, te lo segnalano. Strumento utilissimo per capire se c'è qualche info che ti sei perso (es. l'attaccante stella si è infortunato nel riscaldamento).
      </p>

      <h4>Il Re delle Multiple</h4>
      <p>
        Il bonus multipla arriva al 255%. Matematicamente è folle. Certo, prendere 30 eventi è come fare 6 al Superenalotto, ma se ti piace sognare con 2 euro, questo è il posto dove la vincita potenziale è più alta.
      </p>
    `,
    pros: ['Profondità di mercati incredibile', 'Market Movers integrati gratuiti', 'Bonus Multipla più alto del mercato'],
    cons: ['Grafica caotica e troppo colorata', 'App non all\'altezza del sito desktop'],
    ratingBreakdown: { odds: 4.6, app: 4.3, support: 4.4, bonuses: 4.4 },
    promoCode: 'PLANET100',
    bonusOffer: 'Fino a 365€ Bonus',
    link: 'https://www.planetwin365.it',
    category: 'sports',
    reviewAuthor: 'Matteo Rinaldi',
    reviewDate: '2026-01-25',
    authorId: 'matteo-rinaldi'
  },
  // 7. GOLDBET
  {
    id: 'goldbet-it',
    name: 'Goldbet',
    logoUrl: 'https://logo.clearbit.com/goldbet.it',
    licenseNumber: 'Conc. GAD 15226',
    rating: 4.6,
    features: ['Virtual Sports', 'App Veloce', 'Bonus Ricorrenti'],
    badges: getBadges([]),
    description: 'Solido come una roccia. Leader assoluto sui Virtuali.',
    expertTake: "Non è il sito più innovativo, ma è quello che non ti tradisce mai. I Virtuali di Goldbet sono così realistici che a volte dimentico che non è una partita vera. Ottimo per chi vuole un'esperienza senza fronzoli.",
    bottomLine: "Affidabilità Lottomatica e Virtuali Top.",
    fullReview: `
      <h3>La Forza della Semplicità</h3>
      <p>Goldbet fa parte del gruppo Lottomatica/GBO. Significa che hanno le spalle larghe. Non falliranno domani e ti pagheranno anche se vinci 50.000€.</p>
      <h4>Virtual Sports</h4>
      <p>Sono l'attrazione principale. Campionati di calcio simulati con telecronaca di Caressa, corse di levrieri, automobilismo. Il ciclo continuo di eventi (uno ogni minuto) è perfetto per l'azione rapida, ma occhio al bankroll: è facile farsi prendere la mano.</p>
    `,
    pros: ['Virtual Sports migliori in Italia', 'App solida e affidabile', 'Bonus Rimborso frequenti'],
    cons: ['Manca l\'Exchange', 'Quote pre-match nella media'],
    ratingBreakdown: { odds: 4.4, app: 4.7, support: 4.5, bonuses: 4.5 },
    promoCode: 'GOLD50',
    bonusOffer: 'Fino a 500€ Bonus',
    link: 'https://www.goldbet.it',
    category: 'sports',
    reviewAuthor: 'Matteo Rinaldi',
    reviewDate: '2026-02-10',
    authorId: 'matteo-rinaldi'
  },
  // 8. SISAL
  {
    id: 'sisal-it',
    name: 'Sisal',
    logoUrl: 'https://logo.clearbit.com/sisal.it',
    licenseNumber: 'Conc. GAD 15155',
    rating: 4.8,
    features: ['Tipster Community', 'Scommesse On Demand', 'Fantamister'],
    badges: getBadges(['HOT']),
    description: 'Più di un bookmaker, un social network. Tipster, community e giochi gratuiti.',
    expertTake: "Sisal ha trasformato il betting in un social network. Puoi copiare le schedine degli 'esperti' (Tipster) con un click. Geniale. E poi c'è 'Salva il Bottino', che è praticamente un quiz televisivo gratis. Se ti annoi a scommettere da solo, vieni qui.",
    bottomLine: "Innovazione pura e divertimento social.",
    fullReview: `
      <h3>L'Innovatore Italiano</h3>
      <p>Sisal è l'unico operatore che prova a inventare cose nuove invece di copiare gli inglesi. La piattaforma Tipster è trasparente: vedi lo storico di chi propone la giocata, il suo ROI, e decidi se seguirlo. È il social trading applicato al calcio.</p>
      <h4>On Demand</h4>
      <p>Non trovi la quota? Chiedila. Vuoi scommettere che Lukaku segna di testa nei primi 10 minuti mentre piove? Con l'On Demand puoi proporla e loro ti fanno la quota. Divertente, anche se spesso l'aggio su queste giocate è alto.</p>
    `,
    pros: ['Community Tipster integrata', 'Scommesse On Demand uniche', 'Gioco "Salva il Bottino"'],
    cons: ['Quote base a volte inferiori agli specialisti come Stake'],
    ratingBreakdown: { odds: 4.4, app: 4.9, support: 4.8, bonuses: 4.7 },
    promoCode: 'SISAL2026',
    bonusOffer: 'Fino a 800€',
    link: 'https://www.sisal.it',
    category: 'sports',
    reviewAuthor: 'Matteo Rinaldi',
    reviewDate: '2026-03-20',
    authorId: 'matteo-rinaldi'
  },
  // 9. 888SPORT
  {
    id: '888-it',
    name: '888sport',
    logoUrl: 'https://logo.clearbit.com/888sport.com',
    licenseNumber: 'Conc. GAD 15014',
    rating: 4.6,
    features: ['Quote Maggiorate', 'Club 888', 'Casino Integrato'],
    badges: getBadges([]),
    description: 'Famoso per le quote maggiorate shock. Ottimo per chi inizia.',
    expertTake: "Iscrivetevi, prendete la quota maggiorata (tipo Milan vincente a 8.00 invece di 1.80), incassate e godetevi la grafica dark mode che non brucia la retina. Non il migliore per il live, ma le promo giornaliere sono gustose.",
    bottomLine: "Il re delle Quote Maggiorate.",
    fullReview: `
      <h3>Il Cecchino delle Quote</h3>
      <p>888sport non ha il palinsesto più profondo, ma ha le quote promozionali migliori. Ogni giorno scelgono un big match e gonfiano la quota in modo artificiale. È marketing, certo, ma è valore per noi giocatori. Se usi bene queste promozioni, puoi costruire un bankroll partendo da poco.</p>
    `,
    pros: ['Quote Maggiorate migliori del mercato', 'Brand internazionale affidabile', 'Ottima integrazione col Poker'],
    cons: ['Palinsesto live meno profondo di bet365', 'App un po\' lenta'],
    ratingBreakdown: { odds: 4.7, app: 4.5, support: 4.4, bonuses: 4.6 },
    promoCode: 'NEWBONUS',
    bonusOffer: '100% fino a 100€',
    link: 'https://www.888.it',
    category: 'hybrid',
    reviewAuthor: 'Matteo Rinaldi',
    reviewDate: '2026-03-15',
    authorId: 'matteo-rinaldi'
  },
  // 10. BETFAIR
  {
    id: 'betfair-it',
    name: 'Betfair',
    logoUrl: 'https://logo.clearbit.com/betfair.com',
    licenseNumber: 'Conc. GAD 15211',
    rating: 4.8,
    features: ['Exchange N.1', 'Cash Out', 'Quote Alte'],
    badges: getBadges(['ESCLUSIVO']),
    description: 'Il padre dell\'Exchange. Qui non scommetti contro il banco, diventi il banco.',
    expertTake: "Se vuoi fare il professionista, devi avere Betfair. L'Exchange (Punta e Banca) è l'unico modo per avere quote reali senza l'aggio del bookmaker. È complicato all'inizio, ma una volta capito il meccanismo del 'Bancare' il pareggio, non torni più indietro.",
    bottomLine: "Obbligatorio per il Trading Sportivo e le strategie avanzate.",
    fullReview: `
      <h3>Benvenuti nel Trading Sportivo</h3>
      <p>Betfair Exchange è la Borsa Valori dello sport. Qui puoi comprare (Puntare) e vendere (Bancare) le quote. </p>
      <h4>Il Cash Out Vero</h4>
      <p>Tutti offrono il Cash Out ormai, ma quello di Betfair è l'originale e il più matematicamente corretto. Ti permette di uscire dalla scommessa in profitto (Green Up) prima che la partita finisca, o di limitare una perdita (Red Up). Strumento fondamentale.</p>
    `,
    pros: ['Betting Exchange (Punta e Banca)', 'Quote mediamente più alte del 10-15%', 'Cash Out perfetto'],
    cons: ['Commissioni sulle vincite (5%)', 'Liquidità scarsa sui campionati minori in Italia'],
    ratingBreakdown: { odds: 5.0, app: 4.6, support: 4.3, bonuses: 4.2 },
    promoCode: 'NEWBONUS',
    bonusOffer: '50€ Bonus Exchange',
    link: 'https://www.betfair.it',
    category: 'sports',
    reviewAuthor: 'Matteo Rinaldi',
    reviewDate: '2026-02-05',
    authorId: 'matteo-rinaldi'
  }
];

export const OPERATORS = BASE_OPERATORS;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Davide M.',
    role: 'Scommettitore Pro',
    content: 'Matteo ha ragione su Stake. Ho smesso di usare siti lenti. Le quote sul tennis sono un altro pianeta.',
    rating: 5
  },
  {
    id: 't2',
    author: 'Giulia R.',
    role: 'Appassionata Tennis',
    content: 'La guida al Betting Exchange di Betfair mi ha aperto un mondo. Ora bando i pareggi e vivo felice (quasi sempre).',
    rating: 5
  },
  {
    id: 't3',
    author: 'Marco T.',
    role: 'Utente Verificato',
    content: 'Finalmente recensioni che dicono anche cosa NON va. Apprezzo l\'onestà su Snai, app caotica ma completa.',
    rating: 4
  }
];

// Generate News Articles programmatically based on operators
export const NEWS_ARTICLES: NewsArticle[] = OPERATORS.map((op, index) => {
    // Varied content templates to avoid duplicates text
    const titles = [
        `Come registrarsi su ${op.name} e ottenere il Bonus`,
        `${op.name} Bonus Benvenuto: Guida passo-passo`,
        `Perché scegliere ${op.name} nel 2026: La guida`,
    ];
    
    return {
        id: `news-${op.id}`,
        slug: `guida-registrazione-${op.id}`,
        title: titles[index % 3],
        excerpt: `Scopri come aprire un conto su ${op.name} in modo sicuro, verificare i documenti e attivare il codice promozionale ${op.promoCode} per ricevere l'offerta di benvenuto.`,
        content: `
            <p>Se stai pensando di aprire un conto su <strong>${op.name}</strong>, sei nel posto giusto. In questa guida rapida, ti mostreremo esattamente come navigare il processo di registrazione, evitare errori comuni nella verifica dei documenti e assicurarti di ricevere il bonus massimo disponibile.</p>
            
            <h3>Passo 1: Il Link Ufficiale</h3>
            <p>Per prima cosa, assicurati di utilizzare il link ufficiale per accedere alla pagina di registrazione. Questo garantisce che il codice promozionale <strong>${op.promoCode}</strong> venga tracciato correttamente dal sistema.</p>
            
            <h3>Passo 2: I Dati Personali</h3>
            <p>In Italia, la normativa ADM è severa. ${op.name} ti chiederà il Codice Fiscale. Non preoccuparti, è una procedura standard obbligatoria per legge per verificare che tu sia maggiorenne e residente in Italia.</p>
            
            <h3>Passo 3: Il Deposito Qualificante</h3>
            <p>L'offerta attuale prevede "${op.bonusOffer}". Per attivarla, il tuo primo deposito non deve essere effettuato con Skrill o Neteller (spesso esclusi dalle promozioni). Usa una carta Visa/Mastercard o PayPal per andare sul sicuro.</p>
            
            <h3>Conclusione</h3>
            <p>${op.name} è una scelta solida (${op.rating}/5 nella nostra classifica). La procedura richiede circa 4 minuti.</p>
        `,
        date: new Date(Date.now() - index * 86400000 * 2).toISOString(), // Staggered dates
        imageUrl: op.logoUrl,
        relatedOperatorId: op.id,
        authorId: 'matteo-rinaldi',
        category: 'Guide'
    };
});

export const QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        id: 1,
        question: "Cosa significa 'Over 2.5' in una partita di calcio?",
        options: [
            "Che la partita finirà con più di 2 gol (es. 2-1, 3-0)",
            "Che la partita finirà con meno di 2 gol",
            "Che la squadra di casa vincerà con 2 gol di scarto",
            "Che ci saranno più di 2 cartellini rossi"
        ],
        correctAnswer: 0,
        explanation: "Over 2.5 significa che la somma dei gol delle due squadre deve essere 3 o più."
    },
    {
        id: 2,
        question: "Qual è l'unico ente che rilascia licenze legali per il betting in Italia?",
        options: [
            "CONI",
            "FIGC",
            "ADM (Agenzia Dogane e Monopoli)",
            "UE (Unione Europea)"
        ],
        correctAnswer: 2,
        explanation: "L'ADM (ex AAMS) è l'unico ente autorizzato. Giocare su siti .com senza licenza ADM è illegale e rischioso."
    },
    {
        id: 3,
        question: "Cosa si intende per 'Rollover' di un bonus?",
        options: [
            "Il momento in cui il bonus scade",
            "Il numero di volte che devi rigiocare l'importo del bonus prima di prelevarlo",
            "Un tipo di scommessa sui motori",
            "Quando perdi una scommessa e ti ridanno i soldi"
        ],
        correctAnswer: 1,
        explanation: "Il Rollover (o requisito di puntata) indica il volume di gioco necessario per trasformare il saldo bonus in saldo prelevabile."
    },
    {
        id: 4,
        question: "Se una quota è 2.00, qual è la probabilità implicita di vittoria?",
        options: [
            "20%",
            "50%",
            "100%",
            "75%"
        ],
        correctAnswer: 1,
        explanation: "La formula è 100 / Quota. Quindi 100 / 2.00 = 50%."
    },
    {
        id: 5,
        question: "Cos'è il Betting Exchange?",
        options: [
            "Un sito dove scambi consigli sulle scommesse",
            "Una modalità dove scommetti contro altri utenti e puoi fare da 'banco'",
            "Un bonus che puoi scambiare con altri giocatori",
            "Il tasso di cambio tra Euro e Dollaro nelle scommesse"
        ],
        correctAnswer: 1,
        explanation: "L'Exchange (es. Betfair) permette di 'bancare' (scommettere contro) un evento, agendo come un bookmaker."
    }
];

export const BETTING_GLOSSARY = [
  { term: 'Aggio (Vig)', def: 'La percentuale di profitto trattenuta dal bookmaker su ogni mercato. Più è basso, meglio è per lo scommettitore.' },
  { term: 'Asian Handicap', def: 'Un tipo di scommessa che elimina il pareggio, dando un vantaggio o svantaggio fittizio a una squadra (es. -0.5, +1.0).' },
  { term: 'Bankroll', def: 'Il capitale totale che hai deciso di dedicare alle scommesse. Mai giocare soldi che servono per vivere.' },
  { term: 'Closing Line Value (CLV)', def: 'Il valore della quota al fischio di inizio. Battere la CLV costantemente è segno di abilità.' },
  { term: 'Double Chance', def: 'Scommettere su due esiti su tre (es. 1X = Casa vince o Pareggia).' },
  { term: 'Expected Goals (xG)', def: 'Metrica statistica che misura la qualità delle occasioni da gol create, indipendentemente dal risultato finale.' },
  { term: 'Kelly Criterion', def: 'Formula matematica per calcolare la puntata otttimale in base al valore della quota e al tuo bankroll.' },
  { term: 'Live Betting', def: 'Scommettere su un evento mentre è in corso.' },
  { term: 'Moneyline', def: 'Termine americano per la scommessa "Testa a Testa" (chi vince la partita).' },
  { term: 'Over/Under', def: 'Scommettere se il numero totale di gol/punti sarà sopra o sotto una soglia prefissata.' },
  { term: 'Rollover', def: 'Il volume di gioco necessario per sbloccare un bonus.' },
  { term: 'Stake', def: 'L\'importo puntato su una singola scommessa.' },
  { term: 'Value Bet', def: 'Una scommessa dove la probabilità stimata da te è superiore alla probabilità implicita nella quota del bookmaker.' },
  { term: 'Void', def: 'Scommessa annullata. La puntata viene rimborsata (quota 1.00).' },
  { term: 'Yield (ROI)', def: 'Il ritorno sull\'investimento percentuale calcolato sul totale giocato.' }
];

export const ASIAN_HANDICAP_DATA = [
    { line: "0 (DNB)", result: "Vince", payout: "Vinto", note: "Se pareggia: Rimborso" },
    { line: "-0.25", result: "Vince", payout: "Vinto", note: "Se pareggia: Mezzo Rimborso / Mezzo Perso" },
    { line: "-0.50", result: "Vince", payout: "Vinto", note: "Se pareggia: Perso" },
    { line: "-0.75", result: "Vince con 2+ gol", payout: "Vinto", note: "Se vince con 1 gol: Mezzo Vinto / Mezzo Rimborso" },
    { line: "-1.0", result: "Vince con 2+ gol", payout: "Vinto", note: "Se vince con 1 gol: Rimborso Totale" },
];
