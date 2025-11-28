import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 0.1rem 0; 
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 2rem;

  p {
    color: #b0b0b0;
  }
`;

export const FooterBottom = styled.div`
  background-color: #b71c1c; 
  padding: 0.1rem 0 !important;
   color: #fff;
  font-size: 0.9rem;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem; /* espaço links */

    &:hover {
      text-decoration: underline;
    }
  }
`;
