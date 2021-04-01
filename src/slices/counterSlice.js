import { createSlice } from '@reduxjs/toolkit';

/**
 * set the initial state for counter
 */
const initialState = {
  count: 0,
};

/**
 * create "counter" slice reducer and its action creators
 */
const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const selectCount = (state) => state.counter.count;
/**
 * export the slice action creators
 */
export const { increment, decrement } = counter.actions;
export default counter.reducer;
