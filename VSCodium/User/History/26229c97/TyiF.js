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
                const { userId, salaryFrom, salaryTo, company, token} = args;
                const url = 'jobs?' + 
                `${userId !== '' ? 'userId=' + userId + '&': ''}` +
                `${salaryFrom !== '' ? 'salaryFrom[$gt]=' + salaryFrom + '&' : ''}` +
                `${salaryTo !== '' ? 'salaryFrom[$lt]=' + salaryTo + '&' : ''}` +
                `${company !== '' ? 'compant[$like]=' + company : ''}`;

                return {
                    url: url,
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                }
            }
        }),
        deleteJob: build.mutation({
            query: (args) => {
                const { id, token } = args;

                return {
                    url: `jobs/${id}`,
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                }
            }
        })
    }),
});

export const { useAddJobMutation, useGetJobsQuery, useDeleteJobMutation } = jobsApiSlice;
