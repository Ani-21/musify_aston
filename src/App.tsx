import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 0px;
  background-image: linear-gradient(to right, #2a341f, #6d6e2c);
  color: beige;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Header />
      <HomePage />
      <Footer />
    </AppWrapper>
  );
};

export default App;
