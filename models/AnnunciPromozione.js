const Azienda = require('./Azienda');

class AnnunciPromozione{
    AziendaCreatrice;
    AnnuncioId;
    descrizioneAnnuncio;
    dataAnnuncio;

    
    constructor(Azienda, DataSegnalazione){
        this.Azienda = Azienda;
        this.AziendaCreatrice = Azienda.nomeAzienda;
        this.SegnalazioneId = AnnunciPromozione.incrementId();
        this.DescrizioneSegnalazione = Cittadino.compilaSegnalazione();
        this.DataSegnalazione = DataSegnalazione;
    }

    static incrementId(){
        if(!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
      }
}