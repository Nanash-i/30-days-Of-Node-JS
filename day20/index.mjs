import {MongoClient} from 'mongodb';
import express from 'express';

const app=express();
const mongoURL="mongodb://localhost:27017";
const dbName="Data";
const collection="users";

async function averageAgeOfUsers(req,res){
    try{
        const client =new MongoClient(mongoURL,{useUnifiedTopology:true});
        await client.connect();

        const db=client.db(dbName);
        const collection=db.collection(collectionName);
        const pipeline =[
            {
                $group:{
                    _id:null,
                    averageAge:{$avg:`$age`}
                }
            }
        ];
        const result =await collection.aggregate(pipeline).toArray();
        await client.close();
        const averageAge=result[0].averageAge;
        res.json(averageAge);
    }catch(error){
        console.log("Error:",error);
        res.status(500).json({error:'Internal Server Error'});
    }
}

app.get("/average-age",averageAgeOfUsers);
const port=8080;

app.listen(port,()=>{
    console.log(`Server is Listening at port${port}`)
})