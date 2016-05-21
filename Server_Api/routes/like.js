var express = require('express');
var router = express.Router();
var Like = require('../lib/DBMethods').Like;
var Authenticate = require('../lib/middleware').authenticate;

function likeNewContent(req, res, next) {
    if(req.body.contentType && req.body.contentId) {
        Like.Insert(req.body.contentType, req.body.contentId, req.user._id, function(err, like) {
            if(!err && like){

                res.status(200).send({ success: true, like: like });
            }else{
                res.status(500).send({ success: false, msg: err.message });
            }
        })
    }else{
        console.log("this request is not exist");
    }
}

router.post('/add', Authenticate, likeNewContent);

module.exports = router;
