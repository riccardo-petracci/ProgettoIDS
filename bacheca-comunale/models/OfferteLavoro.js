class OfferteLavoro{
    

    constructor(AziendaOfferente,dataCreazione,descrizioneOfferta,mail,tipoServizio)
    {
    this.OffertaId =  OfferteLavoro.incrementId();
    this.AziendaOfferente = AziendaOfferente.nomeAzienda
    this.dataCreazione=dataCreazione
    this.descrizioneOfferta=descrizioneOfferta
    this.mail=mail
    this.tipoServizio=tipoServizio
    this.risposte = new Array ();
   

    }


    static incrementId(){
        if(!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
      }

}
module.exports=OfferteLavoro