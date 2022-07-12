import React from "react";
import styled from "styled-components";
//  86774f
// background-image: linear-gradient(to right, #2a341f, #6d6e2c);

const Wrapper = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <p>Musify</p>
        <p>&copy; Ani Kvikvinia 2022</p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
