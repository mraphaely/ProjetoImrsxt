import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { PagamentoBox, Endereco, Title, Obs, BotoesContainer } from "../Styles/Pagamento";

const Pagamento = () => {
  const [forma, setForma] = useState("");

  return (
    <Container fluid className="my-5 d-flex justify-content-center px-3">
  <PagamentoBox>
    <Title>Pagamento</Title>
    <Obs>Obs: o pagamento é feito no local de retirada</Obs>

    <Form>
      {/* Forma de pagamento */}
      <Form.Group className="mb-4">
        <Form.Label style={{fontWeight: "bold"}}>Escolha forma de pagamento:</Form.Label>
        <div className="d-flex flex-column gap-2 mt-2">
          {["Pix", "Crédito", "Débito", "Dinheiro"].map((opcao, index) => (
            <label
              key={index}
              className="d-flex align-items-center gap-2"
              style={{ cursor: "pointer" }}
            >
              <input
                type="radio"
                name="pagamento"
                value={opcao.toLowerCase()}
                checked={forma === opcao.toLowerCase()}
                onChange={(e) => setForma(e.target.value)}
                style={{
                  width: "18px",
                  height: "18px",
                  accentColor: "#d9534f",
                }}
              />
              {opcao}
            </label>
          ))}
        </div>
      </Form.Group>

      {/* Endereço */}
      <Form.Group className="mb-4">
        <Form.Label style={{fontWeight:"bold"}}>Endereço:</Form.Label>
        <Endereco>
          <i className="bi bi-geo-alt-fill"></i>
          <span>
            R. B. B. H, 73 - Benedito Bentes, Maceió - AL, 57086-173
          </span>
        </Endereco>
      </Form.Group>

      {/* Nome e número do cliente*/}
      <Form.Group className="mb-3">
        <Form.Label style={{fontWeight:"bold"}}>Nome:</Form.Label>
        <Form.Control type="text" placeholder="Digite seu nome" required />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label style={{fontWeight:"bold"}}>Número:</Form.Label>
        <Form.Control type="tel" placeholder="Digite seu telefone, ex:(00) 00 00000-0000" required />
      </Form.Group>

      {/* Botões */}
    <BotoesContainer>
  <Button variant="outline-secondary" href="/Carrinho">
    Voltar ao carrinho
  </Button>
  <Button variant="danger" type="submit">
    Confirmar Pedido
  </Button>
</BotoesContainer>

    </Form>
  </PagamentoBox>
</Container>
  );
};

export default Pagamento;
