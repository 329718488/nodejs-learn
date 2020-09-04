const template=require("art-template");
template.defaults.root="./"
const linkdb =require("./linkdb");
const querystring = require("querystring");

exports.getone=(id)=>{
    return new Promise((resolve,reject)=>{
        linkdb.getone(id).then((res)=>{
            resolve(res)
        })
    })
}
exports.getHtml=(req,res)=>{ 
        linkdb.getPerson().then(data=>{
            const content =template("./content.html",{data:data})
            res.end(content)
        })
    
}
exports.getPostValue=(req,res)=>{ 
        let str = "";
    req.on("data", (chip) => {
      str += chip;
    });
    req.on("end", () => {
      res.setHeader("content-type", "text/html;charset=utf-8");
      res.end(JSON.stringify(querystring.parse(str)));
    });
   
}
exports.insertOne=(req,res)=>{ 
    linkdb.insertOne().then(data=>{
        const content =template("./content.html",{data:data})
        res.end(content)
    })

}



