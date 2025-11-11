import Produto from "../models/produtoModel.js";
import { z } from "zod";

// ✅ Esquema de validação para criar produto
const createSchema = z.object({
    nome: z.string({
        invalid_type_error: "O nome do produto deve ser um texto",
        required_error: "Nome é obrigatório"
    }),
    categoria: z.string({
        invalid_type_error: "A categoria deve ser um texto",
        required_error: "Categoria é obrigatória"
    }),
    preco: z.number({
        invalid_type_error: "O preço deve ser um número",
        required_error: "Preço é obrigatório"
    }).positive("O preço deve ser maior que zero"),
    estoque: z.number({
        invalid_type_error: "O estoque deve ser um número",
        required_error: "Estoque é obrigatório"
    }).int().nonnegative("O estoque não pode ser negativo"),
    descricao: z.string().optional(),
    disponibilidade: z.enum(["Disponível", "Indisponível"], {
        required_error: "Disponibilidade é obrigatória",
        invalid_type_error: "Disponibilidade deve ser 'Disponível' ou 'Indisponível'"
    })
});

// ✅ Validação de ID
const idSchema = z.object({
    id: z.string().uuid({ message: "ID inválido" })
});

// ✅ Schema de atualização (igual ao de criação, mas campos opcionais)
const updateSchema = createSchema.partial();

// ✅ POST -> criar produto
export const create = async (request, response) => {
    const createValidation = createSchema.safeParse(request.body);
    if (!createValidation.success) {
        return response.status(400).json(createValidation.error);
    }

    const { nome, categoria, preco, estoque, descricao, disponibilidade } = createValidation.data;

    let imagem = null;
    if (request.file) {
        imagem = request.file.filename;
    }

    const novoProduto = { nome, categoria, preco, estoque, descricao, disponibilidade, imagem };

    try {
        const addProduto = await Produto.create(novoProduto);
        response.status(201).json({ message: "Produto criado com sucesso!", addProduto });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erro ao criar produto" });
    }
};

// ✅ GET -> listar produtos com paginação
export const getProdutos = async (request, response) => {
    const page = parseInt(request.query.page) || 1;
    const limit = parseInt(request.query.limit) || 10;
    const offset = (page - 1) * limit;

    try {
        const produtos = await Produto.findAndCountAll({ limit, offset });

        const totalPages = Math.ceil(produtos.count / limit);

        response.status(200).json({
            totalProdutos: produtos.count,
            totalPages,
            paginaAtual: page,
            itensPorPagina: limit,
            proximaPagina: totalPages > page ? `http://localhost:3333/produtos?page=${page + 1}` : null,
            produtos: produtos.rows
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erro ao buscar produtos" });
    }
};

// ✅ GET -> buscar produto por ID
export const getProduto = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params);
    if (!idValidation.success) {
        return response.status(400).json({ message: idValidation.error });
    }

    const id = idValidation.data.id;

    try {
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return response.status(404).json({ message: "Produto não encontrado" });
        }

        response.status(200).json(produto);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erro ao buscar produto" });
    }
};

// ✅ PUT -> atualizar produto
export const updateProduto = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params);
    if (!idValidation.success) {
        return response.status(400).json({ message: idValidation.error });
    }

    const id = idValidation.data.id;
    const updateValidation = updateSchema.safeParse(request.body);

    if (!updateValidation.success) {
        return response.status(400).json(updateValidation.error);
    }

    const produtoAtualizado = updateValidation.data;

    if (request.file) {
        produtoAtualizado.imagem = request.file.filename;
    }

    try {
        const [numAffectedRows] = await Produto.update(produtoAtualizado, { where: { id } });

        if (numAffectedRows <= 0) {
            return response.status(404).json({ message: "Produto não encontrado" });
        }

        response.status(200).json({ message: "Produto atualizado com sucesso!" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erro ao atualizar produto" });
    }
};

// ✅ DELETE -> deletar produto
export const deleteProduto = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params);
    if (!idValidation.success) {
        return response.status(400).json({ message: idValidation.error });
    }

    const id = idValidation.data.id;

    try {
        const produtoDeletado = await Produto.destroy({ where: { id } });

        if (produtoDeletado === 0) {
            return response.status(404).json({ message: "Produto não encontrado" });
        }

        response.status(200).json({ message: "Produto deletado com sucesso!" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erro ao deletar produto" });
    }
};
