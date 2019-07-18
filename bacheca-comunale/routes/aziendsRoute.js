const express = require('express');
const route = express.Router();

const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')



route.use(bodyParser.urlencoded({extended:true}))
route.use(cookieParser('super'))

route.use(session({
    
    name:'UserSession',
    secret:'super',
    resave:true, 
    saveUninitialized:true

}))


route.get('/azienda',(req,res)=>{
    
    var usr = req.session.user
    req.session.user=usr

    res.render(path.resolve('./view')+'/azienda.ejs',{utente:usr.nome})
})


route.post('/azienda/promozione', (req,res) =>{

 var mail = req.body.email
 var tipoServizio = req.body.tipoServizio
 var descrizione = req.body.messaggio

 console.log(mail,tipoServizio,descrizione)

})

module.exports = route;