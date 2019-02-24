const mongoose= require("mongoose");
const Session = mongoose.model("Session");
const encryption= require("../util/encryption");
const message = require("../util/message");

module.exports={
    createSession:async(data)=>{
        let time= Date.now();
        let session=Session.findOne({userId:data.userId},(err,session)=>{
            if(session==null){
                session= new Session();
            }

            session.userId=data.userId;
            session.token=encryption.token();
            session.playerId=data.playerId;
            session.deviceId=data.deviceId;
            session.startTime=time;
            session.lastActive=time;
            session.logedOut=false;

            session.save();
            
            return session;
        });
    },
    checkSession:async(req)=>{
        let session = Session.findOne({token:req.session.token,userId:req.session.userId},(err,session)=>{
            if(session){
                console.log(session);
                if(session.logedOut){

                    resolve(message.returnFalse("You have already Logged Out Login Again"));
                }
                //console.log( Date(new Date().toISOString()).getHours());
                //var d = new Date(session.lastActive);
                //var n = d.getHours();
                console.log(Date.now());
                console.log(session.lastActive);
                console.log(Date.parse(session.lastActive));
                difference_ms=Date.now()-session.lastActive;
                difference_ms = difference_ms/1000;
                difference_ms = difference_ms/60;
                var minutes = difference_ms;
                console.log(minutes);
                if(minutes>60){
                    session.token=encryption.token();
                    session.save();
                    return (message.returnTrue(session));
                }
                session.lastActive=Date.now();
                session.save();
                return(message.returnTrue("Session Active")) ;
            }else{
                return( message.returnFalse("Please Login"));
            }
        });
    }
}