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

route.get('/cittadino',function(req,res){
    
    var a = req.session.authUser
    console.log(a)
    console.log(a.nome)
    res.render(path.resolve('./view')+'/cittadino.ejs',{utente:a.nome})

})

//ciaoMondo11
module.exports = route;
