import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../include/Header';
import Footer from '../include/Footer';
import { DetailSection } from '../../styles/BoardStyle';

const BoardDetail = () => {
  const {bno} = useParams() // 해시값으로 가져오기
  console.log(bno);

  return (
    <>
    <Header />
      <DetailSection>
        {bno}번글
      </DetailSection>
    <Footer />
    </>
  )
}

export default BoardDetail
