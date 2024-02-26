function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mul(a,b){
    console.log(a*b);
}
function div(a,b){
    console.log(a/b);
}
function mod(a,b){
    if(a>0 && b>0 ){
    console.log(a%b);
    }};

module.exports={
    addition:add,
    subtraction:sub,
    Multiplication:mul,
    division:div,
    modulus:mod
}