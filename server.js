var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');


var schema = buildSchema(`

    type Query {
        table(id: Int!) : Table 
    },
    
    type Table{
        id : Int
        name : String
        post : String
        country : String
        contact : String
    }
`);


var tableData = [
  {
    id: 1,  
    name: "proteeti",
    post: "jse",
    country: "Bangladesh",
    contact: "01717987150"
  },
  {
    id: 2,
    name: "aaa",
    post: "jse",
    country: "bd",
    contact: "000"
  },
  {
    id: 3,
    name: "abul",
    post: "jse",
    country: "spain",
    contact: "1818"
  }
]




var getTable = function(args) { 
    var id = args.id;
    return tableData.filter(table => {
        return table.id == id;
    })[0];
}


var root = {
    course: getTable,
    
};

var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
