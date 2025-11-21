import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Caixa } from "../Styles/App.js";

// Navbar e Rodapé
import Footer from "../Components/Footer";
import Header from "../Components/Header";

// Páginas
import Home from "../Components/Home";
import Login from "../Components/Login";
import GerenciarCardapio from "../Components/GerenciarCardapio.jsx";
import Carrinho from "../Components/Carrinho";
import Pagamento from "../Components/Pagamento";
import Acompanhamento from "../Components/Acompanhamento";
import Historico from "../Components/Historico";

const App = () => {
  return (
    <Caixa>
      <BrowserRouter>
        <Header />
        <main>
          <Container className="py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="GerenciarCardapio" element={<GerenciarCardapio />} />
              <Route path="Carrinho" element={<Carrinho />} />
              <Route path="Pagamento" element={<Pagamento />} />
              <Route path="Acompanhamento" element={<Acompanhamento />} />
              <Route path="Historico" element={<Historico />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </Caixa>
  );
};

export default App;
