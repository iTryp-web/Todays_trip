import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Category } from '../../styles/MarketStyle'

const MarketCategory = () => {
  return (
    <>
      <Category >
      <Nav 
          activeKey="/market"
          onSelect={(selectedKey) => alert(`마켓홈 ${selectedKey}`)}
          >
          <Nav.Item >
            <Nav.Link href="/market" >마켓홈</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/market/write">패키지</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">투어</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">티켓</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="link-4">교통</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="link-5">숙소</Nav.Link>
          </Nav.Item>
        </Nav>

        </Category>
    </>
  )
}

export default MarketCategory
