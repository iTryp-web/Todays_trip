import React from 'react'
import { ReportTr } from '../../styles/AdminStyle';
import { useNavigate } from 'react-router-dom';

const AdminCommentRow = ({comment, user}) => {
  const navigate = useNavigate()
  const movePage = () => {
    navigate('/board/detail/'+comment.board_no)
  }

  return (
    <>
      <ReportTr result={comment.comment_status}>
        <th className='reportItemTd' onClick={() => movePage()}>
          {comment.type_comment === 1 ? '댓글' : null}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {user}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {comment.comment_content}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {new Date(comment.comment_date).toLocaleDateString('ko-KR')}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {comment.comment_status === 0 ? '게시중' : (
            comment.comment_status === 1 ? '삭제' : (
              comment.comment_status === 2 ? '차단' : '수정됨'             
              ))}
        </th>
      </ReportTr>
    </>
  )
}

export default AdminCommentRow