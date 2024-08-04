import { createSlice } from "@reduxjs/toolkit";
import { InitialStateI } from "./types";

const initialState: InitialStateI = {
  plant_gallery_layout: "grid",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setPlantGalleryLayout: (state, action) => {
      state.plant_gallery_layout = action.payload;
    },
  },
});

export const { setPlantGalleryLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
