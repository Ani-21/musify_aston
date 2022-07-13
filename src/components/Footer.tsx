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
  margin: 10px auto;
  align-items: center;
  jusify-content: space-between;
  display: flex;
  position: absolute;
`;

function Footer() {
  return (
    <footer>
      <Wrapper>
        <Container>
          <AiOutlineInstagram />
          <TbBrandTelegram />
          <p>Musify </p>
          <p> &copy; Ani Kvikvinia 2022</p>
        </Container>
      </Wrapper>
    </footer>
  );
}

export default Footer;
