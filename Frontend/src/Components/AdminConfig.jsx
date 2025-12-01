import { useState } from "react";
import { Container } from "react-bootstrap";
import { PageWrapper, Title, TabsWrapper, TabButton, CardBox } from "../Styles/ConfigStyles";

import PerfilForm from "./AdminPerfil";
import PagamentoForm from "./AdminPagamento";
import SegurancaForm from "./AdminSeguranca";

const ConfigPage = () => {
  const [tab, setTab] = useState("perfil");

  return (
    <PageWrapper>
      <Container>
        <Title>Configurações</Title>

        <TabsWrapper>
          <TabButton active={tab === "perfil"} onClick={() => setTab("perfil")}>
            Perfil
          </TabButton>

          <TabButton active={tab === "pagamento"} onClick={() => setTab("pagamento")}>
            Pagamento
          </TabButton>

          <TabButton active={tab === "seguranca"} onClick={() => setTab("seguranca")}>
            Segurança
          </TabButton>
        </TabsWrapper>

        <CardBox>
          {tab === "perfil" && <PerfilForm />}
          {tab === "pagamento" && <PagamentoForm />}
          {tab === "seguranca" && <SegurancaForm />}
        </CardBox>
      </Container>
    </PageWrapper>
  );
};

export default ConfigPage;
