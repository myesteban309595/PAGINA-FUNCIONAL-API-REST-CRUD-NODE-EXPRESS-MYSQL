const express = require('express');
const colors = require('colors')
const {engine} = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql')

//& =========  DIRECCIONES ====================

const config = require('./config')

//& ===========================================
const app = express()
const PORT = config.module.PORT
app.use(express.json());

app.set('views', __dirname + '/views'); // ^configuro la carpeta views

app.engine('.hbs', engine({
    extname: '.hbs',
}));

app.set('view engine', 'hbs');

//^==========  BASE DATOS =====================

//~ esta conexion debe estar en una carpeta database.js

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'paginafuncional'
}))

//^============================================

app.listen(PORT, ()=> {
    
    console.log(("conectado al localhost:"+PORT+" ").inverse);
    
})

app.get('/', (req,res) => {
    //res.json('hola, te saludo desde app.js ! conectado al servidor')
    res.render('home');
})


//​‌‌‍                         ⁡⁢⁣⁣𝗡 𝗢 𝗧 𝗔 𝗦   𝗜 𝗠 𝗣 𝗢 𝗥 𝗧 𝗔 𝗡 𝗧 𝗘 𝗦⁡​


//* El formato html de la app esta contenido en layut del main.hbs  de handlebars