
if(document.getElementById("upload-input")){
    document.getElementById("upload-input").addEventListener("change",fileChange)
}

if(document.getElementById("login")){
    document.getElementById("login").addEventListener("click",login)
}


function fileChange(e){
    console.log(e.target.value);
    var xhr=new XMLHttpRequest()
    xhr.open('POST', '/upload');
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){

        window.location.reload()
        }
    }
    const formData=new FormData()

    formData.append("file",e.target.files[0])
    formData.append("name","改过的名字");
    formData.append("age",999);
    formData.append("skill","技能没有了");
    formData.append("id",8);


    console.log(formData.entries());
    
      xhr.send(formData)
}

function insert(){
    // var xhr=new XMLHttpRequest()
    // xhr.open('POST', '/insert');
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset-UTF-8");
    // xhr.onreadystatechange=function(){
    //     // if(xhr.readyState==4&&xhr.status==200){

    //     //     const data=JSON.parse(xhr.responseText)
    //     //     data.forEach(element => {
    //     //         document.write(element.url+"---"+element.size+"---"+element.mtime+"---"+element.isFile+"<br />")
    //     //     });
    //     // }
    // }
    
    // xhr.send('name='+'哈哈哈哈'+"&contents="+11111)
}

function login(){
    var xhr=new XMLHttpRequest()
    xhr.open('POST', '/login');
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset-UTF-8");
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            // const ss=document.createElement(xhr.responseText)
            // document.append(ss)
            
        }
    }
    const form=new FormData()
    form.append("name","哈哈哈哈")
    form.append("contents","11111")
    
    xhr.send(form)
}