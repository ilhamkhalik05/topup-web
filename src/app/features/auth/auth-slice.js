import { createSlice } from "@reduxjs/toolkit";
import { users } from '../../../lib/placeholder-data';

const TOKEN_KEY = 'token';
const STATUS_KEY = 'status';

const initialState = {
   user: {},
   token: localStorage.getItem(TOKEN_KEY) || '',
   status: localStorage.getItem(STATUS_KEY) || 'unauthenticated'
};

const generateToken = () => {
   return Math.random().toString(36).slice(2);
};

const setLocalStorage = (token, status) => {
   localStorage.setItem(TOKEN_KEY, token);
   localStorage.setItem(STATUS_KEY, status);
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, action) => {
         const { email, password } = action.payload;
         const user = users.find(user => user.email === email && user.password === password);

         if (user) {
            state.user = user;
            state.token = generateToken();
            state.status = 'authenticated';
            setLocalStorage(state.token, state.status);
         } else {
            state.user = {};
            state.token = '';
            state.status = 'unauthenticated';
            setLocalStorage(state.token, state.status);
         }
      },
      logout: (state) => {
         state.user = {};
         state.token = '';
         state.status = 'unauthenticated';
         setLocalStorage(state.token, state.status);
      }
   }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
