import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  NavContainer,
  NavLeft,
  NavLinks,
  NavRight,
  NavItem,
  LogoutButton,
  LogoImg,
  MobileMenuButton,
  MobileMenu,
} from "../Styles/AdminNavStyles";

import imgLogo from "../../public/logo.png";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("tokenAdmin");
    navigate("/login");
  };

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <NavContainer role="navigation">
      <NavLeft>
        {/* MENU  */}
        <MobileMenuButton onClick={() => setOpen(!open)}>
          ☰
        </MobileMenuButton>

        <NavLinks>
          <NavItem active={location.pathname.startsWith("/admin/pedidos")}>
            <button onClick={() => go("/admin/pedidos")}>Registro de pedidos</button>
          </NavItem>

          <NavItem active={location.pathname.startsWith("/admin/cardapio")}>
            <button onClick={() => go("/admin/cardapio")}>Gerenciamento de Cardápio</button>
          </NavItem>

          <NavItem active={location.pathname.startsWith("/admin/config")}>
            <button onClick={() => go("/admin/config")}>Configurações</button>
          </NavItem>
        </NavLinks>
      </NavLeft>

      <NavRight>
        <span style={{ fontSize: 14 }}>Churros & Cia</span>
        <LogoImg src={imgLogo} alt="Churros & Cia" />
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </NavRight>

    
      <MobileMenu open={open}>
        <button onClick={() => go("/admin/pedidos")}>Registro de pedidos</button>
        <button onClick={() => go("/admin/cardapio")}>Gerenciamento de Cardápio</button>
        <button onClick={() => go("/admin/config")}>Configurações</button>
        <button onClick={handleLogout} className="logout">Sair</button>
      </MobileMenu>
    </NavContainer>
  );
};

export default AdminNavbar;
