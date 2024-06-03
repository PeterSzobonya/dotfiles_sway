import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: "experience",
    initialState: [],
    reducers: {
        addExperiences: (state, experiences) => {
            state.push(experiences);
        },
        setExperiences: (state, experiences) => {
            state = experiences;
        },
        updateExperience: (state, experience) => {
            const { id, updatedExperience } = experience.payload;
            const index = state.findIndex(exp => exp.id === id);
            if (index !== -1) {
                state[index] = updatedExperience;
            }
        },
        deleteExperience: (state, experience) => {
            return state.filter(exp => exp.id !== experience.payload);
        }
    }
});
export const { addExperience, updateExperience, deleteExperience, setExperiences } = experienceSlice.actions;
export const experienceReducer = experienceSlice.reducer;

export const selectExperience = (state) => state.experience;