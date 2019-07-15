const Utente = require('./Utente');


 class Cittadino {

    constructor(Utente){
        this.Utente=Utente;
        this.id = Utente.id;
        this.nome = Utente.nome;
        this.cognome = Utente.cognome;
        this.password = Utente.password;
        this.ruolo = 'cittadino'
    }

  

}



module.exports = Cittadino;

