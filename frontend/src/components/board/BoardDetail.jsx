import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../include/Header';
import Footer from '../include/Footer';
import { BodyContainer, BtnCommentInsert, BtnDot, BtnDotComment, CategoryDiv, Comment, CommentBox, CommentContainer, CommentContent, CommentDate, CommentImg, CommentInput, CommentModal, CommentModalUl, CommentUser, CountDiv, DetailContent, DetailSection, DetailTitle, DetialContainer, FontContent, HrLine, InputDiv, Like, ModalDiv, ModalUl, Profile, ReactIcon, TitleContainer, User, UserImg, UserWrap, Username } from '../../styles/BoardStyle';
import { RiUser3Line } from 'react-icons/ri';

import { AiFillLike } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';


const BoardDetail = () => {
  const {bno} = useParams() // 해시값으로 가져오기
  console.log(bno);

  const [user, setUser] = useState('닉네임1')

  const [detailPost, setDetailPost] = useState([
    {
      board_no: 1,
      user_nickname: '닉네임1',
      board_category: '자유',
      board_title: '자유게시판 맞나요?',
      board_content: '이러쿵 저러쿵 어쩌구 저쩌구 긴 내용이 들어갈수도? 어느정도 하다보면 축약할수도???',
      board_date: '2023-04-07 09:09:12',
      board_hit: 10,
      board_like: 12,
      type_board: 123,
      board_comment: 12,
      file_exist: '1',
      liked: 'y', // 좋아요 누른 게시물인지 아닌지 판별
    }])

  const [comments, setComments] = useState([{
    board_no: 1,
    user_nickname: '닉닉',
    comment_no: 1,
    comment_step: 0,
    comment_content: 'ffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddhhhhhhhhhhhㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇhhhhhhfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddㅎ',
    comment_date: '2023-04-09 12:10:02',
    comment_like: 1,
  }])

  // 게시글 Dot버튼 - 신고'수정'삭제뜨는 버튼
  const [is_ClickBtnDot, setClickBtnDot] = useState(false);

  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
  };
  const deletePost = async () => {
    console.log('deletePost');
  }
  const editPost = () => {
    console.log('editPost');
  };
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
  const [is_ClickCommentDot, setClickCommentDot] = useState(false);

  const onClickCommentDot = () => {
    setClickCommentDot((is_ClickCommentDot) => !is_ClickCommentDot);
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
                {detailPost[0].board_category}
              </CategoryDiv>
              <DetailTitle>{detailPost[0].board_title}</DetailTitle>
              <Profile>
                <UserImg>
                  <RiUser3Line />
                </UserImg>
                <UserWrap>
                  <Username>{detailPost[0].user_nickname}</Username>
                  <User>
                    {new Date(detailPost[0].board_date).toLocaleString()}{' · '}조회{' '}
                    {detailPost[0].board_hit}
                  </User>
                </UserWrap>
                    {user && (
                  <BtnDot
                    onClick={() => {
                      onClickBtnDot();
                    }}
                  >
                    <BsThreeDotsVertical />
                  </BtnDot>
                )}
                {is_ClickBtnDot ? (
                  user === detailPost[0].user_nickname ? (
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
                {detailPost[0].board_content}
              </DetailContent>
              <CountDiv>
                <Like
                  onClick={() => {
                    {
                      detailPost[0].liked ? likeOff() : likeOn();
                    }
                  }}
                >
                  <ReactIcon>
                    <AiFillLike color={detailPost[0].liked ? '#4996F3' : 'gray'} />
                  </ReactIcon>
                  <FontContent liked={!!detailPost[0].liked}>
                    좋아요 {detailPost[0].board_like}
                  </FontContent>
                </Like>
                <Comment>
                  <ReactIcon>
                    <FaCommentDots />
                  </ReactIcon>
                  <FontContent>댓글 {detailPost[0].board_comment}</FontContent>
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
                return (
                  <CommentBox key={item.comment_no}>
                    <CommentImg>
                      <RiUser3Line />
                    </CommentImg>
                    <div>
                      <CommentUser>{item.user_nickname}</CommentUser>
                      <CommentContent>{item.comment_content}</CommentContent>
                      <CommentDate>
                        {new Date(item.comment_date).toLocaleString()}
                      </CommentDate>
                    </div>
                    {user  && (
                      <BtnDotComment
                        onClick={() => {
                          onClickCommentDot();
                        }}
                      >
                        <BsThreeDotsVertical />
                      </BtnDotComment>
                    )}
                {is_ClickCommentDot ? (
                  user === item.user_nickname ? (
                  <CommentModal>
                      <CommentModalUl onClick={editComment(item.board_no, item.comment_no, item.comment_step)}>수정하기</CommentModalUl>
                      <CommentModalUl onClick={deleteComment(item.board_no, item.comment_no, item.comment_step)}>삭제하기</CommentModalUl>
                  </CommentModal>
                    ) : (
                    <CommentModal>
                    <CommentModalUl onClick={reportComment(item.board_no, item.comment_no, item.comment_step)}>신고하기</CommentModalUl>
                    </CommentModal>
                    )) : null}
                  </CommentBox>
                );
              })}
            </CommentContainer>
          </DetialContainer>
      </DetailSection>
    <Footer />
    </>
  )
}

export default BoardDetail
