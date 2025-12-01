import { Form, Button } from "react-bootstrap";

const SegurancaForm = () => {
  return (
    <>
      <h4>Segurança</h4>
      <p style={{ color: "#7a5c50" }}>
        Gerencie a segurança da sua conta.
      </p>

      <Form className="mt-4" style={{ maxWidth: 350 }}>
        <Form.Group className="mb-3">
          <Form.Label>Senha Atual</Form.Label>
          <Form.Control type="password" placeholder="••••••" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nova Senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirmar Nova Senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button variant="danger">Salvar Alterações</Button>
      </Form>
    </>
  );
};

export default SegurancaForm;
