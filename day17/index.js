const express=require("express");
const mongoose=require("mongoose");

let isDBConnected=false;
const connectDB=async ()=>{
    if(isDBConnected){
        return;
    }
    await mongoose.connect("mongodb://127.0.0.1:27017/myDB",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    isDBConnected=true;
}

const userSchema=new mongoose.Schema({
    username:{
        type:String,required:true
    },
    email:{
        type:String,required:true
    }
});

const UserModel=mongoose.model("users",userSchema);

async function addUserToDatabase(user){
    await connectDB();
    const model=new UserModel(user);
    model.save();
}

const app=express();

app.get("/user/new",async(req,res)=>{
    try{
        const userName=req.query.userName;
        const userEmail=req.query.email;
        await addUserToDatabase({
            username:userName,
            email:userEmail,
        });
        res.send("user added");
    }
    catch(err){
        res.status(500).send("Operation failed");
    }
});

const port=8080;
app.listen(port,()=>{
    console.log(`server listening at port ${port}`)
})