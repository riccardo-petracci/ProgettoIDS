const Utente = require('./utente')
var listaUtenti = new Array();
//const ut = new Utente('stefano','telamonti','1234','cittadino')
function nuovoUtente(nome,cognome,password,ruolo) {listaUtenti.push(new Utente(nome,cognome,password,ruolo))};
function cercaUtente(nome,cognome) 
{
    
    for (var i = 0; i < listaUtenti.length; i++) {
       if( listaUtenti[i].getNome() == nome  && listaUtenti[i].getCognome() == cognome)
       {
           return(listaUtenti[i])
       }
      }
      

};

