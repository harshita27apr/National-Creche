var mongoose = require('mongoose');

var Creche = mongoose.model('Creche' ,{
    name : {
        type : String,
        minlength : 1,
        trim : true
    },
    cname : {
        type : String
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
    description : {
        type : String,
    },
    timetable : {
      type : String  
    },
    faculty : {
        type : Array
    },
    aadhar : {
        type : Number,
        length : 12
    }
});

module.exports = {
    Creche
};