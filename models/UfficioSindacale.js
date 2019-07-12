const Utente = require('./Utente');


class UfficioSindacale  {


    constructor(Utente){
        this.Utente = Utente;
        this.id = Utente.id;
        this.nome = Utente.nome;
        this.cognome = Utente.cognome;
        this.password = Utente.password; 
    }

    compilaComunicazione(){
        var txtInput = document.getElementById("txtInput"). value;
        txtInput.onkeypress = function(e) {
            if (e.target.value.length >= 200) e.preventDefault();
        }
    
    return txtInput;
    }


    approvaEvento(evento){
        evento.flagApprovazione = true; 
    }

    



}

module.exports = UfficioSindacale;