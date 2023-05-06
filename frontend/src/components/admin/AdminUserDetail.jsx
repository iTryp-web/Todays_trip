import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../include/Header'
import Footer from '../include/Footer'
import { AContentSection, AdminCategory, AdminCategoryLi, AdminCategoryUl, AdminPageUl, AdminSection, ReportUl } from '../../styles/AdminStyle'
import { adminUserDetailDB } from '../../service/adminLogic'
import { Table } from 'react-bootstrap'
import Pagination from '../include/Pagination'
import AdminBoardRow from './AdminBoardRow'
import { userDetail } from './adminData'
import AdminCommentRow from './AdminCommentRow'

const AdminUserDetail = () => {
  const navigate = useNavigate()

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))
  useEffect(() => {
    if(userRole != 2) {
      navigate('/')
    }
  }, [userId, userRole])
  
  // 페이지네이션
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  // 파라미터의 유저값
  let {user} = useParams()
  console.log(user);
  // 글과 댓글 담을 변수
  const [boardList, setBoardList] = useState([])
  const [commentList, setCommentList] = useState([])
  // 카테고리
  const [selected, setSelected] = useState('글')
  const changeCategory = (item) => {
    setSelected(item)
  }
  // 새로고침용 변수
  const [start, setStart] = useState()
  const refresh = () => {
    setStart(new Date())
  }

useEffect(() => {
  const userDetail = async() => {
    const  detail = {
      user_id: user
    }
    const res = await adminUserDetailDB(detail)
    console.log(res.data);
    const temp = JSON.stringify(res.data)
    const jsonDoc = JSON.parse(temp)
    // 유저 글 담기
    const list1 = []
    // 유저 댓글 담기
    const list2 = []
    if(jsonDoc.length > 0) {
      const board_count = jsonDoc[0].BOARD_COUNT
      const comment_count = jsonDoc[0].COMMENT_COUNT
      // 글 목록이 있는 경우
      if(board_count > 0) {
        for(let i=0; i<board_count; i++) {
          const obj = {
            board_no: jsonDoc[i].BOARD_NO,
            type_board: jsonDoc[i].TYPE_BOARD,
            board_title: jsonDoc[i].BOARD_TITLE,
            board_date: jsonDoc[i].BOARD_DATE,
            board_status: jsonDoc[i].BOARD_STATUS,
          }
          console.log(obj);
          list1.push(obj)
        }
        setBoardList(list1)
        // 댓글 목록이 있는 경우
        if(comment_count > 0) {
          for(let i=board_count; i<(board_count+comment_count); i++) {
            const obj = {
              board_no: jsonDoc[i].BOARD_NO,
              comment_no: jsonDoc[i].COMMENT_NO,
              comment_step: jsonDoc[i].COMMENT_STEP,
              type_comment: jsonDoc[i].TYPE_COMMENT,
              comment_content: jsonDoc[i].COMMENT_CONTENT,
              comment_date: jsonDoc[i].COMMENT_DATE,
              comment_status: jsonDoc[i].COMMENT_STATUS,
            }
            console.log(obj);
            list2.push(obj)
          }
          setCommentList(list2)
        }
      }
      // 글 목록이 없는 경우
      else {
        // 댓글 목록이 있는 경우
        if(comment_count > 0) {
          for(let i=0; i<comment_count; i++) {
            const obj = {
              board_no: jsonDoc[i].BOARD_NO,
              comment_no: jsonDoc[i].COMMENT_NO,
              comment_step: jsonDoc[i].COMMENT_STEP,
              type_comment: jsonDoc[i].TYPE_COMMENT,
              comment_content: jsonDoc[i].COMMENT_CONTENT,
              comment_date: jsonDoc[i].COMMENT_DATE,
              comment_status: jsonDoc[i].COMMENT_STATUS,
            }
            console.log(obj);
            list2.push(obj)
          }
          setCommentList(list2)
        }
      }
    }
  }
  userDetail()
}, [user])

  return (
    <>
      <Header />
        <AdminSection>
          {/* 왼쪽 카테고리 */}
          <AdminCategory>
            <AdminPageUl onClick={() => navigate('/admin/market')}>
              관리자 페이지
            </AdminPageUl>
              <AdminCategoryUl>
                {userDetail.map((item) => {
                  return(
                    <AdminCategoryLi
                      key={item.userNo}
                      active={item.userType === selected}
                      onClick={() => changeCategory(item.userType)}
                      >
                      {item.userType}
                    </AdminCategoryLi>
                  )
                })}
              </AdminCategoryUl>
            </AdminCategory>

          {/* 오른쪽 글 내용 */}
          <AContentSection>
            <ReportUl>
              <Table>
                <colgroup>
                  <col style={{ width: "10%" }} />
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "45%" }} />
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "15%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th className='reportTd'>유형</th>
                    <th className='reportTd'>대상</th>
                    <th className='reportTd'>{selected === '글' ? '작성글' : '댓글'}</th>
                    <th className='reportTd'>작성날짜</th>
                    <th className='reportTdLast'>상태</th>
                  </tr>
                </thead>
                {selected === '글' && boardList.length > 0 ? (
                  boardList.slice(offset, offset + limit).map((board) => {
                    return <AdminBoardRow key={board.board_no} board={board} refresh={refresh} user={user} />
                  })) : null}
                {selected === '댓글' && commentList.length > 0 ? (
                  commentList.slice(offset, offset + limit).map((comment) => {
                    return <AdminCommentRow key={comment.comment_date} comment={comment} refresh={refresh} user={user} />
                  })
                ) : null}
              <tr>
                <td colSpan="5">
              {selected === '글' && boardList.length > limit ? (<Pagination total={boardList.length} limit={limit} page={page} setPage={setPage} />) : (
                selected === '댓글' && commentList.length > limit ? (<Pagination total={commentList.length} limit={limit} page={page} setPage={setPage} />) : null
              )}
                </td>
              </tr>
              </Table>
            </ReportUl>
          </AContentSection>
        </AdminSection>
    <Footer />
    </>
  )
}

export default AdminUserDetail