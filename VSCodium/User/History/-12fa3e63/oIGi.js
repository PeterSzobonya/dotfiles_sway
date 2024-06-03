import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: "experience",
    initialState: [],
    reducers: {
        setExperiences: (state, { payload: experiences }) => {
            state.experience = experiences;
        }
    }
});

export const { setExperiences } = experienceSlice.actions;

export const experienceReducer = experienceSlice.reducer;

export const selectExperiences = (state) => state.experience;