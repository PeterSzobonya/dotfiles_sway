import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from './reducers/auth/userReducer';
import { userAuthApiSlice } from './reducers/auth/userReducerAPI';
import { experienceReducer } from "./reducers/experience/experienceReducer";
import { experienceApiSlice } from "./reducers/experience/experienceReducerApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
    [experienceApiSlice.reducerPath]: experienceApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApiSlice.middleware),
  preloadedState: localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
});


store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});