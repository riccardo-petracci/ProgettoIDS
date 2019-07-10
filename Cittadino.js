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

    compilaEvento(){
        var txtInput = document.getElementById("txtInput").value ;
        txtInput.onkeypress = function(e) {
            if (e.target.value.length >= 200) e.preventDefault();
            return txtInput;
        }
    }

    compilaSegnalazione(){
        var txtInput = document.getElementById("txtInput"). value ;
        txtInput.onkeypress = function(e) {
            if (e.target.value.length >= 200) e.preventDefault();
            return txtInput;
        }
    }
    
    //permette di scegliere un file dalla memoria per rispondiOfferta
    scegliFile(){
        var realFileBtn = document.getElementById("realFile");
        var customBtn = document.getElementById("customBtn");
        customBtn.addEventListener("click", function(){ realFileBtn.click();})
    }

}

module.exports = Cittadino;

