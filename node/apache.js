const http =require("http")
const fs=require("fs")
const server = http.createServer()
const moment =require("moment")
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
     }
    // else if(url==="/file_list"){
    //     fs.readdir("./","utf-8",function(err,data){
    //         // fs.stat(data[0],(err,data_info)=>{
    //         //     console.log(data_info)
    //         // })
    //         const files=[]
    //        for(var i=0;i<data.length;i++){
    //           ( (index)=>{
    //             fs.stat(data[i],(err,data_info)=>{
    //                 files.push({
    //                     url:data[index],
    //                     size:data_info.size,
    //                     mtime:moment(data_info.mtime).format("YYYY-MM-DD HH:MM:SS"),
    //                     isFile:data_info.isFile(),
    //                     data_info:data_info
    //                 })
    //                 if(files.length===data.length){
    //                     res.end(JSON.stringify(files))
    //                 }
    //         })
    //            })(i)
                
    //        }
                
            

    //         //res.end(JSON.stringify(data))
    //     })
    // }else{
    //     //静态资源
    //     fs.readFile(`.${url}`,(err,data)=>{

    //         res.end(data)
    //     })

    // }
    
    
})



server.listen(8080,()=>{
    console.log("请访问 127.0.0.1:8080")
}) //0-65535