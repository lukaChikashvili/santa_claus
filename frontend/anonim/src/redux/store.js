import { configureStore } from '@reduxjs/toolkit'
import apiSlice from './api/apiSlice';
import authReducer from './features/authSlice.js'
import { setupListeners } from '@reduxjs/toolkit/query';


const store = configureStore({
    reducer: {
       [apiSlice.reducerPath]: apiSlice.reducer,
       auth: authReducer,

       
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});


setupListeners(store.dispatch);
export default store;