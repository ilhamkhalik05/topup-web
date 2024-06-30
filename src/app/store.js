import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './features/dark-mode/dark-mode-slice'
import searchModalReducer from './features/search-modal/search-modal-slice'
import mobileNavReducer from './features/mobile-nav/mobile-nav-slice'
import sectionTabReducer from './features/section-tab/section-tab-slice'
import authReducer from './features/auth/auth-slice'

export const store = configureStore({
   reducer: {
      darkMode: darkModeReducer,
      searchModal: searchModalReducer,
      mobileNav: mobileNavReducer,
      sectionTab: sectionTabReducer,
      auth: authReducer
   }
})