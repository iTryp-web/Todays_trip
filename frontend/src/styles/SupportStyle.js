import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomerService = styled.div`
  position: relative;
  #li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  #ul {
    list-style: none;
  }
  csSection {
    max-width: 850px;
    margin: 0px auto;
  }
  innerStyle {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    padding-bottom: 32px;
    color: rgb(47, 52, 56);
    margin: 0;
    padding: 0;
    flex: 1; /* 추가 */
  }
  
  .helpDiv {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    margin-bottom: 30px;
  }
  .csDiv {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    width: 100%;
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
  .qMark {
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

  @media screen and (max-width: 1000px) {
    .innerStyle {
      display: block;
    }
  
    .helpDiv {
      width: 100%;
      margin-bottom: 30px;
    }
  
    .csDiv {
      width: 100%;
    }
  }
`;

/*============== FAQ ==============*/

export const FaqDesc = styled.p``;

export const FaqH1 = styled.h1``;

export const BtnFaq1 = styled.button``;
export const BtnFaq2 = styled.button``;
export const BtnFaq3 = styled.button``;
