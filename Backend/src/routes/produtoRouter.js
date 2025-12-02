import { Router } from "express";
import { create, getProdutos, getProduto, updateProduto, deleteProduto, atualizarStatusEntrega } from "../controllers/produtoController.js";
import imageUpload from "../helper/image-upload.js";

const router = Router();

router.get("/", getProdutos);
router.post("/", imageUpload.single("imagem"), create);
router.get("/:id", getProduto);
router.put("/:id", imageUpload.single("imagem"), updateProduto);
router.delete("/:id", deleteProduto);
router.put("/:id/statusEntrega", atualizarStatusEntrega);

export default router;
