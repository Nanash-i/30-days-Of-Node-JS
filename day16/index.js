const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=8080;

app.use(express.json());
const mongoDBConnectionString=process.env.MONGODB_URL;

const connectToMongoDB=async()=>{
    try{
        await mongoose.connect(mongoDBConnectionString);
        console.log("Successfully connected to MongoDB!");
    }catch(error){
        console.error("Error Connceting to MongoDB:",error)
    }
};

app.get("/",(req,res)=>{
    const message="DAY 16 SOLUTION";
    res.send(message);
})
app.listen(port,()=>{
    console.log(`Server listening at port ${port}`)
})