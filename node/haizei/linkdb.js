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



