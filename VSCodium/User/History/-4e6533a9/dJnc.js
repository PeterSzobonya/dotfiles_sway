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
            query: (args) => {
                const { body, token } = args;
                return {
                    url: "experiences",
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    body
                };
            }
        }),
        getExperiences: build.mutation({
            query: (token) => {
                return {
                    url: "experiences",
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                }
            }
        }),
    }),
});

export const { useAddExperiencesMutation } = experienceApiSlice;