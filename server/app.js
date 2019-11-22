// app.js

var express = require('express');
var bodyParser = require('body-parser');
const multer = require("multer")
var cors = require('cors');
var student = require('./routes/student'); // Imports routes for the products


var app = express();
app.use(cors());


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://admin:8alassa94@gnosis-nhqqh.mongodb.net/test?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//upload files
const upload =multer({
    dest: './uploads',
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/students', student);

var port = 1234;


app.post('/upload',upload.single('file'),(req,res) =>{
    res.json({file:req.file})
})
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);

});
