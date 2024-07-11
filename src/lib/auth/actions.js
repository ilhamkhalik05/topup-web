import { generateToken, setLocalStorage } from "./utils"
import { users } from "../data/user"

export const signin = (values) => {
   const { email, password } = values
   const user = users.find(user => user.email === email && user.password === password)

   if (user) {
      setLocalStorage(user, generateToken())
      window.location.href = '/dashboard'
   } else {
      alert('Email atau Password yang anda masukan salah')
   }
}

export const signout = () => {
   if (confirm('Pengen keluar? Ahhh,')) {
      localStorage.removeItem('user')
      localStorage.removeItem('user_session_token')
      window.location.href = '/'
      return
   } else {
      return
   }
}
