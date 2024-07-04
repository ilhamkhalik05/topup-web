export const generateToken = () => {
   const token = Math.random().toString(36).substring(2, 15)
   return token
}

export const setLocalStorage = (user, token) => {
   localStorage.setItem('user', user)
   localStorage.setItem('user_session_token', token)
}

export const getLocalUser = () => {
   const user = localStorage.getItem('user')
   return user
}

export const getLocalToken = () => {
   const token = localStorage.getItem('user_session_token')
   return token
}