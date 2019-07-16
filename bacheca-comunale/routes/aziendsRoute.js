const express = require('express');
const route = express.Router();

const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const bacheca = require('../models/BachecaAnnunci')
const gestoreAzienda = require('../controller/azienda').gestoreAzienda
const gestoreOfferte = require('../controller/azienda').gestoreOfferte


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



route.get('/azienda/offerte',(req,res)=>{
    
    var usr = req.session.user
    req.session.user=usr

    var offerte = JSON.stringify(bacheca.OfferteLavoro)
    res.render(path.resolve('./view')+'/offertaLavoro.ejs',{utente:usr.nome,off:offerte})
})


route.post('/azienda/promozione', (req,res) =>{

 var mail = req.body.email
 var tipoServizio = req.body.tipoServizio
 var descrizione = req.body.messaggio

 var usr = req.session.user
    req.session.user=usr

 var promozione =  gestoreAzienda.compilaAnnunciPromozione(usr,mail,tipoServizio,descrizione)
 console.log(promozione)
 bacheca.AggiungiAnnuncioPromozione(promozione)

})

route.post('/azienda/offerte', (req,res) =>{

    var mail = req.body.email
    var tipoLavoratore = req.body.tipoLavoratore
    var descrizione = req.body.messaggio

    var usr = req.session.user
    req.session.user=usr

    var jobOffer=gestoreOfferte.createJobOffer(usr,descrizione,mail,tipoLavoratore)
    bacheca.AggiungiOffertaLavoro(jobOffer)
   })

module.exports = route;