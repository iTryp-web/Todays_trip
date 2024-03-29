import styled from "styled-components";


export const PageNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 10px;
`;

export const PageButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin: 8px;
  width: 30px;
  height: 30px;
  color: #253D5E;
  background: #EDF5FE;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  line-height: 5px;
  &:hover {
    background: #84B6F7;
    cursor: pointer;
    color: white;
  }
  &[aria-current] {
    color: white;
    background: #84B6F7;
    cursor: revert;
  }
`;