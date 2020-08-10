const http =require("http")
const fs=require("fs")
const server = http.createServer()

server.on('request',(req,res)=>{
    if(req.method==="GET"){
        console.log("GET请求");
    }else if(req.method==="POST"){
        console.log("POST请求"); 
    }
    // res.setHeader("content-type","text/html;charset=utf-8")
    console.log(req.url);
    // res.write("aaaaa")
    // res.write("1111")
    // res.write("44444")
    // res.write("这个是汉字")
    const url=req.url
    if(url==="/"){
        res.setHeader("content-type","text/html;charset=utf-8")
        fs.readFile("./content.html",(err,data)=>{
            res.end(data)
        })
    }else{
        //静态资源
        fs.readFile(`..${url}`,(err,data)=>{

            res.end(data)
        })

    }
    
    
})



server.listen(8080,()=>{
    console.log("请访问 127.0.0.1:8080")
}) //0-65535