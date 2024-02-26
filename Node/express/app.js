const express=require("express");

const app=express();

const Courses=[
    {id:1,name:"Praveen"},
    {id:2,name:"sivesh"},
    {id:3,name:"Nitish"},
]
app.get("/",(req,res)=>{
    res.send("Hello Nanashi")
})
app.get("/about",(req,res)=>{
    res.send("this is the story of nanashi")
})
app.get("/home",(req,res)=>{
    res.send("This is the achievement hall")
})

// route parameters
app.get("/Projects/:name",(req,res)=>{
    let course=Courses.find(course=>course.name=== req.params.name);
   
    if(!course)res.status(400)
    res.send(course)
})

const port=process.env.PORT||8000
app.listen(port,()=>console.log(`port is running at ${port}`))