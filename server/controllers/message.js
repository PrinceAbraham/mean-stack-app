var Message = require('../models/message');
var objectId = require('mongoose').Types.ObjectId;
module.exports = {
    get: function (req, res) {
        var query = {user: new objectId(req.user)};
        console.log("This is request user", req.user);
        Message.find(query).populate('user','-pwd').exec(function (err, result) {
        res.send(result);

        //All Messages
//        Message.find({}).exec(function (err, result) {
//            res.send(result);
        });
    },
    post: function (req, res) {
        console.log(req.body, req.user);
        req.body.user = req.user;
        //The old way with mongodb
        //database.collection('messages').insertOne(req.body);
        //the new Way with mongoose
        var message = new Message(req.body);
        message.save();
        //Sends response to whoever sends the post
        res.status(200);
    }
}
