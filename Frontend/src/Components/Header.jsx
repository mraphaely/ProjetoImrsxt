import { Caixa, LinkStyled, Logo } from "../Styles/Header";
import imgLogo from "../../public/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../index.css";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        fixed="top" 
        className="shadow-sm py-3"
         style={{
    borderBottom: "2px solid #c92a2a"}}
      >
        <Container
          id="navSpace"
          className="d-flex align-items-center justify-content-between"
        >

          <div className="d-flex align-items-center gap-2">
            <Logo src={imgLogo} alt="logo" />
            <Navbar.Brand href="/" className="logoTxt fw-semibold">
              Churros & Cia
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* Links */}
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

      <div style={{ height: "110px" }}></div>
    </>
  );
};

export default Header;
