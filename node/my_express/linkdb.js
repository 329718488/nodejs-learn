const mysql=require("mysql")
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345678",
    database:"node_learn"
})
connection.connect();

exports.getPerson=()=>{
    return new Promise((resolve,reject)=>{
        const sql=`select * from person`
        connection.query(sql,(err,data)=>{
            resolve(data)
        })
    })
}
exports.endConnetion=()=>{
    connection.end()
}

exports.getone=(id)=>{
    return new Promise((resolve,reject)=>{
        const sql=`select * from person where id=${id}`
        connection.query(sql,(err,data)=>{
            resolve(data)
        })
    })
}
exports.insertOne=()=>{
    return new Promise((resolve,reject)=>{
        const sql=`insert into person (name,age,skill,sex) values("老赵",56,"老赵的技能","男")`
        connection.query(sql,(err,data)=>{
            console.log(err);
            resolve(data)
        })
    })
}



