import { Container, Row, Col } from "react-bootstrap";
import { FooterWrapper, FooterBottom } from "../Styles/Footer";

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={6}>
            <h6 className="text-uppercase mb-2"></h6>
            <div style={{maxHeight: "28px"}}></div>
          </Col>
        </Row>
      </Container>

      <FooterBottom>
        <Container style={{padding: "28px"}}>
          <Row className="justify-content-between align-items-center text-center text-md-start" >
            <Col md="auto">
              <a href="#" className="text-white text-decoration-none me-3">
                Privacy Policy
              </a>
            </Col>
            <Col md="auto">
              <span>All Rights Reserved © 2025</span>
            </Col>
            <Col md="auto">
              <a href="#" className="text-white text-decoration-none">
                Terms of Use
              </a>
            </Col>
          </Row>
        </Container>
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
