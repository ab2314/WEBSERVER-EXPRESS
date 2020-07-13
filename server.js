const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers.js');


const port = process.env.PORT || 3000;


//Poner un folder publico para verlo
app.use(express.static(__dirname + '/public'));

//express HBS ENGINE Parciales
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers


//Paths
app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'abraham',

    });

});

app.get('/about', function(req, res) {

    res.render('about');

});

// Puerto que se escucha
app.listen(port)