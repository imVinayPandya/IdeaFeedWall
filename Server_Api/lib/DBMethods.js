/**
 * Created by vinay on 5/9/2016.
 */


var User = require('../models/user_schema');
var Idea = require('../models/idea_schema');
var _ = require('underscore');

var IdeaMethods = {

    /**
     * Like idea
     * @param ideaId
     * @param userId
     * @param cb
     */
    likeIdea: function(ideaId, userId, cb) {
        Idea.findByIdAndUpdate({ _id: ideaId }, { $push: { likes: { user_id: userId } }})
            .populate("author", 'firstName lastName')
            .exec(function(err, result) {
            if(!err && result){
                cb(null, result);
            }else{
                cb(result, null);
            }
        });
    },

    /**
     * Add Comments in praticular idea
     * @param ideaId
     * @param userId
     * @param cb
     */
    addComment: function(ideaId, comment, userId, cb) {
        Idea.findByIdAndUpdate({ _id: ideaId }, {
            $push: {
                comments: {
                    user_id: userId,
                    comment: comment
                }
            }
        })
            .populate('author', 'firstName lastName')
            .exec(function(err, result) {
            if(!err && result){
                result.comments = _.sortBy(result.comments, function(o) {
                    return - new Date(o.time)
                });
                cb(null, result);
            }else{
                cb(result, null);
            }
        });
    },
    /**
     * Insert New Idea
     * @param title
     * @param content
     * @param userid
     * @param cb
     * @constructor
     */
    Insert: function(title, content, userid, cb) {
        Idea.create({
            title: title,
            content: content,
            author: userid
        }, function(err, idea) {
            if(!err && idea){
                cb(null, idea);
            }else{
                cb(err, null);
            }
        });
    },

    /**
     * Get all ideas
     * @param cb
     */
    selectAll: function(cb) {
        Idea.find({}, null, {sort: '-created'}, function(err, ideas) {
            if(!err && ideas){
                cb(null ,ideas);
            }else{
                cb(err, null);
            }
        });
    },

    /**
     *
     * @param cb
     */
    selectAllWithAuthorDetails: function(cb) {
        Idea.find({}, null, {sort: '-created'})
            .populate('author')
            .exec(function(err, ideas) {
            if(!err && ideas){
                cb(null ,ideas);
            }else{
                cb(err, null);
            }
        });
    },

    /**
     * get Idea by its id
     * @param id
     * @param cb
     */
    getIdeaById: function(id, cb) {
        Idea.findOne({_id: id}, function(err, ides) {
            if(!err && idea) {
                cb(null, idea);
            }else{
                cb(err, null);
            }
        })
    },

    /**
     * get Idea by its id
     * @param id
     * @param cb
     */
    getIdeaByIdWithAllDetails: function(id, cb) {
        Idea.findOne({_id: id})
            .populate('author', 'firstName lastName')
            .populate('comments.user_id', 'firstName lastName')
            //.sort('-comments.time')
            .exec(function(err, idea) {
            if(!err && idea) {
                idea.comments = _.sortBy(idea.comments, function(o) {
                    return - new Date(o.time)
                });

                cb(null, idea);
            }else{
                cb(err, null);
            }
        })
    }
};

var UserMethods = {
        Login: function (email, pass, cb) {
            User.findOne({email: email, password: pass}, function (err, user) {
                if (!err && user) {
                    cb(null, user);
                } else {
                    cb(err, null);
                }
            });
        },

        Insert: function(data, cb) {
            this.select({email: data.email}, function(errAlready, alreadyThere) {
                if(!errAlready && alreadyThere){
                    cb(new Error('Email is Already Exist, Try another one'), null);
                }else{
                    User.create(data, function(err, user){
                        if (!err && user) {
                            cb(null, user);
                        } else {
                            cb(err, null);
                        }
                    })
                }
            })
        },

        select: function(data, cb) {
            User.findOne(data, function (err, user) {
                if (!err && user) {
                    cb(null, user);
                } else {
                    cb(err, null);
                }
            });
        }

}

module.exports = {
    Idea: IdeaMethods,
    User: UserMethods
}