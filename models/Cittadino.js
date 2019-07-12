const Utente = require('./Utente');


 class Cittadino {

    constructor(Utente){
        this.Utente=Utente;
        this.id = Utente.id;
        this.nome = Utente.nome;
        this.cognome = Utente.cognome;
        this.password = Utente.password;
    }

    // compilaEvento(){
    //     var txtInput = document.getElementById("txtInput").value ;
    //     txtInput.onkeypress = function(e) {
    //         if (e.target.value.length >= 200) e.preventDefault();
    //     }
    //     return txtInput;
    // }

    // compilaSegnalazione(){
    //     var txtInput = document.getElementById("txtInput").value ;
    //     txtInput.onkeypress = function(e) {
    //         if (e.target.value.length >= 200) e.preventDefault();
    //     }
    //     return txtInput;
    // }
    
    //permette di scegliere un file dalla memoria per rispondiOfferta
    // scegliFile(){
    //     var realFileBtn = document.getElementById("realFile");
    //     var customBtn = document.getElementById("customBtn");
    //     customBtn.addEventListener("click", function(){ realFileBtn.click();})
    // }

}

module.exports = Cittadino;

