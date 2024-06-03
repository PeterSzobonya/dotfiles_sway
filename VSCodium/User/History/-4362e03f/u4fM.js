import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from './reducers/userReducer';
import { userAuthApiSlice } from './reducers/userReducerAPI';

export const store = configureStore({
  reducer: {
      auth: authReducer,
      [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
  }
});


store.subscribe(() => {
  console.log(change);
});