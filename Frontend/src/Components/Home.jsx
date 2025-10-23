import img3 from '../imgs/Caixa2.png'
import {Caixa,Spanmini2, Span1, Span2, SpanMini4, H2, P4, Btn4, Span3,P3,Btn2, SpanBtn2, Caixinha2, Img2} from '../Styles/Home'

import React from "react";
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";
import {H1, ButtonGet} from '../Styles/PagGetItens.js'


const Home = () => {
  const [eventos, setEventos] = React.useState([]);

  React.useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get("http://localhost:3333/eventos/listar");
        if (response.data && Array.isArray(response.data.eventos)) {
          setEventos(response.data.eventos);
        } else {
          setEventos([]);
          console.log(fetchEventos)
          console.log("A resposta da API não contém um array.");
        }
      } catch (error) {
        console.error("Erro ao listar eventos:", error);
        setEventos([]);
      }
    };

    fetchEventos();
  }, []);

    return(
        <>
    
        <Caixa>
            <Span1>
                   <Container className='container' style={{backgroundColor: "#fff", height: "90vh"}}>
      <Row  style={{backgroundColor: "#fff"}}  className="justify-content-md-center">
        <Col> 
        <H1> Churros:</H1>
        </Col>
      </Row>
      <Row style={{backgroundColor: "#fff", margin: "0"}}>
        <Col sm>    
        <Container striped bordered hover>
      <tbody className="d-flex">
        {eventos.length > 0 ? (
          eventos.map((evento) => (
            <React.Fragment key={evento.id}>
              <div className="d-flex justify-content-around">
              <Card className="important-padding2" style={{ width: '355px', height:'355px', background: 'linear-gradient( #2D0065 50%, #5A00CB)',fontSize:'24px'  }}>
                  <Card.Img variant="top" src={`http://localhost:3333/images/${evento.image}`} />
                  <Card.Body>
                    <Card.Title  style={{ color: '#fff', marginLeft: '20px', marginTop: '20px' }}>{evento.titulo}</Card.Title>
                    <Card.Text style={{color:'#fff', width:'344px', marginLeft: '20px', marginTop: '10px', fontSize:'20px' }}>{evento.palestrante}</Card.Text>
                    <Card.Text style={{color:'#fff', width:'344px', marginLeft: '20px', marginTop: '10px', fontSize:'20px' }}>{evento.descricao}</Card.Text>
                    <ButtonGet  className="ButtomEventos" to={'/selecionarEvento'}>Saiba mais</ButtonGet>
                  </Card.Body>
                </Card>
              </div>
            </React.Fragment>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{backgroundColor: "#fff", color: "#000"}}>Nenhum arquivo disponível</td>
          </tr>
        )}
      </tbody>
    </Container></Col>
      </Row>
      </Container>
            </Span1>

            <Span2>
                <Caixinha2>
                <Img2 src={img3}/>
                <P3>
                 Geral
                </P3>
                <SpanBtn2>
                    <Spanmini2>
                    <Btn2 to={'PagEventosGeral'}> Learn more</Btn2>
                    </Spanmini2>
                </SpanBtn2>
                </Caixinha2>    
            </Span2>

            <Span3>
                <SpanMini4>
                <H2>Faça login para criar ou participar</H2>
                <P4>lorem ipsum amet,  simpli team  printing
theme make types icluding page maker labore active presents</P4>
                </SpanMini4>
                <Btn4 to={'PagLogin'}>CLICK</Btn4>
            </Span3>

        </Caixa>
        </>
    );
};

export default Home;