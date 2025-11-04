import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

export const PageWrapper = styled.div`
  background-color: #fff;
  padding: 40px 20px;
  min-height: 100vh;
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  color: #000;
  margin: 50px 0 25px;
  text-transform: uppercase;
  font-size: 1.1rem;
  border-bottom: 2px solid #f2f2f2;
  padding-bottom: 8px;
`;

export const StyledCard = styled(Card)`
  width: 230px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const CardImage = styled(Card.Img)`
  height: 140px;
  object-fit: cover;
`;

export const CardBody = styled(Card.Body)`
  background: #fffaf9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
`;

export const CardTitle = styled(Card.Title)`
  font-size: 0.9rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 5px;
`;

export const CardText = styled(Card.Text)`
  font-size: 0.85rem;
  color: #555;
`;

export const AddButton = styled(Button)`
  background-color: #c1121f;
  border: none;
  width: 100%;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 6px 0;

  &:hover {
    background-color: #a50f18;
  }
`;
