import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReportTr } from '../../styles/MyPageBoardStyle'

const MyPageQnaRow = ({qna, selectedQna}) => {
  const navigate = useNavigate()

  // 페이지 이동
  const movePage = (sort, mno) => {
    if(sort === 0 || sort === 1) {
      navigate('/market/detail/'+mno)
    } else if(sort === 2 || sort === 4) {
      navigate('/support/inquiryBoard')
    }
  }

  // 태그삭제
  const removeTag = (content) => {
    if(content) {
      const newText = content.replace(/(<([^>]+)>)/gi,'');
      console.log(newText)
      return newText
    }
  }

   // 출력할 리스트 - 카테고리 조건에따라 출력위해 함수사용
  const QnaList = () => {
    return (
      <ReportTr onClick={() => movePage(qna.qna_sort, qna.market_no)} >
        <th className='reportItemTd'>
          {qna.qna_title}
        </th>
        <th className='reportItemTd'>
          {removeTag(qna.qna_content)}
        </th>
        <th className='reportItemTd'>
          {new Date(qna.qna_date).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          })}
          <br />
          {new Date(qna.qna_date).toLocaleTimeString('ko-KR')}
        </th>
        <th className='reportItemTd'>
          {qna.qna_step === 0 ? '미답변' : '답변완료'}
        </th>
      </ReportTr>
    )
  }

  return (
    <>
      {selectedQna === '마켓 문의' && (qna.qna_sort === 0 || qna.qna_sort === 1) ? (
        QnaList()
      ) : (selectedQna === '1:1 문의' && (qna.qna_sort === 2 || qna.qna_sort === 4) ? (
        QnaList()
        ) : null
        )}
    </>
  )
}

export default MyPageQnaRow