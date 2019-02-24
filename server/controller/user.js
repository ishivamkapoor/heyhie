const mongoose= require("mongoose");
const User=mongoose.model("User");
const session= require("./session");
const message= require("../util/message");
const validations= require("../util/validation");
const encryption= require("../util/encryption");

module.exports={
    create:async(req,res)=>{
        let user=new User();
        //VALIDATE USERNAME
        if(validations.minChar(req.body.userName,8) && validations.maxChar(req.body.userName,16)){
            user.userName=req.body.userName;
        }else { res.send(message.returnFalse("Invalid Username"));return; }
        //VALIDATE PASSWORD
        if(validations.minChar(req.body.password,8) && validations.maxChar(req.body.password,16)){
            user.password=encryption.encrypt(req.body.password);
        }else { res.send(message.returnFalse("Invalid Password"));return;  }
        //VALIDATE PASSWORD
        if(validations.mobileValidate(req.body.phoneNo)){
            user.phoneNo=req.body.phoneNo;
        }else { res.send(message.returnFalse("Invalid Phone No"));return;  }
        user.save();
        res.send(message.returnTrue("User Created Successfully"));return;
    },
    login:async(req,res)=>{
        let user= User.findOne({phoneNo:req.body.phoneNo},(err,user)=>{
            if(user){
                    if(user.password == encryption.encrypt(req.body.password)){
                        let sessData= {
                            userId:user._id,
                            deviceId:req.body.deviceId,
                            playerId:req.body.playerId
                        };
                       //console.log(JSON.stringify(sessData));
                        session.createSession(sessData).then((data)=>{
                            console.log(data);
                            res.send(message.returnTrue({"token":data}));
                        });
                    }else{
                        res.send(message.returnFalse("Invalid Password"));
                    }
            }else{
                res.send(message.returnFalse("Not Registered"));
            }
        });
    }
}