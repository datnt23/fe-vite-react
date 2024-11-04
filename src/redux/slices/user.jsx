import { createSlice } from "@reduxjs/toolkit";
// ----------------------------------------------------------------------
const initialState = {
  isLoading: false,
  error: null,
  users: [],
};
// ----------------------------------------------------------------------
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// ----------------------------------------------------------------------
export default userSlice.reducer;

export const userActions = userSlice.actions;
// ----------------------------------------------------------------------
