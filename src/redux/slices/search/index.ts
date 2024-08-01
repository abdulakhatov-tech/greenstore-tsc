import { createSlice } from "@reduxjs/toolkit";
import { initialStateT } from "./types";

const initialState: initialStateT = {
  open: false,
  searchText: "",
  isSearching: false,
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      if (action.payload.searchText !== undefined) {
        state.searchText = action.payload.searchText;
      }
      if (action.payload.isSearching !== undefined) {
        state.isSearching = action.payload.isSearching;
      }
      if (action.payload.searchQuery !== undefined) {
        state.searchQuery = action.payload.searchQuery;
      }
    },
    toggleSearchbar: (state) => {
      state.open = !state.open;
    }
  },
});

export const { setSearch, toggleSearchbar } = searchSlice.actions;

export default searchSlice.reducer;
