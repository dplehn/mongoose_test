mongoose=require('mongoose');
var Schema = mongoose.Schema;

var BookSchema= new Schema({
    title: String,
    author: {
        type: String,
        index: true
    },
    category: String
});

module.exports= mongoose.model('Book',BookSchema);
