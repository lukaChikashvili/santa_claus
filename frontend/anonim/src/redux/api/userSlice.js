import { USERS_URL } from "../constants";
import apiSlice from "./apiSlice";


const userSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       register: builder.mutation({
        query: (data) => ({
            url: `${USERS_URL}`,
            method: "POST",
             body: data
        })


       }),


    })
});



export const { useRegisterMutation } = userSlice;


