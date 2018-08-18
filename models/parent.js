var mongoose = require('mongoose');

var Parent = mongoose.model('Parent' ,{
    name : {
        type : String,
        minlength : 1,
        trim : true
    },
    email : { 
        type : String,
        trim : true
    },
    password : {
        type : String,
        minlength : 8,
    },
    paadhar : {
        type : Number,
        length : 12
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
    },
    cname : {
        type : String,
    },
    cage : {
        type : Date,
    },
    caadhar : {
        type : Number,
        length : 12
    }
});

module.exports = {
    Parent
};