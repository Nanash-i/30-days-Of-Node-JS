const express=require("express");
const cachingMiddleware=require("./cacheMiddleware");
const app=express();

app.use(cachingMiddleware);

app.get("/cacheRequest",(req,res)=>{
    const response="This is day14 solution"
    res.locals.cacheResponse(response,Date.now()*(60000))
    res.send(response)
})

const port=8080;
app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})
