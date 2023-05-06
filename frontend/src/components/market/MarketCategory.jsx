import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Category } from '../../styles/MarketStyle'

const MarketCategory = () => {
  return (
    <>
      <Category >
      <Nav>
          <Nav.Item >
            <Nav.Link href="/market/all" >마켓홈</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/market/package">패키지</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/market/tour">투어</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/market/ticket">티켓</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/market/transportation">교통</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/market/accommodation">숙소</Nav.Link>
          </Nav.Item>
        </Nav>

        </Category>
    </>
  )
}

export default MarketCategory
