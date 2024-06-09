import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: localStorage.getItem('darkMode') === 'true' ? true : false
}

const darkModeSlice = createSlice({
   name: 'darkMode',
   initialState,
   reducers: {
      toggleDarkMode: (state) => {
         state.value = !state.value
         localStorage.setItem('darkMode', state.value)
      },
      setDarkMode: (state) => {
         state.value = true
         localStorage.setItem('darkMode', state.value)
      },

      resetDarkMode: (state) => {
         state.value = false
         localStorage.setItem('darkMode', state.value)
      }
   }
})

export const { toggleDarkMode, setDarkMode, resetDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer