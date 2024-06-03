import { buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "http://localhost:5173";

const userAuthApiSlice = createApi({
    reducerPath: "userAuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (build) => ({
        register: build.mutation({
            query: (body) => {
                return {
                    url: "users",
                    method: "POST",
                    body
                };
            }
        }),
        login: build.mutation({
            query: (body) => {
                return {
                    url: "authentication",
                    method: "POST",
                    body
                };
            }
        }),
    }),
})