const express = require("express")
const mongoose = require("mongoose")

const router = express.Router();
const courseModel = mongoose.model("Course")


router.get("/",(req,res)=>{

    res.send("Course Controller")
});


router.get("/add",(req,res)=>{
    console.log("get=========================");
    console.log(req.body);
    
    res.render("add-course");
   
});
router.post("/add",(req,res)=>{
   console.log(req.body);
    console.log("post=========================");
    var course = new courseModel();
    //course.courseName = "Nodejs";
    //course.courseId = "4";
    //course.save();
    course.courseName = req.body.courseName;
    course.courseDescription = req.body.courseDescription;
    course.courseFee = req.body.courseFee+"";
    
    course.courseId = Math.ceil(Math.random()*1000000000)+"";
    course.save((err,docs)=>{
        if(!err){
            //res.redirect("/course/list");
            res.json({message:"Successfully added record " , status:"OK", data: docs} );
        }
        else{
            res.send("Error Occured " + err );
        }
    })
    
});
router.get("/list",(req,res)=>{
    //var course = new courseModel();
    //course.courseName = "Nodejs";
    //course.courseId = "3";
    //course.save();
    courseModel.find((err,docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data : docs});
        }
        else {
            console.log(err);
            res.send("Error")
        }
    })
    
});

module.exports = router;