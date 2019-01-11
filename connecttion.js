const express = require("express");

const { postgraphile } = require("postgraphile");

const app = express();




const postgresConfig = {
  user: 'postgres',
  password:  'postgres',
  host: 'localhost',
  port: '5432',
  database: 'mydatabase'
};




app.use(
  postgraphile(postgresConfig, 'public', {      
    graphiql: true,
    watchPg: true,
  })
);
app.listen(3000);
console.log('Im listening at',3000);

