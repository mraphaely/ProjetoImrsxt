import styled from "styled-components";
import { Link } from "react-router-dom";

export const CaixaLogin = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #fff5f0 0%, #ffe9e3 100%);
  font-family: "Poppins", sans-serif;
  padding: 0 60px;
  gap: 90px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 50px;
    height: auto;
    padding: 60px 20px;
  }
`;

export const ImagemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  img {
    width: 85%;
    max-width: 450px !important;
    height: auto;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 992px) {
    justify-content: center;
    img {
      width: 70%;
      max-width: 320px;
    }
  }
`;

export const FormBox = styled.form`
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #c03a2bab;
  padding: 55px 65px;
  width: 100% ;
  max-width: 420px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 992px) {
    padding: 40px 30px;
    max-width: 90%;
  }
`;

export const H1 = styled.h1`
  font-size: 1.9rem;
  font-weight: 700;
  color: #1c1c1c;
  text-align: start;
  margin-bottom: 8px;
`;

export const Subtitulo = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 35px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  border: 1.8px solid #f1d2c3;
  border-radius: 10px;
  padding: 12px 16px;
  background-color: #fff;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 22px;
  transition: 0.2s ease-in-out;

  padding: 7px 18px 7px 18px ;

  &:focus {
    border-color: #c0392b;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(192, 57, 43, 0.1);
  }
`;

export const BtnEntrar = styled.button`
  background: linear-gradient(135deg, #c0392b, #e74c3c);
  border: none;
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(192, 57, 43, 0.3);

  padding: 7px 18px 7px 18px !important;
  margin-top: 28px !important;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #a93226, #cf3e2f);
    box-shadow: 0 6px 18px rgba(192, 57, 43, 0.35);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const LinkEsqueci = styled(Link)`
  color: #c0392b;
  font-size: 0.9rem;
  text-align: right;
  text-decoration: none;
  display: block;
  margin-top: 18px;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Mensagem = styled.p`
  color: #c0392b;
  margin-top: 18px;
  text-align: center;
  font-weight: 500;
`;
