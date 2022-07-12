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

const iconWrapper = styled.div``;

interface HeaderProps {
  title?: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderWrapper>
      <div>о нас</div>
      <AiOutlineSearch />
      <div className="logo">Musify</div>
      <MdFavoriteBorder />
      <CgProfile />
    </HeaderWrapper>
  );
};

export default Header;
