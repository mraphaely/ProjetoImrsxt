import { Router } from "express";
import {
  getCardapio,
  finalizarCompra,
  getHistoricoPedidos, listarPedidos
} from "../controllers/usuarioController.js";

const router = Router();

//Cardápio (lista de produtos)
router.get("/cardapio", getCardapio);

router.post("/comprar", finalizarCompra);

router.get("/historico", getHistoricoPedidos);

router.get("/", listarPedidos);

export default router;
