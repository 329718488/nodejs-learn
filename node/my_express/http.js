const express =require("express")
const router = require("./router")//导入外置路由
const cs=require("cookie-session")//操作cookie,session
const app=express()
app.engine("html",require("express-art-template"))
app.use(cs({
    name:"token",
    keys:["keys_value"]//md5加盐的盐，提高加密复杂度
}))
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