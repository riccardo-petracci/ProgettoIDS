  const comunicazone =  require('../models/Comunicazione')
  
  var gestoreComunicazione = {
  
    "date": date = new Date(),
   
    createComunication(UfficioSindacale, oggetto,importanza,messagio)
    {
      var comunication = new comunicazone(UfficioSindacale,date.toUTCString(),oggetto,importanza,messagio);
      return comunication;
    }

    
  }

  module.exports = gestoreComunicazione