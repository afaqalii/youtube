import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name:"home",
    initialState:{
        category:"New",
        sidebarState:false,
        sidebarItemClicked: false,
    },
    reducers: {
        getCategory:(state, action) => {
          state.category = action.payload
        },
        toggleSidebarState : (state) =>  {
            state.sidebarState = !state.sidebarState
        },
        activeItemClick: (state, action) => {
          if(action.payload) {
            return state.sidebarItemClicked = action.payload
          }else {
            return state.sidebarItemClicked = !state.sidebarItemClicked
          }
          
        }
    }
})  
export const {getCategory, toggleSidebarState, activeItemClick} = homeSlice.actions
export default homeSlice.reducer