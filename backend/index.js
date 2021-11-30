const express = require('express'); 
const app = express(); 

app.get("/", (request, response) => {
    response.send('ok')
})

app.listen(3001, ()=>{
    console.log('Server on port 3001');
})

console.log('hello');