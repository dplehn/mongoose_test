var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb');

var mongoose = require('mongoose');

var Book = require('./Book.model');
//mongodb://localhost:27017/
mongoose.connect('mongodb://det:krinte99@ds135179.mlab.com:35179/loginapp?readPreference=primary');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get('/', function (req, res) {
    res.send('happy')
});

app.get('/books', function (req, res) {
    console.log('getting all books');
    Book.find({}).exec(function (err, books) {
        if (err) {
            res.send('error has occured');
        } else {
            console.log(books);
            res.json(books);
        }

    })
});

app.get('/books/:id', function (req, res) {
    console.log('find one book');
    Book.findOne({
        _id: req.params.id
    }).exec(function (err, book) {
        if (err) {
            res.send('error occured');
        }
        else
            {
                console.log(book);
                res.json(book);
            }
        });
});

app.post('/books',function(req,res){
   console.log('post started');
   var newBook = new Book();
   newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category =req.body.category;

    newBook.save(function (err,book) {
        if(err){
            res.send('error saving');
        }
        else {
            console.log(book);
            res.send(book);
        }
        
    });
});

app.put('/books/:id',function (req,res) {
    Book.findOneAndUpdate({_id: req.params.id },
        {$set:{title:req.body.title}},
        {upsert: true},
        function (err,newBook) {
        if(err){
            console.log('err');
        }
        else {
            console.log(newBook);
            console.log(req.body.title);
            res.send(newBook);
        }
            
        }

    )

})


var port = 8080;

app.listen(port, function () {
    console.log("i am running");
})

