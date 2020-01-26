const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.use(express.json()); 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'vistas'));
app.use('/public', express.static(path.join(__dirname,('./public'))));


const homeRuta = require('./rutas/homeRuta');
const menuRuta = require('./rutas/menuRuta');
const nosotrosRuta = require('./rutas/nosotrosRuta');
const contactosRuta = require('./rutas/contactosRuta');


app.get('/', function(req, res, next){
    res.render('index.pug',{});
});
app.use('/home', homeRuta);
app.use('/menu', menuRuta);
app.use('/nosotros', nosotrosRuta);
app.use('/contactos', contactosRuta);


app.listen(3000, function(){
    console.log('servidor inciando');
});