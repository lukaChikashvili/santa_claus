import { configureStore } from '@reduxjs/toolkit'
import apiSlice from './api/apiSlice';
import authReducer from './features/authSlice.js'
import { setupListeners } from '@reduxjs/toolkit/query';
import lightReducer  from './features/lightSlice.js'


const store = configureStore({
    reducer: {
       [apiSlice.reducerPath]: apiSlice.reducer,
       auth: authReducer,
       light: lightReducer
       
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});


setupListeners(store.dispatch);
export default store;