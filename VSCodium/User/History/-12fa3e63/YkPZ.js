import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: "experience",
    initialState: [],
    reducers: {
        setExperiences: (state, { payload: experiences }) => {
            state = experiences;
        }
    }
});

export const { login, logout } = experienceSlice.actions;

export const authReducer = experienceSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;