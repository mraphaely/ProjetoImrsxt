import Produto from "../models/produtoModel.js";
import Pedido from "../models/usuarioModel.js";
import { z } from "zod";

// ===== VALIDATION =====
const createSchema = z.object({
    nome: z.string(),
    categoria: z.string(),
    preco: z.string(),
    estoque: z.string(),
    descricao: z.string().optional(),
    disponibilidade: z.enum(["Disponível", "Indisponível"])
});

const idSchema = z.object({
    id: z.string().uuid()
});

export const create = async (req, res) => {
    const validated = createSchema.safeParse(req.body);

    if (!validated.success) {
        return res.status(400).json(validated.error);
    }

    const data = validated.data;

    let imagem = null;
    if (req.file) imagem = req.file.filename;

    try {
        const novoProduto = await Produto.create({
            ...data,
            preco: Number(data.preco),
            estoque: Number(data.estoque),
            imagem
        });

        res.status(201).json({
            message: "Produto criado com sucesso!",
            produto: novoProduto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao criar produto" });
    }
};

export const getProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();

        const produtosFormatados = produtos.map(p => ({
            ...p.dataValues,
            imagem_url: p.imagem ? `http://localhost:3333/images/${p.imagem}` : null
        }));

        res.status(200).json(produtosFormatados);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produtos" });
    }
};

export const getProduto = async (req, res) => {
    const validated = idSchema.safeParse(req.params);

    if (!validated.success) return res.status(400).json(validated.error);

    try {
        const produto = await Produto.findByPk(validated.data.id);

        if (!produto) return res.status(404).json({ message: "Produto não encontrado" });

        res.json(produto);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produto" });
    }
};

export const updateProduto = async (req, res) => {
    const validId = idSchema.safeParse(req.params);
    if (!validId.success) return res.status(400).json(validId.error);

    try {
        const produto = await Produto.findByPk(validId.data.id);
        if (!produto) return res.status(404).json({ message: "Produto não encontrado" });

        const data = req.body;

        if (req.file) data.imagem = req.file.filename;

        await produto.update(data);

        res.json({ message: "Produto atualizado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar produto" });
    }
};

export const deleteProduto = async (req, res) => {
    const validId = idSchema.safeParse(req.params);

    if (!validId.success) return res.status(400).json(validId.error);

    try {
        const deleted = await Produto.destroy({ where: { id: validId.data.id } });

        if (deleted === 0) return res.status(404).json({ message: "Produto não encontrado" });

        res.json({ message: "Produto deletado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar produto" });
    }
};


export const atualizarStatusEntrega = async (req, res) => {
  const { id } = req.params;
  const { statusEntrega } = req.body;

  try {
    const pedido = await Pedido.findByPk(id);

    if (!pedido) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    pedido.statusEntrega = statusEntrega;
    await pedido.save();

    res.json({ message: "Status atualizado com sucesso", pedido });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro ao atualizar status de entrega" });
  }
};
