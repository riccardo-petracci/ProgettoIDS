

class Evento{



    constructor(Cittadino, dataEvento, titoloEvento,descrizioneEvento,mailCreatoreEvento,dataCreazione){
        this.Cittadino=Cittadino;
        this.nomeOrganizzatore = Cittadino.nome;
        this.cognomeOrganizzatore = Cittadino.cognome;
        this.eventoId = Evento.incrementId();
        this.dataCreazione = dataCreazione;
        this.dataEvento = dataEvento;
        this.descrizioneEvento = descrizioneEvento
        this.titoloEvento = titoloEvento;
        this.mailCreatoreEvento
    }

    static incrementId(){
        if(!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
      }
    

}

module.exports=Evento;