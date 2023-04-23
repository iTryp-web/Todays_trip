import React, { useState } from 'react'
import { RiQuestionnaireFill } from 'react-icons/ri';
import { ReviewUI } from '../../styles/MarketStyle'
import Pagination from '../include/Pagination';
import { qnaData } from './MarketData';
import QnaRow from './QnaRow';

const MarketQna = ({mno}) => {
  //문의글 갯수
  const qcount=qnaData.length;
  // 페이지넘기기
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <>
      <ReviewUI>
        <div className='reviewheader'>
          <h5 >
            <RiQuestionnaireFill size='30' color='#4996F3'/>
            &nbsp;&nbsp;문의&nbsp;{qcount}</h5>
          &nbsp;&nbsp;
          
        </div>
          
        {/* 리뷰 리스트 */}
        {/* <ul>{reviews&&//데이터가 한건도 없는 경우를 고려
              reviews.map((review)=>(
                <ReviewRow key={review.review_no} review={review}/>
              ))
                }</ul> */}
        {/* 문의 가데이터 */}
        <ul>{qnaData&&//데이터가 한건도 없는 경우를 고려
              qnaData.slice(offset, offset + limit).map((qna)=>(
                <QnaRow key={qnaData.qna_no} qna={qna}/>
              ))
                }</ul> 

        
        <Pagination total={qnaData.length} limit={limit} page={page} setPage={setPage} />
      </ReviewUI>
    </>
  )
}

export default MarketQna
