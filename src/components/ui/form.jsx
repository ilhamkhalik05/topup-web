import { Link } from "react-router-dom"
import { logo } from "../assets"
import { useDispatch } from "react-redux"
import { useState } from "react";
import { login } from "../../app/features/auth/auth-slice"

import { MdOutlineMailOutline } from "react-icons/md";
import { FaEyeSlash, FaEye, FaUser, FaPhone } from "react-icons/fa";

export const SignInForm = () => {
   const dispatch = useDispatch()

   const onLoginSubmit = (e) => {
      const email = e.target[0].value
      const password = e.target[1].value
      dispatch(login({ email, password }))
   }

   return (
      <form onSubmit={onLoginSubmit}
      >
         <Header>
            <p className='font-normal text-gray-400 italic'>Mohon masukan informasi akun terdaftar kamu dengan benar</p>
         </Header>
         <hr className='mt-5 mb-3 border-yellow-300' />
         <InputGroup
            icon={<MdOutlineMailOutline />}
            label="Email"
            type="email"
            name="email"
            placeholder="Masukan Email"
            required
         />
         <InputGroup
            label="Password"
            type="password"
            name="password"
            placeholder="Masukan Password"
            required
         />
         <div className="flex justify-between items-center mb-3">
            <div className="remember">
               <label className="label cursor-pointer">
                  <span className="label-text text-gray-200 mr-2">Remember me</span>
                  <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
               </label>
            </div>
            <Link
               className='text-yellow-400 text-sm lg:textarea-md underline underline-offset-2'
            >
               Lupa Password
            </Link>
         </div>
         <button
            className='btn border-0 bg-gradient-to-br from-yellow-300 to-yellow-500 text-zinc-100 w-full rounded-lg'
            type='submit'>
            Masuk
         </button>
      </form>
   )
}


export const SignUpForm = () => {
   return (
      <form action="">
         <Header>
            <p className='font-normal text-gray-400 italic'>Mohon masukan informasi pendaftaran kamu dengan benar</p>
         </Header>
         <hr className='mt-5 mb-3 border-yellow-300' />
         <InputGroup
            icon={<FaUser />}
            label="Username"
            type="text"
            name="username"
            placeholder="Masukan Username"
            required
         />
         <InputGroup
            icon={<FaPhone />}
            label="Nomor Whatsapp"
            type="text"
            name="whatsapp_number"
            placeholder="Masukan Nomor Whatsapp"
            required
         />
         <InputGroup
            icon={<MdOutlineMailOutline />}
            label="Email"
            type="email"
            name="email"
            placeholder="Masukan Email"
            required
         />
         <InputGroup
            label="Password"
            type="password"
            name="password"
            placeholder="Masukan Password"
            required
         />
         <InputGroup
            label="Konfirmasi Password"
            type="password"
            name="confirm_password"
            placeholder="Konfirmasi Password"
            required
         />
         <button
            className='btn border-0 bg-gradient-to-br from-yellow-300 to-yellow-500 text-zinc-100 w-full rounded-lg mt-5'
            type='submit'>
            Daftar
         </button>
      </form>
   )
}

const Header = ({ children }) => {
   return (
      <header className='flex flex-col gap-3'>
         <img
            src={logo}
            alt=""
            width={170}
         />
         {children}
      </header>
   )
}

const InputGroup = ({ icon, label, type, name, placeholder }) => {
   const [isPasswordShown, setIsPasswordShown] = useState(false)
   const isPasswordType = type === 'password'

   const togglePassword = () => {
      setIsPasswordShown(!isPasswordShown)
   }

   return (
      <div className="relative flex flex-col gap-1 mb-3">
         <label className='text-gray-300 font-semibold' htmlFor={label.toLowerCase()}>
            {label}
         </label>
         <input
            className='outline-none border-none focus:ring-2 focus:ring-yellow-300 rounded-lg'
            type={isPasswordType ? (isPasswordShown ? 'text' : 'password') : type}
            name={name}
            id={label.toLowerCase()}
            placeholder={placeholder}
            autoComplete="off"
         />
         <div
            className={`${!!isPasswordType && 'cursor-pointer'} absolute right-4 top-10 text-lg`}
            onClick={!!isPasswordType && togglePassword}>
            {isPasswordType ? (isPasswordShown ? <FaEye /> : <FaEyeSlash />) : icon}
         </div>
      </div>
   )
}