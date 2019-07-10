class Evento{

    id;
    dataCreazione;
    descrizioneEvento;
    titoloEvento;
    flagApprovazione = false;

    constructor(id, dataCreazione, descrizioneEvento, titoloEvento, flagApprovazione){
        this.id=id;
        this.dataCreazione=dataCreazione;
        this.descrizioneEvento=descrizioneEvento;
        this.titoloEvento=titoloEvento;
        this.flagApprovazione=flagApprovazione;
    }

    

}