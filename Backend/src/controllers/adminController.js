import Admin from "../models/adminModel.js";
import Produto from "../models/produtoModel.js";
import { z } from "zod";
import jwt from "jsonwebtoken";

// Validação de login
const loginSchema = z.object({
  usuario: z.string(),
  senha: z.string(),
});


//LOGIN / LOGOUT
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

 
//CRUD
export const criarProduto = async (req, res) => {
  try {
    const { nome, descricao, preco, disponibilidade } = req.body;
    const imagem = req.file ? req.file.filename : null;

    if (!nome || !descricao || !preco || disponibilidade === undefined) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    const produto = await Produto.create({
      nome,
      descricao,
      preco,
      disponibilidade,
      imagem,
    });

    return res.status(201).json({ message: "Produto criado com sucesso!", produto });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao criar produto." });
  }
};


export const listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll({ order: [["createdAt", "DESC"]] });
    return res.status(200).json(produtos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao listar produtos." });
  }
};


export const getProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    return res.status(200).json(produto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao buscar produto." });
  }
};


export const atualizarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    const { nome, descricao, preco, disponibilidade } = req.body;
    const imagem = req.file ? req.file.filename : produto.imagem;

    await produto.update({ nome, descricao, preco, disponibilidade, imagem });

    return res.status(200).json({ message: "Produto atualizado com sucesso!", produto });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao atualizar produto." });
  }
};


export const deletarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    await produto.destroy();
    return res.status(200).json({ message: "Produto deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao deletar produto." });
  }
};
