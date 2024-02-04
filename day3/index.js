const {exec}=require("child_process");

function executeCommand(command){
    exec(command,(error,stdout,stderr)=>{
        if(error){
            console.error(`Error Executing command: ${error.message}`);
        }
        if(stderr){
            console.error(`Command failed ${stderr}`)
        };

        console.log(`Command Output :\n${stdout}`);
    })
};

executeCommand('dir');
executeCommand('echo "Hello, Node.js!"');
// executeCommand('echo  "File1.txt\nFile2.txt" ');
