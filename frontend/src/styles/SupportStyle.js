import { Link } from "react-router-dom";
import styled from "styled-components";

/* 일반 제목 */
export const CsH = styled.h2`
  font-weight: bold;
  font-size: 24px;
`;
/* 강조 텍스트 */
export const CsEH = styled.h2``;
/* 설명글 */
export const CustomerService = styled.div`
  .sectionStyle {
    display: block;
  }
  .innerStyle {
    flex-direction: column;
    padding-bottom: 24px;
    padding-bottom: 32px;
    display: flex;
    color: rgb(47, 52, 56);
    margin: 0;
    padding: 0;
  }
  .csDivStyle {
    flex: 0 0 375px;
    margin-top: 32px;
    border-radius: 8px;
    background-color: rgb(247, 249, 250);
    padding: 28px 24px;
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
    width: auto;
    height: 40px;
    border-radius: 4px;
    padding: 0px 16px;
    font-weight: 400;
    box-sizing: border-box;
    text-align: center;
    color: rgb(255, 255, 255);
  }
`;

/*============== FAQ ==============*/

export const FaqDesc = styled.p``;

export const FaqH1 = styled.h1``;

export const BtnFaq1 = styled.button``;
export const BtnFaq2 = styled.button``;
export const BtnFaq3 = styled.button``;
