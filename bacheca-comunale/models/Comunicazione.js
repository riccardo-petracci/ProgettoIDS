class Comunicazione{

    
    constructor(UfficioSindacale, DataComunicazione,oggetto,importanza,messagio){
        this.UfficioSindacale = UfficioSindacale;
        this.NomeAssistente = UfficioSindacale.nome;
        this.CognomeAssistente = UfficioSindacale.cognome;
        this.ComunicazioneId = Comunicazione.incrementId();
        this.DataComunicazione = DataComunicazione;
        this.importanza=importanza
        this.oggetto=oggetto
        this.DescrizioneComunicazione = messagio
        
    }

    static incrementId(){
        if(!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
      }
}

module.exports = Comunicazione