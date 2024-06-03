import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "http://localhost:3030";

export const jobsApiSlice = createApi({
    reducerPath: "jobsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (build) => ({
        addJob: build.mutation({
            query: (args) => {
                const { body, token } = args;
                return {
                    url: "jobs",
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    body
                };
            }
        }),
    }),
});

export const {  } = experienceApiSlice;
