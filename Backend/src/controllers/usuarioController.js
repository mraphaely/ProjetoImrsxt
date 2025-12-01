import Produto from "../models/produtoModel.js";
import Pedido from "../models/usuarioModel.js";
import { z } from "zod";


const compraSchema = z.object({
  nomeCliente: z.string().min(2, "O nome é obrigatório."),
  telefone: z.string().optional(), 
  itens: z.array(z.object({
    produtoId: z.string({ required_error: "Produto é obrigatório." }),
    quantidade: z.number().min(1, "A quantidade deve ser pelo menos 1."),
  })),
});


export const getCardapio = async (request, response) => {
  try {
    const produtos = await Produto.findAll({
      where: { disponibilidade: "Disponível" },
      order: [["createdAt", "DESC"]],
    });

    if (!produtos || produtos.length === 0) {
      return response.status(404).json({ message: "Nenhum produto disponível no momento." });
    }

    return response.status(200).json(produtos);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Erro ao buscar o cardápio." });
  }
};


export const finalizarCompra = async (request, response) => {
  try {
    const validation = compraSchema.safeParse(request.body);
    if (!validation.success) {
      return response.status(400).json(validation.error);
    }

    const { nomeCliente, telefone, itens } = validation.data;

    let valorTotal = 0;
    const produtosComprados = [];

    for (const item of itens) {
      const produto = await Produto.findByPk(item.produtoId);

      if (!produto) {
        return response.status(404).json({ message: `Produto ${item.produtoId} não encontrado.` });
      }

      if (produto.estoque < item.quantidade) {
        return response.status(400).json({ message: `Estoque insuficiente para o produto: ${produto.nome}` });
      }

      // Atualiza o estoque
      produto.estoque -= item.quantidade;
      await produto.save();

      const subtotal = produto.preco * item.quantidade;
      valorTotal += subtotal;

      produtosComprados.push({
        produto: produto.nome,
        quantidade: item.quantidade,
        precoUnitario: produto.preco,
        subtotal,
      });
    }

    // Cria o pedido e gera ID
    const novoPedido = await Pedido.create({
      nomeCliente,
      telefone: telefone || null,
      valor_total: valorTotal.toFixed(2),
      itens: produtosComprados,
    });

    return response.status(201).json({
      message: "Compra finalizada com sucesso!",
      pedido: novoPedido,
      pedidoId: novoPedido.id, 
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Erro ao finalizar compra." });
  }
};

export const getHistoricoPedidos = async (request, response) => {
  try {
    const pedidos = await Pedido.findAll({
      order: [["createdAt", "DESC"]],
    });

    if (!pedidos || pedidos.length === 0) {
      return response.status(404).json({ message: "Nenhum pedido encontrado." });
    }

    return response.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Erro ao buscar histórico de pedidos." });
  }
};
