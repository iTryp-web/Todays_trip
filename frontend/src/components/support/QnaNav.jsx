import { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Button = styled.button`
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

function Navbar() {
  const [activeBtn, setActiveBtn] = useState('전체');

  const handleClick = (btnName) => {
    setActiveBtn(btnName);
  };

  const buttons = ['전체', '결제', '환불', '판매자등록', '환불', '서비스'];

  return (
    <>
      <Nav>
        {buttons.map((buttonName) => (
          <NavLink
            key={buttonName}
            to={`/${buttonName}`}
            activeClassName="active"
            onClick={() => handleClick(buttonName)}
          >
            <Button active={buttonName === activeBtn}>{buttonName}</Button>
          </NavLink>
        ))}
      </Nav>
      <Route exact path="/allFaqs">
        전체 페이지입니다.
      </Route>
      <Route exact path="/payment">
        결제 페이지입니다.
      </Route>
      <Route exact path="/refund">
        환불 페이지입니다.
      </Route>
      <Route exact path="/sellerJoin">
        판매자등록 페이지입니다.
      </Route>
      <Route exact path="/service">
        서비스 페이지입니다.
      </Route>
    </>
  );
}

export default Navbar;