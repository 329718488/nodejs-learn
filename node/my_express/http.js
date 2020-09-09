const express =require("express")
const yewu =require ("./yewu")
const router = require("./router")//导入外置路由
const app=express()
app.engine("html",require("express-art-template"))
app.use(router)//引用外置路由
app.use(express.static("public"))
const port =8080
//内置路由  app.method(url,callback)
// app.get("/",(req,res)=>{
//     yewu.getHtml().then(content=>{
//         res.send(content)
//     })
// }) 

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})