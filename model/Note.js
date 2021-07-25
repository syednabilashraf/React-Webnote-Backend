var mongoose = require('mongoose');
var Notes =mongoose.model('notes',{
    content:{
        type: String,
        required: true,
        minlength : 1,
        trim : true
    },
    savedAt:{
        type: Number,
        default: null
    }
    
});
module.exports = Notes;