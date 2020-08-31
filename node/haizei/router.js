const yewu =require("./yewu");
const fs =require("fs");

module.exports.bind=(server)=>{
    server.on("request",(req,res)=>{
        const url =req.url
        if(url==="/"){
            res.end(yewu.data)
        }else{
            //接受静态资源
          fs.readFile("."+url,(err,data)=>{
              res.end(data)
          }) 
        }
    })
}