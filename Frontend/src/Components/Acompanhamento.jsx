import "../index.css";
import { useState, useEffect } from "react";
import PedidoStatus from "./Historico";
import {
  PageWrapper,
  TituloPagina,
  Container,
  CaixaConteudo,
} from "../Styles/PedidoStyles";

const Acompanhamento = () => {
  const [activeTab] = useState("acompanhamento");

  const [pedidoAtivo, setPedidoAtivo] = useState(null);
  const [historicoPedido, setHistoricoPedido] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/api/pedidos/historico");
        const data = await resposta.json();

        if (!Array.isArray(data)) {
          console.error("Retorno inesperado do backend:", data);
          return;
        }

        // FILTRAR PEDIDO ATIVO (status = "Em preparo")
        const pedidoAtivoBackend = data.find(p => p.status === "Em preparo");
        setPedidoAtivo(pedidoAtivoBackend || null);

        // PEGAR ÚLTIMO PEDIDO FINALIZADO
        const historico = data
          .filter(p => p.status === "Finalizado")
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

        setHistoricoPedido(historico || null);

      } catch (error) {
        console.error("Erro ao carregar pedidos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  const tituloPagina =
    activeTab === "acompanhamento" ? "Acompanhamento" : "Último pedido";

  const hasPedidoAtivo = !!pedidoAtivo;
  const hasHistorico = !!historicoPedido;

  if (loading) {
    return (
      <PageWrapper>
        <Container>
          <TituloPagina>Carregando...</TituloPagina>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <TituloPagina>{tituloPagina}</TituloPagina>

        <CaixaConteudo>
          {activeTab === "acompanhamento" && hasPedidoAtivo && (
            <PedidoStatus tipo="acompanhamento" pedido={pedidoAtivo} />
          )}

          {activeTab === "acompanhamento" && !hasPedidoAtivo && (
            <p>Você não tem pedidos em preparo no momento.</p>
          )}

          {activeTab === "historico" && hasHistorico && (
            <PedidoStatus tipo="historico" pedido={historicoPedido} />
          )}

          {activeTab === "historico" && !hasHistorico && (
            <p>Nenhum pedido encontrado no histórico.</p>
          )}
        </CaixaConteudo>
      </Container>
    </PageWrapper>
  );
};

export default Acompanhamento;
