import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MusicState {
  value: string;
}
const initialState: MusicState = {
  value: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    logged(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { logged } = searchSlice.actions;
export default searchSlice.reducer;
