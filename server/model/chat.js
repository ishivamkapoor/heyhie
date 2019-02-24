const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Chat=new Schema({
    message:{
        type:{type:String,trim:true},
        data:{type:String,trim:true},
        sentDateTime:{type:String,trim:true},
        deliveryDateTime:{type:String,trim:true},
        readDateTime:{type:String,trim:true}
    },
    senderId:{type:String,trim:true},
    receiverId:{type:String,trim:true}
});

module.exports=mongoose.model('Chat', Chat);