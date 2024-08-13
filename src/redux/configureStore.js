import { configureStore } from "@reduxjs/toolkit";
import addDataReducer from "./slices/addDataSlice";

const store = configureStore({
  reducer: {
    payment: addDataReducer,
  },
});

export default store;
