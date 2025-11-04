import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { SectionTitle, PageWrapper, StyledCard, CardImage, CardBody, CardTitle, CardText, AddButton } from "../Styles/Cardapio";

const Cardapio = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("http://localhost:3333/itens/listar");
        if (response.data && Array.isArray(response.data.eventos)) {
          setProdutos(response.data.eventos);
        } else {
          console.error("A resposta da API não contém um array.");
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };
    fetchProdutos();
  }, []);

  const categorias = [
    "CHURROS TRADICIONAL",
    "CHURROS GOURMET RECHEADOS",
    "CHURROS COM COBERTURAS",
    "BEBIDAS COMPLEMENTARES",
  ];

  return (
    <PageWrapper>
      <Container fluid="lg">
        {categorias.map((categoria) => {
          const itensCategoria = produtos.filter(
            (p) => p.categoria?.toUpperCase() === categoria
          );

          return (
            <div key={categoria}>
              <SectionTitle>{categoria}</SectionTitle>
              <Row className="g-4 mb-5 justify-content-start">
                {itensCategoria.length > 0 ? (
                  itensCategoria.map((produto) => (
                    <Col
                      key={produto.id}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      className="d-flex justify-content-center"
                    >
                      <StyledCard>
                        <CardImage
                          src={`http://localhost:3333/images/${produto.image}`}
                          alt={produto.titulo}
                        />
                        <CardBody>
                          <CardTitle>{produto.titulo}</CardTitle>
                          <CardText>{produto.descricao}</CardText>
                          <CardText>
                            <strong>R$ {produto.preco}</strong>
                          </CardText>
                          <AddButton>+ Adicionar ao Carrinho</AddButton>
                        </CardBody>
                      </StyledCard>
                    </Col>
                  ))
                ) : (
                  <p style={{ color: "#888", marginLeft: "1rem" }}>
                    Nenhum produto nesta categoria.
                  </p>
                )}
              </Row>
            </div>
          );
        })}
      </Container>
    </PageWrapper>
  );
};

export default Cardapio;
