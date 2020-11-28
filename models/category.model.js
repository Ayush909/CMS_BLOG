const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
   name : {
       type : String,
       required : true
   }
})
// Duplicate the ID field.
categorySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
categorySchema.set('toJSON', {
    virtuals: true
});


module.exports = mongoose.model('Category',categorySchema);
