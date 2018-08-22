const express = require("express");
const app = express();
const mongoose = require('./db/mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
const nodemailer = require("nodemailer");
var bcrypt = require('bcryptjs');
app.use(bodyParser.json(),cors());
const saltRounds = 10;

var {Government} = require('./models/government')
var {Parent} = require('./models/parent')
var {Creche} = require('./models/creche')
var {Faculty} = require('./models/faculty')

app.post('/contact',function(req,res){
    nodemailer.createTestAccount((err, account) => {
    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "national.creche@gmail.com", 
            pass: "creche123"
        } });
    var mailOptions={
        to : "national.creche@gmail.com",
        from : "national.creche@gmail.com",
        subject : "Contact Admin",
        html : req.body.description
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error) res.end("error");
        else res.end("sent");
    })
})
});

app.post('/checkregister',function(req ,res){ 
    if(req.body.radio == "Government") {
    Government.find({ email : req.body.email}).then((gov) => {
        if (gov.length < 1) {
            return res.status(401).json({message: "Auth failed"});
        }
        var g = gov[0];
        if(g.password == req.body.password) {
            bcrypt.hash(req.body.npassword, saltRounds,  (err, hash) => {
                if (err) {
                  return res.status(500).json({error: err});
                } 
                else {
                g.password = hash;
                g.save();
                res.json({"result" : true})
                }
        })
        }
        })
    }
    if(req.body.radio == "Creche") {
        Creche.find({ email : req.body.email}).then((cre) => {
        if (cre.length < 1) {
            return res.status(401).json({message: "Auth failed"});
        }
        var c = cre[0];
        if(c.password == req.body.password) {
            bcrypt.hash(req.body.npassword, saltRounds,  (err, hash) => {
                if (err) {
                  return res.status(500).json({error: err});
                } 
                else {
                c.password = hash;
                c.save();
                res.json({"result" : true})
                }
        })
    }
    })
    }
    if(req.body.radio == "Parent") {
    Parent.find({ email : req.body.email}).then((par) => {
        if (par.length < 1) {
            return res.status(401).json({message: "Auth failed"});
        }
        var p = par[0];
        if(p.password == req.body.password) {
            bcrypt.hash(req.body.npassword, saltRounds,  (err, hash) => {
                if (err) {
                  return res.status(500).json({error: err});
                } 
                else {
                    p.password = hash;
                    p.save();
                    res.json({"result" : true})
                }
            })
            }
        })
    }
})

app.post('/sendRegisterMail',function(req,res){
    if(req.body.db == 'creche'){
        Creche.findOne({email:req.body.email},function(err,r){
            console.log(r);
            if(err) console.log("Error : ",err);
            else if(r) return res.json({"result":true});
            else{
                var creche = new Creche;
                creche.email = req.body.email;
                creche.password = req.body.password;
                creche.save();
                smtpTransport.sendMail(mailOptions, function(error, response){
                    if(error) res.end("error");
                });
                return res.json({"result":true});
            }
        });
    }
    else if(req.body.db == 'admin'){
        Government.findOne({email:req.body.email},function(err,r){
            if(err) console.log("Error : ",err);
            else if(r) return res.json({"result":true});
            else{
                var gov = new Government;
                gov.email = req.body.email;
                gov.password = req.body.password;
                gov.save();
                smtpTransport.sendMail(mailOptions, function(error, response){
                    if(error) res.end("error");
                });
                return res.json({"result":true});
            }
        });
    }
    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "national.creche@gmail.com", 
            pass: "creche123"
        } });
    var mailOptions={
        from : '"National Creche" <national.creche@gmail.com>',
        to : req.body.email,
        subject : "Registration Successful",
        html : '<b>Hello dear,<hr>This is to bring to your attention that your registration for National Creche has been successful. Your Id and OTP(One Time Password) is as follows<hr>ID  :' + req.body.email + '<hr>Password : ' + req.body.password + '<hr>Please Note : You are solely responsible for all the entries that are made. If at any point you are found to have entered false entries then strict actions will be taken againt you.<br>Regards,<hr>National Creche Team<b>'
    }
});

app.post('/crechelist',function(req,res){
    Creche.find({},{description:1,cname:1},function(err,r){
        if(err) console.log("Error");
        else if(r) res.send(r);
    });
});

app.post('/govregister',(req ,res) => { 
    Government.find({ email : req.body.email}).then((gov) => {
        if (gov.length < 1) {
            return res.status(401).json({message: "Auth failed"});
        }
        console.log(gov[0])
        var g = gov[0];
        g.name = req.body.name;
        g.address = req.body.address;
        g.mobile = req.body.mobile;
        g.designation = req.body.designation;
        g.department = req.body.department;
        g.aadhar = req.body.aadhar        
        g.save();
    })    
});

app.post('/parentregister',(req ,res) => { 
    console.log(req.body);
    Parent.find({ email : req.body.email}).then((parent) => {
        if (parent.length < 1) {
            return res.status(401).json({message: "Auth failed"});
        }
        console.log(parent[0])
        var p = parent[0];
        p.name = req.body.name;
        p.address = req.body.address;
        p.mobile = req.body.mobile;
        p.cname = req.body.cname;
        p.cage= req.body.cage;
        p.aadhar = req.body.aadhar;
        p.caadhar = req.body.caadhar;        
        p.save();
    })    
});

app.post('/crecheregister',function(req ,res){
    Creche.find({ email : req.body.email}).then((cre) => {
        if (cre.length < 1) {
            return res.status(401).json({message: "Auth failed"});
        }
        var c = cre[0];
        c.name = req.body.name;
        c.address = req.body.address;
        c.mobile = req.body.mobile;
        c.cname = req.body.cname;
        c.aadhar = req.body.aadhar;
        c.description = req.body.description;        
        c.save();
    })    
});

app.post('/login',function(req,res){
    if(req.body.radio == 'Government'){
        Government.findOne({email:req.body.email},function(err,r){
            if(err) return console.log("Error : ",err);
            else if(r){
                bcrypt.compare(req.body.password,r.password,function(error,result){
                    if(error) console.log("Error : ",error);
                    else if(result) return res.json({"result":true});
                    else return res.json({"result":false});
                });
            }
        });
    }
    else if(req.body.radio == 'Creche'){
        Creche.findOne({email:req.body.email},function(err,r){
            if(err) console.log("Error : ",err);
            else if(r){
                bcrypt.compare(req.body.password,r.password,function(error,result){
                    if(error) console.log("Error : ",error);
                    else if(result) return res.json({"result":true});
                    else return res.json({"result":false});
                });
            }
        });
    }
    else{
        Parent.findOne({email:req.body.email},function(err,r){
            if(err) console.log("Error : ",err);
            else if(r){
                bcrypt.compare(req.body.password,r.password,function(error,result){
                    if(error) console.log("Error : ",error);
                    else if(result) return res.json({"result":true});
                    else return res.json({"result":false});
                });
            }
        });
    }
});

app.listen(3000,(err, res) => {
    if(err) return console.log("Unable to set up server",err);
    else console.log("Server is up on port 3000");
});
