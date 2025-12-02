import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 2.2rem 1.2rem;
  min-height: calc(100vh - 80px); 
  box-sizing: border-box;
  background: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  margin: 0 0 1.75rem 0;
  font-size: 1.6rem;
`;


export const PedidoCard = styled.div`
  border: 1.5px solid #e2b2a2;
  background: #fff8f2;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.25rem;
`;

export const PedidoHeader = styled.div`
  font-size: 1rem;
  margin-bottom: 0.45rem;
`;

export const PedidoInfo = styled.div`
  font-size: 0.92rem;
  color: #222;
  line-height: 1.35;
  margin-left: 2px;
`;

export const ImgProduto = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 0.6rem;

  @media (max-width: 576px) {
    width: 78px;
    height: 78px;
  }
`;

export const PedidoFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
`;

/* botões de status */
/* botões de status */
export const StatusBtn = styled.button`
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 0.86rem;
  color: #fff;
  transition: 0.12s;

  background: ${({ entregue, nao }) =>
    entregue
      ? "#27ae60"   /* verde quando entregue */
      : nao
        ? "#d94336" /* vermelho quando marcado como "Não entregue" */
        : "#6b6b6b" /* cinza padrão antes de clicar */
  };
`;


/* quando não há pedidos */
export const EmptyBox = styled.div`
  background: #fff2e8;
  padding: 1.5rem;
  border: 1.2px solid #e2b2a2;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 1.75rem;
`;

export const RefreshBtn = styled.button`
  position: absolute;
  right: 10%;
  top: 8px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 6%;
  }
`;

export const ControlsRow = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const FooterStats = styled.div`
  display:flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  span {
    padding: 0.35rem 0.7rem;
    border: 1.2px solid #e2b2a2;
    border-radius: 8px;
    font-size: 0.88rem;
    background: #fff;
    color: #333;
  }
`;
