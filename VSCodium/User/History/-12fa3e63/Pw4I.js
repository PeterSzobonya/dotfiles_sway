import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: "auth",
    initialState: { experiences: [] },
    reducers: {
        addExperiences: (state, { payload: { experiences} }) => {
            state.experiences = experiences;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const { login, logout } = userAuthSlice.actions;

export const authReducer = userAuthSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;