import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: "auth",
    initialState: [],
    reducers: {
        addExperiences: (state, experiences ) => {
            state.push(experiences);
        },
        deleteExperience: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const { login, logout } = userAuthSlice.actions;

export const authReducer = userAuthSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;