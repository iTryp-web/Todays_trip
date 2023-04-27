import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../include/Header';
import Footer from '../include/Footer';
import { BodyContainer, BtnCommentInsert, BtnDot, BtnDotComment, BtnReport, CategoryDiv, Comment, CommentBox, CommentContainer, CommentContent, CommentDate, CommentDiv, CommentImg, CommentInput, CommentLike, CommentModal, CommentModalUl, CommentReply, CommentUser, CountDiv, DetailContent, DetailSection, DetailTitle, DetialContainer, EditText, FontContent, HrLine, InputComment, InputDiv, InputReport, Like, ModalCommentUserDiv, ModalCommentUserReport, ModalDiv, ModalReport, ModalUl, ModalUserDiv, ModalUserReport, Profile, ReCommentInput, ReactIcon, ReplyIcon, ReportText, TitleContainer, User, UserImg, UserWrap, Username } from '../../styles/BoardStyle';
import { AiFillLike } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { BsArrowReturnLeft, BsArrowReturnRight, BsBookmarkStar, BsBookmarkStarFill, BsThreeDotsVertical } from 'react-icons/bs';
import { boardDeleteDB, boardDetailDB, likeOffDB, likeOnDB, replyDeleteDB, replyInsertDB, replyUpdateDB, reportDB } from '../../service/boardLogic';
import { categories, profileImg } from './boardData';
import { HiOutlineX } from 'react-icons/hi';


const BoardDetail = () => {
  const navigate = useNavigate()

   // 해시값으로 글번호 가져오기
  const {bno} = useParams()
  console.log("bno => " + bno);

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))

  // 상세보기 정보  변수 - file_exist(파일존재여부), liked(좋아요 누른 게시물인지 아닌지 판별) 고려하기!!
  const [detailPost, setDetailPost] = useState({})
  // 댓글 정보 변수
  const [comments, setComments] = useState([{}])
  // 유저 좋아요 변수
  const [liked, setLiked] = useState([{}])
  // 좋아요 판별 변수
  const [isLiked, setIsLiked] = useState(false)
  // useEffect 실행용 변수
  const [start, setStart] = useState('')
  // 해당글 카테고리 저장
  const [category, setCategory] = useState('all')

  /* db에서 상세보기 정보 가져오기 */
  useEffect(() => {
    const boardDetail = async() => {
      let tempNick = ''
      if(userNickname != null) {
        tempNick = window.sessionStorage.getItem('user_nickname')
      }
      const board = {
        board_no: bno,
        board_update: '상세보기',
        user_nickname: tempNick
      }
      const res = await boardDetailDB(board)
      console.log(res.data)
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      // 댓글 db 담기
      const list1 = []
      if(jsonDoc.length > 1) {
        for(let i=1; i<jsonDoc[0].COMMENT_COUNT+1; i++) {
          const obj = {
            user_nickname: jsonDoc[i].USER_NICKNAME,
            comment_no: jsonDoc[i].COMMENT_NO,
            comment_step: jsonDoc[i].COMMENT_STEP,
            comment_content: jsonDoc[i].COMMENT_CONTENT,
            comment_date: jsonDoc[i].COMMENT_DATE,
            type_comment: jsonDoc[i].TYPE_COMMENT,
            comment_status: jsonDoc[i].COMMENT_STATUS,
            like_count: jsonDoc[i].LIKE_COUNT,
          }
          console.log(obj);
          list1.push(obj)
        }
      }
      setComments(list1)
      // 상세보기 db 담기
      setDetailPost({
        board_no: jsonDoc[0].BOARD_NO,
        user_nickname: jsonDoc[0].USER_NICKNAME,
        board_category: jsonDoc[0].BOARD_CATEGORY,
        board_title: jsonDoc[0].BOARD_TITLE,
        board_content: jsonDoc[0].BOARD_CONTENT,
        board_date: jsonDoc[0].BOARD_DATE,
        board_hit: jsonDoc[0].BOARD_HIT,
        type_board: jsonDoc[0].TYPE_BOARD,
        like_count: jsonDoc[0].LIKE_COUNT,
        comment_count: jsonDoc[0].COMMENT_COUNT,
      })
      // 카테고리 담기
      {categories.map((item) => {
        if(item.name == jsonDoc[0].BOARD_CATEGORY) {
          setCategory(item.category)
          console.log('카테고리 담기=> '+item.category);
        }
      })}
      console.log(category);
      // 유저 좋아요확인 db 담기
      const list2 = []
      if(jsonDoc.length > jsonDoc[0].COMMENT_COUNT+1) {
        for(let i=jsonDoc[0].COMMENT_COUNT+1; i<jsonDoc.length; i++) {
          const obj = {
            like_type: jsonDoc[i].LIKE_TYPE,
            like_no: jsonDoc[i].LIKE_NO,
            like_group: jsonDoc[i].LIKE_GROUP,
            like_step: jsonDoc[i].LIKE_STEP,
            
          }
          list2.push(obj)
          if(obj.like_type == 0 && obj.like_no == bno && obj.like_group == -1) {
            setIsLiked(true)
          }
        }
      }
      setLiked(list2)
    }
    boardDetail()
  }, [isLiked, bno, start])

  /* 게시글 Dot버튼 */
  const [is_ClickBtnDot, setClickBtnDot] = useState(false);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
  };
  // 글 삭제 버튼
  const deletePost = async () => {
    console.log('deletePost' + bno);
    const board = {
      board_no: bno,
    }
    const res = await boardDeleteDB(board)
    console.log('deletePost=> ' + res.data);
    navigate('/board/all?page=1')
  }
  // 글 수정 버튼
  const editPost = () => {
    console.log('editPost');
    navigate('/board/update/'+bno)
  };
  // 글 신고 버튼
  const reportPost = () => {
    console.log('reportPost=> ' + bno);
    setIsReport(true)
    setClickBtnDot(false)
  };
  // 글 신고 취소 버튼
  const reportCancel = () => {
    console.log('reportCancel=> ' + bno);
    setIsReport(false)
    setIsCommentReport(false)
    setCommentDot({})
    setClickBtnDot(false)
    setIsUserReport(false)
    setCommentUserReport({})
  }
  // 신고창, 신고사유 변수
  const [isReport, setIsReport] = useState(false)
  const [isCommentReport, setIsCommentReport] = useState(false)
  const[reportReason, setReportReason] = useState('')
  const handleReportPost = useCallback((e) => {
    console.log(e);
    setReportReason(e);
  },[]);
  // db 신고하기
  const report = async(type, no, step, rUser) => {
    console.log('report=> ' + type + ", " + no + ", " + step + ", " + rUser + ", " + reportReason);
    setIsReport(false)
    setIsCommentReport(false)
    setIsUserReport(false)
    setCommentUserReport({})
    const board = {
      user_id: sessionStorage.getItem('user_id'),
      report_type: type,
      report_num: bno,
      report_group: no,
      report_step: step,
      report_user: rUser,
      report_reason: reportReason,
    }
    const res = await reportDB(board)
    console.log(res.data)
  }

  /* 좋아요 버튼 */  
  const likeOn = async(type, group, step) => {
    const board = {
      user_id: userId,
      like_type: type,
      like_no: bno,
      like_group: group,
      like_step: step,
    }
    const res = await likeOnDB(board)
    console.log('likeOn=> ' + res.data);
    // 글 좋아요인 경우
    if(type === 0) {
      setIsLiked(true)
    }
    // 댓글 좋아요인 경우
      else if (type === 1) {
        setStart(new Date())
    }
  }
  // 좋아요 취소
  const likeOff = async(type, group, step) => {
    const board = {
      user_id: userId,
      like_type: type,
      like_no: bno,
      like_group: group,
      like_step: step,
    }
    const res = await likeOffDB(board)
    console.log('likeOff=> ' + res.data);
    // 글 좋아요인 경우
    if(type === 0) {
      setIsLiked(false)
    }
    // 댓글 좋아요인 경우
      else if (type === 1) {
        setStart(new Date())
    }
  }
  // 글 좋아요 설정
  useEffect (() => {
    {liked && liked.map((item) => (
      item.like_type === 0 && item.like_no === bno && item.like_group === -1 ?
      setIsLiked(true) : setIsLiked(false)
    ))}
  }, [setDetailPost, setComments, setLiked, bno])
  // 댓글 좋아요 버튼
  const btnCommentLike = (cno, cstep) => {
    let judge = 0
    {liked && liked.map((item) => {
      if(item.like_type === 1 && item.like_group == cno && item.like_step == cstep) {
        judge = judge+1
      }
    })}
    // 댓글 좋아요 누른 기록이 있을 경우
    if(judge > 0) {
      likeOff(1, cno, cstep)
      console.log('좋아요취소=> ' + judge);
    }
    // 댓글 좋아요 누른 기록 없는 경우
    else {
      likeOn(1, cno, cstep)
      console.log('좋아요확인=> ' + judge);
    }
  }
  // 댓글 좋아요 색 판별
  const commentColor = (cno, cstep) => {
    let judge = 0
    {liked && liked.map((item) => {
      if(item.like_type === 1 && item.like_group == cno && item.like_step == cstep) {
        judge++
      }
    })}
    // 댓글 좋아요 누른 기록이 있을 경우
    if(judge > 0) {
      return "#4996F3"
    }
  }

  /* 댓글 */
  // 댓글 내용 담기
  const [comment, setComment] = useState('');
  const handleComment = (e) => {
    console.log(e);
    setComment(e);
  };
  // 댓글달기 버튼
  const btnComment = async() => {
    const board = {
      board_no: bno,
      user_id: userId,
      comment_content: comment
    }
    const res = await replyInsertDB(board)
    console.log(res.data)
    setComment('') // 코멘트 초기화
    const commentInput = document.getElementById('commentInput')
    commentInput.value = '' // 코멘트 input창 초기화
    setStart(new Date()) // useEffect 부르는 용도
  }
  // 댓글 Dot버튼 - 신고'수정'삭제뜨는 버튼
  const [commentDot, setCommentDot] = useState({});
  // Dot 댓글, 대댓글 번호 담기
  const onClickCommentDot = (cno, cstep) => {
    if(commentDot.cno === cno && commentDot.cstep === cstep) {
      setCommentDot({})
    } else {
      setCommentDot({cno, cstep});
    }
  };
  // Dot 모달 삭제
  const deleteComment = async (cno, cstep, cstatus) => {
    console.log('deleteComment' + bno, cno, cstep);
    const board = {
      user_id: userId,
      board_no: bno,
      comment_no: cno,
      comment_step: cstep,
      comment_status: cstatus,
    }
    const res = await replyDeleteDB(board)
    console.log('deleteComment=> ' + res.data);
    setCommentDot({})
    setStart(new Date())
  }
  // Dot 모달 수정
  const [newComment, setNewComment] = useState('');
  const handleNewComment = (e) => {
    console.log(e);
    setNewComment(e);
  };
  // 어떤글 수정하는지 확인용
  const [commentEdit, setCommentEdit] = useState({})
  // 수정 여부 확인
  const [isCommentEdit, setIsCommentEdit] = useState(false)
  const editComment = async (cno, cstep) => {
    console.log('editComment' + cno, cstep);
    setCommentEdit({cno, cstep});
    setIsCommentEdit(true)
    setCommentDot({})
  };
  // 댓글 수정 버튼
  const btnCommentUpdate = async(cno, cstep) => {
    const board = {
      comment_no: cno,
      comment_step: cstep,
      comment_content: newComment,
      comment_status: 3
    }
    const res = await replyUpdateDB(board)
    console.log(res.data)
    setIsCommentEdit(false)
    setNewComment('') // 코멘트 초기화
    const commentInput = document.getElementById('commentInput')
    commentInput.value = '' // 코멘트 input창 초기화
    setStart(new Date()) // useEffect 부르는 용도
  }
  // Dot 모달 신고
  // 어떤글 신고하는지 확인용
  const [commentReport, setCommentReport] = useState({})
  const reportComment = (cno, cstep) => {
    console.log('reportComment=> ' + bno);
    setCommentReport({cno, cstep});
    setIsCommentReport(true)
    setCommentDot({})
  }

  // 어떤글에 댓글다는지 확인용
  const [commentReply, setCommentReply] = useState({})
  // 댓글 답글쓰기 전환 버튼
  const BtncommentReply = (cno, cstep) => {
    if(commentReply.cno === cno && commentReply.cstep === cstep) {
      setCommentReply({})
    } else {
      setCommentReply({cno, cstep});
    }
  }
  // 답글 내용 담기
  const [reComment, setReComment] = useState('');
  const handleReComment = (e) => {
    console.log(e);
    setReComment(e);
  };
  // 답글달기 버튼
  const btnReComment = async(cno) => {
    const board = {
      board_no: bno,
      user_id: userId,
      comment_no: cno,
      comment_step: 1,
      comment_content: reComment
    }
    const res = await replyInsertDB(board)
    console.log(res.data)
    setReComment('') // 코멘트 초기화
    const reCommentInput = document.getElementById('reCommentInput')
    reCommentInput.value = '' // 코멘트 input창 초기화
    setCommentReply({}) // 답글쓰기 창 초기화
    setStart(new Date()) // useEffect 부르는 용도
  }

  /* 글 유저 신고하기 */
  const [isClickBtnUser, setIsClickBtnUser] = useState(false)
  const [isUserReport, setIsUserReport] = useState(false)
  const onClickBtnUser = () => {
    setIsClickBtnUser(!isClickBtnUser)
  }
  const reportUser = (userNickname) => {
    console.log('reportUser=> ' + userNickname);
    setIsUserReport(true)
    setIsClickBtnUser(false)
  }
  /* 댓글 유저 신고하기 */
  const [isClickBtnCommentUser, setIsClickBtnCommentUser] = useState(false)
  const [commentUser, setCommentUser] = useState({})
  const [commentUserReport, setCommentUserReport] = useState({})
  const onClickBtnCommentUser = (cno, cstep) => {
    console.log('onClickBtnCommentUser=> ' + cno + cstep);
    if(commentUser.cno === cno && commentUser.cstep === cstep) {
      setCommentUser({})
    } else {
      setCommentUser({cno, cstep});
    }
  }
  const reportCommentUser = (cno, cstep) => {
    setCommentUser({})
    if(commentUserReport.cno === cno && commentUserReport.cstep === cstep) {
      setCommentUserReport({})
    } else {
      setCommentUserReport({cno, cstep});
    }
  }

  return (
    <>
    <Header />
      <DetailSection>
          <DetialContainer>
            <TitleContainer>
              <CategoryDiv>
                <Link className='detailLink' to="/board/all?page=1">커뮤니티</Link> &gt;{' '}
                <Link className='detailLink' to={`/board/${category}?page=1`}>{detailPost.board_category}</Link>
              </CategoryDiv>
              <DetailTitle>{detailPost.board_title}</DetailTitle>
              <Profile>
                <UserImg>
                  <img className='userImg' src={profileImg[Math.floor(((new Date(detailPost.board_date).getSeconds())%10))]} alt="" />
                </UserImg>
                <UserWrap>
                  <Username isUser={userNickname === detailPost.user_nickname ? false : true}
                    onClick={() => {
                      onClickBtnUser()
                    }}
                  >{detailPost.user_nickname}</Username>
                  {isClickBtnUser && userNickname !== detailPost.user_nickname ? (
                    <ModalUserDiv className='user'>
                    <ModalUl onClick={() => reportUser(detailPost.user_nickname)}>신고하기</ModalUl>
                    </ModalUserDiv>
                    ) : (
                    null
                    )}
                    {isUserReport ? (
                      <ModalUserReport>
                        <HiOutlineX className='x-icon' onClick={() => reportCancel()} />
                      <ReportText
                        type="text"
                        maxLength="100"
                        placeholder="신고사유를 입력해주세요."
                        autoComplete="off"
                        onChange={(e)=>{handleReportPost(e.target.value)}}>
                      </ReportText>
                      {/* type, group, step, 신고대상 */}
                      <BtnReport onClick={() => report(4, -1, 0, detailPost.user_nickname)}>신고하기</BtnReport>
                    </ModalUserReport>
                    ) : null}
                  <User>
                    {new Date(detailPost.board_date).toLocaleString()}{' · '}조회{' '}
                    {detailPost.board_hit}
                  </User>
                </UserWrap>
                    {userNickname && (
                  <BtnDot
                    onClick={() => {
                      onClickBtnDot();
                    }}
                  >
                    <BsThreeDotsVertical />
                  </BtnDot>
                )}
                {is_ClickBtnDot ? (
                  userNickname === detailPost.user_nickname ? (
                  <ModalDiv>
                      <ModalUl onClick={editPost}>수정하기</ModalUl>
                      <ModalUl onClick={deletePost}>삭제하기</ModalUl>
                  </ModalDiv>
                    ) : (
                    <ModalDiv>
                    <ModalUl onClick={() => reportPost()}>신고하기</ModalUl>
                    </ModalDiv>
                    )) : null}
                    {isReport ? (
                      <ModalReport>
                        <HiOutlineX className='x-icon' onClick={() => reportCancel()} />
                      <ReportText
                        type="text"
                        maxLength="100"
                        placeholder="신고사유를 입력해주세요."
                        autoComplete="off"
                        onChange={(e)=>{handleReportPost(e.target.value)}}>
                      </ReportText>
                      {/* type, group, step, 신고대상 */}
                      <BtnReport onClick={() => report(0, -1, 0, detailPost.user_nickname)}>신고하기</BtnReport>
                    </ModalReport>
                    ) : null}
              </Profile>
              <HrLine />
            </TitleContainer>

            <BodyContainer>
              <section style={{minHeight: '400px'}}>
                <DetailContent dangerouslySetInnerHTML={{__html:detailPost.board_content}}>
                </DetailContent>
              </section>
              <CountDiv>
                <Like>
                  {isLiked ? (
                  <lord-icon
                  onClick={() => {
                    {
                      /* type, group, step */
                      isLiked ? likeOff(0, -1, 0) : likeOn(0, -1, 0);
                    }
                  }}
                  className='heart-icon'
                  src="https://cdn.lordicon.com/xryjrepg.json"
                  trigger="click"
                  colors="primary:#4996F3"
                  style={{width:"20px", height:"20px"}}>
                </lord-icon>
                  ) : (
                  <lord-icon
                    onClick={() => {
                      {
                        /* type, group, step */
                        isLiked ? likeOff(0, -1, 0) : likeOn(0, -1, 0);
                      }
                    }}
                    className='heart-icon'
                    src="https://cdn.lordicon.com/xryjrepg.json"
                    trigger="click"
                    colors="primary:#808080"
                    style={{width:"20px", height:"20px"}}>
                  </lord-icon>
                  )}
                  {/*  <AiFillLike color={isLiked ? '#4996F3' : 'gray'} /> */}
                  <FontContent liked={isLiked}>
                    좋아요 {detailPost.like_count ? detailPost.like_count : 0}
                  </FontContent>
                </Like>
                <Comment>
                  <ReactIcon>
                    <FaCommentDots />
                  </ReactIcon>
                  <FontContent>댓글 {detailPost.comment_count ? detailPost.comment_count : 0}</FontContent>
                </Comment>
              </CountDiv>
              <HrLine />
            </BodyContainer>

            <CommentContainer>
              <InputDiv>
                <ReactIcon>
                  <FaCommentDots
                  />
                </ReactIcon>
                <CommentInput
                  id='commentInput'
                  placeholder="댓글을 남겨보세요"
                  onChange={(e)=>{handleComment(e.target.value)}}
                  maxLength={255}
                />
                {comment ? (
                  <BtnCommentInsert
                    onClick={() => btnComment()}
                  >
                    등록
                  </BtnCommentInsert>
                ) : null}
              </InputDiv>

              {comments && comments.map((item) => {
                if(item.comment_no >= 0) {
                return (
                  <CommentBox key={item.comment_date}  liked={item.like_count} step={item.comment_step} status={item.comment_status} >
                    {item.comment_step > 0 ? 
                    (
                      <ReplyIcon>
                        <BsArrowReturnRight/>
                      </ReplyIcon>
                      ) : null}
                    <CommentImg>
                      <img className='commentImg' src={profileImg[Math.floor(((new Date(item.comment_date).getSeconds())%10))]} alt="" />
                    </CommentImg>
                    {isCommentEdit && commentEdit.cno === item.comment_no && commentEdit.cstep === item.comment_step ? (
                      <InputDiv>
                      <CommentInput
                        id='commentInput'
                        onChange={(e)=>{handleNewComment(e.target.value)}}
                        maxLength={255}
                        defaultValue={item.comment_content}>
                        </CommentInput>
                      <BtnCommentInsert
                        onClick={() => btnCommentUpdate(item.comment_no, item.comment_step)}
                      >
                        등록
                      </BtnCommentInsert>
                    </InputDiv>
                    ) : (
                    <CommentDiv>
                      <CommentUser isCommentUser={userNickname === item.user_nickname ? false : true}
                        onClick={() => {
                          onClickBtnCommentUser(item.comment_no, item.comment_step)
                        }}>
                      {item.user_nickname}
                    </CommentUser>
                    {commentUser.cno === item.comment_no && commentUser.cstep === item.comment_step && userNickname !== item.user_nickname ? (
                    <ModalCommentUserDiv cstep={item.comment_step}>
                    <ModalUl onClick={() => reportCommentUser(item.comment_no, item.comment_step, item.user_nickname)}>신고하기</ModalUl>
                    </ModalCommentUserDiv>
                    ) : (
                    null
                    )}
                    {commentUserReport.cno === item.comment_no && commentUserReport.cstep === item.comment_step ? (
                      <ModalCommentUserReport cstep={item.comment_step}>
                        <HiOutlineX className='x-icon' onClick={() => reportCancel()} />
                      <ReportText
                        type="text"
                        maxLength="100"
                        placeholder="신고사유를 입력해주세요."
                        autoComplete="off"
                        onChange={(e)=>{handleReportPost(e.target.value)}}>
                      </ReportText>
                      {/* type, group, step, 신고대상 */}
                      <BtnReport onClick={() => report(4, item.comment_no, item.comment_step, item.user_nickname)}>신고하기</BtnReport>
                    </ModalCommentUserReport>
                    ) : null}

                        {item.comment_status === 2 ? (
                          <CommentContent status={item.comment_status}>
                            <EditText>차단된 댓글입니다.</EditText>
                          </CommentContent>
                          ) : (
                          <CommentContent status={item.comment_status}>
                            {item.comment_content}
                            {item.comment_status === 3 ? <EditText>(수정됨)</EditText> : null}
                          </CommentContent>
                        )}
                      <CommentDate>
                        {new Date(item.comment_date).toLocaleString()}
                      </CommentDate>
                      {item.comment_status === 0 || item.comment_status === 3 ? (
                        <CommentLike iconColor={commentColor(item.comment_no, item.comment_step)}>
                          {/* <AiFillLike className='like-icon' /> */}
                          {commentColor(item.comment_no, item.comment_step) ? (
                            <lord-icon
                              onClick={() => {
                                btnCommentLike(item.comment_no, item.comment_step
                                )}}
                            className='heart-icon'
                            src="https://cdn.lordicon.com/xryjrepg.json"
                            trigger="click"
                            colors="primary:#4996F3"
                            style={{width:"15px", height:"15px"}}>
                          </lord-icon>
                            ) : (
                            <lord-icon
                              onClick={() => {
                                btnCommentLike(item.comment_no, item.comment_step
                                )}}
                              className='heart-icon'
                              src="https://cdn.lordicon.com/xryjrepg.json"
                              trigger="click"
                              colors="primary:#808080"
                              style={{width:"15px", height:"15px"}}>
                            </lord-icon>
                            )}

                          <span className='like-count'>{item.like_count ? item.like_count : 0}</span>
                        </CommentLike>
                      ) : null}
                      {item.comment_step === 0 ?
                      (
                      <CommentReply onClick={()=> BtncommentReply(item.comment_no, item.comment_step)}>
                        답글쓰기
                      </CommentReply>
                      ) : null}

                      {commentReply.cno === item.comment_no && commentReply.cstep === item.comment_step ? (
                      <InputComment>
                      <ReactIcon>
                        <BsArrowReturnRight className='commentIcon'
                        />
                      </ReactIcon>
                      <ReCommentInput
                        id='reCommentInput'
                        placeholder="답글을 남겨보세요"
                        onChange={(e)=>{handleReComment(e.target.value)}}
                        maxLength={255}
                      />
                      {reComment ? (
                        <BtnCommentInsert
                          onClick={() => btnReComment(item.comment_no)}
                        >
                          등록
                        </BtnCommentInsert>
                      ) : null}
                      </InputComment>
                      ) : null}
                    </CommentDiv>

                    )}
                    {userNickname  && (item.comment_status === 0 || item.comment_status === 3) ?(
                      <BtnDotComment
                        onClick={() => {
                          onClickCommentDot(item.comment_no, item.comment_step);
                        }}
                      >
                        <BsThreeDotsVertical />
                      </BtnDotComment>
                    ) : null}
                  {commentDot.cno === item.comment_no && commentDot.cstep === item.comment_step ? (
                    userNickname === item.user_nickname ? (
                    <CommentModal>
                      <CommentModalUl onClick={() => 
                        {editComment(item.comment_no, item.comment_step)}}>
                        수정하기
                      </CommentModalUl>
                      <CommentModalUl onClick={() => 
                        {deleteComment(item.comment_no, item.comment_step, item.comment_status)}}>
                        삭제하기
                      </CommentModalUl>
                    </CommentModal>
                      ) : (
                      <CommentModal>
                        <CommentModalUl onClick={() => 
                          reportComment(item.comment_no, item.comment_step)}>
                          신고하기
                        </CommentModalUl>
                      </CommentModal>
                      )) : 
                    null}
                    {isCommentReport && commentReport.cno === item.comment_no && commentReport.cstep === item.comment_step ? (
                      <ModalReport>
                        <HiOutlineX className='x-icon' onClick={() => reportCancel()} />
                      <ReportText
                        type="text"
                        maxLength="100"
                        placeholder="신고사유를 입력해주세요."
                        autoComplete="off"
                        onChange={(e)=>{handleReportPost(e.target.value)}}>
                      </ReportText>
                      {/* type, group, step, 신고대상 */}
                      <BtnReport onClick={() => report(1, item.comment_no, item.comment_step, item.user_nickname)}>신고하기</BtnReport>
                    </ModalReport>
                    ) : null}
                  </CommentBox>
                )}
              })}
            </CommentContainer>
          </DetialContainer>
      </DetailSection>
    <Footer />
    </>
  )
}

export default BoardDetail
