import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
                console.log(body);
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
        getExperiences: build.query({
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
        updateExperience: build.mutation({
            query: (args) => {
                const {body, id, token} = args;

                return {
                    url: `experiences/${id}`,
                    method: "PATCH",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    body
                }
            }
        })
    }),
});

export const { useAddExperiencesMutation, useUpdateExperienceMutation, useGetExperiencesQuery } = experienceApiSlice;