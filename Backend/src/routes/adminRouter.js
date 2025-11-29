import { Router } from "express";
import imageUpload from "../helper/image-upload.js";
import {
  registrarAdmin,
  loginAdmin,
  logoutAdmin,
  criarProduto,
  listarProdutos,
  getProduto,
  atualizarProduto,
  deletarProduto,
} from "../controllers/adminController.js";

const router = Router();

// Autenticação
router.post("/registrar", registrarAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);


router.post("/produtos", imageUpload.single("imagem"), criarProduto);
router.get("/produtos", listarProdutos);
router.get("/produtos/:id", getProduto);
router.put("/produtos/:id", imageUpload.single("imagem"), atualizarProduto);
router.delete("/produtos/:id", deletarProduto);

export default router;
