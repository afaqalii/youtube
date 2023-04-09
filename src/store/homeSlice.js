import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name:"home",
    initialState:{
        category:"New"
    },
    reducers: {
        getCategory:(state, action) => {
          state.category = action.payload
        }
    }
})
export const {getCategory} = homeSlice.actions
export default homeSlice.reducer