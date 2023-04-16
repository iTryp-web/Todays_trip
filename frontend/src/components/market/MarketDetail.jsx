import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../include/Header';
import Footer from '../include/Footer';
import { BodyContainer, BtnCommentInsert, BtnDot, BtnDotComment, CategoryDiv, Comment, CommentBox, CommentContainer, CommentContent, CommentDate, CommentDiv, CommentImg, CommentInput, CommentLike, CommentModal, CommentModalUl, CommentReply, CommentUser, CountDiv, DetailContent, DetailSection, DetailTitle, DetialContainer, FontContent, HrLine, InputComment, InputDiv, Like, ModalDiv, ModalUl, Profile, ReCommentInput, ReactIcon, ReplyIcon, TitleContainer, User, UserImg, UserWrap, Username } from '../../styles/BoardStyle';
import { AiFillLike } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { BsArrowReturnLeft, BsArrowReturnRight, BsBookmarkStar, BsBookmarkStarFill, BsThreeDotsVertical } from 'react-icons/bs';

import { categories, profileImg } from './MarketData';
import { marketDetailDB } from '../../service/marketLogic';


const MarketDetail = () => {
  const navigate = useNavigate()

   // 해시값으로 글번호 가져오기
  const {mno} = useParams()
  console.log("mno => " + mno);

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수 - 단위테스트용!
  const [userId, setUserId] = useState('test1')
  const [userNickname, setUserNickname] = useState('테스트1')

  // 상세보기 정보  변수 - file_exist(파일존재여부), liked(좋아요 누른 게시물인지 아닌지 판별) 고려하기!!
  const [detailPost, setDetailPost] = useState({})
  
  // 리뷰 좋아요 변수
  const [liked, setLiked] = useState([{}])
  // 리뷰 좋아요 판별 변수
  const [isLiked, setIsLiked] = useState(false)
  // useEffect 실행용 변수
  const [start, setStart] = useState('')
  // 해당글 카테고리 저장
  const [category, setCategory] = useState('all')

  /* db에서 판매글 상세보기 정보 가져오기 */
  useEffect(() => {
    const marketDetail = async() => {
      const market = {
        market_no: mno,
        user_nickname: userNickname
      }
      const res = await marketDetailDB(market)
      console.log(res.data)
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      
     
      // 상세보기 db 담기
      setDetailPost({
        market_no: jsonDoc[0].MARKET_NO,
        user_nickname: jsonDoc[0].USER_NICKNAME,
        type_market: jsonDoc[0].TYPE_MARKET,
        market_category: jsonDoc[0].MARKET_CATEGORY,
        market_title: jsonDoc[0].MARKET_TITLE,
        market_content: jsonDoc[0].MARKET_CONTENT,
        market_price: jsonDoc[0].MARKET_PRICE,
        market_date: jsonDoc[0].MARKET_DATE,
      
       
      })
      // 카테고리 담기
      {categories.map((item) => {
        if(item.name == jsonDoc[0].MARKET_CATEGORY) {
          setCategory(item.category)
          console.log('1!!!'+item.category);//1은 무슨 뜻인가여 정윤짱
        }
      })}
      console.log(category);
      //리뷰 전체조회
      
      // 리뷰 좋아요확인 db 담기
      const Likelist = []
      if(jsonDoc.length > jsonDoc[0].LIKE_COUNT+1) {
        for(let i=jsonDoc[0].COMMENT_COUNT+1; i<jsonDoc.length; i++) {
          const obj = {
            like_type: jsonDoc[i].LIKE_TYPE,
            like_no: jsonDoc[i].LIKE_NO,
            like_group: jsonDoc[i].LIKE_GROUP,
            like_step: jsonDoc[i].LIKE_STEP,
            
          }
          Likelist.push(obj)
          if(obj.like_type == 0 && obj.like_no == bno && obj.like_group == -1) {
            setIsLiked(true)
          }
        }
      }
      setLiked(list2)
    }
    marketDetail()
  }, [isLiked, bno, start])

  /* 게시글 Dot버튼-신고하기*/
  const [is_ClickBtnDot, setClickBtnDot] = useState(false);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
  };
  // 글 삭제 버튼
  const deletePost = async () => {
    console.log('deletePost' + mno);
    const market = {
      market_no: mno,
    }
    const res = await marketDeleteDB(market)
    console.log('deletePost=> ' + res.data);
    navigate('/market')//마켓페이지로 돌아가기
  }
  // 글 수정 버튼
  const editPost = () => {
    console.log('editPost');
  };
  // 글 신고 버튼
  const reportPost = () => {
    console.log('reportPost');
  };

  /* 좋아요 버튼 */  
  const likeOn = async(type, group, step) => {
    const market = {
      user_id: userId,
      like_type: type,
      like_no: bno,
      like_group: group,
      like_step: step,
    }
    const res = await likeOnDB(market)
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
    const market = {
      user_id: userId,
      like_type: type,
      like_no: bno,
      like_group: group,
      like_step: step,
    }
    const res = await likeOffDB(market)
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
    const market = {
      market_no: bno,
      user_id: userId,
      comment_content: comment
    }
    const res = await replyInsertDB(market)
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
  const deleteComment = async (cno, cstep) => {
    console.log('deleteComment' + bno, cno, cstep);
    const market = {
      market_no: bno,
      comment_no: cno,
      comment_step: cstep,
    }
    const res = await replyDeleteDB(market)
    console.log('deleteComment=> ' + res.data);
    setCommentDot({})
    setStart(new Date())
  }
  // Dot 모달 수정
  const editComment = async (cno, cstep) => {
    console.log('editComment' + bno, cno, cstep);
  };
  // Dot 모달 신고
  const reportComment = async (cno, cstep) => {
    console.log('reportComment' + bno, cno, cstep);
  };

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
    const market = {
      market_no: bno,
      user_id: userId,
      comment_no: cno,
      comment_step: 1,
      comment_content: reComment
    }
    const res = await replyInsertDB(market)
    console.log(res.data)
    setReComment('') // 코멘트 초기화
    const reCommentInput = document.getElementById('reCommentInput')
    reCommentInput.value = '' // 코멘트 input창 초기화
    setCommentReply({}) // 답글쓰기 창 초기화
    setStart(new Date()) // useEffect 부르는 용도
  }

  return (
    <>
    <Header />
      <DetailSection>
          <DetialContainer>
            <TitleContainer>
              <CategoryDiv>
                <Link className='detailLink' to="/market/all">커뮤니티</Link> &gt;{' '}
                <Link className='detailLink' to={`/market/${category}`}>{detailPost.market_category}</Link>
              </CategoryDiv>
              <DetailTitle>{detailPost.market_title}</DetailTitle>
              <Profile>
                <UserImg>
                  <img className='userImg' src={profileImg[Math.floor(((new Date(detailPost.market_date).getSeconds())%10))]} alt="" />
                </UserImg>
                <UserWrap>
                  <Username>{detailPost.user_nickname}</Username>
                  <User>
                    {new Date(detailPost.market_date).toLocaleString()}{' · '}조회{' '}
                    {detailPost.market_hit}
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
                    <ModalUl onClick={reportPost}>신고하기</ModalUl>
                    </ModalDiv>
                    )) : null}
              </Profile>
              <HrLine />
            </TitleContainer>

            <BodyContainer>
              <DetailContent>
                {detailPost.market_content}
              </DetailContent>
              <CountDiv>
                <Like
                  onClick={() => {
                    {
                      /* type, group, step */
                      isLiked ? likeOff(0, -1, 0) : likeOn(0, -1, 0);
                    }
                  }}
                >
                  <ReactIcon>
                    <AiFillLike color={isLiked ? '#4996F3' : 'gray'} />
                  </ReactIcon>
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

              {comments.map((item) => {
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
                    <CommentDiv>
                      <CommentUser>{item.user_nickname}</CommentUser>
                      <CommentContent status={item.comment_status}>{item.comment_content}</CommentContent>
                      <CommentDate>
                        {new Date(item.comment_date).toLocaleString()}
                      </CommentDate>
                      {item.comment_status === 0 ? (
                        <CommentLike iconColor={commentColor(item.comment_no, item.comment_step)}
                          onClick={() => {
                            btnCommentLike(item.comment_no, item.comment_step
                            )}}>
                          <AiFillLike className='like-icon' />
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
                    {userNickname  && item.comment_status === 0 ?(
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
                      <CommentModalUl id='' onClick={() => 
                        {editComment(item.comment_no, item.comment_step)}}>
                        수정하기
                      </CommentModalUl>
                      <CommentModalUl onClick={() => 
                        {deleteComment(item.comment_no, item.comment_step)}}>
                        삭제하기
                      </CommentModalUl>
                    </CommentModal>
                      ) : (
                      <CommentModal>
                        <CommentModalUl onClick={() => 
                          {reportComment(item.comment_no, item.comment_step)}}>
                          신고하기
                        </CommentModalUl>
                      </CommentModal>
                      )) : 
                    null}
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

export default MarketDetail
