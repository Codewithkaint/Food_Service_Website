var mongoose = require("mongoose");
const customerSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true

    },
    number:{
        type:Number,
        required:true,
        unique:true



    },
    order:{
        type:String,
        required:true

    },
    address:{
        type:String,
        required:true
    }
})
const Register=new mongoose.model("Order",customerSchema);
module.exports=Register