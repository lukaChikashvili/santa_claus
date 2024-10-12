import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'


const baseQuery = fetchBaseQuery(BASE_URL);

const apiSlice = createApi({
    baseQuery,
    endpoints: () => ({})
});



export default apiSlice;