import { createSlice } from "@reduxjs/toolkit";
import { InitialStateT } from "./types";


const initialState:InitialStateT = {
    authModalVisibility: {
        open: false,
        authQuery: null,
    },
    sideMenuModalVisibility: {
        open: false,
    },
    categoriesModalVisibility: false,
    categoryModalVisibility: false,
    trackOrderModalVisbility: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleAuthModalVisibility: (state, action) => {
            state.authModalVisibility = {...state.authModalVisibility, ...action.payload}
        },
        toggleSideMenuModalVisibility: (state, action) => {
            state.sideMenuModalVisibility = {...state.sideMenuModalVisibility,...action.payload}
        },
        toggleCategoriesModalVisibility: (state) => {
            state.categoriesModalVisibility = !state.categoriesModalVisibility
        },
        toggleCategoryModalVisibility: (state) => {
            state.categoryModalVisibility = !state.categoryModalVisibility
        },
        toggleTrackOrderModalVisibility: (state, action) => {
            state.trackOrderModalVisbility = action?.payload ? action?.payload : !state.trackOrderModalVisbility
        }
    }
})

export const { toggleAuthModalVisibility, toggleSideMenuModalVisibility, toggleCategoriesModalVisibility, toggleCategoryModalVisibility, toggleTrackOrderModalVisibility } = modalSlice.actions

export default modalSlice.reducer;