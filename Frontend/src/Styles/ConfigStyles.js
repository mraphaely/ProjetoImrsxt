import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 30px 0;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  border-bottom: 2px solid #e8d0c8;
  padding-bottom: 8px;
  font-weight: 700;
`;

export const TabsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;

  /* PERMITE QUEBRAR LINHA — RESOLVE O BOTÃO QUEBRANDO */
  flex-wrap: wrap;

  /* centraliza nas telas pequenas */
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TabButton = styled.button`
  background: ${({ active }) => (active ? "linear-gradient(90deg, #ff8800, #cc2c1c)" : "#f3d8d2")};
  border: none;
  padding: 10px 25px;
  font-weight: 700;
  color: ${({ active }) => (active ? "#fff" : "#8a5c53")};
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    opacity: 0.85;
  }

  /* DEIXA OS BOTÕES AJUSTÁVEIS */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardBox = styled.div`
  background: #fff7f4;
  border: 1px solid #e8c9c0;
  padding: 30px;
  border-radius: 8px;
`;

export const ButtonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;

  button {
    flex: 1;
    min-width: 140px;
    padding: 12px 18px;
    text-align: center;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    background: #f5e9e7;
    color: #824a46;
  }

  @media (max-width: 768px) {
    button {
      flex: 1 1 100%;
      min-width: 100%;
    }
  }
`;
