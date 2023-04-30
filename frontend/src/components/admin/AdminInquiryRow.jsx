import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReportTr } from '../../styles/AdminStyle'

const AdminInquiryRow = ({inquiry, refresh}) => {
  const navigate = useNavigate()

  return (
    <>
      <ReportTr result={inquiry.qna_step}  onClick={() => navigate('/support/inquiryBoard')}>
        <th className='reportTdPlus'>
          {inquiry.qna_no}
        </th>
        <th className='reportTdPlus'>
          {inquiry.user_id}
        </th>
        <th className='reportTdPlus'>
          {inquiry.qna_title}
        </th>
        <th className='reportTdPlus'>
          {inquiry.qna_date}
        </th>
        <th className='reportTdPlus'>
          {inquiry.qna_step == 0 ? '미처리' : '답변완료'}
        </th>
      </ReportTr> 
    </>
  )
}

export default AdminInquiryRow