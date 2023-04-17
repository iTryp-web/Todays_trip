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

  .innerStyle {
    display: flex;
    align-items: center;
    padding-bottom: 24px;
    padding-bottom: 32px;
    color: rgb(47, 52, 56);
    margin: 0;
    padding: 0;
    flex: 1;
    justify-content: center;
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
`;

export const fnDiv = styled.div`
  background-color: #fff;
  z-index: 10;
`;

export const faqNav = styled.nav`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  text-align: center;
  padding: 40px 24px 0px;
  display: flex;
  justify-content: center;

  .label {
    cursor: pointer;
    margin-right: 8px;
  }
`;

export const faqLabel = styled.label`
  display: inline-block;
  position: relative;
  height: 38px;
  border-radius: 19px;
  padding-left: 14px;
  padding-right: 14px;
  line-height: 0;
  color: rgb(255, 255, 255);
  background-color: rgb(53, 197, 240);
`;

export const fnStyle = styled.div`
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 40px 24px 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const fnNav = styled.nav`
.fnSelectedLabel{
  background-color: #007bff;
  color: #fff;
}
.fnLabel{
  background-color: #ccc;
  color: #000;
}
.fnInput{
display : "none";
}
.fnSpan{

}
`;

export const fnDefaultLabel = styled.label`
  display: inline-block;
  margin: 0 4px;
  padding: 4px 8px;
  border-radius: 50%;
  background-color: #ccc;
  color: #000;
`;

export const fnSelectedLabel = styled(fnDefaultLabel)`
  background-color: #007bff;
  color: #fff;
`;

export const fnLabel = styled(fnDefaultLabel)`
  background-color: #ccc;
  color: #000;
`;
