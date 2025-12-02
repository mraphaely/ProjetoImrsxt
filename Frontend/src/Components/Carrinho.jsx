import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image, Card, Form } from "react-bootstrap";
import { Trash, PlusCircle, DashCircle, CartX } from "react-bootstrap-icons";

function Carrinho() {
  const [itens, setItens] = useState([]);
  const [nomeCliente, setNomeCliente] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    setItens(carrinhoSalvo);
  }, []);

  // atualiza sempre que alterar o carrinho
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(itens));
  }, [itens]);

  const incrementar = (id) => {
    setItens(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const decrementar = (id) => {
    setItens(prev =>
      prev.map(item =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  const removerItem = (id) => {
    setItens(prev => prev.filter(item => item.id !== id));
  };

  const total = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  // 🔥 FINALIZAR COMPRA NO BACKEND
  const finalizarCompra = async () => {
    if (!nomeCliente.trim()) {
      alert("Digite o nome do cliente!");
      return;
    }

    if (itens.length === 0) {
      alert("O carrinho está vazio!");
      return;
    }

    const payload = {
      nomeCliente,
      telefone,
      itens: itens.map(item => ({
        produtoId: item.id,
        quantidade: item.quantidade,
      }))
    };

    try {
      const response = await fetch("http://localhost:3333/usuarios/comprar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Pedido realizado com sucesso! Pedido ID: " + data.pedido.id);
        setItens([]);
        localStorage.removeItem("carrinho");
      } else {
        alert("Erro: " + (data.message || "Erro ao finalizar compra"));
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  return (
    <Container className="my-5 px-3">
      <h2 className="fw-bold mb-4 text-center">Carrinho de Compras</h2>

      {itens.length === 0 ? (
        <div className="text-center py-5">
          <CartX size={80} className="text-danger mb-3" />
          <h4 className="fw-semibold text-muted mb-3">Seu carrinho está vazio 😢</h4>
          <p className="text-secondary mb-4">
            Volte ao cardápio e escolha seu lanche delicioso!
          </p>
          <Button href="/" variant="danger" size="lg">
            Voltar ao Cardápio
          </Button>
        </div>
      ) : (
        <>
          
          <Card className="mb-4 p-3 shadow-sm">
            <h5 className="fw-bold mb-3">Dados do Cliente</h5>

            <Form.Group className="mb-3">
              <Form.Label>Nome do Cliente *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Telefone (opcional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="(DDD) 9 9999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </Form.Group>
          </Card>

          {itens.map((item) => (
            <Card
              key={item.id}
              className="mb-3 shadow-sm border-2 border-warning-subtle"
              style={{ borderRadius: "12px" }}
            >
              <Card.Body>
                <Row className="gy-3 align-items-center">
                  <Col xs={12} sm={4} md={3} className="text-center">
                    <Image
                      src={`http://localhost:3333/images/${item.imagem}`}
                      alt={item.nome}
                      fluid
                      rounded
                      style={{ maxWidth: "120px" }}
                    />
                  </Col>

                  <Col xs={12} sm={8} md={5} className="text-center text-md-start">
                    <h5 className="fw-semibold mb-1">{item.nome}</h5>
                    <p className="text-muted mb-0">
                      R$ {item.preco.toFixed(2)} x {item.quantidade} ={" "}
                      <strong>R$ {(item.preco * item.quantidade).toFixed(2)}</strong>
                    </p>
                  </Col>

                  <Col
                    xs={12}
                    md={4}
                    className="d-flex justify-content-center justify-content-md-end align-items-center"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        minWidth: "180px",
                      }}
                    >
                      <Button variant="outline-danger" size="sm" onClick={() => decrementar(item.id)}>
                        <DashCircle size={18} />
                      </Button>

                      <span className="fw-bold fs-5">{item.quantidade}</span>

                      <Button variant="outline-success" size="sm" onClick={() => incrementar(item.id)}>
                        <PlusCircle size={18} />
                      </Button>

                      <Button
                        variant="link"
                        className="text-danger p-0 ms-1"
                        onClick={() => removerItem(item.id)}
                        style={{ lineHeight: 0 }}
                      >
                        <Trash size={22} />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}

          <hr className="mt-4" />

          <Row className="mt-3 align-items-center justify-content-between text-center text-md-start">
            <Col xs={12} md="auto">
              <h4 className="fw-bold mb-0">Total: R$ {total.toFixed(2)}</h4>
            </Col>

            <Col xs={12} md="auto">
              <Button variant="danger" size="lg" onClick={finalizarCompra}>
                Finalizar Pedido
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Carrinho;
