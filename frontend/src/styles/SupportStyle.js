import { Link } from "react-router-dom";
import styled from "styled-components";

/*================ CustomerService ================*/
export const CustomerService = styled.div`
  position: relative;
  #li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  #ul {
    list-style: none;
  }
  .csSection {
    display: "flex";
    justifycontent: "center";
    max-width: 850px;
    margin: 0px auto;
  }

  .innerStyle {
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 24px;
    padding-bottom: 32px;
    color: rgb(47, 52, 56);
    margin: 0;
    padding: 0;
    flex: 1;
  }

  .helpDiv {
    flex-grow: 1;
    flex-shrink: 1;
    margin-bottom: 30px;
    width: 50%;
    display: inline-flex;
  }

  .csDiv {
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    width: 50%;
    display: inline-flex;
    color: rgb(47, 52, 56);
  }

  @media (max-width: 900px) {
    .helpDiv,
    .csDiv {
      width: 100%;
    }
  }

  .helpTitle {
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    margin-top: 44px;
    margin-bottom: 20px;
  }
  .helpUl {
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  .helpLi {
    cursor: pointer;
    min-height: 28px;
    margin-bottom: 16px;
    position: relative;
    padding-left: 36px;
    font-size: 16px;
    line-height: 28px;
  }

  .csTitle {
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    margin-bottom: 6px;
  }
  .time {
    color: #4996f3;
  }
  .desc {
    font-size: 14px;
    line-height: 20px;
    color: rgb(130, 140, 148);
    position: relative;
    padding-left: 20px;
  }

  .tel {
    font-size: 20px;
    line-height: 28px;
    color: #4996f3;
    margin-bottom: 14px;
  }
  .btnContact {
    margin: 0px;
    border: none;
    background: none #4996f3;
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-family: inherit;
    font-optical-sizing: inherit;
    font-kerning: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 14px;
    line-height: 18px;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 0px 16px;
    font-weight: 400;
    box-sizing: border-box;
    text-align: center;
    color: rgb(255, 255, 255);
  }
`;

export const QMark = styled.span`
  position: absolute;
  left: 0px;
  width: 28px;
  height: 28px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 16px;
  line-height: 20px;
  color: rgb(53, 197, 240);
  border: 1px solid rgb(234, 237, 239);
  box-shadow: rgba(63, 71, 77, 0.05) 0px 2px 6px;
`;

/*================ FaQ NavBar ================*/
export const FnHr = styled.hr`
  margin: 0px;
  padding: 0px;
  height: 10px;
  border: none;
  background-color: #ced4da;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
`;

export const FnNavDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 24px 0px;
`;

export const FnNavbar = styled.nav`
  height: 40px;
  color: black;
  margin-right: 15px;
  font-size: 0.9rem;
  .fnSelectedLink {
    background-color: #4996f3;
    color: white;
  }
  .fnLink {
    background-color: #f7f9fa;
    color: #2f3438;
  }
  &.active {
    color: #4996f3;
    font-weight: bold;
  }
  &:hover {
    color: #4996f3;
  }

  @media (max-width: 1023px) {
    width: 500px;
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
    margin: 0 auto;
    gap: 10px;
  }
`;

export const FnLink = styled(Link)`
  padding: 5px 14px;
  margin-right: 8px;
  border-radius: 1rem;
  text-decoration-line: none;
`;

/*================ Question List ================*/
export const QlSection = styled.section`
  display: block;
  max-width: 850px;
  margin: 0px auto;
`;

export const QlUl = styled.ul`
  display: block;
`;
export const QlLi = styled.li`
  font-size: 16px;
  line-height: 28px;
  list-style: none;
  color: rgb(47, 52, 56);
`;
export const QlH3 = styled.h3`
  color: rgb(47, 52, 56);
  border-bottom: 1px solid rgb(234, 237, 239);
  padding: 8px 0px;
  font-size: 16px;
  line-height: 28px;
`;
export const QlButton = styled.button`
  display: inline-block;
  margin: 0px;
  border: none;
  background: none;
  font: inherit;
  color: rgb(47, 52, 56);
  width: 100%;
  position: relative;
  text-align: left;
  padding: 10px 40px 10px 36px;
  display: flex;
  align-items: center;
  .questionText {
    font-size: 16px;
  }
  .questionText.open {
    font-weight: bold;
  }

  .questionDownArrow {
    display: inline-block;
    font-size: 24px;
    line-height: 1;
    transition: all 0.2s ease 0s;
  }
  .questionDownArrow.open {
    transform: rotate(180deg);
  }

  .qlConatiner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const AnswerText = styled.div`
  background-color: rgb(247, 249, 250);
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  box-sizing: border-box;
  opacity: 0;
  height: 0px;
  overflow: hidden;
  align-items: center;
  &.show {
    .answerTextP {
      margin-bottom: 0px;
    }
    padding: 16px;
    opacity: 1;
    height: auto;
    overflow: visible;
    transition: all 0.1s ease-in-out;
  }
`;

/*================ 1대1문의 글 ================*/
export const InquirySection = styled.section`
  max-width: 1344px;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2.5em;
  margin-bottom: 6em;
`;

export const InqDiv = styled.div`
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

export const InquiryH3 = styled.h3`
  margin: 10px 0;
  align-items: center;
  font-weight: 600;
  font-size: 2rem;
`;

export const InquiryP = styled.p`
  border-radius: 15px;
  background-color: #f7f9fa;
  padding: 14px 20px;
`;

/* 글쓰기 버튼을 담을 컨테이너 스타일 */
export const WriteButtonContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 2rem;
  background-color: blue;
  padding: 1rem;
  border-radius: 5px;
  transform: translateY(-50%);
  z-index: 10;
`;

/* 글쓰기 버튼을 담을 스타일 */
export const WriteButton = styled.button`
  color: white;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
