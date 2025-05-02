import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
};
export const UserSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      return (state = actions.payload);
    },
    removeUserDetails: (state) => {
      return (state = initialState);
    },
  },
});

export const { setUserDetails, removeUserDetails } = UserSlice.actions;
export default UserSlice.reducer;
