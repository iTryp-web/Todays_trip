import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../include/Header';
import Footer from '../include/Footer';
import { BodyContainer, BtnCommentInsert, BtnDot, BtnDotComment, CategoryDiv, Comment, CommentBox, CommentContainer, CommentContent, CommentDate, CommentImg, CommentInput, CommentModal, CommentModalUl, CommentUser, CountDiv, DetailContent, DetailSection, DetailTitle, DetialContainer, Font, FontBtn, FontCommentbtn, FontContent, HrLine, InputDiv, Like, ModalDiv, ModalUl, Profile, TitleContainer, User, UserImg, UserWrap, Username } from '../../styles/BoardStyle';
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
      board_title: '12321321 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ 자유게시판에 자유롭게 쓰지 않을 자유도 있으면 자유롭게 못쓰게 되는데 자유게시판이 맞나요?',
      board_content: '<img src=이러쿵 저러쿵 어쩌구 저쩌구 긴 내용이 들어갈수도? 어느정도 하다보면 축약할수도???',
      board_date: '2023-04-08 14:10:02',
      board_hit: 10,
      board_like: 12,
      type_board: 123,
      board_comment: 12,
      file_exist: '1',
      liked: 'Y', // 좋아요 누른 게시물인지 아닌지 판별
    }])

  // Dot버튼 - 신고'수정'삭제뜨는 버튼
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

  const handleComment = (event) => {

  };

  return (
    <>
    <Header />
      <DetailSection>
          <DetialContainer>
            <TitleContainer>
              <CategoryDiv>
                <Link to="/board">커뮤니티</Link> &gt;{' '}
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
                    {new Date(detailPost.board_date).toLocaleString()}·조회{' '}
                    {detailPost.board_hit}
                  </User>
                </UserWrap>
                {user && (
                  <BtnDot
                    onClick={() => {
                      onClickBtnDot();
                    }}
                  >
                    <BsThreeDotsVertical
                      size="2x"
                      color="black" />
                  </BtnDot>
                )}
                {is_ClickBtnDot ? (
                  user === detailPost.user_nickname ? (
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
                  <Font>
                    <AiFillLike color={detailPost.liked ? '#4996F3' : 'gray'} />
                  </Font>
                  <FontContent liked={!!detailPost.liked}>
                    좋아요 {detailPost.board_like}
                  </FontContent>
                </Like>
                <Comment>
                  <Font>
                    <FaCommentDots />
                  </Font>
                  <FontContent>댓글 {detailPost.board_comment}</FontContent>
                </Comment>
              </CountDiv>
              <HrLine />
            </BodyContainer>
{/* 
            <CommentContainer>
              <InputDiv>
                <Font style={{ marginLeft: '7px' }}>
                  <BsChatDotsFill />
                </Font>
                <CommentInput
                  placeholder="댓글을 남겨보세요"
                  ref={comment_input}
                  onChange={handleComment}
                  maxLength={255}
                />
                {is_comment ? (
                  <BtnCommentInsert
                    onClick={() => {
                      const data = {
                        content: comment_input.current.value,
                      };
                      mutate(data);
                    }}
                  >
                    등록
                  </BtnCommentInsert>
                ) : null}
              </InputDiv> */}
{/* 
              {comments_query.data.map((v, i) => {
                return (
                  <CommentBox key={i}>
                    <CommentImg>
                      <RiUser3Line />
                    </CommentImg>
                    <div>
                      <CommentUser>{v.username}</CommentUser>
                      <CommentContent>{v.content}</CommentContent>
                      <CommentDate>
                        {new Date(v.createdAt).toLocaleString()}
                      </CommentDate>
                    </div>
                    {v.owner && (
                      <BtnDotComment
                        onClick={() => {
                          onClickComment(i);
                        }}
                      >
                        <BsThreeDotsVertical  color="black"  />
                      </BtnDotComment>
                    )}
                    {is_ClickComment && CommentIndex == i ? (
                      <CommentModal>
                        <CommentModalUl
                          onClick={() => {
                            deleteCmt(v.id);
                          }}
                        >
                          삭제하기
                        </CommentModalUl>
                      </CommentModal>
                    ) : null}
                  </CommentBox>
                );
              })}
            </CommentContainer> */}
          </DetialContainer>
      </DetailSection>
    <Footer />
    </>
  )
}

export default BoardDetail
