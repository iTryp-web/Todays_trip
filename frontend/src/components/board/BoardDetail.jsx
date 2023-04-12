import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../include/Header';
import Footer from '../include/Footer';
import { BodyContainer, BtnCommentInsert, BtnDot, BtnDotComment, CategoryDiv, Comment, CommentBox, CommentContainer, CommentContent, CommentDate, CommentImg, CommentInput, CommentLike, CommentModal, CommentModalUl, CommentUser, CountDiv, DetailContent, DetailSection, DetailTitle, DetialContainer, FontContent, HrLine, InputDiv, Like, ModalDiv, ModalUl, Profile, ReactIcon, TitleContainer, User, UserImg, UserWrap, Username } from '../../styles/BoardStyle';
import { RiUser3Line } from 'react-icons/ri';

import { AiFillLike } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { boardDetailDB } from '../../service/boardLogic';
import { PostFooter } from '../../styles/BoardStyle';


const BoardDetail = () => {
  const navigate = useNavigate()
  const {bno} = useParams() // 해시값으로 가져오기
  console.log("bno => " + bno);
  // 로그인할때 세션스토리지에 닉네임담고 여기서 꺼낼 것!
  sessionStorage.setItem('nickname', '테스트1') // 단위테스트용 닉네임
  const userNickname = sessionStorage.getItem('nickname')

  // 디테일포스트 정보 담을 변수 - file_exist(파일존재여부), liked(좋아요 누른 게시물인지 아닌지 판별) 고려하기!!
  const [detailPost, setDetailPost] = useState({})
  // 코멘트 정보 담을 변수
  const [comments, setComments] = useState([{}])

  useEffect(() => {
    const boardDetail = async() => {
      const board = {
        board_no: bno,
        user_nickname: userNickname
      }
      const res = await boardDetailDB(board)
      console.log(res.data)
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      // 댓글 담을 배열 선언
      const list = []
      if(jsonDoc.length > 1) {
        for(let i=1; i<jsonDoc.length; i++) {
          const obj = {
            user_nickname: jsonDoc[i].USER_NICKNAME,
            comment_no: jsonDoc[i].COMMENT_NO,
            comment_step: jsonDoc[i].COMMENT_STEP,
            comment_content: jsonDoc[i].COMMENT_CONTENT,
            comment_date: jsonDoc[i].COMMENT_DATE,
            type_comment: jsonDoc[i].TYPE_COMMENT,
            comment_status: jsonDoc[i].COMMENT_STATUS,
            like_count: jsonDoc[i].LIKE_COUNT,
            like_type: jsonDoc[i].LIKE_TYPE,
            like_no: jsonDoc[i].LIKE_NO,
            like_group: jsonDoc[i].LIKE_GROUP,
            like_step: jsonDoc[i].LIKE_STEP,
          }
          console.log(obj);
          list.push(obj)
        }
      }
      setComments(list)
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
    }
    boardDetail()
  }, [setDetailPost, setComments, bno])

  
  // 게시글 Dot버튼 - 신고'수정'삭제뜨는 버튼
  const [is_ClickBtnDot, setClickBtnDot] = useState(false);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
  };
  // 글 삭제 버튼
  const deletePost = async () => {
    console.log('deletePost');
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
  const likeOn = () => {
    console.log('좋아요');
  }
  const likeOff = () => {
    console.log('좋아요 취소');
  }

  /* 댓글 */
  const comment_input = React.useRef('');

  const [comment, seComment] = useState('');
  const handleComment = (e) => {
    seComment(e);
  };
  // 댓글 Dot버튼 - 신고'수정'삭제뜨는 버튼
  const [commentDot, setCommentDot] = useState({});
  // 댓글, 대댓글 번호 담기
  const onClickCommentDot = (cno, cstep) => {
    if(commentDot.cno === cno && commentDot.cstep === cstep) {
      setCommentDot({})
    } else {
      setCommentDot({cno, cstep});
    }
  };
  const deleteComment = async (bno, cno, cstep) => {
    console.log('deleteComment' + bno, cno, cstep);
  }
  const editComment = async (bno, cno, cstep) => {
    console.log('editComment' + bno, cno, cstep);
  };
  const reportComment = async (bno, cno, cstep) => {
    console.log('reportComment' + bno, cno, cstep);
  };

  return (
    <>
    <Header />
      <DetailSection>
          <DetialContainer>
            <TitleContainer>
              <CategoryDiv>
                <Link className='detailLink' to="/board">커뮤니티</Link> &gt;{' '}
                {detailPost.board_category}
              </CategoryDiv>
              <DetailTitle>{detailPost.board_title}</DetailTitle>
              <Profile>
                <UserImg>
                  <RiUser3Line />
                </UserImg>
                <UserWrap>
                  <Username>{detailPost.user_nickname}</Username>
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
                    <ModalUl onClick={reportPost}>신고하기</ModalUl>
                    </ModalDiv>
                    )) : null}
              </Profile>
              <HrLine />
            </TitleContainer>

            <BodyContainer>
              <DetailContent>
                {detailPost.board_content}
              </DetailContent>
              <CountDiv>
                <Like
                  onClick={() => {
                    {
                      detailPost.liked ? likeOff() : likeOn();
                    }
                  }}
                >
                  <ReactIcon>
                    <AiFillLike color={detailPost.liked ? '#4996F3' : 'gray'} />
                  </ReactIcon>
                  <FontContent liked={!!detailPost.liked}>
                    좋아요 {detailPost.like_count? detailPost.like_count : 0}
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
                  <FaCommentDots className='commentIcon'
                  />
                </ReactIcon>
                <CommentInput
                  placeholder="댓글을 남겨보세요"
                  ref={comment_input}
                  onChange={handleComment}
                  maxLength={255}
                />
                {comment ? (
                  <BtnCommentInsert
                    onClick={() => {
                      /* const data = {
                        comment_content: comment,
                      };
                      mutate(data); */
                    }}
                  >
                    등록
                  </BtnCommentInsert>
                ) : null}
              </InputDiv>

              {comments.map((item) => {
                if(item.comment_no >= 0) {
                return (
                  <CommentBox key={item.comment_date}>
                    <CommentImg>
                      <RiUser3Line />
                    </CommentImg>
                    <div>
                      <CommentUser>{item.user_nickname}</CommentUser>
                      <CommentContent>{item.comment_content}</CommentContent>
                      <CommentDate>
                        {new Date(item.comment_date).toLocaleString()}
                      </CommentDate>
                      <CommentLike>
                        <AiFillLike className='like-icon' />
                        <span className='like-count'>{item.like_count ? item.like_count : 0}</span>
                      </CommentLike>
                    </div>
                    {userNickname  && (
                      <BtnDotComment
                        onClick={() => {
                          onClickCommentDot(item.comment_no, item.comment_step);
                        }}
                      >
                        <BsThreeDotsVertical />
                      </BtnDotComment>
                    )}
                {commentDot.cno === item.comment_no && commentDot.cstep === item.comment_step ? (
                  userNickname === item.user_nickname ? (
                  <CommentModal>
                      <CommentModalUl id='' onClick={() => {editComment(item.board_no, item.comment_no, item.comment_step)}}>수정하기</CommentModalUl>
                      <CommentModalUl onClick={() => {deleteComment(item.board_no, item.comment_no, item.comment_step)}}>삭제하기</CommentModalUl>
                  </CommentModal>
                    ) : (
                    <CommentModal>
                    <CommentModalUl onClick={() => {reportComment(item.board_no, item.comment_no, item.comment_step)}}>신고하기</CommentModalUl>
                    </CommentModal>
                    )) : null}
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
