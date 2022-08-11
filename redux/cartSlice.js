import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    customer: "User",
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
        // state.initialState;
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    update: (state, action) =>{
      state.customer = action.payload.customer;
    }
  },
});

export const { addProduct, reset, update } = cartSlice.actions;
export default cartSlice.reducer;