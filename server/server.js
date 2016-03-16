/**
 * Created by Mohammad Owais on 1/30/2016.
 */
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser")

//var rou = require ("route");
var Firebase = require('firebase');

var ref = new Firebase("https://salemanapp.firebaseio.com");


app.use(express.static(__dirname + "/AdminWeb"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/AdminWeb/index.html");

});

app.post('/signUp', function (req, res) {
    console.log(req.body)
    ref.createUser({
        email: req.body.email,
        password: req.body.password
    }, function (error, userData) {
        if (error) {
            console.log("Error creating user:", error);
            res.json({status: false, message: error})
        } else {
            req.body.uid = userData.uid;
            ref.child("users").push(req.body)
            console.log("Successfully created user account with uid:", userData.uid);
            res.json({status: true, data: userData})
        }
    });
});
    app.post('/login', function (req, res) {

        ref.authWithPassword({
            "email": req.body.email, //clint sy jo bhi value di hoti ha wo yahan aati ha....user email
            "password": req.body.email  //clint sy jo  bhi  value hoti ha wo yahan aati ha..user pasword
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });


    })


    app.listen(9000, function () {
        console.log("hellow world")
        })
