import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cart_value: [],
};

const cart = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart_value.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart_value.push({ ...product, quantity: 1 });
      }
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.cart_value.find(
        (item) => item.id === productId
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.cart_value = state.cart_value.filter(
            (item) => item.id !== productId
          );
        }
      }
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart_value = state.cart_value.filter((item) => item.id !== itemId);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.cart_value.find((item) => item.id === id);
    
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeItem, decreaseQuantity  , updateQuantity} = cart.actions;

export default cart.reducer;
