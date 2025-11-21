import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  CaixaLogin,
  ImagemBox,
  FormBox,
  H1,
  Label,
  Input,
  BtnEntrar,
  LinkEsqueci,
  Mensagem
} from "../Styles/Login.js";
import imgLogin from "../../public/mocotelainicial.png"; 

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [modoRecuperar, setModoRecuperar] = useState(false); // alterna entre login e recuperação
  const [emailRecuperacao, setEmailRecuperacao] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem("");

    try {
      if (modoRecuperar) {
        // Simula envio de e-mail de recuperação
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setMensagem("E-mail de recuperação enviado com sucesso!");
        setEmailRecuperacao("");
      } else {
        const res = await axios.post("http://localhost:3333/admin/login", {
          cpf,
          senha,
        });
        console.log(res.data);
        setMensagem("Login realizado com sucesso!");
        setTimeout(() => navigate("/admin/dashboard"), 1500);
      }
    } catch (error) {
      console.error(error);
      setMensagem(
        modoRecuperar ? "Erro ao enviar e-mail." : "CPF ou senha incorretos!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <CaixaLogin>
      <Container fluid className="d-flex align-items-center justify-content-center">
        <Row className="align-items-center justify-content-center w-100">
          {/* Lado esquerdo com imagem */}
          <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
            <ImagemBox>
              <img src={imgLogin} alt="login ilustrativo" />
            </ImagemBox>
          </Col>

          {/* Lado direito com formulário */}
          <Col md={6} className="d-flex justify-content-center">
            <FormBox onSubmit={handleSubmit}>
              {!modoRecuperar ? (
                <>
                  <H1>Olá, bem-vindo novamente!</H1>
                  <p>Faça login para continuar</p>

                  <Form.Group className="mb-3">
                    <Label>CPF</Label>
                    <Input
                      type="text"
                      placeholder="Digite o CPF"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Label>Senha</Label>
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <LinkEsqueci as="button" onClick={() => setModoRecuperar(true)}>
                    Esqueceu a senha?
                  </LinkEsqueci>

                  <BtnEntrar type="submit" disabled={loading}>
                    {loading ? "Entrando..." : "Entrar"}
                  </BtnEntrar>
                </>
              ) : (
                <>
                  <H1>Problemas para entrar?</H1>
                  <h6>Recuperar Senha</h6>
                  <p>Digite seu e-mail para receber as instruções</p>

                  <Form.Group className="mb-3">
                    <Label>E-mail</Label>
                    <Input
                      type="email"
                      placeholder="exemplo@email.com"
                      value={emailRecuperacao}
                      onChange={(e) => setEmailRecuperacao(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <BtnEntrar type="submit" disabled={loading}>
                    {loading ? "Enviando..." : "Enviar"}
                  </BtnEntrar>

                  <LinkEsqueci as="button" onClick={() => setModoRecuperar(false)}>
                    Voltar ao login
                  </LinkEsqueci>
                </>
              )}

              {mensagem && <Mensagem>{mensagem}</Mensagem>}
            </FormBox>
          </Col>
        </Row>
      </Container>
    </CaixaLogin>
  );
};

export default Login;
