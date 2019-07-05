Breve descrizione del sito.

Il progetto propone di realizzare un sistema software che permette di far interagire tra loro gli abitanti di un comune, permettendo a singoli cittadini, aziende e sindaci di poter scrivere post.
Il sistema permette anche ai cittadini di segnalare eventuali problemi presenti nel territorio comunale (incidenti, allagamenti, strade dissestate e necessitarie di manutenzione) e consente al sindaco di poter scrivere 
delle comunicazioni per informare i cittadini su qualsiasi circostanza che richieda l'attenzione degli abitanti del luogo ( elezioni politiche, interruzione di servizi di pubblica utilità ecc.).
Inoltre il sistema si occupa di gestire una bacheca che contiene offerte di lavoro, offerte promozionali/pubblicitarie inserite dalle varie aziende presenti nel territorio comunale ed eventi, creati dai singoli cittadini che dovranno
 essere supervisionati e approvati dal sindaco.
Attraverso le offerte promozionali/pubblicitarie le aziende possono presentarsi ai cittadini, permettendo così loro di poter far conoscere i propri prodotti e servizi e di pubblicizzarsi sul territorio e oltre.
Le offerte di lavoro consentono alle aziende di offrire posti di lavoro su una bacheca accessibile a tutti gli abitanti, in modo tale da trovare figure professionali di interesse per l'azienda, richiedendo il curriculum ad ogni cittadino
interessato ad un'offerta di lavoro per individuare il profilo richiesto. I cittadini possono così fare domanda di lavoro e fissare colloqui con le aziende a loro interessati.
Gli eventi proposti dal cittadino vengono presentati fin da subito al sindaco del comune, che può decidere se approvarli e pubblicarli sulla bacheca comunale oppure rifiutarli e non pubblicarli, poichè ritenuti inappropriati o irrealizzabili
dal comune in quel dato momento.
I cittadini possono informare gli organizzatori di eventi della loro presenza, in modo tale che questi ultimi sappiano come organizzarsi per svolgere eventi consoni al numero di partecipanti ed evitare sprechi di risorse. 




1°ITERAZIONE 3/4/19 - 3/5/19 -IDENTIFICAZIONE ATTORI -UtenteNonAutenticato -Utente

-IDENTIFICAZIONE CASI D'USO
	-Visualizzare
	-Login
	-RecuperoCredenziali
	-Registrazioni
	-Commentare
	-CancellazioneAccount

-IDENTIFICAZIONE CLASSI DI ANALISI
	-Utente
	-Cittadino

-IDENTIFICAZIONE DIAGRAMMI DI SEQUENZA
	-Login
	-Registrazione
	-RecuperoCredenziali
2°ITERAZIONE 5/5/19 - 24/5/19 -IDENTIFICAZIONE ATTORI -Cittadino -Sindaco

-IDENTIFICAZIONE CASI D'USO
	-Comunicazione
	-RimuoviComunicazione
	-CreaEvento
	-EvidenziaPost
	-Segnalazione
	-RimuovereSegnalazioni
	-EliminaCommento

-IDENTIFICAZIONE CLASSI DI ANALISI
	-Sindaco
	-Cittadino
	-Evento
	-Segnalazione
	-Commento

-IDENTIFICAZIONE DIAGRAMMI DI SEQUENZA
	-Comunicazione
	-CreaEvento
	-Segnalazione
3°ITERAZIONE 28/5/19 - 18/6/19 -IDENTIFICAZIONE ATTORI -Azienda -SuperUser (Amministratore e Moderatore)

-IDENTIFICAZIONE CASI D'USO
	-CommentReport
	-BugReport
	-PostReport
	-ApprovazioneEvento
	-VistaBacheca
	-RispondiOfferta
	-OffertaLavoro
	-AnnunciPromozioni
	-RimuoviAnnunci
	-RimuoviOffertaLavoro
	-RimuoviPost

-IDENTIFICAZIONE CLASSI DI ANALISI
	-Azienda
	-CommentReport
	-BugReport
	-PostReport
	-SuperUser (Amministratore e Moderatore)
	-RimozioneCommento
	-OfferteLavoro
	-AnnunciPromozione
	-ApprovazioneEvento
	-BachecaAnnunci

-IDENTIFICAZIONE DIAGRAMMI DI SEQUENZA
	-AnnunciPromozioni
	-ApprovazioneEvento
	-OffertaLavoro
	-PartecipazioneEvento
	-RispondiOfferta
	-VistaBachecaAnnunci
