const express=require("express");
const app=express();
const port=8080;

app.use((req,res,next)=>{
    const timeStamp=new Date().toISOString();
    console.log(`Timestamp:[${timeStamp}],Method:[${req.method}] ,URL:[${req.url}]`)
    console.log(`Header:[${req.headers}],Body:[${req.body}]`)
    next();
})

app.get('/',(req,res)=>{
    res.send("Day15 Solution")
})

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`)
})