  const comunicazone =  require('../models/Comunicazione')
  const listaEventiDaApprovae = require('../models/ListaEventiDaApprovare')
  const bacheca = require('../models/BachecaAnnunci')

  var gestoreComunicazione = {
  
    "date": date = new Date(),
   
    createComunication(UfficioSindacale, oggetto,importanza,messagio)
    {
      var comunication = new comunicazone(UfficioSindacale,date.toUTCString(),oggetto,importanza,messagio);
      return comunication;
    },

    approvaEvento(id)
    {
      var evento=listaEventiDaApprovae.getEvent(id)
      listaEventiDaApprovae.deleteEvent(id)
      bacheca.AggiungiEvento(evento)
     
   },

   cancellaEvento(id)
   {
    listaEventiDaApprovae.deleteEvent(id)
   }
  }

  module.exports = gestoreComunicazione