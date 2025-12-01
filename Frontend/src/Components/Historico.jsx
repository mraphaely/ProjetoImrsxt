import React from "react";
import { PedidoBox, PedidoInfo, EmptyMessage } from "../Styles/PedidoStyles";

// Formatar data do banco
const formatarData = (data) => {
  if (!data) return "-";
  return new Date(data).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Formatar dinheiro
const formatarValor = (valor) => {
  if (!valor) return "R$ 0,00";
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const Historico = ({ tipo, pedido }) => {
  // Caso não exista pedido
  if (!pedido) {
    return (
      <PedidoBox borderColor={tipo === "acompanhamento" ? "#a33" : "#2358c9"}>
        <EmptyMessage>
          {tipo === "acompanhamento"
            ? "Nenhum pedido em andamento"
            : "Nenhum pedido realizado ainda"}
        </EmptyMessage>
      </PedidoBox>
    );
  }

  return (
    <>
      <PedidoBox borderColor={tipo === "acompanhamento" ? "#a33" : "#2358c9"}>
        <PedidoInfo>
          {tipo === "acompanhamento" ? (
            <>
              <p><strong>Pedido ID:</strong> {pedido.id}</p>
              <p><strong>Cliente:</strong> {pedido.nomeCliente}</p>
              <p><strong>Número cliente:</strong> {pedido.telefone || "Não informado"}</p>
              <p><strong>Status:</strong> {pedido.status}</p>
              <p><strong>Pagamento:</strong> {pedido.formaPagamento || "Não informado"}</p>
              <p><strong>Tempo estimado:</strong> {pedido.tempoEstimado || "—"}</p>
              <p><strong>Total:</strong> {formatarValor(pedido.valor_total)}</p>
              <p><strong>Data:</strong> {formatarData(pedido.createdAt)}</p>
            </>
          ) : (
            <>
              <p><strong>Pedido ID:</strong> {pedido.id}</p>
              <p><strong>Cliente:</strong> {pedido.nomeCliente}</p>
              <p><strong>Status:</strong> {pedido.status}</p>
              <p><strong>Pagamento:</strong> {pedido.formaPagamento || "Não informado"}</p>
              <p><strong>Data:</strong> {formatarData(pedido.createdAt)}</p>
              <p><strong>Total pago:</strong> {formatarValor(pedido.valor_total)}</p>
            </>
          )}
        </PedidoInfo>
      </PedidoBox>
    </>
  );
};

export default Historico;
