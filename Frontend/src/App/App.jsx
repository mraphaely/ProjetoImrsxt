import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Caixa } from "../Styles/App.js";

// Navbar e Rodapé
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AdminNavbar from "../Components/AdminNavbar";
import AdminFooter from "../Components/AdminFooter.jsx";

// Páginas client
import Home from "../Components/Home";
import Carrinho from "../Components/Carrinho";
import Pagamento from "../Components/Pagamento";
import Acompanhamento from "../Components/Acompanhamento";
import Historico from "../Components/Historico";

// Páginas ADM
import Login from "../Components/Login";
import GerenciarCardapio from "../Components/GerenciarCardapio.jsx";
import PedidosRegistro from "../Components/Pedidos.jsx";
import ConfigPage from "../Components/AdminConfig.jsx";


function Layout({ children }) {
  const location = useLocation();

  // ROTAS /admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <Header />}

      <main>
        <Container className="py-4">{children}</Container>
      </main>

      {isAdminRoute ? <AdminFooter /> : <Footer />}
    </>
  );
}


const App = () => {
  return (
    <Caixa>
      <BrowserRouter>
        <Layout>
          <Routes>

            {/* CLIENTE */}
            <Route path="/" element={<Home />} />
            <Route path="/Carrinho" element={<Carrinho />} />
            <Route path="/Pagamento" element={<Pagamento />} />
            <Route path="/Acompanhamento" element={<Acompanhamento />} />
            <Route path="/Historico" element={<Historico />} />

            {/* ADM */}
            <Route path="/login" element={<Login />} />
            <Route path="/admin/cardapio" element={<GerenciarCardapio />} />
            <Route path="/admin/pedidos" element={<PedidosRegistro />} />
            <Route path="/admin/config" element={<ConfigPage />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </Caixa>
  );
};

export default App;
