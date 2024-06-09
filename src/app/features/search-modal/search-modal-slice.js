import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   show: false
}

const searchModalSlice = createSlice({
   name: 'searchModal',
   initialState,
   reducers: {
      showSearchModal: (state) => {
         state.show = true
      },
      closeSearchModal: (state) => {
         state.show = false
      }
   }
})

export const { showSearchModal, closeSearchModal } = searchModalSlice.actions
export default searchModalSlice.reducer