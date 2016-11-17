var User = require('../models/user');
var objectId = require('mongoose').Types.ObjectId;
module.exports = {
    getProfile: function(req, res){
        var query = {_id: new objectId(req.user)};
        //Use Select to send specific data
        User.findOne(query).select('name bio').exec(function (err, result) {
        res.send(result);
        });
    },
    updateProfile: function (req, res) {
        var query = {_id: new objectId(req.user)};
        console.log(req.body);
        User.findOneAndUpdate(query, {$set: req.body}, {upsert: false }, function(err, user) {
        if (err)
            return res.send(err);

        return res.json({ message: 'User updated!' });
        });
    }
}
