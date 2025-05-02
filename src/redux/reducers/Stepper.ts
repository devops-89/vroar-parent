import { StepperSlice_State } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: StepperSlice_State = {
  activeStep: 0,
  path: "/createProfile",
};

export const StepperSlice = createSlice({
  name: "Steps",
  initialState: initialState,
  reducers: {
    addActiveStep: (state, action) => {
      state.activeStep += 1;
    },
    removeActiveStep: (state) => {
      state.activeStep = initialState.activeStep;
    },
    goBackStep: (state) => {
      if (state.activeStep > 0) {
        state.activeStep -= 1;
      }
    },
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
    },
  },
});

export const { addActiveStep, removeActiveStep, goBackStep, setActiveStep } =
  StepperSlice.actions;

export default StepperSlice.reducer;
