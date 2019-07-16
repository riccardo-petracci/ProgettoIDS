const express = require('express');
const route = express.Router();

const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const DB = require('../models/listaUtenti')
const auth = require('../controller/auth')
const cittadino = require('./cittadinoRoute')
const azienda = require('./aziendsRoute')


route.use(cookieParser())
route.use(bodyParser.urlencoded({extended:true}))
route.use(cittadino)
route.use(azienda)

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
       console.log('wrong user')
    }else{
        var userAuth = DB.getUser(credential.username,credential.Password)
        req.session.user=userAuth

        switch(userAuth.ruolo) {
            case 'ufficioSindacale':
                    res.redirect('/ufficiosindacale')
              break;
            case 'cittadino':
                res.redirect('/cittadino')
              break;
              case 'azienda':
                 
                    res.redirect('/azienda')
             
          }
       
    }
    

})




module.exports = route;



