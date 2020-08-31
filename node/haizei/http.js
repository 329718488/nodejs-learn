const http =require("http");
const router =require("./router")
const server=http.createServer();
router.bind(server)

server.listen("8080",()=>{
    console.log("访问127.0.0.1:8080");
})
