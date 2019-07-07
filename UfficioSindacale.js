const Utente = require('./Utente');
const ruolo = require('./ruolo');


class UfficioSindacale  {

    constructor(id, nome,cognome, password){
        this.id=id;
        this.nome=nome;
        this.cognome=cognome;
        this.password=password; 
    }

compilaEvento(scriviQualcosa){
    var txtInput = document.getElementById("txtInput"). value = scriviQualcosa ;
    txtInput.onkeypress = function(e) {
        if (e.target.value.length >= 200) e.preventDefault();
    }
}

}

module.exports = UfficioSindacale;