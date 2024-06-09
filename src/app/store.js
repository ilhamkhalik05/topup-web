import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './features/dark-mode/dark-mode-slice'
import searchModalReducer from './features/search-modal/search-modal-slice'
import mobileNavReducer from './features/mobile-nav/mobile-nav-slice'

export const store = configureStore({
   reducer: {
      darkMode: darkModeReducer,
      searchModal: searchModalReducer,
      mobileNav: mobileNavReducer
   }
})