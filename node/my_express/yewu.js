// const template=require("art-template");
// template.defaults.root="./"
const linkdb =require("./linkdb");
const querystring = require("querystring");
const formidable=require("formidable")
const fs= require("fs")

exports.getone=(id)=>{
    return new Promise((resolve,reject)=>{
        linkdb.getone(id).then((res)=>{
            resolve(res)
        })
    })
}
exports.getHtml=(req,res)=>{ 
    if(!req.session.session_data){
        const backstr="<script>window.location.href='/login'</script>"
        res.setHeader("Content-type","text/html;charset=utf-8");
        res.send(backstr)
        return;
    }
        linkdb.getPerson().then(data=>{
            // const content =template("./content.html",{data:data})
            // res.end(content)
             res.render("./content.html",{data})
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
exports.upload=(req,res)=>{ 
    // let str=""
    // req.on("data", (chip) => {
    //     str += chip;
    //   });
    //   req.on("end", () => {
    //       console.log(str);
    //     // res.setHeader("content-type", "text/html;charset=utf-8");
    //     // res.end(JSON.stringify(querystring.parse(str)));
    //   });


    const form = formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        //@fields   文件以外的表单数据
        //@files   上传成功的文件
        
        linkdb.updateOne(fields).then(res_update=>{
            fs.rename(files.file.path,`./public/${files.file.name}`,(err)=>{
                res.end(JSON.stringify({err_code:0}))
            })
        })
        

    })


}
exports.login=(req,res)=>{ 
//     let str = "";
// req.on("data", (chip) => {
//   str += chip;
// });
// req.on("end", () => {
//     //假设已经允许登录，接下来要写cookie或者session
//     const userInfo=querystring.parse(str)
//     req.session.session_data=userInfo
//   res.setHeader("content-type", "text/html;charset=utf-8");
//   res.render("./content.html")
// });

const form=new formidable.IncomingForm()
form.parse(req,(err,fields)=>{
    if(fields.name==="哈哈哈哈"&&fields.contents==="11111"){
        req.session.session_data=fields;
        const backstr="<script>alert('成功!');window.location.href='/'</script>"
        res.setHeader("Content-type","text/html;charset=utf-8");
        res.send(backstr)
    }else{
        res.send(JSON.stringify(fields))
    }
})

}
exports.getLoginHtml=(req,res)=>{
    res.render("./login.html")
}



