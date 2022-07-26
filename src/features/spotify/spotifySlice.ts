import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Track } from "../../components/Music";

const MUSIC_API_KEY = "3f3b6fd67cmsh7484036a68ba721p121adfjsn5115c9e8c9e4";
const url = "https://spotify23.p.rapidapi.com/search/";

interface AlbumArr {
  sources: { url: string };
}

interface Artists {
  uri: string;
  profile: {
    name: string;
  };
}

export default interface Item {
  data?: {
    uri?: string;
    id?: string;
    name?: string;
    artists?: { items: Artists[] };
    albumOfTrack?: {
      coverArt: AlbumArr[];
    };
  };
}

interface Track {
  query: string;
  tracks: {
    items?: Item[];
    totalCount: number;
    length: number;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders(headers) {
      headers.set("X-RapidAPI-Key", MUSIC_API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchTracks: builder.query<Track, string | void>({
        // query(limit = 10) {
        //   return `${limit}`;
        // },
        query: () => "?type=tracks&q=urgent",
        // query: (searchItem) => `?type=tracks&q=${searchItem}`,
      }),
    };
  },
});

export const { useFetchTracksQuery } = apiSlice;
