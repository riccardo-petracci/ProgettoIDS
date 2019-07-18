const annuncio = require('../models/AnnunciPromozione')

var gestoreAzienda = {

  "date": date = new Date(),

  compilaAnnunciPromozione(azienda,mail,tipoServizio,descrizione)
  {
    var ann = new annuncio(azienda,date.toUTCString(),descrizione,mail,tipoServizio)
    return ann
  },
    PromotionForm() 
    {

    },

    checkList()
    {

    },

    checkAnswersOffer()
    {

    },

    pubblishNotice()
    {

    },

    createJob()
    {
        gestoreOfferte.createJobOffer()
        gestoreOfferte.pubblishJobOffers(this.bahecaAnnunci)
    }
  }

  class gestoreOfferte {
  
    
    constructor() 
    { 

    }

    pubblishJobOffers(bahecaAnnunci) 
    {

    }

    createJobOffer(jobOffer)
    {

    }

    getCurriculum()
    {

    }
  }

  module.exports.gestoreAzienda = gestoreAzienda