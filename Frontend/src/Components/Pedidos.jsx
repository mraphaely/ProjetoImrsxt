import React, { useState } from "react";
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

const RegistroPedidos = () => {
  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      numero: "01",
      data: "24/09/2025, 20:00",
      cliente: "Allan Oliveira",
      telefone: "(82) 98842-6467",
      status: "Recebido",
      valor: "14,00",
      pagamento: "Débito",
      entregue: false,
      produto: "Churro com calda quente de chocolate",
      imagem: "/img/churros1.png"
    },
    {
      id: 2,
      numero: "02",
      data: "24/09/2025, 20:30",
      cliente: "Eduarda Teixeira",
      telefone: "(82) 98863-1814",
      status: "Recebido",
      valor: "15,00",
      pagamento: "Crédito",
      entregue: false,
      produto: "Churro com calda de chocolate branco e raspas de limão",
      imagem: "/img/churros2.png"
    }
  ]);

  const marcarEntregue = (id) => {
    setPedidos((prev) => prev.map(p => p.id === id ? { ...p, entregue: !p.entregue } : p));
  };

  const limparPedidos = () => setPedidos([]);

  const refresh = () => {
    // se integrar com backend, fetchPedidos();
    console.log("Atualizar pedidos");
  };

  return (
    <PageWrapper>
      <Container fluid>
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <Title>Pedidos do Dia</Title>
          <RefreshBtn title="Atualizar pedidos" onClick={refresh}>
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
                  <PedidoHeader><b>Nº Pedido: #{p.numero}</b> — {p.produto}</PedidoHeader>
                  <PedidoInfo>
                    <div>Data: {p.data}</div>
                    <div>Nome: {p.cliente}</div>
                    <div>Número: {p.telefone}</div>
                    <div>Status: {p.status}</div>
                    <div>Valor: R$ {p.valor}</div>
                    <div>Forma de Pagamento: {p.pagamento}</div>
                  </PedidoInfo>
                </Col>

                <Col lg={3} md={4} sm={12} className="d-flex flex-column align-items-center">
                  <ImgProduto src={p.imagem} alt={p.produto} />
                  <PedidoFooter>
                    {p.entregue ? (
                      <StatusBtn entregue onClick={() => marcarEntregue(p.id)}>Produto entregue ✔</StatusBtn>
                    ) : (
                      <>
                        <StatusBtn onClick={() => marcarEntregue(p.id)}>Entregar</StatusBtn>
                        <StatusBtn className="nao">Não entregue</StatusBtn>
                      </>
                    )}
                  </PedidoFooter>
                </Col>
              </Row>
            </PedidoCard>
          ))
        )}

        <ControlsRow className="mt-4">
          <div>
            <Button variant="outline-danger" onClick={limparPedidos}>Limpar pedidos</Button>
          </div>

          <FooterStats>
            <span>Total de Pedidos: {pedidos.length}</span>
            <span>Entregue: {pedidos.filter(p => p.entregue).length}</span>
            <span>Não entregue: {pedidos.filter(p => !p.entregue).length}</span>
          </FooterStats>
        </ControlsRow>
      </Container>
    </PageWrapper>
  );
};

export default RegistroPedidos;
