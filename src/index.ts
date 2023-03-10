import express from 'express';

const app = express();
app.use(express.json());

const produtos = [];


app.get("/",(request, response)=> {
    return response.
    status(200).
    json({massage: "Lista de produtos",
        data: produtos

});
});

app.post("/", (request, response)=>{
    const produto = request.body;
    produtos.push(produto)
    return response.
    status(201).
    json({
        message:"Produto cadastrado!",
        data: produto
    });


});


app.listen(3000, ()=> {
    console.log("testestsetsetsetsete");
   
});

