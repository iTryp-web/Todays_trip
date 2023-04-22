import React from 'react'
import { ReportTr, ReportUl } from '../../styles/AdminStyle'
import { Table } from 'react-bootstrap'
import { useState } from 'react';
import Pagination from '../include/Pagination';
import { adminBanDeleteDB, adminStatusUpdateDB } from '../../service/adminLogic';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminBanList = ({userBanList, boardBanList, commentBanList, selectedBan}) => {
  const navigate = useNavigate()
  // 페이지네이션
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // 취소버튼
  const btnCancel = async(type, uId, bno, cno, cstep) => {
    let deleteType = {}
    if(type === '회원') {
      console.log('회원' + uId);
      deleteType = {
        report_type: 4,
        status: 0,
        user_id: uId,
      }
    } else if(type === '글') {
      console.log('글' + bno);
      deleteType = {
        report_type: 0,
        board_status: 0,
        board_no: bno,
      }
    } else if(type === '댓글') {
      console.log('댓글' + cno + cstep);
      deleteType = {
        report_type: 1,
        comment_status: 0,
        comment_no: cno,
        comment_step: cstep,
      }
    }
    const res = await adminStatusUpdateDB(deleteType)
    console.log(res.data);
    window.location.reload()
  }

  return (
    <>
      <ReportUl>
        <Table>
          <colgroup>
            <col style={{ width: "18%" }} />
            <col style={{ width: "18%" }} />
            <col style={{ width: "18%" }} />
            <col style={{ width: "18%" }} />
            <col style={{ width: "18%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <thead>
            <tr>
              <th className='reportTd'>아이디</th>
              <th className='reportTd'>
                {selectedBan === '회원' ? '닉네임' : '글번호'}
              </th>
              <th className='reportTd'>
                {selectedBan === '회원' ? '이름' : (
                  selectedBan === '글' ? '카테고리' : '댓글번호'
                )}
              </th>
              <th className='reportTd'>
                {selectedBan === '회원' ? '전화번호' : (
                  selectedBan === '글' ? '제목' : '대댓번호'
                )}
                </th>
              <th className='reportTd'>
                {selectedBan === '회원' ? '등급' : '등록일'}
              </th>
              <th className='reportTdLast'>삭제</th>
            </tr>
          </thead>

          {selectedBan === '회원' ? 
            (userBanList.slice(offset, offset + limit).map((user) => {
              return (
                (user.status == 2 ? (
                  <ReportTr result={user.status}>
                    <th className='reportItemTd'>
                      {user.user_id}
                    </th>
                    <th className='reportItemTd'>
                      {user.user_nickname}
                    </th>
                    <th className='reportItemTd'>
                      {user.user_name}
                    </th>
                    <th className='reportItemTd'>
                      {user.user_phone}
                    </th>
                    <th className='reportItemTd'>
                      {user.user_level}
                    </th>
                    {/* type, uId, bno, cno, cstep */}
                    <th onClick={() => btnCancel('회원', user.user_id, -1, -1, -1)}>
                      <p className='btnApply'>취소</p>
                    </th>
                  </ReportTr>
                ) : null)
              )
            }))
          : null }
          {selectedBan === '글' ? 
            (boardBanList.slice(offset, offset + limit).map((board) => {
              return (
                (board.board_status == 1 ? (
                  <ReportTr result={board.board_status}>
                    <th className='reportItemTd'>
                      {board.user_id}
                    </th>
                    <th className='reportItemTd'>
                      {board.board_no}
                    </th>
                    <th className='reportItemTd'>
                      {board.board_category}
                    </th>
                    <th className='reportItemTd'>
                      {board.board_title}
                    </th>
                    <th className='reportItemTd'>
                      {board.board_date}
                    </th>
                    {/* type, uId, bno, cno, cstep */}
                    <th onClick={() => btnCancel('글', board.user_id, board.board_no, -1, -1)}>
                      <p className='btnApply'>취소</p>
                    </th>
                  </ReportTr>
                ) : null)
              )
            }))
          : null }
          {selectedBan === '댓글' ? 
            (commentBanList.slice(offset, offset + limit).map((comment) => {
              return (
                (comment.comment_status == 2 ? (
                  <ReportTr result={1}>
                    <th className='reportItemTd'>
                      {comment.user_id}
                    </th>
                    <th className='reportItemTd'>
                      {comment.board_no}
                    </th>
                    <th className='reportItemTd'>
                      {comment.comment_no}
                    </th>
                    <th className='reportItemTd'>
                      {comment.comment_step}
                    </th>
                    <th className='reportItemTd'>
                      {comment.comment_date}
                    </th>
                    {/* type, uId, bno, cno, cstep */}
                    <th onClick={() => btnCancel('댓글', comment.user_id, comment.board_no, comment.comment_no, comment.comment_step)}>
                      <p className='btnApply'>취소</p>
                    </th>
                  </ReportTr>
                ) : null)
              )
            }))
          : null }
        <tr>
          <td colSpan="7">
            {selectedBan === '회원' && userBanList.length > limit ? (<Pagination total={userBanList.length} limit={limit} page={page} setPage={setPage} />) : null}
            {selectedBan === '글' && boardBanList.length > limit ? (<Pagination total={boardBanList.length} limit={limit} page={page} setPage={setPage} />) : null}
            {selectedBan === '댓글' && commentBanList.length > limit ? (<Pagination total={commentBanList.length} limit={limit} page={page} setPage={setPage} />) : null}
          </td>
        </tr>
        </Table>
      </ReportUl>
    </>
  )
}

export default AdminBanList
