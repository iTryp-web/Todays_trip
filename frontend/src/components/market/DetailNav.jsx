import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Navblock } from '../../styles/MarketStyle';
import MarketQna from './MarketQna';
import MarketReview from './MarketReview';


const DetailNav = ({mno}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('review');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      
      <Nav fill variant="tabs" defaultActiveKey="review">
        <Nav.Item>
          <Nav.Link eventKey="review" active={activeTab === 'review'} onClick={() => handleTabClick('review')}>
            리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="qna" active={activeTab === 'qna'} onClick={() => handleTabClick('qna')}>
            문의
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navblock>
        {activeTab === 'review' && <MarketReview mno={mno} />}
        {activeTab === 'qna' && <MarketQna mno={mno} />}
      </Navblock>
    </>
  );
};

export default DetailNav
