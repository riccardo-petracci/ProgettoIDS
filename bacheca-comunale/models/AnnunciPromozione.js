const Azienda = require('./Azienda');

class AnnunciPromozione{
   
    
    constructor(Azienda, DataSegnalazione,descrizione,mail,tipoServizio){
        this.Azienda = Azienda;
        this.AziendaCreatrice = Azienda.nomeAzienda;
        this.SegnalazioneId = AnnunciPromozione.incrementId();
        this.DescrizioneSegnalazione = descrizione
        this.DataSegnalazione = DataSegnalazione;
        this.mail=mail
        this.tipoServizio=tipoServizio
    }

    static incrementId(){
        if(!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
      }
}

module.exports = AnnunciPromozione