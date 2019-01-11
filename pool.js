// console.log("Hello World");


// async function start(){
// var pg = require('pg');
// var conString = "postgres://test:1234@localhost:5432/mydatabase";
// 
// var client = new pg.Client(conString);
// 
// await client.connect();
// var res = await client.query("SELECT * FROM mytable");
// res.rows.forEach(row=>{
//     console.log(row);
//     
// });
// 
// await client.end();
// 
// 
// }
// 
// start();
// 



// var http = require("http");
// 
// http.createServer(function (request, response) {
// 
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    
// 
//    response.end('Hello World');
//    
// }).listen(9000);
// 
// 
// console.log('running');



const pg        = require('pg');
const express   = require('express');
const app       = express();

 
const config = {
    user: 'test',
    database: 'mydatabase',
    password: '1234',
    port: 5432
};

const pool = new pg.Pool(config);
 
app.get('/', (req, res, next) => {
    pool.connect(function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query("SELECT * FROM mytable",function(err,result) {
           done(); 
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
       });
    });
});
 
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
