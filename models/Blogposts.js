const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const postSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    subtitle : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    image : {
        type : String,
    },
    body : {
        type : String,
        required : true   
    },
    publishedAt : {
        type: Date,
        required: false
    },
    category : {
        type:  ObjectId,
        ref : 'Category'
    }

})
// Duplicate the ID field.
postSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
postSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('BlogPost',postSchema);
