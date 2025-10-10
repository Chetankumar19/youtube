import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
  name: "region",
  initialState: {
    region:"IN"
  },
  reducers: {
    setGolbelRegion: (state, action) => {
      state.region = action.payload
    },
  },
});

export const { setGolbelRegion } = regionSlice.actions;
export default regionSlice.reducer;
