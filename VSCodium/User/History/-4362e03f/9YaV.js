import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from './reducers/auth/userReducer';
import { userAuthApiSlice } from './reducers/auth/userReducerAPI';
import { experienceApiSlice } from "./reducers/experience/experienceReducerApi";
import { jobsApiSlice } from "./reducers/jobs/jobsReducerApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
    [experienceApiSlice.reducerPath]: experienceApiSlice.reducer,
    [jobsApiSlice.reducerPath]: jobsApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApiSlice.middleware),
  preloadedState: localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
});


store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});