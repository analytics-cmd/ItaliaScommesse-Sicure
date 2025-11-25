import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LegalPageType } from '../types';
import { SEO } from '../components/SEO';

export const Legal: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  let title = '';
  let content = <></>;
  let metaTitle = '';
  let metaDesc = '';

  switch (type) {
    case LegalPageType.TERMS:
      title = 'Termini e Condizioni di Utilizzo';
      metaTitle = 'Termini e Condizioni di Utilizzo - ItaliaScommesse Sicure';
      metaDesc = 'Leggi i termini legali che regolano l\'uso di ItaliaScommesse Sicure. Informazioni su copyright, limitazione di responsabilità e accesso riservato ai maggiorenni.';
      content = (
        <>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">1. Informazioni Generali</h3>
          <p>Benvenuto su <strong>ItaliaScommesse Sicure</strong> (di seguito "il Sito"). Il Sito è gestito da <strong>NWG Ltd</strong>, società registrata in Irlanda con sede legale in 27 Mount Street Upper, Dublin 2, D02 F890, Ireland (di seguito "l'Azienda", "Noi").</p>
          <p>L'accesso e l'utilizzo di questo Sito sono soggetti ai presenti Termini e Condizioni. Utilizzando il Sito, l'utente accetta di essere vincolato da questi termini. Se non si accettano questi termini, si prega di non utilizzare il Sito.</p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">2. Accesso Limitato (18+)</h3>
          <p>L'accesso ai contenuti di questo Sito è rigorosamente riservato agli utenti che abbiano compiuto il diciottesimo anno di età. Il gioco d'azzardo è vietato ai minori. Navigando su questo sito, dichiari e garantisci di essere maggiorenne secondo la legge italiana.</p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">3. Natura del Servizio (Affiliazione)</h3>
          <p>ItaliaScommesse Sicure è un portale di informazione e comparazione indipendente. <strong>Non siamo un operatore di gioco d'azzardo</strong>, non accettiamo scommesse e non gestiamo transazioni finanziarie legate al gioco.</p>
          <p>Il nostro servizio consiste nel recensire e comparare operatori terzi titolari di regolare concessione GAD (Gioco a Distanza) rilasciata dall'Agenzia delle Dogane e dei Monopoli (ADM). Potremmo ricevere una commissione dai partner affiliati quando un utente si registra o interagisce con i loro siti attraverso i nostri link. Questo non influenza la nostra indipendenza editoriale né comporta costi aggiuntivi per l'utente.</p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">4. Limitazione di Responsabilità</h3>
          <p>Sebbene ci impegniamo a mantenere le informazioni (quote, bonus, termini) accurate e aggiornate, non possiamo garantire che siano prive di errori. Le offerte dei bookmaker possono cambiare senza preavviso.</p>
          <p>NWG Ltd non sarà responsabile per:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
            <li>Perdite finanziarie derivanti da attività di scommessa sui siti partner.</li>
            <li>Danni diretti o indiretti causati dall'uso delle informazioni presenti sul Sito.</li>
            <li>Contenuti presenti sui siti web di terze parti linkati dal nostro portale.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">5. Proprietà Intellettuale</h3>
          <p>Tutti i contenuti (testi, loghi proprietari, grafica, codice) presenti su ItaliaScommesse Sicure sono protetti dalle leggi sul diritto d'autore. È vietata la riproduzione, distribuzione o modifica non autorizzata dei contenuti senza il consenso scritto di NWG Ltd.</p>
        </>
      );
      break;
    case LegalPageType.PRIVACY:
      title = 'Informativa sulla Privacy (GDPR)';
      metaTitle = 'Privacy Policy (GDPR) - Gestione Dati Personali';
      metaDesc = 'Informativa sul trattamento dei dati personali ai sensi del GDPR. Scopri come ItaliaScommesse Sicure protegge la tua privacy e i tuoi diritti.';
      content = (
        <>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Conforme al Regolamento UE 2016/679</p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">1. Titolare del Trattamento</h3>
          <p>Il titolare del trattamento dei dati personali è <strong>NWG Ltd</strong>, con sede a Dublino. Per qualsiasi questione relativa alla privacy, è possibile contattare il Responsabile della Protezione dei Dati (DPO) all'indirizzo email: italia@gamingmedia.com.</p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">2. Tipologia di Dati Raccolti</h3>
          <p>Durante la navigazione del Sito, possiamo raccogliere le seguenti categorie di dati:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
            <li><strong>Dati di Navigazione:</strong> Indirizzi IP, tipo di browser, sistema operativo, orari di accesso (raccolti automaticamente per fini tecnici e statistici).</li>
            <li><strong>Dati forniti volontariamente:</strong> Indirizzo email o nome, qualora l'utente decida di iscriversi alla newsletter o contattare il supporto.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">3. Finalità e Base Giuridica</h3>
          <p>Trattiamo i tuoi dati per:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
            <li>Garantire il corretto funzionamento tecnico del sito (Base giuridica: Esecuzione del servizio).</li>
            <li>Analizzare il traffico aggregato per migliorare i contenuti (Base giuridica: Legittimo interesse).</li>
            <li>Adempiere a obblighi legali o rispondere a richieste delle autorità.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">4. Condivisione dei Dati</h3>
          <p>Non vendiamo né affittiamo i tuoi dati personali a terzi. I dati possono essere trattati da fornitori di servizi tecnici (hosting, analytics) che agiscono come responsabili del trattamento sotto la nostra istruzione.</p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">5. Diritti dell'Interessato</h3>
          <p>In conformità con il GDPR, hai il diritto di:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
            <li>Accedere ai tuoi dati personali.</li>
            <li>Chiedere la rettifica o la cancellazione degli stessi ("Diritto all'oblio").</li>
            <li>Opporti al trattamento o chiederne la limitazione.</li>
            <li>Richiedere la portabilità dei dati.</li>
          </ul>
          <p>Per esercitare tali diritti, invia una richiesta a italia@gamingmedia.com.</p>
        </>
      );
      break;
    case LegalPageType.RESPONSIBLE:
      title = 'Gioco Responsabile e Tutela del Giocatore';
      metaTitle = 'Gioco Responsabile e Sicuro - Supporto Contro la Ludopatia';
      metaDesc = 'Il gioco può causare dipendenza. Scopri gli strumenti di autotutela, i limiti di deposito e i contatti per chiedere aiuto (Numero Verde Nazionale).';
      content = (
        <>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-10 rounded-r-lg">
             <h4 className="font-bold text-red-800 dark:text-red-400 text-lg mb-2 flex items-center gap-2">
               ⚠️ IL GIOCO PUÒ CAUSARE DIPENDENZA PATOLOGICA
             </h4>
             <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
               Il gioco d'azzardo non è un modo per guadagnare denaro. È una forma di intrattenimento che comporta rischi finanziari. Gioca solo quanto puoi permetterti di perdere.
             </p>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Il ruolo dell'ADM e la Legalità</h3>
          <p>ItaliaScommesse Sicure promuove esclusivamente operatori in possesso di regolare concessione <strong>ADM (Agenzia Dogane e Monopoli)</strong>. Questo garantisce che tutti i siti partner rispettino rigidi standard di tutela del consumatore, inclusi:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
             <li>Divieto assoluto di gioco ai minori di 18 anni.</li>
             <li>Obbligo di impostare limiti di deposito settimanali.</li>
             <li>Sistemi di controllo sull'RTP (Ritorno al Giocatore) certificati.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Strumenti di Autotutela</h3>
          <p>Se decidi di giocare, ti invitiamo a utilizzare gli strumenti messi a disposizione dai concessionari:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-8">
             <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold mb-2">Autoesclusione Trasversale (RTO)</h4>
                <p className="text-sm">Permette di autoescludersi temporaneamente o permanentemente da TUTTI i siti di gioco legali in Italia con un solo click, tramite il Registro Unico delle Autoesclusioni gestito da ADM.</p>
             </div>
             <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold mb-2">Limiti di Deposito</h4>
                <p className="text-sm">Imposta un tetto massimo di spesa settimanale o mensile. Una volta raggiunto, non potrai ricaricare il conto fino al periodo successivo.</p>
             </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Come riconoscere un problema</h3>
          <p>Rispondi onestamente a queste domande:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 mb-4 text-slate-700 dark:text-slate-300">
            <li>Hai mai scommesso denaro destinato all'affitto o alle bollette?</li>
            <li>Hai mai mentito a familiari o amici su quanto tempo o denaro spendi nel gioco?</li>
            <li>Senti l'urgenza di giocare per recuperare le perdite subito dopo aver perso?</li>
            <li>Ti senti depresso o ansioso a causa del gioco?</li>
          </ul>
          <p>Se hai risposto SÌ anche solo a una di queste domande, potresti essere a rischio.</p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Supporto Immediato</h3>
          <p>Non sei solo. In Italia esistono servizi gratuiti e anonimi pronti ad aiutarti:</p>
          
          <div className="mt-6 bg-brand-600 p-8 rounded-2xl text-white text-center shadow-lg">
             <p className="font-bold uppercase tracking-wider opacity-90 mb-2">Telefono Verde Nazionale per le problematiche legate al Gioco d'Azzardo (TVNGA)</p>
             <p className="text-4xl md:text-5xl font-extrabold my-4">800 558 822</p>
             <p className="text-sm opacity-90">Servizio anonimo, gratuito e attivo dal lunedì al venerdì, gestito dall'Istituto Superiore di Sanità.</p>
             <a href="http://www.iss.it" target="_blank" rel="noreferrer" className="inline-block mt-4 bg-white text-brand-600 px-6 py-2 rounded-full font-bold hover:bg-brand-50 transition-colors">Visita il sito ufficiale</a>
          </div>
        </>
      );
      break;
    case LegalPageType.COOKIES:
      title = 'Cookie Policy';
      metaTitle = 'Cookie Policy - Gestione Preferenze e Consenso';
      metaDesc = 'Informativa sull\'utilizzo dei cookie tecnici e analitici su ItaliaScommesse Sicure. Scopri come gestire le tue preferenze di navigazione.';
      content = (
        <>
           <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Informativa estesa sull'uso dei Cookie</p>

           <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Cosa sono i Cookie?</h3>
           <p>I cookie sono stringhe di testo di piccole dimensioni che i siti visitati dall'utente inviano al suo terminale (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente.</p>

           <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Cookie utilizzati da questo Sito</h3>
           <div className="space-y-6 mt-4">
             <div>
               <h4 className="font-bold text-slate-900 dark:text-white">1. Cookie Tecnici (Necessari)</h4>
               <p>Questi cookie sono essenziali per il corretto funzionamento del sito (es. gestione del tema scuro/chiaro, navigazione sicura). Non richiedono il preventivo consenso dell'utente.</p>
             </div>
             <div>
               <h4 className="font-bold text-slate-900 dark:text-white">2. Cookie Analitici (Terze Parti)</h4>
               <p>Utilizziamo Google Analytics 4 per raccogliere informazioni in forma aggregata e anonima sul numero degli utenti e su come questi visitano il sito. IP Anonymization è attivo.</p>
             </div>
             <div>
               <h4 className="font-bold text-slate-900 dark:text-white">3. Cookie di Profilazione</h4>
               <p>Questo sito <strong>NON</strong> utilizza cookie di profilazione proprietari volti a creare profili relativi all'utente per inviare messaggi pubblicitari.</p>
             </div>
           </div>

           <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Gestione dei Cookie</h3>
           <p>Puoi autorizzare, bloccare o cancellare (in tutto o in parte) i cookie attraverso le specifiche funzioni del tuo programma di navigazione (browser):</p>
           <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
             <li><a href="#" className="text-brand-600 hover:underline">Chrome</a></li>
             <li><a href="#" className="text-brand-600 hover:underline">Firefox</a></li>
             <li><a href="#" className="text-brand-600 hover:underline">Safari</a></li>
             <li><a href="#" className="text-brand-600 hover:underline">Edge</a></li>
           </ul>
           <p>Attenzione: disabilitare i cookie tecnici potrebbe compromettere l'utilizzo delle funzionalità del sito.</p>
        </>
      );
      break;
    default:
      return <Navigate to="/" />;
  }

  return (
    <>
    <SEO 
      title={metaTitle}
      description={metaDesc}
    />
    <div className="bg-white dark:bg-slate-950 min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-10">
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Documentazione Legale</span>
           <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">{title}</h1>
        </div>
        
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
          {content}
          
          <div className="mt-20 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <p className="font-bold text-slate-700 dark:text-slate-300 mb-1">NWG Ltd</p>
                <p>27 Mount Street Upper, Dublin 2, D02 F890, Ireland</p>
            </div>
            <div className="text-right">
                <p>Email: italia@gamingmedia.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};