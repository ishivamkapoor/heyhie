
module.exports=(app)=>{
    require("./user");
    require("./session");
    require("./chat");
    return app;
}