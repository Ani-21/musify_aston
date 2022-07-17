import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  height: 70px;
  margin: 0 auto;
  position: relative;

  p {
    margin: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  jusify-content: space-between;
`;

function Footer() {
  return (
    <footer>
      <Wrapper>
        <Container>
          <AiOutlineInstagram />
          <TbBrandTelegram />
          <p>MUSIFY </p>
          <p> &copy; HiddenName Developer 2022</p>
        </Container>
      </Wrapper>
    </footer>
  );
}

export default Footer;
