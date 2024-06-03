import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: "auth",
    initialState: [],
    reducers: {
        addExperiences: (state, experiences) => {
            state.push(experiences);
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

export const { addExperience, updateExperience, deleteExperience } = experienceSlice.actions;
export default experienceSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;