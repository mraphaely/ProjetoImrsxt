import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import conn from "./config/conn.js";

import Produto from "./models/produtoModel.js"; 
import Usuario from "./models/usuarioModel.js"; 
import Admin from "./models/adminModel.js"; 
import Config from "./models/configModel.js";

import produtoRouter from "./routes/produtoRouter.js";  
import usuarioRouter from "./routes/usuarioRouter.js";  
import adminRouter from "./routes/adminRouter.js";
import configRouter from "./routes/configRouter.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//3 middleswares para a api funcionar corretamente.
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Pasta estática para imagens enviadas
app.use("/images", express.static(path.join(__dirname, "images")));

//Conexão com o banco, necessário para sincronizar os arquivos models no projeto
conn
  .sync(/* { force: true } */)
  .then(() => console.log("Banco de dados conectado com sucesso!"))
  .catch((error) => console.error("Erro ao conectar o banco:", error));


app.use("/produtos", produtoRouter);   
app.use("/usuarios", usuarioRouter); 
app.use("/admin", adminRouter, produtoRouter); 
app.use("/config", configRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada." });
});

export default app;
