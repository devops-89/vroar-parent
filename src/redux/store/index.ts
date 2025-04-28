import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../reducers/Toast";
import StepperReducer from "../reducers/Stepper";
export default configureStore({
  reducer: {
    toast: toastReducer,
    StepSlice: StepperReducer,
  },
});
