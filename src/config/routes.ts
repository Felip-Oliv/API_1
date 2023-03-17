import { ProdutoController } from './../controllers/produto.controler';
import { Router } from "express";

const router: Router = Router();
//Rotas do modelo de produto
router.get("/", new ProdutoController().list);
router.get("/nome:", new ProdutoController().find);
router.post("/", new ProdutoController().create);
router.delete("/", new ProdutoController().delete);
router.put("/", new ProdutoController().update);

export {router};