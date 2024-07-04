import { Link } from "react-router-dom"
import { logo } from "../assets"
import { MdOutlineMailOutline } from "react-icons/md";
import { FaEyeSlash, FaEye, FaUser, FaPhone } from "react-icons/fa";

import { signin } from "../../lib/auth/actions"
import { SigninSchema } from "../../lib/auth/schema"
import { useFormik } from "formik";
import { useState } from "react";

export const SignInForm = () => {
   const signinForm = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: SigninSchema,
      onSubmit: (values) => signin(values)
   })

   return (
      <form onSubmit={signinForm.handleSubmit}>
         <Header>
            <p className='font-normal text-gray-400 italic'>Mohon masukan informasi akun terdaftar kamu dengan benar</p>
         </Header>
         <hr className='mt-5 mb-3 border-yellow-300' />
         <InputGroup
            icon={<MdOutlineMailOutline />}
            label="Email"
            type="text"
            name="email"
            placeholder="Masukan Email"
            onChange={signinForm.handleChange}
            error={signinForm.errors.email && signinForm.touched.email ? signinForm.errors.email : ''}
         />
         <InputGroup
            label="Password"
            type="password"
            name="password"
            placeholder="Masukan Password"
            onChange={signinForm.handleChange}
            error={signinForm.errors.password && signinForm.touched.password ? signinForm.errors.password : ''}
         />
         <div className="flex justify-between items-center">
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
         />
         <InputGroup
            icon={<FaPhone />}
            label="Nomor Whatsapp"
            type="text"
            name="whatsapp_number"
            placeholder="Masukan Nomor Whatsapp"
         />
         <InputGroup
            icon={<MdOutlineMailOutline />}
            label="Email"
            type="text"
            name="email"
            placeholder="Masukan Email"
         />
         <InputGroup
            label="Password"
            type="password"
            name="password"
            placeholder="Masukan Password"
         />
         <InputGroup
            label="Konfirmasi Password"
            type="password"
            name="confirm_password"
            placeholder="Konfirmasi Password"
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

const InputGroup = ({ icon, label, type, name, placeholder, onChange, error }) => {
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
            className={`outline-none border-none focus:ring-2 ${error ? 'focus:ring-red-500' : 'focus:ring-yellow-300'} rounded-lg`}
            type={isPasswordType ? (isPasswordShown ? 'text' : 'password') : type}
            name={name}
            id={label.toLowerCase()}
            placeholder={placeholder}
            onChange={onChange}
            autoComplete="off"
         />

         {/* Error Message */}
         {!!error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
         )}

         {/* Input Icon */}
         <div className="cursor-pointer absolute right-4 top-10 text-lg">
            {isPasswordType
               ?
               <div
                  onClick={togglePassword}>
                  {isPasswordShown ? <FaEye /> : <FaEyeSlash />}
               </div>
               :
               <>
                  {icon}
               </>
            }
         </div>
      </div >
   )
}