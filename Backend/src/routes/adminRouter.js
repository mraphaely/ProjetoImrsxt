import { Router } from "express";
import { registrarAdmin, loginAdmin, logoutAdmin } from "../controllers/adminController.js";

const router = Router();

// Autenticação
router.post("/registrar", registrarAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);


export default router;
