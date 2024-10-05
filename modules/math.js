function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
//we need to export these fucntion otherwise we wont be able to use them

// module.exports="vihan agarwal";
// module.exports=add;

module.exports={ 
    addition:add,
    subtraction:sub,
    multiply:mul
}
// we have custom names we could have done it without these custom names also
//we can only use module.export once in the file as it overwrite 



//we could also directly make export

// exports.add1=(a,b) =>a+b;
// exports.sub1=(a,b)=> a-b;
