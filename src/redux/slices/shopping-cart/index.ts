import { createSlice } from "@reduxjs/toolkit";
import { ShoppingCartInitialStateI } from "./types";


const initialState: ShoppingCartInitialStateI = {
  cart: JSON.parse(localStorage.getItem("cart") as string) ?? [],
  coupon: JSON.parse(localStorage.getItem("coupon") as string) ?? {},
  shipping: 16,
  payment_method:
    JSON.parse(localStorage.getItem("payment_method") as string) ?? "",
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setShoppingCart: (state, action) => {
        state.cart = action.payload;
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setCoupon: (state, action) => {
        state.coupon = action.payload;
        localStorage.setItem('coupon', JSON.stringify(state.coupon));
    },
    setPaymentMethod: (state, action) => {
        state.payment_method = action.payload;
        localStorage.setItem('payment_method', JSON.stringify(state.payment_method));
    }
  }
});

export const { setShoppingCart, setCoupon, setPaymentMethod } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;