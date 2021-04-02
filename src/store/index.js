import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// root reducer
import rootReducer from './rootReducer';

// NOTE: suggest persist authReducer
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, logger];
}

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);

export default store;
