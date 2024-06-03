import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "http://localhost:3030";

export const jobsApiSlice = createApi({
    reducerPath: "userAuthApi",
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
        getJobs: build.query({
            query: (args) => {

            }
        })
    }),
});

export const { useAddJobMutation } = jobsApiSlice;
