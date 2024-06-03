import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userReducer';
import { userAuthApiSlice } from './reducers/userReducerAPI';

export const store = configureStore({
  reducer: {
      auth: userReducer,
      [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
  }
});
