import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeMobileNav } from "../app/features/mobile-nav/mobile-nav-slice";
import { FaHome, FaList, FaMoon, FaRegUser, FaSearch, FaSun, FaUser } from "react-icons/fa";
import { setDarkMode, resetDarkMode } from "../app/features/dark-mode/dark-mode-slice";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import logo from '../assets/logo.webp';

export default function SideNav() {
   const darkMode = useSelector((state) => state.darkMode.value);
   const isMobileNavShow = useSelector((state) => state.mobileNav.show);
   const dispatch = useDispatch();
   const [animationClass, setAnimationClass] = useState("");

   useEffect(() => {
      if (isMobileNavShow) {
         setAnimationClass("animate-slideIn");
      } else {
         setAnimationClass("animate-slideOut");
      }
   }, [isMobileNavShow]);

   if (!isMobileNavShow && animationClass === "animate-slideOut") {
      return null;
   }

   return (
      <div
         className={`z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isMobileNavShow ? '' : 'pointer-events-none'}`}
         onClick={() => dispatch(closeMobileNav())}
      >
         <div
            className={`fixed top-0 left-0 w-3/5 h-screen bg-zinc-300 text-zinc-900 border-e-2 border-zinc-800 rounded-e-lg dark:bg-neutral-900 dark:text-white transition-all duration-500 ${animationClass}`}
            onClick={(e) => e.stopPropagation()}
         >
            <div className="container flex flex-col gap-3 px-5 py-8">
               <div className="flex flex-col items-center">
                  <img src={logo} alt="Logo" width={150} />
                  <hr className="w-full border border-yellow-200 mt-5 mb-7" />
                  <div className="w-full flex flex-col items-start gap-5 ml-3">
                     <div className={`flex flex-col items-start gap-2`}>
                        <a className="flex items-center gap-3 text-zinc-800 hover:text-yellow-400 dark:text-zinc-200 dark:hover:text-yellow-200" href="">
                           <FaHome />
                           Beranda
                        </a>
                        <a className="flex items-center gap-3 text-zinc-800 hover:text-yellow-400 dark:text-zinc-200 dark:hover:text-yellow-200" href="">
                           <FaList />
                           Daftar Layanan
                        </a>
                        <a className="flex items-center gap-3 text-zinc-800 hover:text-yellow-400 dark:text-zinc-200 dark:hover:text-yellow-200" href="">
                           <FaSearch />
                           Cek Transaksi
                        </a>
                     </div>
                     <div className={`flex flex-col items-start gap-2`}>
                        {darkMode
                           ? <button
                              className="flex items-center gap-3 text-zinc-800 hover:text-yellow-600 dark:text-zinc-200 dark:hover:text-yellow-200"
                              onClick={() => dispatch(resetDarkMode())}
                           >
                              <FaSun />
                              Light Mode
                           </button>
                           : <button
                              className="flex items-center gap-3 text-zinc-800 hover:text-yellow-600 dark:text-zinc-200 dark:hover:text-yellow-200"
                              onClick={() => dispatch(setDarkMode())}
                           >
                              <FaMoon />
                              Dark Mode
                           </button>
                        }
                        <a className="flex items-center gap-3 text-zinc-800 hover:text-yellow-400 dark:text-zinc-200 dark:hover:text-yellow-200" href="">
                           <FaArrowRightFromBracket />
                           Masuk
                        </a>
                        <a className="flex items-center gap-3 text-zinc-800 hover:text-yellow-400 dark:text-zinc-200 dark:hover:text-yellow-200" href="">
                           <FaUser />
                           Daftar
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
