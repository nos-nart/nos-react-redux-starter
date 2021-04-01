import { combineReducers } from '@reduxjs/toolkit';

// import all reducers here
import counterReducer from '../slices/counterSlice';
import todoReducer from '../slices/todoSlice';

// combine all reducers into a single state object
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export default rootReducer;
