const Cittadino = require('./Cittadino');

class segnalazione{
    
    constructor(Cittadino,tipoSegnalazione,durata,soccorsi,soccorsiGiunti,DataSegnalazione){
        this.SegnalazioneId=segnalazione.incrementId();
        this.NomeCittadinoCreatore = Cittadino.nome;
        this.CognomeCittadinoCreatore = Cittadino.cognome;
        this.DataSegnalazione= DataSegnalazione;
        this.tipoSegnalazione=tipoSegnalazione
        this.eraGiaPresente=durata
        this.sonoGiaArrivatiIsoccorsi=soccorsi
        this.daQuantoSonoArrivatiIsoccorsi=soccorsiGiunti
        
        
       
    }



    static incrementId(){
        if(!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
      }

    
    

}
module.exports = segnalazione;