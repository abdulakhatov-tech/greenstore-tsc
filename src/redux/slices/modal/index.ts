import { createSlice } from "@reduxjs/toolkit";
import { InitialStateT } from "./types";


const initialState:InitialStateT = {
    authModalVisibility: {
        open: false,
        authQuery: null,
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleAuthModalVisibility: (state, action) => {
            state.authModalVisibility = {...state.authModalVisibility, ...action.payload}
        },
    }
})

export const { toggleAuthModalVisibility } = modalSlice.actions

export default modalSlice.reducer;