var mongoose = require('mongoose');

var Faculty = mongoose.model('Faculty' ,{
    name : {
        type : String,
        minlength : 1,
        trim : true
    },
    aadhar : {
        type : Number,
        length : 12
    },
    email : { 
        type : String,
        trim : true
    },
    password : {
        type : String,
        minlength : 8,
    },
    mobile : {
        type : Number,
        minlength : true
    },
    pic : {
        type : String
    },
    address : {
        type : String,
    },
    creche : {
        type : String
    }
});

module.exports = {
    Faculty
};