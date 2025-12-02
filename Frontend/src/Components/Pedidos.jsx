import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  PageWrapper,
  Title,
  PedidoCard,
  PedidoHeader,
  PedidoInfo,
  PedidoFooter,
  ImgProduto,
  StatusBtn,
  FooterStats,
  EmptyBox,
  RefreshBtn,
  ControlsRow
} from "../Styles/PedidoAdm";

const API = "http://localhost:3333/pedidos";

const RegistroPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  // Carregar pedidos do back
  const fetchPedidos = async () => {
    try {
      const res = await axios.get(API);
      setPedidos(res.data);
    } catch (error) {
      console.error("Erro ao carregar pedidos:", error);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  // Atualizar status
  const atualizarStatus = async (id, statusEntrega) => {
    try {
      await axios.put(`${API}/${id}/statusEntrega`, { statusEntrega });
      fetchPedidos();
    } catch (error) {
      console.error("Erro ao atualizar entrega:", error);
    }
  };

  const limparPedidos = () => setPedidos([]);

  return (
    <PageWrapper>
      <Container fluid>
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <Title>Pedidos do Dia</Title>
          <RefreshBtn title="Atualizar pedidos" onClick={fetchPedidos}>
            ⟳
          </RefreshBtn>
        </div>

        {pedidos.length === 0 ? (
          <EmptyBox>Nenhum pedido registrado</EmptyBox>
        ) : (
          pedidos.map((p) => (
            <PedidoCard key={p.id}>
              <Row className="align-items-center">
                <Col lg={9} md={8} sm={12}>
                  <PedidoHeader><b>Cliente:</b> {p.nomeCliente}</PedidoHeader>

                  <PedidoInfo>
                    <div><b>Total:</b> R$ {p.valor_total}</div>
                    <div><b>Pagamento:</b> {p.formaPagamento}</div>
                    <div><b>Status:</b> {p.status}</div>
                    <div><b>Telefone:</b> {p.telefone || "Não informado"}</div>
                    <div><b>Itens:</b> {p.itens.map(i => i.nome).join(", ")}</div>
                  </PedidoInfo>
                </Col>

                <Col lg={3} md={4} sm={12} className="d-flex flex-column align-items-center">
                  <PedidoFooter>
                    {p.statusEntrega === "entregue" ? (
                      <StatusBtn entregue onClick={() => atualizarStatus(p.id, "nao-entregue")}>
                        Entregue ✔
                      </StatusBtn>
                    ) : p.statusEntrega === "nao-entregue" ? (
                      <StatusBtn nao onClick={() => atualizarStatus(p.id, "entregue")}>
                        Não entregou ✖
                      </StatusBtn>
                    ) : (
                      <>
                        <StatusBtn onClick={() => atualizarStatus(p.id, "entregue")}>Entregar</StatusBtn>
                        <StatusBtn nao onClick={() => atualizarStatus(p.id, "nao-entregue")}>Não entregar</StatusBtn>
                      </>
                    )}
                  </PedidoFooter>
                </Col>
              </Row>
            </PedidoCard>
          ))
        )}

        <ControlsRow className="mt-4">
          <Button variant="outline-danger" onClick={limparPedidos}>
            Limpar pedidos
          </Button>

          <FooterStats>
            <span>Total: {pedidos.length}</span>
            <span>Entregue: {pedidos.filter(p => p.statusEntrega === "entregue").length}</span>
            <span>Não entregue: {pedidos.filter(p => p.statusEntrega === "nao-entregue").length}</span>
          </FooterStats>
        </ControlsRow>
      </Container>
    </PageWrapper>
  );
};

export default RegistroPedidos;
