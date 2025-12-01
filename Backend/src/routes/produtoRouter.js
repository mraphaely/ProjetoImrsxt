import { Router } from "express";
import { create, getProdutos, getProduto, updateProduto, deleteProduto } from "../controllers/produtoController.js";
import imageUpload from "../helper/image-upload.js";

const router = Router();


router.get('/listar', getProdutos);  // Listar todos com paginação
router.post('/criar', imageUpload.single('imagem'), create);  
router.get('/:id', getProduto);  // Buscar por ID
router.put('/:id', imageUpload.single('imagem'), updateProduto); 
router.delete('/:id', deleteProduto); 

export default router;


