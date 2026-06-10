import { configureStore } from "@reduxjs/toolkit";
import AgeCalcSliceReducer from "../Features/AgeCalcSlice";

export const Store = configureStore({
  reducer: {
    calc: AgeCalcSliceReducer,
  },
});
