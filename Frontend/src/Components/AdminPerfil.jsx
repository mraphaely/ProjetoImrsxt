import { Row, Col, Form, Button } from "react-bootstrap";

const PerfilForm = () => {
  return (
    <>
      <h4>Perfil do Food Truck</h4>
      <p style={{ color: "#7a5c50" }}>
        Configure as informações básicas de exibição do seu Food Truck.
      </p>

      <Form className="mt-4">
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nome do Food Truck</Form.Label>
              <Form.Control type="text" placeholder="Churros & Cia" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Horário de Funcionamento</Form.Label>
              <div style={{ display: "flex", gap: "10px" }}>
                <Form.Control type="time" />
                <Form.Control type="time" />
              </div>
            </Form.Group>

            <Button variant="danger">Salvar Alterações</Button>
          </Col>

          <Col md={6} style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                border: "1px solid #e2b6ac",
                padding: 20,
                width: 180,
                height: 180,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
              }}
            >
              <img src="/logo.png" alt="Logo" style={{ width: "100%", borderRadius: 10 }} />
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default PerfilForm;
