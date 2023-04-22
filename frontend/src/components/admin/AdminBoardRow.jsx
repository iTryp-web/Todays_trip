import React from 'react'
import { ReportTr } from '../../styles/AdminStyle';
import { useNavigate } from 'react-router-dom';

const AdminBoardRow = ({board, user}) => {
  const navigate = useNavigate()
  const movePage = () => {
    navigate('/board/detail/'+board.board_no)
  }

  return (
    <>
      <ReportTr result={board.board_status}>
        <th className='reportItemTd' onClick={() => movePage()}>
          {board.type_board === 0 ? '글' : null}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {user}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {board.board_title}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {new Date(board.board_date).toLocaleDateString('ko-KR')}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {board.board_status === 0 ? '게시중' : '차단'}
        </th>
      </ReportTr>
    </>
  )
}

export default AdminBoardRow