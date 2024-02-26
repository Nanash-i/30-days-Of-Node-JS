const express=require("express");
const path=require("path");
const port=3000;
const app=express();

app.use(express.static(path.join(__dirname)));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
});

app.get("styles/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"styles/style.css"))
});

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})