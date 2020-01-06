const connection = require ("./model")
const express = require("express")
const app = express();
const path = require("path")
const expressHandlebars = require("express-handlebars")
const bodyParser= require("body-parser")

const courseController = require("./controllers/Course")
app.use(bodyParser.urlencoded({
    extended : true
}));

app.set('views', path.join(__dirname,"/views/"))
app.engine("hbs", expressHandlebars({
    extname:"hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname+"/views/layouts"

}));

app.set("view engine", "hbs")

app.get("/",(req,res)=>{
    //res.send("<h1>Hello World</h1>")
    console.log("test")
    res.render("index",{})
})


app.use("/course", courseController);
app.listen("3000",()=>{
    console.log("Server Started at port 3000");
} )