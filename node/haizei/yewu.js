const template=require("art-template");
template.defaults.root="./"
const linkdb =require("./linkdb")

linkdb.getPerson().then(data=>{
    module.exports.data=template("./content.html",{data:data})

})



