import React from "react";
import styled from "styled-components";
import musPromo from "../assets/Musify_promo.mp4";

const HomePageWrapper = styled.div`
  height: 100vh;
  padding: 20px;
`;

const Container = styled.div`
  margin: auto;
  height: 40vh;
  padding: 20px;
  font-size: 32px;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #86774f, #a69c82);
  align-items: center;
  h1 {
    // color: red;
  }
`;

const VideoContainer = styled.div`
  bottom: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Container>
        <h1> About </h1>
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
