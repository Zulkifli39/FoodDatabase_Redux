import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },

    // Untuk Menambahkan
    increaseQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
      }
    },

    // Untuk mengurangi
    decreaseQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },

    // Untuk Menghapus Cart Shop
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } =
  CartSlice.actions;
export default CartSlice.reducer;
