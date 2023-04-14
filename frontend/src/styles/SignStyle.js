import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignDiv = styled.section`
  max-width: 1344px;
  padding: 10rem;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 15em;
  margin-bottom: 6em;
  position: relative;
`;
export const LoginFormBlock = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  letter-spacing: -1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  @media screen and (max-width: 767px) {
    top: 50%;
  }

  p {
    text-align: center;
    width: 100%;
    margin-top: 0.8rem;
    font-size: 0.9rem;
    color: gray;
    &:last-child {
      color: black;
      padding-top: 1.8rem;
      border-top: 1px solid gray;
      letter-spacing: 0;
    }
  }
  overflow-x: hidden;
`;

export const LogoBlock = styled(Link)`
  text-decoration-line: none;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50px;
    border-radius: 8px;
    margin-right: 0.7rem;
  }
  span {
    font-family: "Jal_Onuel";
    font-size: 2rem;
    letter-spacing: -3px;
  }
`;

export const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  input {
    height: 50px;
    border: 1px solid lightgray;
    padding: 0 1rem;
    font-size: 1rem;
    &::placeholder {
      color: gray;
    }
    &:focus {
      outline: none;
      border: 1px solid #4996f3;
    }
    &:hover {
      background: #fafafa;
      transition: 0.5s;
    }
  }
  .email {
    border-radius: 5px 5px 0 0;
  }
  .password {
    border-radius: 0 0 5px 5px;
    border-top: none;
  }
  button {
    margin-top: 1.3rem;
    background-color: #4996f3;
    border: none;
    border-radius: 5px;
    color: white;
    height: 53px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background: dark-blue;
    }
  }
  .smallButton {
    margin: 1rem auto;
    font-size: 0.8rem;
    cursor: pointer;
    span:first-child {
      margin-right: 1rem;
    }
  }
`;

export const SocialBlock = styled.div`
  margin: 0.8rem auto;
  span {
    font-size: 0.8rem;
    color: gray;
    margin: 0 auto;
    text-align: center;
  }
  .socialButton {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    img {
      width: 50px;
      height: 53px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

export const SignUpBlock = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  letter-spacing: -1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  @media screen and (max-width: 767px) {
    top: 50%;
  }
  h4 {
    font-weight: 700;
  }
  hr {
    color: gray;
  }
  h6 {
    margin-left: 0.5%;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
  }
  overflow-x: hidden;
`;

export const EmailBlock = styled.div`
  input {
    margin-left: 2px;
    width: 46%;
    height: 38px;
    font-size: 14px;
    border: 1.5px solid lightgray;
    border-radius: 5px;
    outline: none;
    padding-left: 15px;

    &::placeholder {
      font-weight: 550;
      font-size: 15px;
      color: lightgray;
    }
  }
  span {
    margin: auto;
    color: lightgray;
  }

  label {
    width: 46%;
    position: relative;

    .inputDomain {
      width: 100%;
      height: 38px;
      font-size: 14px;
      border: 1.5px solid lightgray;
      border-radius: 5px;
      outline: none;
    }
    button {
      position: absolute;
      background-color: white;
      right: 5px;
      border: none;
      top: 4px;
    }
  }

  select {
    height: 38px;
    width: 100%;
    font-size: 14px;
    color: gray;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: none;
  }
`;

export const AuthButton = styled.button`
  margin-top: 0.9rem;
  margin-left: 0.5%;
  border-radius: 5px;
  height: 45px;
  width: 99%;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
`;

export const PWnNickBlock = styled.div`
  p {
    margin-left: 0.5%;
    width: 100%;
    font-size: 0.85rem;
    color: gray;
  }

  h6 {
    font-weight: 700;
    margin-top: 1.5rem;
    margin-left: 0.5%;
    margin-bottom: 0.8rem;
  }

  input {
    margin-left: 1%;
    margin-right: 1%;
    width: 98%;
    height: 38px;
    font-size: 14px;
    color: gray;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding-left: 15px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 550;
      font-size: 15px;
      color: lightgray;
    }
  }
`;

export const RefferBlock = styled.div`
  label {
    width: 98%;
    position: relative;

    input {
      margin-left: 1%;
      margin-right: 1%;
      width: 98%;
      height: 38px;
      font-size: 14px;
      color: gray;
      border: 1px solid lightgray;
      border-radius: 5px;
      padding-left: 15px;
      &:focus{
        outline : none;
      }
    }
    button {
      position: absolute;
      width : 10%;
      top : 6px;
      right: 13px;
      font-size : 15px;
      border-radius : 5px;
      outline : none;
      background-color : #4996f3;
      border : 1px solid #4996f3;
      color : white;
      &:hover{
        background-color : #537FE7;
        border : 1px solid #537FE7;
      }
      .search-icon{
        margin-bottom : 1px;
        font-size :20px;
      }
    }
  }
`;

export const TermsBlock = styled.div`

`