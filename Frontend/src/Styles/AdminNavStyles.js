import styled from "styled-components";

export const NavContainer = styled.header`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e9d3cf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 28px;
  position: sticky;
  top: 0;
  z-index: 200;
`;

/* ESQUERDA */
export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

/* LINKS DESKTOP */
export const NavLinks = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;

  @media (max-width: 820px) {
    display: none; /* esconder no mobile */
  }
`;

export const NavItem = styled.div`
  button {
    background: transparent;
    border: none;
    font-weight: 600;
    color: ${({ active }) => (active ? "#222" : "#6d6d6d")};
    padding: 8px 6px;
    cursor: pointer;
    position: relative;
  }

  ${({ active }) =>
    active &&
    `
  button::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -12px;
    height: 3px;
    background: #d9a79c;
  }
  `}
`;

/* DIREITA */
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 820px) {
    span {
      display: none; /* some o nome no mobile */
    }
  }
`;

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const LogoutButton = styled.button`
  background: #fff;
  color: #d94336;
  border: 1px solid #f1cfc9;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.15s;

  &:hover {
    background: #ffeaea;
  }
`;

/* BOTÃO MOBILE */
export const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: 820px) {
    display: block;
    background: transparent;
    border: none;
    font-size: 26px;
    margin-right: 14px;
    cursor: pointer;
  }
`;

/* MENU DESLIZANTE */
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  height: 100vh;
  width: 240px;
  background: #fff;
  border-right: 1px solid #e0c4bf;
  box-shadow: 2px 0 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  padding: 60px 20px;
  gap: 18px;
  transition: 0.3s ease;

  button {
    background: none;
    border: none;
    font-size: 17px;
    text-align: left;
    padding: 10px 0;
    font-weight: 600;
    color: #444;
  }

  .logout {
    color: #d94336;
    margin-top: 10px;
  }

  @media (min-width: 821px) {
    display: none; /* esconder no desktop */
  }
`;
