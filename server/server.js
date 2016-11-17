var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var database;

var auth = require('./controllers/auth');
var message = require('./controllers/message');
var user = require('./controllers/user');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

//Middleware
app.use(bodyParser.json());
app.use(cors);

//Requests
app.get('/api/message',checkAuthenticated, message.get);
app.post('/api/message',checkAuthenticated, message.post);
app.post('/auth/register',auth.register);
app.post('/auth/login',auth.login);
app.get('/api/getProfile',checkAuthenticated, user.getProfile);
app.post('/api/updateProfile',checkAuthenticated, user.updateProfile);

//Promise deprecated
mongoose.Promise = global.Promise;

//Connection
mongoose.connect("mongodb://localhost:27017/test", function(err, db){
    if(!err){
        console.log("connected to mongo");
    }
    //no longer needed
    //database = db;
});
var server = app.listen(5000, function(){
    console.log("Listening at "+ server.address().port);
});
