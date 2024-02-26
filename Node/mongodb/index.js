const mongoose=require("mongoose");
const { errorMonitor } = require("ws");

mongoose.connect("mongodb://127.0.0.1/course")
.then(()=>{
    console.log("connected")
})
.catch(err=>{
    console.error("could not connect ",err)
})

const CourseSchema=new mongoose.Schema({
    name:{type:String,required:true},
    tags:{
        type:Array,validate:{
            validator:function(tags){
                return tags.length>2
            }
        }//custom validator
    },
    creator:{type:String,required:true},
    date:{type:Date,default:Date.now},
    isPublished:{type:Boolean,required:true},
    rating:{type:Number,required:function(){
        return this.isPublished
    }}
})

const Course=mongoose.model("course",CourseSchema);

async function courseCreation(name,creator,isPublished,rate ){
    const course=new Course({
    name:name,
    tags:["express","MongoDb",],
    creator:creator,
    isPublished:isPublished,
    rating:rate,
   
})
try{
    
const result =await course.save();
console.log(result);

}catch(error){
    for(Field in error.errors){
        console.log(error.errors[Field])//error validator
    }
}
}
courseCreation("Go","aniket",true,3.7);
courseCreation("Js","rishab",true,2.3);
courseCreation("Python","aravind",true,3.4);
courseCreation("java","gopal",false,4.3);

// async function getCourse(){
//  const courses=await Course.find({rating:{$in:3.7}}).select({name:1,date:1})
//  console.log(courses)
// }
// getCourse()

// async function updatecourse(){
//     const course=await Course.findByIdAndUpdate("65db1e7b4131018349b42bde")

//     if(!course)return;
//     course.name="Rust";
//     course.isPublished=false;
//    const updatedcourse= await course.save();
//    console.log(updatedcourse)
// }

// updatecourse()

// async function deletecourse(){
//     const course=await Course.findByIdAndDelete("65db1e7b4131018349b42bde");
//     console.log(course)
// }
// deletecourse();