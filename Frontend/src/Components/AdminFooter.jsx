import React from "react";
import styled from "styled-components";

const RodanoPe = styled.footer`
  padding: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  border-top: 1px solid #eee;
  background: #fff;
`;

const AdminFooter = () => <RodanoPe>© {new Date().getFullYear()} Churros & Cia — Painel Administrativo</RodanoPe>;

export default AdminFooter;
