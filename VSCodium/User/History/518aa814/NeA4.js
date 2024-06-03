import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "http://localhost:5173";

export const userAuthApiSlice = createApi({
    reducerPath: "userAuthApi"
})