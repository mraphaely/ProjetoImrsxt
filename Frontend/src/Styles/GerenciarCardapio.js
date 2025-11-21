import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: #fff;
  color: #333;

  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
`;

export const SectionForm = styled.section`
  border: 1.5px solid #e2b2a2;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #fff8f5;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .btns {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const SectionProdutos = styled.section`
  border: 1.5px solid #e2b2a2;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #fff;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const BtnAdd = styled.button`
  background-color: #d94336;
  color: white;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #b9372c;
  }
`;

export const BtnClear = styled.button`
  background-color: #d3d3d3;
  color: #333;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #c0c0c0;
  }
`;

export const ProdutoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 0.5rem;
`;

export const ProdutoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e2b2a2;
  border-radius: 8px;
  padding: 0.5rem;
  background-color: #fff8f5;
  gap: 0.5rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    object-fit: cover;
  }
`;

export const ProdutoInfo = styled.div`
  flex: 1;

  h4 {
    font-size: 0.95rem;
    margin-bottom: 0.2rem;
  }

  p {
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 0.85rem;
    color: #4caf50;
  }
`;

export const ProdutoActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const BtnEditar = styled.button`
  background-color: #f5b041;
  border: none;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  font-size: 0.85rem;

  &:hover {
    background-color: #e59819;
  }
`;

export const BtnExcluir = styled.button`
  background-color: #d94336;
  border: none;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  font-size: 0.85rem;

  &:hover {
    background-color: #b9372c;
  }
`;
