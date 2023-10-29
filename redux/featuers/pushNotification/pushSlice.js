import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const pushNotifySlice = createSlice({
  name: "push",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const ne = action.payload;
    },
  },
});

export const { setFormData } = pushNotifySlice.actions;
export default pushNotifySlice.reducer;
