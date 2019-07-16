const Utente = require('./Utente');


class Azienda {

    constructor(Utente, nomeAzienda){
        this.Utente = Utente;
        this.id = Utente.id;
        this.nome=Utente.nome;
        this.cognome=Utente.cognome;
        this.password= Utente.password;
        this.nomeAzienda=nomeAzienda;
        this.ruolo = 'azienda'
    }

   

    

}

module.exports = Azienda;


