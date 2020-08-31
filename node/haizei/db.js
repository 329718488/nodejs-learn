const mysql =require("mysql");
const { connect } = require("http2");

const connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345678",
    database:"node_learn"
})

connection.connect()
const sql =`select * from person`
connection.query(sql,(err,res,fields)=>{
    console.log(err);
    console.log("---------------");

    console.log(res);
    console.log("---------------");
    console.log(fields);
})


connection.end()