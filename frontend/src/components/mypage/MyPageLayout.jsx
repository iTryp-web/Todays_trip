import React from 'react'
import { mypageCategories, qnaCategories } from './myPageData';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useEffect } from 'react';
import MyPageBoardRow from './MyPageBoardRow';
import Pagination from '../include/Pagination';
import { myPageBoardDB, myPageQnaDB, myPageRepleDB, myPageReviewDB, myPagelikeDB } from '../../service/myPageLogic';
import MyPageReplyRow from './MyPageReplyRow';
import MyPageLikeRow from './MyPageLikeRow';
import { AContentSection, AdminCategory, AdminCategoryLi, AdminCategoryUl, AdminPageUl, AdminSection, QnaCategory, ReportUl } from '../../styles/MyPageBoardStyle';
import { Nav, Table } from 'react-bootstrap';
import MyPageReviewRow from './MyPageReviewRow';
import MyPageQnaRow from './MyPageQnaRow';

const MyPageLayout = () => {
  // 화면전환
  const navigate = useNavigate()
  // 페이지네이션
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  // 새로고침용 변수
  const [start, setStart] = useState()
  const refresh = () => {
    console.log('refresh');
    setStart(new Date())
  }
  // 파라미터의 카테고리값
  let {category} = useParams()
  console.log(category);
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  
  useEffect(() => {
    if(!userId) {
      navigate('/')
    }
  }, [userId])

  // 게시판 변수
  const [boardList, setBoardList] = useState([])
  const [replyList, setReplyList] = useState([])
  const [likeList, setLikeList] = useState([])
  const [reviewList, setReviewList] = useState([])
  const [qnaList, setQnaList] = useState([])

  /* 왼쪽 카테고리 */
  // 선택한 카테고리 담기
  const [selected, setSelected] = useState('내가 쓴 글')
  const handleCategory =  useCallback((name) => {
    let category = ''
    {mypageCategories.map((item) => {
      if(item.name === name) {
        category = item.category
      }
    })}
    navigate('/mypage/' + category)
  }, [])
  useEffect(() => {
    let name = ''
    {mypageCategories.map((item) => {
      if(item.category === category) {
        name = item.name
      }
    })}
    console.log('effect=> ' + name);
    setSelected(name)
  }, [category])

  /* 문의 상단 카테고리 - 마켓 0 마켓비밀1 1:1 문의 2 1:1비밀 4 */
  const [selectedQna, setSelectedQna] = useState('마켓 문의')

  /* 목록 불러오기*/
  useEffect(() => {
    const mypageload = async() => {
      const user = {
        user_id: userId
      }
      const list = []
      // 작성글
      if(selected === '내가 쓴 글') {
        const res = await myPageBoardDB(user)
        console.log(res.data);
        const temp = JSON.stringify(res.data)
        const jsonDoc = JSON.parse(temp)
        if(jsonDoc.length > 0) {
          for(let i=0; i<jsonDoc.length; i++) {
            const obj = {
              board_no: jsonDoc[i].BOARD_NO,
              board_category: jsonDoc[i].BOARD_CATEGORY,
              board_title: jsonDoc[i].BOARD_TITLE,
              board_date: jsonDoc[i].BOARD_DATE,
              board_hit: jsonDoc[i].BOARD_HIT,
              comment_count: jsonDoc[i].COMMENT_COUNT,
              like_count: jsonDoc[i].LIKE_COUNT,
            }
            console.log(obj);
            list.push(obj)
          }
          setBoardList(list)
        }
      }
      // 작성댓글
      else if(selected === '내가 쓴 댓글') {
        const res = await myPageRepleDB(user)
        console.log(res.data);
        const temp = JSON.stringify(res.data)
        const jsonDoc = JSON.parse(temp)
        if(jsonDoc.length > 0) {
          for(let i=0; i<jsonDoc.length; i++) {
            const obj = {
              board_no: jsonDoc[i].BOARD_NO,
              board_title: jsonDoc[i].BOARD_TITLE,
              comment_no: jsonDoc[i].COMMENT_NO,
              comment_content: jsonDoc[i].COMMENT_CONTENT,
              comment_date: jsonDoc[i].COMMENT_DATE,
              like_count: jsonDoc[i].LIKE_COUNT,
            }
            console.log(obj);
            list.push(obj)
          }
          setReplyList(list)
        }
      }
      // 좋아요누른 글
      else if(selected === '좋아요 누른 글') {
        const res = await myPagelikeDB(user)
        console.log(res.data);
        const temp = JSON.stringify(res.data)
        const jsonDoc = JSON.parse(temp)
        if(jsonDoc.length > 0) {
          for(let i=0; i<jsonDoc.length; i++) {
            const obj = {
              board_no: jsonDoc[i].BOARD_NO,
              board_category: jsonDoc[i].BOARD_CATEGORY,
              board_title: jsonDoc[i].BOARD_TITLE,
              board_date: jsonDoc[i].BOARD_DATE,
              board_hit: jsonDoc[i].BOARD_HIT,
              board_content: jsonDoc[i].BOARD_CONTENT,
              like_date: jsonDoc[i].LIKE_DATE,
              like_count: jsonDoc[i].LIKE_COUNT,
              comment_count: jsonDoc[i].COMMENT_COUNT,
            }
            console.log(obj);
            list.push(obj)
          }
          setLikeList(list)
        }
      }
      // 작성 리뷰
      else if(selected === '작성한 리뷰') {
        const res = await myPageReviewDB(user)
        console.log(res.data);
        const temp = JSON.stringify(res.data)
        const jsonDoc = JSON.parse(temp)
        if(jsonDoc.length > 0) {
          for(let i=0; i<jsonDoc.length; i++) {
            const obj = {
              market_title: jsonDoc[i].MARKET_TITLE,
              market_no: jsonDoc[i].MARKET_NO,
              review_no: jsonDoc[i].REVIEW_NO,
              review_star: jsonDoc[i].REVIEW_STAR,
              review_content: jsonDoc[i].REVIEW_CONTENT,
              review_date: jsonDoc[i].REVIEW_DATE,
              like_count: jsonDoc[i].LIKE_COUNT,
            }
            console.log(obj);
            list.push(obj)
          }
          setReviewList(list)
        }
      }
      // 작성 문의(마켓, 1:1) - qna_sort 마켓0 마켓비밀1 | 1:1 문의2 1:1비밀4
      else if(selected === '작성한 문의') {
        const res = await myPageQnaDB(user)
        console.log(res.data);
        const temp = JSON.stringify(res.data)
        const jsonDoc = JSON.parse(temp)
        if(jsonDoc.length > 0) {
          for(let i=0; i<jsonDoc.length; i++) {
            const obj = {
              qna_no: jsonDoc[i].QNA_NO,
              qna_step: jsonDoc[i].QNA_STEP,
              market_no: jsonDoc[i].MARKET_NO,
              qna_title: jsonDoc[i].QNA_TITLE,
              qna_content: jsonDoc[i].QNA_CONTENT,
              qna_date: jsonDoc[i].QNA_DATE,
              qna_sort: jsonDoc[i].QNA_SORT,
            }
            console.log(obj);
            list.push(obj)
          }
          setQnaList(list)
        }
      }
    }
    mypageload();
  }, [selected, start])
  
  return (
    <>
      <AdminSection>
        {/* 왼쪽 카테고리 */}
        <AdminCategory>
          <AdminPageUl onClick={() => navigate('/mypage/board')}>
            작성글 목록
          </AdminPageUl>
          <AdminCategoryUl>
            {mypageCategories &&
              mypageCategories.map((category) => {
                return (
                  <AdminCategoryLi
                    key={category.name}
                    active={category.name === selected}
                    onClick={() => handleCategory(category.name)}
                    >
                    <img src={category.img} alt={category.category} />
                    {category.name}
                  </AdminCategoryLi>
                );
              })}
          </AdminCategoryUl>
        </AdminCategory>

        {/* 오른쪽 글 내용 */}
        <AContentSection className='content'>
          {/* 작성글 목록 */}
          {selected === '내가 쓴 글' ? (
            <ul>
              {boardList && boardList.slice(offset, offset + limit).map((board) => {
                return <MyPageBoardRow key={board.board_no} board={board} />
              })}
              <div>
              {boardList.length > limit ? (<Pagination total={boardList.length} limit={limit} page={page} setPage={setPage} />) : null}
              </div>
            </ul>
          ) : null}

          {/* 작성 댓글 목록 */}
          {selected === '내가 쓴 댓글' ? (
            <ul>
              {replyList && replyList.slice(offset, offset + limit).map((reply) => {
                return <MyPageReplyRow key={reply.comment_no} reply={reply} />
              })}
              <div>
              {replyList.length > limit ? (<Pagination total={replyList.length} limit={limit} page={page} setPage={setPage} />) : null}
              </div>
            </ul>
          ) : null}

          {/* 좋아요 글 */}
          {selected === '좋아요 누른 글' ? (
            <ul>
              {likeList && likeList.slice(offset, offset + limit).map((like) => {
                return <MyPageLikeRow key={like.board_no} like={like} />
              })}
              <div>
              {likeList.length > limit ? (<Pagination total={likeList.length} limit={limit} page={page} setPage={setPage} />) : null}
              </div>
            </ul>
          ) : null}

          {/* 작성한 리뷰 */}
          {selected === '작성한 리뷰' ? (
            <ReportUl>
              <Table>
                <colgroup>
                  <col style={{ width: "35%" }} />
                  <col style={{ width: "40%" }} />
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th className='reportTd'>상품명</th>
                    <th className='reportTd'>리뷰내용</th>
                    <th className='reportTd'>작성일</th>
                    <th className='reportTdLast'>별점</th>
                  </tr>
                </thead>
              {reviewList && reviewList.slice(offset, offset + limit).map((review) => {
                return <MyPageReviewRow key={review.review_no} review={review} />
              })}
              <tr>
                <td colSpan="4">
              {reviewList.length > limit ? (<Pagination total={reviewList.length} limit={limit} page={page} setPage={setPage} />) : null}
                </td>
              </tr>
              </Table>
            </ReportUl>
          ) : null}

          {/* 작성한 문의 */}
          {selected === '작성한 문의' ? (
            <ReportUl>
              <Table>
                <thead>
                  <tr>
                    <td colSpan="4">
                      <Nav className='qnaNav' fill variant="tabs">
                        {qnaCategories && qnaCategories.map((qnaCategory) => (
                          <Nav.Item>
                              <Nav.Link
                                onClick={() => setSelectedQna(qnaCategory.name)}>
                                <QnaCategory active={qnaCategory.name === selectedQna}>{qnaCategory.name}</QnaCategory>
                              </Nav.Link>
                            </Nav.Item>
                        ))}
                      </Nav>
                    </td>
                  </tr>
                </thead>
                <colgroup>
                  <col style={{ width: "35%" }} />
                  <col style={{ width: "35%" }} />
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "15%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th className='reportTd'>문의제목</th>
                    <th className='reportTd'>문의내용</th>
                    <th className='reportTd'>작성일</th>
                    <th className='reportTdLast'>상태</th>
                  </tr>
                </thead>
              {qnaList && qnaList.slice(offset, offset + limit).map((qna) => {
                return <MyPageQnaRow key={qna.qna_title} qna={qna} selectedQna={selectedQna} />
              })}
              <tr>
                <td colSpan="4">
              {qnaList.length > limit ? (<Pagination total={qnaList.length} limit={limit} page={page} setPage={setPage} />) : null}
                </td>
              </tr>
              </Table>
            </ReportUl>
          ) : null}
        </AContentSection>
      </AdminSection>
    </>
  )
}

export default MyPageLayout
