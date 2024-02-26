const fig=require("figlet");

fig("Hello Nanashi",function(err,data){
    if(err){
        console.log("error");
        console.dir(err);
        return;
    }
    console.log(data);
});