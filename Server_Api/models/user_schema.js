/**
 * Created by vinay on 5/8/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', 'OTHER'],
        uppercase: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    mobile: {
        type: String,
        trim: true,
        default: ''
    },
    password: {
        type: String,
        required: true
    },
    registered: {
        type: Date
    },
    updated: {
        type: Date
    },
    userType: {
        type: String,
        enum: ['ADMIN', 'USER'],
        trim: true,
        default: 'USER'
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

UserSchema.pre("save", function (next) {
    var now = new Date();
    this.updated = now;
    if (!this.registered) {
        this.registered = now;
        next();
    } else {
        next();
    }
});

module.exports = mongoose.model('Users', UserSchema);