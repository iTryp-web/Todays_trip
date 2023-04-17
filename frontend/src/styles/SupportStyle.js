import { Link } from "react-router-dom";
import styled from "styled-components";

/*================ csSection ================*/
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
    flex-grow: 1;
    flex-shrink: 1;
    width: 50%;
    display: inline-flex;
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
    color: rgb(53, 197, 240);
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
    color: rgb(53, 197, 240);
    margin-bottom: 14px;
  }
  .btnContact {
    margin: 0px;
    border: none;
    background: none rgb(53, 197, 240);
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
/*================ FaqNav ================*/
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
  width: 500px;
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
`;

export const FnLink = styled(Link)`
  padding: 5px 14px;
  margin-right: 8px;
  border-radius: 1rem;
  text-decoration-line: none;
`;

/*================ Question List ================*/
export const QlSection = styled.section`
display:flex
justify-content: center
`;

export const QlUl = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 30px;
  overflow: hidden;
  padding-bottom: 60px;
  list-style: none;
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
`;

export const QuestionText = styled.span``;
