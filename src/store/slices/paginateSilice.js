import { createSlice } from "@reduxjs/toolkit";

const paginate = createSlice({
  name: "paginate",
  initialState: 1,
  reducers: {
    // setPage: (_state, action) => action.payload,
    plus: (_state, action) => _state + action.payload,
    less: (_state, action) => _state - action.payload,
  },
});

export const { plus, less } = paginate.actions;
export default paginate.reducer;
