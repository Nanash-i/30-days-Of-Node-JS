// console.log("day 1 challenge");
// function sayNamaste(){
//     console.log("Namaste");
// }
// sayNamaste()
//console.log(global);


const fs=require('fs');

function readFileContent(filePath){
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            console.error("Error reading file: ${err.message}");
        }
        else{
            
            console.log(data);
        }
    });
}

readFileContent('file1.txt');
readFileContent('empty-file.txt');










