const express = require('express');
const route = express.Router();

const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')


const gestoreCittadino = require('../controller/cittadino').gestoreCittadino
const bacheca = require('../models/BachecaAnnunci')
const eventiDaApprovare = require('../models/ListaEventiDaApprovare')
const segnalazioni = require('../models/listaSegnalazioni')

route.use(bodyParser.urlencoded({extended:true}))
route.use(cookieParser('super'))

route.use(session({
    
    name:'UserSession',
    secret:'super',
    resave:true, 
    saveUninitialized:true

}))

route.get('/cittadino',function(req,res){
    
    var usr = req.session.user
    var segn = JSON.stringify(segnalazioni.listaSegnalazioni)
    var comunicazione = JSON.stringify(bacheca.Comunicazini)
    req.session.user=usr


    res.render(path.resolve('./view')+'/cittadino.ejs',{utente:usr.nome,segnal:segn,comm:comunicazione})
    

})


route.get('/cittadino/bacheca',function(req,res){
    
    var eventi = JSON.stringify(bacheca.Eventi)
    var offerte = JSON.stringify(bacheca.OfferteLavoro)
    var annunci = JSON.stringify(bacheca.AnnunciPromozione)

    res.render(path.resolve('./view')+'/bacheca.ejs',{ann:annunci,off:offerte,evv:eventi})
 })

route.post('/cittadino/segnalazzione',(req,res) =>
{
    var tipoSegnalazione = req.body.tipoSegnalazione
    var durata = req.body.durata
    var soccorsi = req.body.soccorsi
    var soccorsiGiunti = req.body.soccorsiGiunti

    var usr = req.session.user
    req.session.user=usr

    var segnalzione = gestoreCittadino.compilaSegnalazione(usr,tipoSegnalazione,durata,soccorsi,soccorsiGiunti)
    segnalazioni.AggiungiSegnalazione(segnalzione)

})

route.post('/cittadino/evento',(req,res) =>
{
    var usr = req.session.user

    var mail = req.body.creatorMail
    var nomeEvento = req.body.eventName
    var dataEvento = req.body.mydatetime
    var descrizone = req.body.dettagliEvento
    
    var evento = gestoreCittadino.newEvent(usr,mail,nomeEvento,dataEvento,descrizone)
    eventiDaApprovare.lista.push(evento)
})
module.exports = route;

