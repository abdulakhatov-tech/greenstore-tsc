import { createSlice } from "@reduxjs/toolkit";
import { ProductStateI } from "./types";

const initialState: ProductStateI = {
    product: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
    },
})

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;