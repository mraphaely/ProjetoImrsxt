import { Caixa, LinkStyled, Logo } from "../Styles/Header";
import imgLogo from "../../public/5f8d65d8513c83a7d87049fae1b236ed9e6a275b.png";
import { Container, Nav, Navbar } from "react-bootstrap";

import "../index.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="shadow-sm py-3">
      <Container id="navSpace" className="d-flex align-items-center justify-content-between">
        {/* Logo e nome */}
        <div className="d-flex align-items-center gap-2">
          <Logo src={imgLogo} alt="logo" />
          <Navbar.Brand href="/" className="logoTxt fw-semibold">
            Churros & Cia
          </Navbar.Brand>
        </div>

        {/* Botão de menu hamburguer (mobile) */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Links de navegação */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Caixa className="ms-auto text-center text-lg-end mt-3 mt-lg-0">
            <Nav className="gap-3">
              <LinkStyled to="/">Cardápio</LinkStyled>
              <LinkStyled to="/Carrinho">Carrinho</LinkStyled>
              <LinkStyled to="/Pagamento">Pagamento</LinkStyled>
              <LinkStyled to="/Acompanhamento">Acompanhamento</LinkStyled>
              <LinkStyled to="/Historico">Histórico</LinkStyled>
            </Nav>
          </Caixa>
        </Navbar.Collapse>
      </Container>
      <hr className="linhaNav m-0" />
    </Navbar>
  );
};

export default Header;
