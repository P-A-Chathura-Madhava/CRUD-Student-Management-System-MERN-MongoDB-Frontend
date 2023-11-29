import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./reducers/studentSlice";

const store = configureStore({
  reducer: {
    get: studentSlice,
  },
});

export default store;
