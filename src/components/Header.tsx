import React from "react";
import styled from "styled-components";

import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";

const HeaderWrapper = styled.div`
  height: 70px;
  padding: 20px;
  color: #e5e2e1;
  font-size: 32px;
  display: flex;
  justify-content: space-around;

  div.logo {
    font-size: 42px;
    text-transform: uppercase;
    letter-spacing: 8px;
  }
`;

const CustomBtn = styled.button`
  display: inline-block;
  background: transparent;
  border: 1px solid beige;
  border-radius: 30px;
  color: beige;
  width: 150px;
  font-size: 20px;
`;

interface HeaderProps {
  title?: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderWrapper>
      <div>о платформе</div>
      <AiOutlineSearch />
      <div className="logo">Musify</div>
      {/* <MdFavoriteBorder /> */}
      {/* <CgProfile /> */}
      <CustomBtn>Вход</CustomBtn>
      <CustomBtn>Регистрация</CustomBtn>
    </HeaderWrapper>
  );
};

export default Header;
