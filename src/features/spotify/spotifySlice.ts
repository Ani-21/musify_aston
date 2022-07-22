import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MUSIC_API_KEY = "3f3b6fd67cmsh7484036a68ba721p121adfjsn5115c9e8c9e4";

interface Track {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv",
    prepareHeaders(headers) {
      headers.set("x-api-key", MUSIC_API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchTracks: builder.query<Track[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchTracksQuery } = apiSlice;
