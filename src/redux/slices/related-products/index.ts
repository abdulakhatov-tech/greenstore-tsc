import { createSlice } from "@reduxjs/toolkit";
import { InitialStateI } from "./types";

const initialState: InitialStateI = {
    category: 'house-plants',
}

const ReletedProductsSlice = createSlice({
    name: "relatedProducts",
    initialState,
    reducers: {
        setRelatedProducts: (state, action) => {
            state.category = action.payload ?? "house-plants";
        },
    },
})

export const { setRelatedProducts } = ReletedProductsSlice.actions;

export default ReletedProductsSlice.reducer;