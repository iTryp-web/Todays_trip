import { Link } from "react-router-dom";
import styled from "styled-components";


export const LoginFormBlock = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  letter-spacing: -1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    border: 1px solid gray;
    padding: 0 1rem;
    font-size: 1rem;
    &::placeholder {
      color: gray;
    }
    &:focus {
      outline: 1px solid blue;
    }
    &:hover {
      background: light-gray;
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
    background-color: blue;
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