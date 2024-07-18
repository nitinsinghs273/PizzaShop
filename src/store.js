import { configureStore, createReducer } from "@reduxjs/toolkit";
import userReducer from "./features/user/UserSlice";
import cartReducer from "./features/cart/CartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
