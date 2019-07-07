/* var ruolo = {
    AZIENDA: 'azienda',
    CITTADINO: 'cittadino',
    UFFICIOSINDACALE: 'ufficiosindacale',
    AMMINISTRATORE: 'amministatore'
}

switch(ruolo){
    case 'azienda':
    // Do something for summer
    case ruolo.CITTADINO:
    Utente.ruolo = 'cittadino';
}
*/
const Utente = require('./Utente');
const Cittadino = require('./Cittadino');
const Azienda = require('./Azienda');
const UfficioSindacale = require('./UfficioSindacale');
class Ruolo{

    constructor(){
        this.setRuolo = function(ruolo){
            switch(ruolo){
                case 'azienda' :
                    ruolo=new Azienda(nome, cognome, password); 
                case 'cittadino' :
                    ruolo=new Cittadino(nome, cognome, password);
                case 'ufficioSindacale' :
                    ruolo=new UfficioSindacale(nome, cognome, password);
            }
        }
    }
}

module.exports = Ruolo;


