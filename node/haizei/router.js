const yewu = require("./yewu");
const fs = require("fs");
const urlobj=require("url")

module.exports.bind = (server) => {
  server.on("request", (req, res) => {
    const method = req.method;
    const urls=urlobj.parse(req.url,true)
    if (method === "GET") {
      if (urls.pathname === "/") {
        res.end(yewu.data);
      } else if (urls.pathname==="/getone" ) {
        res.setHeader("content-type","text/html;charset=utf-8")
          yewu.getone(urls.query.id).then(onedata=>{
            res.end(JSON.stringify(onedata));
          })
        
        
      } else {
        //接受静态资源
        fs.readFile("." + urls.pathname, (err, data) => {
          res.end(data);
        });
      }
    } else if (method === "POST") {
      res.end("POST");
    } else {
      res.end("不支持的请求...");
    }
  });
};
