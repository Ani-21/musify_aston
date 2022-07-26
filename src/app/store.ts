import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import { apiSlice } from "../features/spotify/spotifySlice";

export const store = configureStore({
  reducer: {
    searcher: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
