const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/node_ex",{ useNewUrlParser: true },(err)=>{
    if(!err){
        console.log("Connection Success");
    }
    else{

        console.log("Connection Failed : "+err);
    }
})

const Course = require("./course.model")