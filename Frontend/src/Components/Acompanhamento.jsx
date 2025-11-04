import "../index.css"
import { useState } from "react";
import PedidoStatus from "./Historico";
import { PageWrapper, TituloPagina } from "../Styles/PedidoStyles";
import { Container,  CaixaConteudo } from "../Styles/PedidoStyles";

const Acompanhamento = () => {
  const [activeTab] = useState("acompanhamento");

  // 🔹 Dados simulados — substituir futuramente por fetch/API
  const pedidoAtivo = {
    id: "order_uf8a7f8c0",
    cliente: "Maria Eduarda",
    numero: "82 988631814",
    status: "Em espera",
    formaPagamento: "Dinheiro",
    tempoEstimado: "20 minutos",
  };

  const historicoPedido = {
    id: "order_uf8a7f8c0",
    cliente: "Maria Eduarda",
    status: "Recebido",
    data: "01/01/2025, 10:24",
    total: "R$ 12,00",
  };

  const hasPedidoAtivo = true;
  const hasHistorico = true;

  const tituloPagina =
    activeTab === "acompanhamento" ? "Acompanhamento" : "Último pedido";

  return (
    <PageWrapper>
      <Container>
        <TituloPagina>{tituloPagina}</TituloPagina>

        <CaixaConteudo>
          {activeTab === "acompanhamento" && hasPedidoAtivo && (
            <PedidoStatus tipo="acompanhamento" pedido={pedidoAtivo} />
          )}

          {activeTab === "historico" && hasHistorico && (
            <PedidoStatus tipo="historico" pedido={historicoPedido} />
          )}
        </CaixaConteudo>
      </Container>
    </PageWrapper>
  );
};

export default Acompanhamento;
