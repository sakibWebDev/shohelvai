// features/seeds/seedSlice.js
import { createSlice } from "@reduxjs/toolkit";

const seedSlice = createSlice({
  name: "seeds",
  initialState: {
    list: [], // all fetched seeds will be stored here
    seasons: [] // store seasons as well
  },
  reducers: {
    setSeeds: (state, action) => {
      state.list = action.payload.seeds || [];
      state.seasons = action.payload.seasons || [];
    },
    clearSeeds: (state) => {
      state.list = [];
      state.seasons = [];
    }
  }
});

export const { setSeeds, clearSeeds } = seedSlice.actions;
export default seedSlice.reducer;