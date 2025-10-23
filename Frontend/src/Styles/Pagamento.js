import styled from "styled-components";

export const PagamentoBox = styled.div`
  background-color: #fff4f4;
  border: 1px solid #d9534f;
  border-radius: 8px;
  padding: 40px; 
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 25px; 
    max-width: 90%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #a52828;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Obs = styled.p`
  text-align: center;
  color: #555;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Endereco = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

/* espaçamento nos botões */
export const BotoesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px; 
  margin-bottom: 28px; 
`;
