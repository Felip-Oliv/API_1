import express from "express";

import { Produto } from "../models/produto.model";

const produtos: Produto[] = [];

export const createProduto = (req: Request, res: Response)=>{

    const { nome, preco } = req.body;
    const id = Math.random().toString(36).substring(2, 9);

    const produto: Produto = {
        id,
        nome,
        preco,

    };
    produtos.push(produto);

    res.status(201).json({massage: 'Produto registado com sucesso', produto});


};