var mongoose = require('mongoose');

var Government = mongoose.model('Government' ,{
    name : {
        type : String,
        minlength : 1,
        trim : true
    },
    email : { 
        type : String,
        trim : true
    },
    aadhar : {
        type : Number,
        length : 12
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
    department : {
        type : String,
    },
    designation : {
        type : String,
    },
    address : {
        type : String,
    }
});

module.exports = {
    Government
};