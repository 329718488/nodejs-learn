const fs=require("fs")
fs.readdir("./","utf-8",function(err,data){
    console.log(err)
    console.log(data)
})