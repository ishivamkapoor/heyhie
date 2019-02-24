const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Message=new Schema({
    messageId:{type:String,trim:true},
    type:{type:String,trim:true},
    data:{type:String,trim:true},
    sentDateTime:{type:String,trim:true},
    deliveryDateTime:{type:String,trim:true},
    readDateTime:{type:String,trim:true}
});

module.exports=mongoose.model('Message', Message);