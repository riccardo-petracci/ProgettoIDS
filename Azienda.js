const Utente = require('./Utente');
const ruolo = require('./Ruolo');


class Azienda {

    constructor(Utente, nomeAzienda){
        this.Utente = Utente;
        this.id = Utente.id;
        this.nome=Utente.nome;
        this.cognome=Utente.cognome;
        this.password= Utente.password;
        this.nomeAzienda=nomeAzienda;
    }

    compilaOffertaLavoro(){
        var txtInput = document.getElementById("txtInput"). value;
        txtInput.onkeypress = function(e) {
	        if (e.target.value.length >= 200) e.preventDefault();
        }
    }

    compilaAnnunciPromozione(){
        var txtInput = document.getElementById("txtInput"). value ;
        txtInput.onkeypress = function(e) {
	        if (e.target.value.length >= 200) e.preventDefault();
        }
    }

}

module.exports = Azienda;


var u1 = new Azienda( new Utente("c", "c", "c"), "nomeAzienda");

console.log(u1.id);