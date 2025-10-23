import React, { useState } from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Trash, PlusCircle, DashCircle } from "react-bootstrap-icons";

function Carrinho() {
  const [itens, setItens] = useState([
    {
      id: 1,
      nome: "Churro crocante recheado com doce de leite",
      preco: 12.0,
      quantidade: 2,
      imagem: "/imgs/churro.png",
    },
    {
      id: 2,
      nome: "Água com gás",
      preco: 4.5,
      quantidade: 2,
      imagem: "/imgs/agua.png",
    },
  ]);

  const incrementar = (id) => {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const decrementar = (id) => {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  const removerItem = (id) => {
    setItens((prev) => prev.filter((item) => item.id !== id));
  };

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <Container className="my-5 px-3">
      <h2 className="fw-bold mb-4 text-center">Carrinho de Compras</h2>

      {itens.map((item) => (
        <Card
          key={item.id}
          className="mb-3 shadow-sm border-2 border-warning-subtle"
          style={{ borderRadius: "12px" }}
        >
          <Card.Body>
            <Row className="gy-3 align-items-center justify-content-center">
              {/* Imagem */}
              <Col xs={12} sm={4} md={3} className="text-center">
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  fluid
                  rounded
                  style={{ maxWidth: "120px" }}
                />
              </Col>

              {/* Nome e preço */}
              <Col xs={12} sm={8} md={5} className="text-center text-md-start">
                <h5 className="fw-semibold mb-1">{item.nome}</h5>
                <p className="text-muted mb-0">
                  R$ {item.preco.toFixed(2)} x {item.quantidade} ={" "}
                  <strong>R$ {(item.preco * item.quantidade).toFixed(2)}</strong>
                </p>
              </Col>

              {/* Controles */}
              <Col
                xs={12}
                md={4}
                className="d-flex flex-wrap justify-content-center justify-content-md-end align-items-center gap-3 mt-2 mt-md-0"
              >
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => decrementar(item.id)}
                >
                  <DashCircle size={18} />
                </Button>
                <span className="fw-bold fs-5">{item.quantidade}</span>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => incrementar(item.id)}
                >
                  <PlusCircle size={18} />
                </Button>
                <Button
                  variant="link"
                  className="text-danger p-0"
                  onClick={() => removerItem(item.id)}
                >
                  <Trash size={22} />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}

      {/* Total e botão */}
      <hr className="mt-4" />
      <Row className="mt-3 align-items-center justify-content-between text-center text-md-start">
        <Col xs={12} md="auto" className="mb-3 mb-md-0">
          <h4 className="fw-bold mb-0">Total: R$ {total.toFixed(2)}</h4>
        </Col>
        <Col xs={12} md="auto">
          <Button
            href="/Pagamento"
            variant="danger"
            size="lg"
            className="fw-semibold px-4 rounded-3 w-100 w-md-auto"
          >
            Ir para o pagamento
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Carrinho;
