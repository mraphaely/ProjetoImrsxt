import styled from "styled-components";

export const DivFooter = styled.footer`
  background-color: #000;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Caixa1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  max-width: 1200px;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Caixa2 = styled.div`
  border-top: 1px solid #ccc;
  background-color: #c92a2a;
  width: 100%;
  max-width: 1200px;
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Caixinha1 = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 500px;
`;

export const Caixinha2 = styled.div`
  flex: 1;
  min-width: 200px;
  text-align: center;
`;

export const P1 = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  color: #222;
`;

export const P2 = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #ccc;
`;

export const Imgs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

export const Foto = styled.img`
  width: 32px;
  height: 32px;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;
