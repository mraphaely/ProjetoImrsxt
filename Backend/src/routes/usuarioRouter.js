import { Router } from "express";
import {
  getCardapio,
  finalizarCompra,
  getHistoricoPedidos,
} from "../controllers/usuarioController.js";

const router = Router();

//Cardápio (lista de produtos)
router.get("/cardapio", getCardapio);

router.post("/comprar", finalizarCompra);

router.get("/historico", getHistoricoPedidos);

export default router;
