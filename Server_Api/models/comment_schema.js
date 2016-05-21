/**
 * Created by vinay on 5/8/2016.
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    idea_id: {
        type: Schema.Types.ObjectId,
        ref: 'Ideas'
    },
    comment: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId
    },
    created: {
        type: Date,
        default: new Date()
    },
    updated: {
        last_updated:{
            type: Date,
            default: new Date()
        },
        history: [{
            time: {
                type: Date
            }
        }]

    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

CommentSchema.pre("save", function (next) {
    var now = new Date();
    //this.updated.last_updated = now;
    this.updated.history.push({
        time: now
    });
    if (!this.created) {
        this.created = now;
    } else {
        next();
    }
});


module.exports = mongoose.model('Comments', CommentSchema);;