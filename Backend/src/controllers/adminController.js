import Admin from "../models/adminModel.js";
import Produto from "../models/produtoModel.js";
import { z } from "zod";
import jwt from "jsonwebtoken";

// Validação
const loginSchema = z.object({
  usuario: z.string(),
  senha: z.string(),
});


export const registrarAdmin = async (req, res) => {
  try {
    const { cpf, usuario, senha } = req.body;

    if (!cpf || !usuario || !senha) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    const jaExiste = await Admin.findOne({ where: { usuario } });
    if (jaExiste) {
      return res.status(400).json({ message: "Usuário já existe." });
    }

    const admin = await Admin.create({ cpf, usuario, senha });
    return res.status(201).json({ message: "Administrador cadastrado com sucesso!", admin });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao registrar administrador." });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const valida = loginSchema.safeParse(req.body);
    if (!valida.success) {
      return res.status(400).json(valida.error);
    }

    const { usuario, senha } = valida.data;
    const admin = await Admin.findOne({ where: { usuario } });

    if (!admin || admin.senha !== senha) {
      return res.status(401).json({ message: "Usuário ou senha incorretos." });
    }

    const token = jwt.sign(
      { id: admin.id, usuario: admin.usuario },
      "chave-secreta-admin",
      { expiresIn: "4h" }
    );

    return res.status(200).json({ message: "Login realizado com sucesso!", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao fazer login." });
  }
};

export const logoutAdmin = async (req, res) => {
  return res.status(200).json({ message: "Logout realizado com sucesso." });
};
