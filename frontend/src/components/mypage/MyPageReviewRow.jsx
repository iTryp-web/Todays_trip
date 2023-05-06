import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReportTr } from '../../styles/MyPageBoardStyle'
import { FaHeart } from 'react-icons/fa'

const MyPageReviewRow = ({review}) => {
  const navigate = useNavigate()

  return (
    <>
      <ReportTr onClick={() => navigate('/market/detail/'+review.market_no)} >
        <th className='reportItemTd'>
          {review.market_title}
        </th>
        <th className='reportItemTd'>
          {review.review_content}
          <span className='icon'>
            <FaHeart style={{marginBottom: '3px'}} />
            <span className='text'>
              {review.like_count}
            </span>
          </span>
        </th>
        <th className='reportItemTd'>
          {new Date(review.review_date).toLocaleString('ko-KR')}
        </th>
        <th className='reportItemTd'>
          {review.review_star}
        </th>
      </ReportTr>
    </>
  )
}

export default MyPageReviewRow