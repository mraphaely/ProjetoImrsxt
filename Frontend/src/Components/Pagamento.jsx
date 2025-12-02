import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { PagamentoBox, Endereco, Title, Obs, BotoesContainer } from "../Styles/Pagamento";
import '../index.css';
import iconLocal from "../../public/localizacao.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Pagamento = () => {
  const [forma, setForma] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const itensFormatados = carrinho.map((item) => ({
      produtoId: item.id,
      quantidade: item.quantidade,
    }));

    try {
      const response = await axios.post("http://localhost:3333/usuario/comprar", {
        nomeCliente: nome,
        telefone: telefone,
        itens: itensFormatados,
      });

      alert("Pedido confirmado com sucesso!");

      // limpar carrinho
      localStorage.removeItem("carrinho");

      // redirecionar para página de resumo
      navigate("/Confirmacao/" + response.data.pedidoId);

    } catch (error) {
      console.error(error);
      alert("Erro ao confirmar pedido.");
    }
  };

  return (
    <>
      <Title>Pagamento</Title>
      <Container fluid className="my-5 d-flex justify-content-center px-3">
        <PagamentoBox>
          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "bold" }}>
                Escolha forma de pagamento:
              </Form.Label>
              <Obs>Obs: o pagamento é feito no local de retirada</Obs>

              <div className="d-flex flex-column gap-2 mt-2">
                {["Pix", "Crédito", "Débito", "Dinheiro"].map((opcao, index) => (
                  <label key={index} className="d-flex align-items-center gap-2" style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="pagamento"
                      value={opcao.toLowerCase()}
                      checked={forma === opcao.toLowerCase()}
                      onChange={(e) => setForma(e.target.value)}
                      style={{ width: "18px", height: "18px", accentColor: "#d9534f" }}
                      required
                    />
                    {opcao}
                  </label>
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "bold" }}>Endereço:</Form.Label>
              <Endereco>
                <i className="bi bi-geo-alt-fill"></i>
                <span>
                  <img src={iconLocal} style={{ width: "40px" }} alt="icon" />
                  R. B. B. H, 73 - Benedito Bentes, Maceió - AL, 57086-173
                </span>
              </Endereco>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Nome:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "bold" }}>Número:</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Digite seu telefone, ex: (00) 00 00000-0000"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </Form.Group>

            <BotoesContainer>
              <Button variant="outline-secondary" href="/Carrinho" className="ButtonPagament">
                Voltar ao carrinho
              </Button>
              <Button variant="danger" type="submit" className="ButtonPagament">
                Confirmar Pedido
              </Button>
            </BotoesContainer>

          </Form>
        </PagamentoBox>
      </Container>
    </>
  );
};

export default Pagamento;
