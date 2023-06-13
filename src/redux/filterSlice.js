import { createSlice } from "@reduxjs/toolkit";
import { initialFilterState } from './initialState';

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload
      console.log(state.filter)
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;