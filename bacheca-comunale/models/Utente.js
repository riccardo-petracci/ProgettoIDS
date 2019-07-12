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


