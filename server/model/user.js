const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User=new Schema({
    userName:{type:String,trim:true},
    phoneNo:{type:String,trim:true},
    password:{type:String,trim:true},
    profilePhoto:{type:String,trim:true},
    isOnline:{type:Boolean}
});

module.exports=mongoose.model('User', User);