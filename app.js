var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb');

var mongoose = require('mongoose');

var Book = require('./Book.model');
//mongodb://localhost:27017/
mongoose.connect('mongodb://det:krinte99@ds135179.mlab.com:35179/loginapp?readPreference=primary');


app.get('/', function (req, res) {
    res.send('happy')
});


var port = 8080;

app.listen(port, function () {
    console.log("i am running");
})

