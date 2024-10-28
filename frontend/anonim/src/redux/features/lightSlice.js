import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    light: false,
    theme: false,
}

const lightSlice = createSlice({
    name: "light",
    initialState,
    reducers: {
        turnLight: (state) => {
            state.light = !state.light;
        },

        changeTheme: (state) => {
         state.theme = !state.theme
        }


    }
})


export const { turnLight, changeTheme } = lightSlice.actions;
export default lightSlice.reducer;

