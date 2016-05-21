/**
 * Created by vinay on 5/8/2016.
 *//*


var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LikeSchema = new Schema({
    content_id: {
        type: Schema.Types.ObjectId
    },
    content_type: {
        type: String,
        enum: ['COMMENT', 'IDEA'],
        uppercase: true
    },
    user_id: {
        type: Schema.Types.ObjectId
    },
    liked_at: {
        type: Date,
        default: new Date()
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

*/
/*UserSchema.pre("save", function (next) {


    var now = new Date();
    this.updated = now;
    if (!this.registered) {
        this.registered = now;
        next();
    } else {
        next();
    }
});*//*


module.exports = mongoose.model('Likes', LikeSchema);*/
