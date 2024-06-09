import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   show: false
}

const mobileNavSlice = createSlice({
   name: 'mobileNav',
   initialState,
   reducers: {
      showMobileNav: (state) => {
         state.show = true
      },
      closeMobileNav: (state) => {
         state.show = false
      }
   }
})

export const { showMobileNav, closeMobileNav } = mobileNavSlice.actions
export default mobileNavSlice.reducer