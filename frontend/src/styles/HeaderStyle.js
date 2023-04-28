import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.div`
  overflow: hidden;
  height: 80px;
  width: 100%;
  padding: 0 4rem;
  max-width: 1344px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin: 0 auto;
  margin-top: 7px;
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
      width: 370px;
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
        font-size: 1.9rem;
      }
    }
    .cart {
      padding-bottom: 0.5rem;
      color: #4996F3;
      align-self: center;
      font-size: 1.5rem;
      margin: 0 0 0 1rem;
    }
    .buttons {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      width: 100px;
      margin-left: 10px;
      margin-top: 5px;
      .signin{
        cursor: pointer;
        text-decoration: none;
        color: #979797;
        &:hover {
          color: #4996F3;
          font-weight: 600;
        }
      }
      .signout {
        margin-left: 1.5rem;
        margin-right: 1rem;
        text-decoration: none;
        color: #979797;
        &:hover {
          color: #4996F3;
          font-weight: 600;
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
      .center {
        display: none;
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
    color: #4996f3;
    font-weight: bold;
  }
  &:hover {
    color: #4996f3;
  }
`;
