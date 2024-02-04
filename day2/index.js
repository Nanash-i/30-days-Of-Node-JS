
const fs=require("fs");

function writeToFile(filepath,content){
    fs.writeFile(filepath,content,err=>{
      if(err){
        console.error('Error writing file:',err.message);
      }
      else{
        console.log('Data written to',filepath);
      }
    });
}

writeToFile('output.txt','sample content');
writeToFile('nonexistent-folder/output.txt', 'Content in a non-existent folder.');