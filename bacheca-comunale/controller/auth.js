const DB = require('../models/listaUtenti')
const Utente = require('../models/Utente');
const Cittadino = require('../models/Cittadino');
const Azienda = require('../models/Azienda');
const UfficioSindacale = require('../models/UfficioSindacale');



var auth = {
    
    checkCredential(username , password)
    {
        for(var i =0;i<DB.listaUtenti.length;i++)
        {
            if(DB.listaUtenti[i].nome == username && DB.listaUtenti[i].password == password ) 
            {
                var credential = 
                {
                    username:username,
                    Password:password
                }
                return credential
            }
        }
    },

    register(username, password,userType)
    {
        var usr

        switch(userType) {
            case 'UfficioSindacale':
                usr = new UfficioSindacale(new Utente(username,'',password))
              break;
            case 'Cittadino':
                    usr= new Cittadino(new Utente(username,'',password))
              break;
              case 'Azienda':
                    usr = new Azienda(new Utente(username,'',password),'nome da inserire')
          }
          
        return usr
    }
    
}





module.exports = auth;