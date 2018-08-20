const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/MinorProject' , { useNewUrlParser: true } , function(err,r){
    if(err) console.log("MONGO ERROR - ",err);
    else console.log("Mongo Connected");
});

module.exports = {
    mongoose
};