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
  addProductFormModalVisibility: false,
  editProductFormModalVisibility: {
    open: false,
    product: null,
  },
  orderDetailsModalVisibility: {
    open: false,
    order: null,
  }, 
  dashboardSidebarModalVisibility: false,
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
    toggleAddProductFormModalVisibility: (state, action) => {
      state.addProductFormModalVisibility = action.payload;
    },
    toggleEditProductFormModalVisibility: (state, action) => {
      state.editProductFormModalVisibility = {
        open: action.payload.open,
        product: action.payload.product,
      };
    },
    toggleOrderDetailsModalVisibility: (state, action) => {
      state.orderDetailsModalVisibility = {
        open: action.payload.open,
        order: action.payload.order,
      };
    },
    toggleDashboardSidebarModalVisibility: (state, action) => {
      state.dashboardSidebarModalVisibility = action.payload;
    },
  },
});

export const {
  toggleAuthModalVisibility,
  toggleSideMenuModalVisibility,
  toggleCategoriesModalVisibility,
  toggleCategoryModalVisibility,
  toggleTrackOrderModalVisibility,
  toggleAddProductFormModalVisibility,
  toggleOrderDetailsModalVisibility,
  toggleEditProductFormModalVisibility,
  toggleDashboardSidebarModalVisibility
} = modalSlice.actions;

export default modalSlice.reducer;
