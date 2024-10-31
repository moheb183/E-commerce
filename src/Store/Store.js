import { configureStore } from "@reduxjs/toolkit";
import counter from "./Slices/counter";
import cart from "./Slices/cart";

export default configureStore({
  reducer: {
    counter,
    cart,
  },
});
