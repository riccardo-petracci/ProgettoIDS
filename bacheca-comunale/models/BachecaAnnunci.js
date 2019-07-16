
var BachecaAnnunci = {

    "Eventi" : ListaEventi = [],
    "Comunicazini" : ListaComunicazioni = [],
    "OfferteLavoro" : ListaOfferteLavoro = [],
    "AnnunciPromozione" : ListaAnnunciPromozione = [],

    AggiungiEvento(Evento){
        ListaEventi.push(Evento);
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

module.exports = BachecaAnnunci
