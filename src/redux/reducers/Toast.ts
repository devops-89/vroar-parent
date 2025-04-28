import { TOAST_STATUS } from "@/utils/enum";
import { TOAST } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TOAST = {
  message: "",
  open: false,
  variant: "",
  autoHideDuration: 3000,
};

export const toastSlice = createSlice({
  name: "Toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.variant = action.payload.variant;
      state.autoHideDuration = action.payload.autoHideDuration;
    },
    hideToast: (state) => {
      state.open = false;
    },
  },
});
export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
