const fs=require("fs");

//read

// let fileContent=fs.readFileSync("f1.txt");
// console.log("content ->"+fileContent);

// //write
// fs.writeFileSync("f3.txt","this is f2")
// fs.appendFileSync("f3.txt","\nupdated data")

//delete
// fs.unlinkSync("f3.txt")

//directories
//create
// fs.mkdirSync("newDir")

//check content of dir
// let content=fs.readdirSync("E:\\30 days Of Node JS\\Node\\Node_module\\newDir")
// console.log(content);


//check dir exists
// console.log(fs.existsSync("fs.js"));

//remove dir
fs.rmdirSync("newDir")
