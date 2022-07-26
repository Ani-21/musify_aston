import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { logged } from "./features/search/searchSlice";
import { useFetchTracksQuery } from "./features/spotify/spotifySlice";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import Music from "./components/Music";

const AppWrapper = styled.div`
  margin: 0px;
  background-image: linear-gradient(to right, #2a341f, #6d6e2c);
  color: beige;
`;

const App: React.FC = () => {
  const musValue = useAppSelector((state) => state.searcher.value);
  const dispatch = useAppDispatch();
  const { data, isFetching, error } = useFetchTracksQuery();

  const [tracksFound, setTracksFound] = useState([]);

  function handleClick() {
    dispatch(logged(" 🍀 by Fleetwood Mac"));
  }

  // console.log(data?.tracks.items);
  console.log(data);

  const list = data?.tracks.items;

  function MusicList() {
    return (
      <>
        <div>
          {list?.map((item) => (
            <Music key={item.data?.id} item={item} />
          ))}
        </div>
      </>
    );
  }

  return (
    <AppWrapper>
      <Header />
      <SearchBar changeSearchState={() => console.log("hi")} />
      <HomePage />
      <MusicList />
      <Footer />
    </AppWrapper>
  );
};

export default App;
