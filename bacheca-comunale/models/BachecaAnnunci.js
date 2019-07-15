
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
