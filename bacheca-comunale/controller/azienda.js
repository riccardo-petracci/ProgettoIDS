const annuncio = require('../models/AnnunciPromozione')
const OffertaLavoro= require('../models/OfferteLavoro')
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

    }
  }

var gestoreOfferte=  {
  
    
  

    pubblishJobOffers(bahecaAnnunci) 
    {

    },

    createJobOffer( AziendaOfferente,descrizioneOfferta,mail,tipoLavoratore)
    {
      var jobOffer = new OffertaLavoro(AziendaOfferente,date.toUTCString(),descrizioneOfferta,mail,tipoLavoratore);
      return jobOffer;
    },

    getCurriculum()
    {

    },
  }

  module.exports.gestoreAzienda = gestoreAzienda
  module.exports.gestoreOfferte = gestoreOfferte