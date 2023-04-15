import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Logo from "../imgs/ShopGenius.png"

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src={Logo} alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 1px 0px 10px  #888888 ;
  overflow: hidden;

  .logo {
    height: 25rem;
  }
`;
export default Header;
