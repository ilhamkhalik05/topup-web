import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   section: 'all'
}

const sectionTabSlice = createSlice({
   name: 'sectionTab',
   initialState,
   reducers: {
      setSection: (state, action) => {
         state.section = action.payload
      }
   }
})

export const { setSection } = sectionTabSlice.actions
export default sectionTabSlice.reducer