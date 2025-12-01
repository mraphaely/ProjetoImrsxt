import { Form, Button } from "react-bootstrap";

const PagamentoForm = () => {
  return (
    <>
      <h4>Formas de Pagamento</h4>
      <p style={{ color: "#7a5c50" }}>
        Configure os métodos de pagamento aceitos.
      </p>

      <Form className="mt-4" style={{ maxWidth: 350 }}>
        {["Pix", "Cartão de Crédito", "Cartão de Débito", "Dinheiro"].map((item) => (
          <Form.Check
            key={item}
            type="switch"
            id={item}
            label={item}
            className="mb-2"
          />
        ))}

        <Button variant="danger" className="mt-3">
          Salvar Alterações
        </Button>
      </Form>
    </>
  );
};

export default PagamentoForm;
