import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Logo = styled.img`
max-width: 90px !important;
max-height: 90px;
margin: 10px;
border-radius: 150px;

 object-fit: contain;

  @media (max-width: 576px) {
    width: 45px;
  }
`

export const Caixa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

export const LinkStyled = styled(NavLink)`
  color: #7a2b2b;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin: 0 8px;

  &.active {
    font-weight: 700; 
    color: #c92a2a; 
    border-bottom: 2px solid #c92a2a;
    padding-bottom: 2px;
  }

  &:hover {
    color: #c92a2a;
  }

  @media (max-width: 576px) {
    display: block;
    padding: 8px 0;
  }
`;
