var express = require('express');
var router = express.Router();
var Idea = require('../lib/DBMethods').Idea;
var Authenticate = require('../lib/middleware').authenticate;
var _ = require('underscore');

function selectAll(req, res, next) {
    Idea.selectAllWithAuthorDetails(function(err, ideas) {
        if(!err && ideas){
            console.log('got ideas')
            if(ideas.length > 0){
                console.log('ideas listed, now loping up');

                ideas.forEach(function(value, position){
                    if(value){
                        var values = _.pluck(value.likes, "user_id", function(userIds) {
                            return userIds;
                        });
                        var userid = !!_.find(values, req.user._id);
                        if(userid) {
                            ideas[position] = JSON.parse(JSON.stringify(ideas[position]));
                            ideas[position].userLiked = true;
                            if(position == ideas.length-1) {
                                res.status(200).send({ideas: ideas});
                            }
                        }else{
                            ideas[position] = JSON.parse(JSON.stringify(ideas[position]));
                            ideas[position].userLiked = false;
                            if(position == ideas.length-1) {
                                res.status(200).send({ideas: ideas});
                            }
                        }

                    }

                });
            }else{
                res.status(200).send({ideas: ideas});
            }
        }else{
            res.status(500).send({ error: err.message, details: err });
        }
    });
}

function getIdeaByIdWithFullDetails(req, res) {
    if(!req.params.id) {
        res.status(404).send({success: false, msg: 'This request is not valid, or you\'r missing something'} );
    }else{
        Idea.getIdeaByIdWithAllDetails(req.params.id, function(err, idea) {
            if(!err && idea) {
                var values = _.pluck(idea.likes, "user_id", function(userIds) {
                    return userIds;
                });
                var userid = !!_.find(values, req.user._id);

                if(userid) {
                    idea = JSON.parse(JSON.stringify(idea));
                    idea.userLiked = true;
                    res.status(200).send({ success: true, idea: idea });
                }else{
                    idea = JSON.parse(JSON.stringify(idea));
                    idea.userLiked = false;
                    res.status(200).send({ success: true, idea: idea });
                }


            }else{
                res.status(500).send(JSON.stringify(err));
            }
        })
    }
}

function addNewIdea(req, res, next) {
    if(!req.body.title || !req.body.content || !req.user._id){
        res.status(404).send({success: false, msg: 'Please provide valid data.'} );
    }else{
       Idea.Insert(req.body.title, req.body.content, req.user._id, function(err, idea) {
            if(!err && idea) {
                res.status(200).send({
                    success: true, idea: idea
                });
            }else{
                res.status(500).send(JSON.stringify(err));
            }
       });


    }
}

function likeIdea(req, res, next) {
    if(req.body.contentId) {
        Idea.likeIdea(req.body.contentId, req.user._id, function(err, idea) {
            if(!err && idea){
                res.status(200).send({ success: true, like: idea });
            }else{
                res.status(500).send({ success: false, msg: err.message });
            }
        })
    }else{
        console.log("this request is not exist");
        res.status(404).send({ success: false, msg: 'request not exist' });
    }
}

function addCommentIdea(req, res, next) {
    if(req.body.contentId && req.body.comment) {
        Idea.addComment(req.body.contentId, req.body.comment, req.user._id, function(err, idea) {
            if(!err && idea){
                res.status(200).send({ success: true, idea: idea });
            }else{
                res.status(500).send({ success: false, msg: err.message });
            }
        })
    }else{
        console.log("this request is not exist");
        res.status(404).send({ success: false, msg: 'request not exist' });
    }
}

router.get('/', Authenticate, selectAll);
router.get('/:id', Authenticate, getIdeaByIdWithFullDetails);
router.post('/add',Authenticate, addNewIdea);
router.post('/like', Authenticate, likeIdea);
router.post('/comment/add',Authenticate, addCommentIdea);

module.exports = router;