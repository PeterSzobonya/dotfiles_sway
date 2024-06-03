import { buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useState } from 'react';
import { selectToken } from '../auth/userReducer';

const BASE_URL = "http://localhost:3030";

export const experienceApiSlice = createApi({
    reducerPath: "userAuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (build) => ({
        addExperiences: build.mutation({
            query: (body, token) => {
                return {
                    url: "experiences",
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}` // Corrected the headers format
                    },
                    body
                };
            }
        }),
    }),
});

export const { useAddExperiencesMutation } = experienceApiSlice;