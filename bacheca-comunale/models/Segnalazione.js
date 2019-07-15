const Cittadino = require('./Cittadino');

class Segnalazione{
    NomeCittadinoCreatore;
    CognomeCittadinoCreatore;
    SegnalazioneId;
    DescrizioneSegnalazione;
    DataSegnalazione;


    constructor(Cittadino, DataSegnalazione){
        this.NomeCittadinoCreatore = Cittadino.nome;
        this.CognomeCittadinoCreatore = Cittadino.cognome;
        this.SegnalazioneId= Segnalazione.incrementId();
        this.DescrizioneSegnalazione = Cittadino.compilaSegnalazione();
        this.DataSegnalazione= DataSegnalazione;
    }



    static incrementId(){
        if(!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
      }

    
    

}