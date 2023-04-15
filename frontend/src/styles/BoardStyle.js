import Slider from "react-slick";
import styled, { css } from "styled-components";

/********** BoardPage 스타일 **********/
/* 보드 헤더 전체 */
export const BoardHeader = styled.header`
  width: 100%;
  padding: 0 4rem;
  max-width: 1344px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin: 0 auto;
  margin-top: 4em;
`;

/* 커뮤니티 글자 */
export const BoardH3 = styled.h3`
  margin: 1px 0;
  align-items: center;
  font-weight: 600;
  font-size: 2rem;
`;

/* 글쓰기 버튼 */
export const BtnWrite = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5em;
  height: 2.7em;
  padding: 10px 0;
  border-radius: 6px;
  font-weight: 600;
  background-color: #4996f3;
  color: white;
  font-size: 1em;
  border: none;
  svg {
    width: 18px;
    height: 18px;
    margin-left: 4px;
    fill: #fff;
  }
`;

/********** BoardLayout 스타일 **********/
/* 보드 섹션 전체 */
export const BoardSection = styled.section`
  max-width: 1344px;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin: 0 auto;
  margin-top: 2em;
  margin-bottom: 6em;

  @media only screen and (max-width: 1356px) {
    padding: 0 3rem;
    .content {
      width: 35em;
    }
    .searchDiv {
      padding: 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 3rem;
    .content {
      width: 30em;
      margin-left: 16em;
    }
    .searchDiv {
      width: 80%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 3rem;
    .content {
      width: 25em;
      margin-left: 15em;
    }
    .searchDiv {
      width: 100%;
    }
  }
`;

/* 카테고리 전체 */
export const BoardCategory = styled.nav`
  position: absolute;
  top: 14em;
  display: flex;
  flex-direction: column;
  width: 200px;
  ul {
    margin: 0;
    padding: 0;
    position: sticky;
    top: 102px;
  }
`;

export const CategoryUl = styled.ul`
  color: black;
  text-decoration-line: none;
  margin-right: 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  &.active {
    color: #4996f3;
    font-weight: 700;
  }
  &:hover {
    color: #4996f3;
  }
`;

export const CategoryLi = styled.li`
  list-style: none;
  margin: 2px 0;
  padding: 19px 20px;
  border-radius: 8px;
  color: #969696;
  font-size: 0.9em;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: #dbeafd;
      color: black;
      font-weight: 700;
    `}
  img {
    width: 24px;
    margin-right: 8px;
  }
`;

/* 커뮤니티 글목록 부분 */
export const BContentSection = styled.section`
  flex: 1;
  max-width: 960px;
  margin-left: 17em;
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Wrap = styled.div`
  margin: 30px 0px;
  margin-top: 20px;
  overflow: hidden;
`;

/* 전체화면에 뜨는 슬라이더 */
export const StyledSlider = styled(Slider)`
  height: 180px;
  width: 100%;
  margin-bottom: 40px;
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
  .slick-slide div {
    //슬라이더 컨텐츠
    cursor: pointer;
  }
`;

/* 파란배경 메인 슬라이더 */
export const SliderMain = styled.div`
  float: left;
  height: 14em;
  width: 14em;
  border-radius: 20px;
  background-color: #4996f3;
  margin-right: 10px;
  position: relative;
  div {
    color: white;
  }
`;

/* 흰배경 서브 슬라이더 */
export const SliderSub = styled.div`
  float: left;
  height: 14em;
  width: 14em;
  border-radius: 20px;
  background-color: #f4f4f4;
  margin-right: 10px;
  position: relative;
  div {
    color: black;
  }
`;

/* 슬라이더 안의 내용 div들 */
export const SliderDiv = styled.div`
  padding: 20px;
  height: 100%;
`;

export const SliderDivCategory = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

export const SliderDivTitle = styled.div`
  font-weight: 900;
  margin-top: 13px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const SliderDivWriter = styled.div`
  font-size: 13px;
  margin-top: 30px;
  position: absolute;
  bottom: 25px;
`;

/* 검색 */
export const SearchDiv = styled.div`
  width: 70%;
  height: 45px;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  text-align: center;
  left: 32%;
  margin: 0 auto;
  margin-top: 5em;
  font-size: 14px;
  .searchDropdown {
    margin-left: 0.8em;
    border: 1px solid lightgray;
    border-radius: 5px;
    height: 2.7em;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 25em;
  height: 2.4em;
  border: none;
  border-bottom: 1px solid lightgray;
  margin: 0 1em;
  :focus {
    outline: none;
  }
`;
export const BtnSearch = styled.button`
  max-width: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: 0.7em;
  padding: 0 0.9rem;
  border: none;
  font-size: 0.93rem;
  font-weight: 600;
  height: 2.7em;
  width: 5.7em;
  background: #4996f3;
  color: white;
`;

/********** BoardRow 스타일 **********/
export const PostLi = styled.li`
  list-style: none;
  padding: 16px 8px;
  margin-right: 3em;
  border-bottom: 1px solid #f4f4f4;
  font-size: 14px;
  .categoryP {
    display: inline-block;
    margin-bottom: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    background: #dbeafd;
    color: #4a71a4;
    font-size: 12px;
    font-weight: 600;
  }
  .postLink {
    text-decoration-line: none;
  }
  .star-icon{
    margin-bottom: 3px;
    margin-left: 3px;
    margin-right: 3px;
    font-size:15px;
  }
`;

export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  .titleP {
    color: black;
    overflow: hidden;
    display: -webkit-box;
    padding-right: 5px;
    margin-bottom: 4px;
    font-weight: 600;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  #fileI {
    margin: 0 5px;
    width: 15px;
    height: 15px;
    color: #888;
  }
  .contentP {
    overflow: hidden;
    display: -webkit-box;
    margin: 8px 0 5px 0;
    padding-right: 16px;
    color: #888;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  ul.list-count {
    list-style: none;
    display: flex;
    gap: 10px;
    padding-left: 0;
    svg {
      width: 20px;
      height: 17px;
      margin-right: 2px;
      padding-bottom: 3px;
      fill: #c5c5c5;
      &:last-child {
        transform: rotateY(180deg);
      }
    }
    li {
      color: #c5c5c5;
      font-size: 12px;
    }
  }
  small {
    font-size: 12px;
    letter-spacing: -0.2px;
    color: #c5c5c5;
  }
`;

/********** BoardWriteForm 스타일 **********/
/* 글쓰기 섹션 전체 */
export const WriteSection = styled.section`
  max-width: 1344px;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2.5em;
  margin-bottom: 6em;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f4f4f4;
  font-size: 14px;
  &:last-child {
    border: none;
  }
  .categoryDropdown {
    margin-left: 0.8em;
    border: 1px solid lightgray;
    border-Radius:5px;
    height:2.7em;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
  .btnInsert {
    margin-right: 0.7em;
    padding: 0 0.9rem;
    border: none;
    border-radius: 5px;
    font-size: 0.93rem;
    font-weight: 600;
    height:2.7em;
    width: 5.7em;
    background: #4996f3;
    color: white;
    }
  }
  #board_title {
    width: 100%;
    padding: 4px 14px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;
    &::placeholder {
      color: #888;
    }
  }
`;

/********** QuillEditor 스타일 **********/
export const QuillDiv = styled.div`
  height: 560px;
  display: flex;
  justify-Content: center;
  padding: 0px;
  border-radius: 10px;  
  .quill {
    height: 560px;
    width: 100%;
  }
  .ql-toolbar {
    border: none;
    border-bottom: 1px solid #f4f4f4;
  }
  .ql-container{
    border: none;
    padding-top: 0.5em;
  }
}
`;

/********** BoardDetail 스타일 **********/
/* 상세보기 섹션 전체 */
export const DetailSection = styled.section`
  max-width: 1344px;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2em;
  margin-bottom: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DetialContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  padding: 10px;
  width: 70%;
`;

export const TitleContainer = styled.div``;

export const CategoryDiv = styled.div`
  color: #979797;
  font-size: 13px;
  font-weight: 600;
  .detailLink {
    color: #979797;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
  }
`;

export const DetailTitle = styled.h4`
  margin: 1em 0 0.7em 0;
  font-size: 25px;
  font-weight: 700;
`;

export const Profile = styled.div`
  font-size: 12px;
  display: flex;
  position: relative;
`;

export const UserImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-right: 10px;
  svg {
    width: 36px;
    height: 36px;
  }
  .userImg {
    width: 34px;
    height: 34px;
  }
`;

export const UserWrap = styled.div`
  font-size: 12px;
  margin-top: 3px;
  font-weight: 600;
`;

export const Username = styled.div`
  font-size: 14px;
`;

export const User = styled.div`
  color: gray;
  font-weight: 500;
`;

export const BtnDot = styled.button`
  position: absolute;
  right: 0px;
  padding: 2px;
  font-size: 20px;
  border-radius: 50%;
  background: transparent;
  color: #464646;
  border: none;
  &:hover {
    color: #4996f3;
    outline: none;
  }
`;

export const ModalDiv = styled.div`
  border: 1px solid #e9e9e9;
  background-color: white;
  border-radius: 5px;
  width: 120px;
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 10;
`;

export const ModalUl = styled.ul`
  padding: 5px;
  margin: 5px 0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: gray;
  &:hover {
    background-color: #4996f3;
    color: white;
  }
`;

export const HrLine = styled.hr`
  height: 1px;
  color: lightgray;
  width: 100%;
`;

export const BodyContainer = styled.div`
  margin-bottom: 5px;
`;

export const DetailContent = styled.div`
  margin: 20px 0 40px 0;
  line-height: 30px;
  font-size: 15px;
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
`;

export const CountDiv = styled.div`
  display: flex;
  font-size: 13px;
`;
export const Like = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const ReactIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  color: gray;
  margin-top: 0;
  margin-right: 3px;
`;

export const FontContent = styled.div`
  color: ${({ liked }) => (liked ? "#4996F3" : "gray")};
  font-weight: 600;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f4f4f4;
  margin-bottom: 5px;
  padding: 8px;
  border-radius: 10px;
  svg {
    width: 17px;
    height: 17px;
    margin-top: -5px;
    fill: #2E2E52;
    transform: rotateY(180deg);
  }
`;

export const CommentInput = styled.textarea`
  width: 93%;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  border: none;
  margin-left: 5px;
  overflow: hidden;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const BtnCommentInsert = styled.div`
  color: #4996f3;
  font-size: 14px;
  font-weight: 600;
  width: 40px;
  padding: 1px;
  text-align: center;
  user-select: none;
  cursor: pointer;
`;

export const CommentBox = styled.div`
  display: flex;
  padding: 5px;
  margin-top: ${({ step }) => 
  (step > 0 ? "10px" : "20px" )};
  
  position: relative;
  border-radius: 5px;
  background-color: ${({ liked, status }) => 
  (liked >= 5  && status === 0? 
    (liked >= 10 ? "#DBEAFD" : "#EDF5FE") 
  : "white")};
`;

export const ReplyIcon = styled.div`
  display: flex;
  font-size: 17px;
  margin: 10px;
  color: #4996F3;
`

export const CommentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-right: 10px;
  svg {
    width: 34px;
    height: 34px;
  }
  .commentImg {
    width: 32px;
    height: 32px;
  }
`;

export const CommentDiv = styled.div`
  width: 100%;
`

export const CommentUser = styled.div`
  margin-top: 3px;
  font-size: 13px;
  font-weight: 600;
`;

export const CommentContent = styled.div`
  font-size: 14px;
  margin: 5px 1px;
  word-break: break-all;
  color:  ${({ status }) => (status > 0 ? "#9E9E9E" : "black")};
  font-style: ${({ status }) => (status > 0 ? "italic" : "normal")};
`;

export const CommentDate = styled.span`
  font-size: 12px;
  color: gray;
  font-weight: 500;
`;

export const CommentLike = styled.span`
  cursor: pointer;
  margin-left: 15px;
  font-size: 12px;
  color: ${({ iconColor }) => (iconColor ? "#4996F3" : "gray")};

  font-weight: 500;
  .like-icon {
    margin-bottom: 3px;
  }
  .like-count {
    margin-left: 4px;
  }
`;

export const CommentReply = styled.span`
  margin-left: 15px;
  font-size: 12px;
  color: gray;
  font-weight: 500;
  cursor: pointer;
`;

export const InputComment = styled.div`
  display: flex;
  align-items: center;
  border: none;
  margin-bottom: 5px;
  padding: 8px;
  height: 50px;
  svg {
    width: 17px;
    height: 17px;
    margin-top: -1px;
    fill: #2d2d2d;
  }
`;

export const ReCommentInput = styled.textarea`
  width: 93%;
  height: 40px;
  padding: 10px;
  font-size: 12px;
  border: none;
  margin-left: 5px;
  overflow: hidden;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const BtnDotComment = styled.button`
  position: absolute;
  right: 0px;
  padding: 2px;
  font-size: 20px;
  border-radius: 50%;
  background: transparent;
  color: #464646;
  border: none;
  &:hover {
    color: #4996f3;
    outline: none;
  }
`;

export const CommentModal = styled.div`
  border: 1px solid #e9e9e9;
  background-color: white;
  border-radius: 5px;
  width: 120px;
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 10;
`;

export const CommentModalUl = styled.ul`
  padding: 5px;
  margin: 5px 0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: gray;
  &:hover {
    background-color: #4996f3;
    color: white;
  }
`;
