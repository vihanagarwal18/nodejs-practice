const fs=require("fs");


//synchronous call 
// fs.writeFileSync("./test.txt","hellllloooooo");  //for creating a file


// //asynchrnous call
// fs.writeFile("./test.txt","hellllloooooo",(err) =>{});

// const result=fs.readFileSync("./contacts.txt","utf-8"); 
// console.log(result);
//utf-8 is encoding which we are using there are several types of encoding 


//while using asynchronous we need a call back function also as this dont return any value like synchronous function 
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error :",err);
//     }
//     else{
//         console.log(result);
//     }
// });

//write file sync function use to overwrite the values what if i want to end it in new line
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt",`${Date.now()} Hey there`);
//this help us to log everything in the server

//to copy a file
fs.cpSync("./test.txt","./copy.txt");

//to delete a file
// fs.unlinkSync("./copy.txt");

//to get stats of a file
console.log(fs.statSync("./test.txt"));
console.log(fs.statSync("./test.txt").isFile()); //there are several functions as well


//to make a directory
fs.mkdirSync('my-docs');

fs.mkdirSync('my-docsss/a/b',{recursive:true}); //to make multiple directory


