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

       login: builder.mutation({
        query: (data) => ({
            url: `${USERS_URL}/auth`,
            method: "POST",
            body: data
        })
       }),

       logout: builder.mutation({
        query: () => ({
            url:  `${USERS_URL}/logout`,
            method: "POST"
        })
       }),

       createPost: builder.mutation({
        query: (data) => ({
            url: `${USERS_URL}/post`,
            method: "POST",
            body: data
        })
       }),

       getAllPosts: builder.query({
        query: () => ({
          url: `${USERS_URL}/posts`,
          method: "GET"
        })
       }),

       updateProfile: builder.mutation({
        query: (data) => ({
            url: `${USERS_URL}/profile`,
            method: "PUT",
            body: data
        })
       })


    })
});



export const { useRegisterMutation, 
               useLoginMutation , 
               useLogoutMutation, 
               useCreatePostMutation, 
               useGetAllPostsQuery, 
               useUpdateProfileMutation
            } = userSlice;


