const express=require("express");
const app=express();
const limit=require("express-rate-limit")
const port=8080;

const limiter=limit({
  windowMs: 15*60*1000,
  max:5,
  message:"Too many requets from this IP,Try again later"
});

app.use(limiter);

app.get("/",(req,res)=>{
    res.send("This is Day12 Solution");
})

app.listen(port,()=>{
    console.log(`server is listening at port:${port}`)
})