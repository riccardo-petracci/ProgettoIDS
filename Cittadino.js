const Utente = require('./Utente');
const Ruolo = require('./Ruolo');


 class Cittadino {

    constructor(user){
        this.user=user;
        this.id = user.id;
        this.nome = user.nome;
        this.cognome = user.cognome;
        this.password = user.password;

    }

    compilaEvento(scriviQualcosa){
        var txtInput = document.getElementById("txtInput"). value = scriviQualcosa ;
        txtInput.onkeypress = function(e) {
	        if (e.target.value.length >= 200) e.preventDefault();
        }
    }

    compilaSegnalazione(scriviQualcosa){
        var txtInput = document.getElementById("txtInput"). value = scriviQualcosa ;
        txtInput.onkeypress = function(e) {
	        if (e.target.value.length >= 200) e.preventDefault();
        }
    }
    

}

module.exports = Cittadino;

