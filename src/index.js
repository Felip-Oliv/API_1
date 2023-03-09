const { json } = require('body-parser');
const express = require('express');

const app = express();

app.get("/",(request, response)=> {
    return response.status(200).json({massage: "ok"});
});

app.post("/", (request, response)=>{
    return response.status(201).json({message:"ok"});


});


app.listen(3000, ()=> {
    console.log("testestsetsetsetsete");
   
});

