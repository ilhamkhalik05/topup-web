import { SignInForm, SignUpForm } from '../components/ui/form'
import { authSideImg } from '../components/assets'
import { FaAnglesLeft } from "react-icons/fa6";
import { FaHome } from "react-icons/fa"

import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Auth({ currentPage }) {
   const status = useSelector((state) => state.auth.status);
   const navigate = useNavigate('/')

   useEffect(() => {
      if (status === 'authenticated') {
         navigate('/dashboard')
      }
   }, [])

   return (
      <>
         {/* Home Redirect Mobile */}
         <div
            className="tooltip tooltip-warning z-50 glass block lg:hidden fixed right-7 bottom-5 bg-zinc-100 rounded-md p-3 shadow-xl shadow-gray-950 text-lg"
            data-tip="Ke Beranda"
         >
            <Link to={'/'}>
               <FaHome />
            </Link>
         </div>
         {/* Home Redirect Mobile */}

         {/* Home Redirect Desktop*/}
         <div className="hidden lg:block fixed left-3 top-6">
            <Link className='px-4 py-2 rounded-lg bg-transparent text-gray-400 text-md flex items-center gap-1 italic hover:text-gray-300 ease-in-out duration-300' to={'/'}>
               <FaAnglesLeft className='-skew-x-12' />
               Back to Home
            </Link>
         </div>
         {/* Home Redirect Desktop*/}

         <div className="flex flex-row w-full h-screen">
            {/* Side Pic */}
            <div className="hidden lg:block w-1/2">
               <img className='w-full h-full object-cover object-center' src={authSideImg} alt="" />
            </div>

            {/* Auth Form */}
            <div className="block w-full lg:w-1/2 bg-gradient-to-b from-slate-900 to-slate-950 overflow-y-auto no-scrollbar">
               <div className="container px-5 py-7 flex flex-col">
                  <ToggleForm currentPage={currentPage} />

                  <div className="w-full outline outline-gray-800 shadow-inner shadow-gray-950 rounded-md p-3 lg:p-5">
                     {currentPage === 'signin' ? <SignInForm /> : <SignUpForm />}
                  </div>

                  <footer className='text-gray-500 text-center before:font-semibold mt-10'>
                     Copyright by &copy; Webtopupku
                  </footer>
               </div>
            </div>
         </div>
      </>
   )
}


const ToggleForm = ({ currentPage }) => {
   return (
      <div className="mb-7 flex items-center w-full shadow-xl shadow-slate-950 font-semibold">
         <Link
            className={`${currentPage === 'signin' ? 'bg-yellow-300 text-light-ui' : 'bg-slate-800 text-slate-500'} p-2 w-full text-center rounded-s-xl`}
            to="/signin">
            Masuk
         </Link>
         <Link
            className={`${currentPage === 'signup' ? 'bg-yellow-300 text-light-ui' : 'bg-slate-800 text-slate-500'} p-2 w-full text-center rounded-e-xl`}
            to="/signup">
            Daftar
         </Link>
      </div>
   )
}