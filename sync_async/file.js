
const fs=require("fs");
// blocking operations
console.log("1");
const result=fs.readFileSync("architecture.txt","utf-8");
console.log(result);
console.log('2');


//non  blocking operations

console.log("\n3");
fs.readFile("architecture.txt","utf-8",(err,result)=>{
    console.log(result);
});
console.log("\n4");

//sync allow us to wait for the result 

