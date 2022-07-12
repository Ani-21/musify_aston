import React from "react";
import styled from "styled-components";

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
  background-image: linear-gradient(to right, #d3cec7, #86774f);
  align-items: center;
  h1 {
    // color: red;
  }
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Container>
        <h1>Альбом месяца </h1>
      </Container>
      <div>Найди свой любимый трек</div>
    </HomePageWrapper>
  );
};

export default HomePage;
