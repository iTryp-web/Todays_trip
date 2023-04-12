import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavSup = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const BtnSup = styled.button`
  background-color: transparent;
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.active ? '#007bff' : '#f8f9fa')};
    color: ${(props) => (props.active ? '#fff' : '#333')};
  }
`;