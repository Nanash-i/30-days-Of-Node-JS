const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1/day25",{useNewUrlParser:true,useUnifiedTopology:true});
const db=mongoose.connection;
db.on("error",console.error.bind(console,"MongoDB connection error:"));

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number
});

const Product =mongoose.model("Product",productSchema);

async function createProductNameIndex(){
    try{
        await Product.collection.createIndex({name:1});
        console.log(`Index on 'name' field created succesfully`);
    }catch(error){
        console.error("error creating index:",error);
    }
};

createProductNameIndex();

const sampleProducts=[
    {name:"Pixel 6a",price:28000,quantity:1000},
    {name:"Samsung",price:35000,quantity:3423},
    {name:"Iphone",price:100000,quantity:2312},
];

async function insertSample(){
    try{
        await Product.insertMany(sampleProducts);
        console.log("Sample products inserted suucessfully");
    }catch(error){
        console.error("error inserting sample data:",error)
    }
};

insertSample();