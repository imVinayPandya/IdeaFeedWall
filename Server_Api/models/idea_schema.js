/**
 * Created by vinay on 5/8/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdeaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    comment_count: {
        type: Number,
        default: 0
    },
    created: {
        type: Date
    },
    updated: {
        last_updated:{
            type: Date
        },
        history: [{
            time: {
                type: Date
            }
        }]

    },
    likes: [
        {
            user_id: {
                type: Schema.Types.ObjectId,
                ref: 'Users'
            },
            time: {
                type: Date,
                default: new Date()
            },
            _id: false
        }
    ],
    comments: [
        {
            user_id: {
                type: Schema.Types.ObjectId,
                ref: 'Users'
            },
            comment: {
                type: String
            },
            time: {
                type: Date,
                default: new Date()
            },
            _id: false
        }
    ],
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

IdeaSchema.pre("save", function (next) {
    var now = new Date();
    this.updated.last_updated = now;
    this.updated.history.push({
        time: now
    });
    if (!this.created) {
        this.created = now;
        next();
    } else {
        next();
    }
});

module.exports = mongoose.model('Ideas', IdeaSchema);