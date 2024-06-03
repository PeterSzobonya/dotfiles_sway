import { buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "http://localhost:3030";

export const userAuthApiSlice = createApi({
    reducerPath: "userAuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (build) => ({
        addExperiences: build.mutation({
            query: (body) => {
                return {
                    url: "experiences",
                    method: "POST",
                    body
                };
            }
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = userAuthApiSlice;