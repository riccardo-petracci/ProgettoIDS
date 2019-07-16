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
    req.session.user=usr
    res.render(path.resolve('./view')+'/ufficioSindacale.ejs',{user:usr.nome})
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
module.exports = route