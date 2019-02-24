const express= require("express");
const bodyparser = require("body-parser");
const app= express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const serverConnection=require("./server");
const modelInit = require("./server/model"); 

serverConnection();
modelInit(app);

app.use("/api",require("./server/route"));

app.listen(8000,()=>{
    console.log("Started Development Branch");
})