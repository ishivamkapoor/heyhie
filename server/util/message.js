module.exports={
    returnTrue:(msg)=>{
        let obj={
            status:true,
            message:msg
        }
        return obj;
    },
    returnFalse:(msg)=>{
        let obj={
            status:false,
            message:msg
        }
        return obj;
    }
}