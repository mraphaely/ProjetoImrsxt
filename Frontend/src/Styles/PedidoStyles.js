import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const Container = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 0 auto; 
  padding: 0.5rem; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 1.8rem 1.5rem;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    max-width: 95%;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    width: 100%;
  }

  @media (max-width: 400px) {
    padding: 0.8rem;
  }
`;

export const CaixaConteudo = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1rem;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 400px) {
    padding: 0.8rem;
  }
`;

export const PageWrapper = styled.div`
  background-color: #fff;
  min-height: calc(100vh - 150px);
  padding-top: 120px;
  padding-bottom: 2rem;


`;

export const NavStyled = styled(Nav)`
  border-bottom: 1px solid #ddd;

  .nav-link {
    color: #444;
    font-weight: 500;
    padding: 0.75rem 1rem;
  }

  .nav-link.active {
    color: #000;
    font-weight: 600;
    border-bottom: 2px solid #000;
  }

  @media (max-width: 576px) {
    flex-wrap: wrap;
    .nav-link {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

export const PedidoBox = styled.div`
  border: 1.5px solid ${({ borderColor }) => borderColor};
  //border: 1.5px solid;
  border-radius: 8px;
  padding: 1.5rem !important;
  width: 80%;
  background-color: #fefaf6;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin: 0 auto;

  h5 {
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export const PedidoInfo = styled.div`
  p {
    margin-bottom: 0.4rem;
    font-size: 1rem;
    color: #333;

    strong {
      font-weight: 600;
    }
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-weight: 500;
  color: #a33;
  margin: 0;
  font-size: 1.1rem;
`;

export const TituloPagina = styled.h4`
  text-align: center;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: #222;

  @media (max-width: 576px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;
