import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null },
    reducers: {
        login: (state, { payload: { user, accessToken: token } }) => {
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const { login, logout } = userAuthSlice.actions;

export const authReducer = userAuthSlice.reducer;

export const selectCurrentUser = (state) => state.userAuthSlice.user;
export const selectToken = (state) => state.userAuthSlice.token;