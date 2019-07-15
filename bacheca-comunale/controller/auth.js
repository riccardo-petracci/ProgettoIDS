const listaUtenti = require('../models/listaUtenti')
const Utente = require('../models/Utente');
const Cittadino = require('../models/Cittadino');
const Azienda = require('../models/Azienda');
const UfficioSindacale = require('../models/UfficioSindacale');



var auth = {
    
    checkCredential(username , password)
    {
        for(var i =0;i<listaUtenti.length;i++)
        {
            if(listaUtenti[i].nome == username && listaUtenti[i].password == password ) 
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

    register(username , password,userType)
    {
        var usr = new 
        listaUtenti.push()
    }
    
}





module.exports = auth;