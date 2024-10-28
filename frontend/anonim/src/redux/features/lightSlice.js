import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    light: false
}

const lightSlice = createSlice({
    name: "light",
    initialState,
    reducers: {
        turnLight: (state) => {
            state.light = !state.light;
        }
    }
})


export const { turnLight } = lightSlice.actions;
export default lightSlice.reducer;

