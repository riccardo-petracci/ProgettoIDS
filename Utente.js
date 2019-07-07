const Cittadino = require('./Cittadino');
const Azienda = require('./Azienda');
const UfficioSindacale = require('./UfficioSindacale');
//const Ruolo = require('./Ruolo');

class Utente {
    
  constructor( nome, cognome, password) 
  {
    this.id = Utente.incrementId();
    this.nome = nome;
    this.cognome = cognome;
    this.password = password;
  }

/*   setRuolo(r){
    switch(r){
        case 'azienda' :
            return new Azienda.constructor(); 
        case 'cittadino' :
            return new Cittadino.constructor();
        case 'ufficioSindacale' :
            return new UfficioSindacale.constructor();
    }
  } */



  static incrementId(){
    if(!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }



}



module.exports = Utente;


var u = new Cittadino( new Utente("c", "c", "c"));
//var u1 = new Azienda( new Utente("c", "c", "c"), "nomeAzienda");



/* console.log(u.id);
console.log(u1.id);
console.log(u1.nomeAzienda);
console.log(u1.stampa()); */