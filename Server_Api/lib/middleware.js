/**
 * Created by vinay on 5/9/2016.
 */
var User = require('./DBMethods').User;
var jwt = require('jwt-simple');
//var moment = require('moment');
var mongoose = require('mongoose');
var secret = "SecretKey@#$!%^005";

module.exports = {
    authenticate: function(req, res, next) {
        var bearerToken = req.headers.authorization;

        if(bearerToken) {
            var token = bearerToken.split(" ")[1];
            var userId = "";
            console.log(token);

            try{
                userId = jwt.decode(token, secret);
            } catch(err) {
                console.log("Invalid token");
                return res.status(401).send({ error: 'invalid Token' });
            }

            User.select({
                _id: mongoose.Types.ObjectId(userId.iss)
            }, function(err, user) {
                if(!err && user){
                    console.log("user is Authorized");
                    req.user = {};
                    req.user._id = user._id;
                    req.user.userType = user.userType;
                    next();
                }else{
                    res.status(401).send({ success: false, error: 'Unauthorized access' });
                }
            });

        }else{
            res.status(403).send({ error: 'Forbidden access' });
        }
    }
};