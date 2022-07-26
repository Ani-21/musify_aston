import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useFetchTracksQuery } from "../features/spotify/spotifySlice";

interface Props {
  changeSearchState: Function;
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputSearch = styled.input`
  position: absolute;
  height: 40px;
  padding: 5px;
  margin: 0 auto;
  width: 30%;
  background-image: linear-gradient(to right, #86774f, #a69c82);
  border: 1px solid rgb(128, 128, 128);
  ::placeholder {
    color: #f5f5db;
  }
`;

const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
`;

const SearchBar: React.FC<Props> = ({ changeSearchState }) => {
  const [trackSearch, setTrackSearch] = useState("");
  const [tracksFound, setTracksFound] = useState([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    changeSearchState(e.currentTarget.value);
  };

  const { data } = useFetchTracksQuery();

  console.log(data?.tracks.items);

  const search = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    console.log(form);
    const input = form.querySelector("#searchText") as HTMLInputElement;
    setTrackSearch(input.value);
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(trackSearch);
      // if (query) {
      //   setTracksFound();
      // }
    })();
  }, [tracksFound]);

  return (
    <>
      <form id="searchText" onSubmit={(event) => search(event)}>
        <Container>
          <InputSearch
            type="text"
            placeholder="Введите название песни или имя исполнителя"
            onChange={handleChange}
          />
          <IconContainer>
            <AiOutlineSearch />
          </IconContainer>
        </Container>
      </form>
      {tracksFound && <p>Вот что удалось найти: </p>}
    </>
  );
};

export default SearchBar;
