const Utente = require('./Utente');
const Evento = require('./Evento');
const Cittadino = require('./Cittadino');

var BachecaAnnunci = {

    Eventi : ListaEventi = [],
    Segnalazioni : ListaSegnalazioni = [],
    Comunicazini : ListaComunicazioni = [],
    OfferteLavoro : ListaOfferteLavoro = [],
    AnnunciPromozione : ListaAnnunciPromozione = [],





    

    AggiungiEvento(Evento){
        ListaEventi.push(Evento);
    },

    
    AggiungiSegnalazione(Segnalazione){
        ListaSegnalazioni.push(Segnalazione);
    },


    AggiungiComunicazione(Comunicazione){
        ListaComunicazioni.push(Comunicazione);
    },


    AggiungiOffertaLavoro(OffertaLavoro){
        ListaOfferteLavoro.push(OffertaLavoro);
    },


    AggiungiAnnuncioPromozione(AnnuncioPromozione){
        ListaAnnunciPromozione.push(AnnuncioPromozione);
    }


};
var u = new Utente("carlo", "cracco", "pass");
var citt = new Cittadino(u);
BachecaAnnunci.AggiungiEvento(new Evento( citt , "10/10/10", "CuliInAria"));
