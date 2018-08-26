var mongoose = require('mongoose');
var notice = mongoose.model('notice',{
    subject : {
        type : String,
    },
    description : {
        type : String,
    },
    date : {
        type : Date
    },
    crecheName : {
        type : String,
    },
    crecheEmail : {
        type : String
    }
});
module.exports = {
    notice
};