const express = require('express');
const homepage = express.Router();
const path = require('path')

homepage.get('/', (req,res) => { res.sendFile(path.resolve('./view')+'/index.html')});
homepage.get('/login', (req,res) =>{res.sendFile(path.resolve('./view')+'/login.html')});
homepage.get('/about', (req,res) =>{res.sendFile(path.resolve('./view')+'/about.html')});



module.exports = homepage;