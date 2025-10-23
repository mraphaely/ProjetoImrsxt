import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import {Caixa} from '../Styles/App.js'

//Navbar e Rodapé
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Home from "../Components/Home";
import Contato from "../Components/Contato";
import Login from "../Components/Login";
import Register from "../Components/Register";

//rotas da pag Home
import PagAddEventos from "../Components/PagAddEventos";
import PagAddEventosGeral from "../Components/PagEventosGeral";

//rotas da pag Home User navbar
import Carrinho from "../Components/Carrinho";
import Pagamento from "../Components/Pagamento";
import Acompanhamento from "../Components/Acompanhamento";
import Historico from "../Components/Historico";

const App = () => {
    return(
        <Caixa>
            <BrowserRouter>
            <Container>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="contato" element={<Contato/>}/>
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
                <Route path="PagAddEventos" element={<PagAddEventos/>} />
                <Route path="PagEventosGeral" element={<PagAddEventosGeral/>} />
                
                <Route path="PagLogin" element={<Login/>} />

                <Route path="Carrinho" element={<Carrinho/>} />
                <Route path="Pagamento" element={<Pagamento/>} />
                <Route path="Acompanhamento" element={<Acompanhamento/>} />
                <Route path="Historico" element={<Historico/>} />
            </Routes>
            <Footer/>
            </Container>
        </BrowserRouter>
        </Caixa>
)
}

export default App;