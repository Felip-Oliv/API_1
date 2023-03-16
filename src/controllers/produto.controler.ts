import { Request, Response } from "express";
import {Produto} from "../models/produto.model";

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

    find(){
        //Aqui vamos implementar a funcionalidade 
        //Busca de produtos
        console.log("Procurar de produtos!");

    }

    create(){
        //Aqui vamos implementar a funcionalidade 
        //Criar de produtos
        console.log("Criar de produtos!");


    }
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