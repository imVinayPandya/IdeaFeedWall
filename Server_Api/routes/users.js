var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var moment = require('moment');
var payload = {iss: '', exp: ''};
var secret = "SecretKey@#$!%^005";
var User = require('../lib/DBMethods').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
    if(!req.body.email || !req.body.pass){
        res.status(404).send({success: false, msg: 'Please provide credentials.'} );
    }else{
        /*User.Insert({
            firstName: 'Vinay', lastName: 'Pandya', gender: 'male', email: 'vinay@gmail.com', password: '123'}, function(err, user) {
            if (!err && user) {
                console.log('user inserted');
            } else {
                console.log(err.message);
            }
        });*/
        User.Login(req.body.email, req.body.pass, function(err, user){
            if(!err && user) {
                payload.iss = user._id;
                payload.exp = moment();
                res.status(200).send({ success: true, token: jwt.encode(payload, secret) });
            }else{
                res.status(401).send({success: false, msg: 'Wrong Credentials...!!'});
            }
        });
    }
});

module.exports = router;
