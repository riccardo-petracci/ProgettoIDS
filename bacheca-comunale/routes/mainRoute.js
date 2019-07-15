const express = require('express');
const route = express.Router();

const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const DB = require('../models/listaUtenti')
const auth = require('../controller/auth')
const cittadino = require('./cittadinoRoute')


route.use(cookieParser())
route.use(bodyParser.urlencoded({extended:true}))
route.use(cittadino)

route.use(session({
    
    name:'UserSession',
    secret:'super',
    resave:true, 
    saveUninitialized:true
}))

route.get('/', (req,res) => {res.render(path.resolve('./view')+'/index.ejs')});
route.get('/about', (req,res) =>{res.render(path.resolve('./view')+'/about.ejs')});
route.get('/login', (req,res) =>{res.render(path.resolve('./view')+'/login.ejs')});
route.get('/login/forgotpassword', (req,res) =>{res.render(path.resolve('./view')+'/forgotpassword.ejs')});




route.post('/signed',(req,res) => {
    var user = auth.register(req.body.uname,req.body.psw)
    DB.push(user)
    //res.render(path.resolve('./view')+'/cittadino.ejs',{utente:req.body.uname})    

})

route.post('/logged',(req,res) => {
    var credential = auth.checkCredential(req.body.uname,req.body.psw) // controllo tipo utente
    if ( credential === undefined)
    {
       res.writeHead(401,{ 'Content-Type': 'text/plain' })
       
    }else{
        var utente = DB.filter(function(DB){if(DB.nome === req.body.uname && DB.password === req.body.psw) {return DB}})
        req.session.authUser=utente
        res.redirect('/cittadino')
        
    }
    

})




module.exports = route;



