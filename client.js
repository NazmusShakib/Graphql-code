const fetch =require('isomorphic-fetch');
var query = 'query{  allMytables{    nodes{      name       post      country      contact    }  }}';

fetch('http://localhost:3000/graphql', {
method: 'POST',
headers: { 'Content-Type': 'application/graphql' },
body: query,
})
.then(res => res.json())
.then(res => res.data.allMytables.nodes.forEach(console.log));
