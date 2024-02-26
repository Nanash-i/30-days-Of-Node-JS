const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());

const productSchema=new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
});
const Product=mongoose.model("Product",productSchema);

app.post("/products",async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.status(201).json(product)
    }catch(error){
        res.status(500).json({error:error.message});
        }
});


app.get('/product',async(req,res)=>{
    try{
        const product=await Product.find();
       res.json(product);
    }catch(error){
        res.status(400).json({error:error.message})
    }
})

app.get("/products/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        if(!product){
            return res.status(404).json({error:"product not found"});
        }
        res.json(product);
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
});

app.delete('/product/:id',async(req,res)=>{
    try{
        const{id}=req.params;
        const product=await Product.findByIdAndDelete(id);
        res.status(204).end();
    }catch(error){
        res.status(400).json({error:error.message})
    }
})

mongoose.connect("mongodb://127.0.0.1",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("Connected succesfully");
    app.listen(8080,()=>{
        console.log("Connected at port 8080")
    })
})
.catch(error=>{
    console.error("failed to connect")
});

