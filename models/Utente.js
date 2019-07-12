const Cittadino = require('./Cittadino');
const Azienda = require('./Azienda');
const UfficioSindacale = require('./UfficioSindacale');

class Utente {
    
  constructor( nome, cognome, password) 
  {
    this.id = Utente.incrementId();
    this.nome = nome;
    this.cognome = cognome;
    this.password = password;
  }



  static incrementId(){
    if(!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }



}



module.exports = Utente;


//var u = new Cittadino( new Utente("c", "c", "c"));
//var u3 = new Azienda( new Utente("c", "c", "c"), "nomeAzienda");
//var u2 = new UfficioSindacale( new Utente("c", "c", "c"));




//console.log(u.id);
/* console.log(u3.id);
console.log(u3.nomeAzienda); */
//console.log(u2.id);
