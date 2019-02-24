const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Session=new Schema({
   // _id:{type: mongoose.Schema.ObjectId, ref:'Session'},
    userId:{type:mongoose.Schema.ObjectId,ref:'User'},
    startTime:{type:Date,default:  Date.now()},
    lastActive:{type:Date,default: Date.now()},
    token:{type:String},
    playerId:{type:String,trim:true},
    deviceId:{type:String,trim:true},
    logedOut:{type:Boolean}
});
module.exports=mongoose.model('Session', Session);
