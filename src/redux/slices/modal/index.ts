import { createSlice } from "@reduxjs/toolkit";
import { InitialStateT } from "./types";


const initialState:InitialStateT = {
    authModalVisibility: {
        open: false,
        authQuery: null,
    },
    sideMenuModalVisibility: {
        open: false,
    }
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
    }
})

export const { toggleAuthModalVisibility, toggleSideMenuModalVisibility } = modalSlice.actions

export default modalSlice.reducer;