import { StepperSlice_State } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

const initialState: StepperSlice_State = {
  activeStep: 0,
  path:"/createProfile"
};

export const StepperSlice = createSlice({
  name: "Steps",
  initialState: initialState,
  reducers: {
    addActiveStep: (state) => {
      state.activeStep += 1;
      const router = useRouter();
      router.push(state.path)
    },
    removeActiveStep: (state) => {
      state.activeStep = initialState.activeStep;
    },
  },
});

export const { addActiveStep, removeActiveStep } = StepperSlice.actions;

export default StepperSlice.reducer;
