
//default thread pool size is 4 
//if i have 12 core cpu then maximum thread i can have is 12


const os=require("os");

console.log(os.cpus().length);