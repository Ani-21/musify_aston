import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { logged } from "./features/search/searchSlice";
import { useFetchTracksQuery } from "./features/spotify/spotifySlice";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 0px;
  background-image: linear-gradient(to right, #2a341f, #6d6e2c);
  color: beige;
`;

const App: React.FC = () => {
  const musValue = useAppSelector((state) => state.searcher.value);
  const dispatch = useAppDispatch();

  // const [data = [], isFetching] = useFetchTracksQuery();

  function handleClick() {
    dispatch(logged("Big Love 🍀 by Fleetwood Mac"));
  }

  function ModuleGreet() {
    return (
      <>
        <div>
          <p>Hello 😄 Let's try your app!</p>
          <p>Your fav track is ... {musValue} </p>
          <button onClick={handleClick}>Click here 🔮</button>
        </div>
        {/* <div>Number of tracks fetched: {data.length}</div> */}
      </>
    );
  }

  return (
    <AppWrapper>
      {/* <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
      <Header />
      <ModuleGreet />
      <HomePage />
      <Footer />
    </AppWrapper>
  );
};

export default App;
