const Utente = require('./Utente');
const Cittadino = require('./Cittadino');
const Azienda = require('./Azienda');
const UfficioSindacale = require('./UfficioSindacale');



var db = 
{
    "listaUtenti":listaUtenti = [erik = new Cittadino(new Utente('erik','romagnoli','123')),
    flavio = (new UfficioSindacale(new Utente('flavio','deangelis','11'))),
     germano = (new Azienda(new Utente('germano','conti','155'),'geco Corp'))],
    getUser(Nome,password)
    {
         for (i = 0; i < listaUtenti.length; i++) 
        {
         if(listaUtenti[i].nome === Nome && listaUtenti[i].password === password ) return listaUtenti[i]
        } 
     }
        
}

module.exports=db
