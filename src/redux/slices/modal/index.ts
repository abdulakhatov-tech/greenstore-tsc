import { createSlice } from "@reduxjs/toolkit";
import { InitialStateT } from "./types";

const initialState: InitialStateT = {
  authModalVisibility: {
    open: false,
    authQuery: null,
  },
  sideMenuModalVisibility: false,
  categoriesModalVisibility: false,
  categoryModalVisibility: false,
  trackOrderModalVisibility: false,
  productFormModalVisibility: false,
  getOrderDetailsModalVisibility: false, 
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleAuthModalVisibility: (state, action) => {
      state.authModalVisibility = {
        ...state.authModalVisibility,
        ...action.payload,
      };
    },
    toggleSideMenuModalVisibility: (state, action) => {
      state.sideMenuModalVisibility = action.payload;
    },
    toggleCategoriesModalVisibility: (state, action) => {
      state.categoriesModalVisibility = action.payload;
    },
    toggleCategoryModalVisibility: (state, action) => {
      state.categoryModalVisibility = action.payload;
    },
    toggleTrackOrderModalVisibility: (state, action) => {
      state.trackOrderModalVisibility = action.payload;
    },
    toggleProductFormModalVisibility: (state, action) => {
      state.productFormModalVisibility = action.payload;
    },
    toggleGetOrderDetailsModalVisibility: (state, action) => {
      state.getOrderDetailsModalVisibility = action.payload;
    },
  },
});

export const {
  toggleAuthModalVisibility,
  toggleSideMenuModalVisibility,
  toggleCategoriesModalVisibility,
  toggleCategoryModalVisibility,
  toggleTrackOrderModalVisibility,
  toggleProductFormModalVisibility,
  toggleGetOrderDetailsModalVisibility
} = modalSlice.actions;

export default modalSlice.reducer;
