import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContentsBlock = styled.div`
  overflow: hidden;
  height: 80px;
  width: 100%;
  padding: 0 4rem;
  max-width: 1256px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin: 0 auto;

  .menu-icon {
    display: none;
    font-size: 1.5rem;
  }
  
  .logo {
    color: #4996F3;
    text-decoration-line: none;
    font-size: 1.6rem;
    letter-spacing: -1px;
    font-family: "Tenada";
    margin-right: 1.5rem;
    padding-top: 0.4rem;
    min-width: 80px;
  }

  nav {
    min-width: 320px;
    flex: 1;
    padding-left: 0.7rem;
  }

  .button-block {
    display: flex;
    justify-content: space-between;
    .search {
      flex: 1;
      position: relative;
      width: 360px;
      height: 40px;
      display: flex;
      .search-input {
        position: absolute;
        width: 100%;
        height: 100%;
        padding-left: 50px;
        font-size: 1rem;
        outline: none;
        border: none;
        border-bottom: 0.5px solid lightgray;
      }
      .search-icon {
        position: absolute;
        top: 5px;
        left: 13px;
        z-index: 1;
        font-size: 2rem;
      }
    }
    .cart {
      padding-bottom: 0.5rem;
      color: #4996F3;
      align-self: center;
      font-size: 1.5rem;
      margin: 0 1rem;
    }
    .buttons {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      .login{
        text-decoration: none;
        color: darkgray;
        margin-left: 1rem;
        margin-right: -0.7rem;
        padding-right: 0.3rem;
      }
      .register {
        margin-left: -0.7rem;
        text-decoration: none;
        color: darkgray;
        margin-right: -0.7rem;
        padding-right: 0.3rem;
      }
      .seller-button {
        width: 100%;
        max-width: 100px;
        letter-spacing: -1px;
        padding: 0 0.9rem;
        height: 40px;
        border: none;
        border-radius: 5px;
        background: #4996F3;
        color: white;
        font-size: 0.9rem;
        font-weight: 600;
        &:hover {
          background: #4996F3;
        }
      }
    }
  }

  @media only screen and (max-width: 1256px) {
    padding: 0 3rem;
    nav {
      flex: 1.5;
    }
    .button-block {
      width: 600px;
      flex: 1;
      .cart {
        margin: 0 0.2rem 0 1rem;
      }
      .buttons {
        .login{
          padding-right: 0.5rem;
          margin-right: 0.4rem;
        }
        .register {
          padding-right: 0.5rem;
          margin-right: 0.4rem;
        }
        .center {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .button-block {
      width: 400px;
      .search {
        display: none;
      }
      .cart{
        display: none;
      }
      .buttons {
        .login{
          padding-right: 0.3rem;
          margin-right: 0.3rem;
        }
        .register {
          padding-right: 0rem;
          margin-right: 0rem;
        }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    height: 50px;
    justify-content: space-between;
    text-align: center;
    .menu-icon {
      display: block;
      cursor: pointer;
    }
    .logo {
      flex: 1;
      margin: 0;
    }
    nav {
      display: none;
    }
    .button-block {
        display: none;
    }
  }
`;

export const NavLinkStyle = styled(NavLink)`
  color: black;
  text-decoration-line: none;
  margin-right: 1.3rem;
  font-size: 1.1rem;
  font-weight: bold;
  &.active {
    color: #4996F3;
    font-weight: bold;
  }
  &:hover {
    color: #4996F3;
  }
`;