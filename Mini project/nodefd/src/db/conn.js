var mongoose = require("mongoose");
// var validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/newColl');
var db = mongoose.connection;
db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database Finally...."));