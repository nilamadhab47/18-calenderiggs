const express = require('express');
const bodyParser= require("body-parser")
const mongoose =require('mongoose')
const multer = require('multer')
const route = require('./route.js');
const { AppConfig } = require('aws-sdk');
require('dotenv').config()

const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

let string =process.env.MONGODB_CONNECTION_STRING

mongoose.connect(string, { 
        useNewUrlParser: true
    }) 
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err));
 
    app.use('/', route);
 
app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on server " + (process.env.PORT || 3000))
});