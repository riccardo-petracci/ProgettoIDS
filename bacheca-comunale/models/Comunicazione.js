class Comunicazione{
    NomeAssistente;
    CognomeAssistente
    ComunicazioneId;
    DescrizioneComunicazione;
    DataComunicazione;

    
    constructor(UfficioSindacale, DataComunicazione){
        this.UfficioSindacale = UfficioSindacale;
        this.NomeAssistente = UfficioSindacale.nome;
        this.CognomeAssistente = UfficioSindacale.cognome;
        this.ComunicazioneId = Comunicazione.incrementId();
        this.DescrizioneComunicazione = UfficioSindacale.compilaComunicazione();
        this.DataComunicazione = DataComunicazione;
    }

    static incrementId(){
        if(!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
      }
}