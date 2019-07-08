const express = require('express');
const route = express.Router();
const path = require('path')
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('../models/database')



route.use(bodyParser.urlencoded({extended : true}));


route.get('/', (req,res) => {res.render(path.resolve('./view')+'/index.ejs')});
route.get('/login', (req,res) =>{res.render(path.resolve('./view')+'/login.ejs')});
route.get('/about', (req,res) =>{res.sendFile(path.resolve('./view')+'/about.html')});

route.post('/logged',(req,res) => {
var uname = req.body.uname
var psw = req.body.psw

})

route.post('/signed',(req,res) => {
    var email = req.body.email
    var psw = req.body.psw
    var obj ={mail:email,password:psw}
   db.push(obj)
   res.render(path.resolve('./view')+'/cittadinoUI.ejs',{user:obj.mail})
    })



module.exports = route;