const express = require('express');
const route = express.Router();

const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const eventiDaApprovare = require('../models/ListaEventiDaApprovare')
const segnalazioni = require('../models/listaSegnalazioni')
const bacheca = require('../models/BachecaAnnunci')
const gestoreUfficioSindacale = require('../controller/ufficioSindacale')


route.use(bodyParser.urlencoded({extended:true}))
route.use(cookieParser('super'))

route.use(session({
    
    name:'UserSession',
    secret:'super',
    resave:true, 
    saveUninitialized:true

}))


route.get('/ufficiosindacale', (req,res) =>
{
    var usr = req.session.user
    var se = JSON.stringify(segnalazioni.listaSegnalazioni)
    var co = JSON.stringify(bacheca.Comunicazini)
    req.session.user=usr
   
    res.render(path.resolve('./view')+'/ufficioSindacale.ejs',{user:usr.nome,segn:se,comm:co})
})

route.get('/ufficiosindacale/approva-evento', (req,res) =>
{
    var eventi = JSON.stringify(eventiDaApprovare.ListaEventiDaApprovare)
        
    res.render(path.resolve('./view')+'/approvazioneEventi.ejs',{evv:eventi})
})


route.get('/ufficiosindacale/bacheca',function(req,res){

    var eventi = JSON.stringify(bacheca.Eventi)
    var offerte = JSON.stringify(bacheca.OfferteLavoro)
    var annunci = JSON.stringify(bacheca.AnnunciPromozione)
    
    res.render(path.resolve('./view')+'/bacheca.ejs',{ann:annunci,off:offerte,evv:eventi})
    
 })

route.post('/ufficiosindacale/comunicazione', (req,res) =>
{
    var usr = req.session.user
    req.session.user=usr
   
    var oggetto = req.body.oggetto
    var importanza = req.body.importanza
    var messagio = req.body.messaggio

    var comunicazione = gestoreUfficioSindacale.createComunication(usr,oggetto,importanza,messagio)
    bacheca.AggiungiComunicazione(comunicazione)
})


route.post('/ufficiosindacale/approva-evento', (req,res) =>
{
   var id = req.body.identificatore
   gestoreUfficioSindacale.approvaEvento(id)
   console.log('evento approvato')
})

route.post('/ufficiosindacale/elimina-evento', (req,res) =>
{
    var id = req.body.identificatore
    gestoreUfficioSindacale.cancellaEvento(id)
    console.log('evento non approvarto')
})

module.exports = route