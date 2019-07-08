class gestoreAzienda {
  
    
    constructor(jobList,OffersForm,gestoreOfferte,bahecaAnnunci) 
    { 
    this.jobList = jobList
    this.OffersForm = OffersForm
    this.gestoreOfferte = gestoreOfferte
    this.bahecaAnnunci = bahecaAnnunci
    }

    PromotionForm() 
    {

    }

    checkList()
    {

    }

    checkAnswersOffer()
    {

    }

    pubblishNotice()
    {

    }

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