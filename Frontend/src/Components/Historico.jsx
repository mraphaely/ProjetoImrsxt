import React from "react";
import { PedidoBox, PedidoInfo, EmptyMessage } from "../Styles/PedidoStyles";

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

  // Renderização principal (sem título interno)
  return (
    <PedidoBox borderColor={tipo === "acompanhamento" ? "#a33" : "#2358c9"}>
      <PedidoInfo>
        {tipo === "acompanhamento" ? (
          <>
            <p><strong>Pedido ID:</strong> {pedido.id}</p>
            <p><strong>Cliente:</strong> {pedido.cliente}</p>
            <p><strong>Número cliente:</strong> {pedido.numero}</p>
            <p><strong>Status:</strong> {pedido.status}</p>
            <p><strong>Forma de pagamento:</strong> {pedido.formaPagamento}</p>
            <p><strong>Tempo estimado para retirada:</strong> {pedido.tempoEstimado}</p>
          </>
        ) : (
          <>
            <p><strong>Pedido ID:</strong> {pedido.id}</p>
            <p><strong>Cliente:</strong> {pedido.cliente}</p>
            <p><strong>Status:</strong> {pedido.status}</p>
            <p><strong>Data:</strong> {pedido.data}</p>
            <p><strong>Total pago:</strong> {pedido.total}</p>
          </>
        )}
      </PedidoInfo>
    </PedidoBox>
  );
};

export default Historico;
