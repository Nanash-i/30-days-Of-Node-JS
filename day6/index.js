const express=require('express');
const app=express();

app.get("/greet",greetHandler);

const port=process.env.PORT||3000

app.listen(port,()=>console.log(`port is running in ${port}`));

function greetHandler(req,res){
    const name =req.query.name;
    const greeting =name ?`Hello ,${name}`:`Hello,guest!`;

    res.send(greeting);
}