const Utente = require('./Utente');


class UfficioSindacale  {


    constructor(Utente){
        this.Utente = Utente;
        this.id = Utente.id;
        this.nome = Utente.nome;
        this.cognome = Utente.cognome;
        this.password = Utente.password; 
        this.ruolo = 'ufficioSindacale'
    }

    



}

module.exports = UfficioSindacale;