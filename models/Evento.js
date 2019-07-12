const Cittadino = require('./Cittadino');

class Evento{

/*     nomeOrganizzatore;
    cognomeOrganizzatore;
    eventoId;
    dataCreazioneEvento;
    descrizioneEvento;
    titoloEvento; 
    flagApprovazione = false; */

    constructor(Cittadino, dataCreazione, titoloEvento){
        this.Cittadino=Cittadino;
        this.nomeOrganizzatore = Cittadino.nome;
        this.cognomeOrganizzatore = Cittadino.cognome;
        this.eventoId = Evento.incrementId();
        this.dataCreazione = dataCreazione;
        //this.descrizioneEvento = Cittadino.compilaEvento();
        this.titoloEvento = titoloEvento;
    }

    static incrementId(){
        if(!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
      }
    

}

module.exports=Evento;