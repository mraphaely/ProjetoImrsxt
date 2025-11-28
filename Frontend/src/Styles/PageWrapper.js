import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px); 
  padding-top: 120px; 
  padding-bottom: 40px; 
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 100px;
  }

  @media (max-width: 576px) {
    padding-top: 95px;
    padding-bottom: 30px;
  }
`;
