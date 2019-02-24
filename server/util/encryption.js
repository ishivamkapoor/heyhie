const crypto = require('crypto');

const secret="meanAcc";

module.exports={
    encrypt:(data)=>{
        const cipher = crypto.createCipher('aes192', 'a password');

        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');

        return encrypted;
    },
    decrypt:(data)=>{
        var mykey = crypto.createDecipher('aes-128-cbc', secret);
        var mystr = mykey.update(data, 'hex', 'utf8');
        //mystr += mykey.update.final('utf8');

        return mystr;
    },
    token:()=>{
        var data=new Date().toISOString();
        const cipher = crypto.createCipher('aes192', 'a password');

        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');

        return encrypted;

    }
}