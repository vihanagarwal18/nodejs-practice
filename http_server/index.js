//npm start to run this script


const http=require("http");
const fs=require("fs");
const myserver=http.createServer( (req,res)=>{
    // console.log("new request recieved");
    console.log(req.headers);
    // console.log(req);
    res.end("hello from the server");
});
//first argument is request in which all the info of the request is there like ip address of client,what he wants etc
//second argument is result which is response which we would send to the client


//we make handler which will handle all the incoming request

//we need a port to run the server

myserver.listen(8000,()=>{
    console.log("server started succesfully");
    //we are running this server on 8000 port
});

//to check server go to http://localhost:8000/


const fileserver=http.createServer((req,res) => {
    const log= `${Date.now()}:  ${req.url} New Request recieved on file server\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/':
                res.end("this is home page");
                break;
            case '/hellovihan':
                res.end("say hello to vihan");
                break;
            default:
                res.end("404 not found this is random error");
        }
        console.log("hello from the file server");
    });
    // res.end("file server ki taraf se hello");
});
fileserver.listen(8001,()=>{
    console.log("file server started succesfully");
});

//to check server go to http://localhost:8001/hellovihan or http://localhost:8001/