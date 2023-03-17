import { Produto } from './../models/produto.model';
import { Request, Response } from "express";
const produtos : Produto[]  = []
export class ProdutoController{

    list(request: Request, response: Response){
        //Aqui vamos implementar a funcionalidade 
        //Listagem de produtos
        return response.
        status(200).
        json({
            message: "ok",
            data: produtos,
        });
        console.log("Listagem de produtos!");

    }

    find(request: Request, response: Response){
        //Aqui vamos implementar a funcionalidade 
        //Busca de produtos
        const {nome} = request.params;
       const produto :  Produto = produtos.find(p => p.nome == nome)!;
        return response.status(200).json({
            massage: "OK",
            data: produto,
        });
    }

    create(request: Request, response: Response){
        //Aqui vamos implementar a funcionalidade 
        //Criar de produtos
        const produto = request.body;
        produtos.push(produto);
        return response.
            status(201).
            json({
                message: "Produto cadastrado!",
                data: produto
            });}


    delete(){
        //Aqui vamos implementar a funcionalidade 
        //Deletar de produtos

        console.log("Deletar de produtos!");

    }
    update(){
        //Aqui vamos implementar a funcionalidade 
        //Atualizar de produtos
        console.log("Atualizar de produtos!");

    }


};