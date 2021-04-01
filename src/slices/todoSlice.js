// eslint-disable-next-line no-unused-vars
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import appConfig from '../config';

/**
 * set the initial state for counter
 */
const initialState = {
  todos: [],
  loading: false,
  error: null,
};

/**
 * create "todo" slice reducer and its action creators
 */
const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodos(state) {
      state.loading = true;
    },
    getTodosFail(state, action) {
      state.error = action.payload;
    },
    getTodosSuccess(state, action) {
      state.loading = false;
      state.todos = action.payload;
    },
  },
});

export const selectTodos = (state) => state.todo.todos;
/**
 * export the slice action creators
 */
export const { getTodos, getTodosFail, getTodosSuccess } = todo.actions;
export default todo.reducer;

export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch(getTodos());
    const { data } = await axios.get(appConfig.REACT_APP_MOCK_API_URL);
    dispatch(getTodosSuccess(data));
  } catch (error) {
    dispatch(getTodosFail(`error: ${error}`));
  }
};
