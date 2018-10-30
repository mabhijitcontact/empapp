var express = require('express');
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

global.mongoose = mongoose;
global.mObjectID = mongoose.Types.ObjectId;

var app = express();

//Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employeesDB");
var db = mongoose.connection;

//API file for interacting with MongoDB
var api = require('./routes/api');
//API file for Login and Registration
//var auth = require('./server/routes/auth');

//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// API location 
app.use('/api', api);

app.use(function(err, req, res, next){
    if(err){
        res.status(500);
    }
    next();
})
//app.use('/auth', auth);



app.listen(5000, () => {
    console.log("server running on port 3000");
});