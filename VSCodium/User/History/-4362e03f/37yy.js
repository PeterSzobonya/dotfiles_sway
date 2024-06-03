import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from './reducers/userReducer';
import { userAuthApiSlice } from './reducers/userReducerAPI';

export const store = configureStore({
  reducer: {
      auth: authReducer,
      [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApiSlice.middleware),
  preloadedState: localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
});


store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});