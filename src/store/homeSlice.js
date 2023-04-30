import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name:"home",
    initialState:{
        category:"New",
        sidebarState:false
    },
    reducers: {
        getCategory:(state, action) => {
          state.category = action.payload
        },
        toggleSidebarState : (state) =>  {
            state.sidebarState = !state.sidebarState
        }
    }
})  
export const {getCategory, toggleSidebarState} = homeSlice.actions
export default homeSlice.reducer