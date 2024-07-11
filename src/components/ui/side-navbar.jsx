import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6"
import { GrTransaction } from "react-icons/gr"
import { TbReport } from "react-icons/tb"
import { RxDashboard } from "react-icons/rx";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setDarkMode, resetDarkMode } from "../../app/features/dark-mode/dark-mode-slice";
import { closeMobileNav } from "../../app/features/mobile-nav/mobile-nav-slice";
import { logo } from '../assets'
import { getLocalToken } from "../../lib/auth/utils";

export default function SideNav({ links }) {
   const token = getLocalToken()
   const [animationClass, setAnimationClass] = useState("");
   const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false)
   const darkMode = useSelector((state) => state.darkMode.value);
   const isMobileNavShow = useSelector((state) => state.mobileNav.show);
   const { pathname } = useLocation();
   const dispatch = useDispatch();

   console.log(pathname)

   useEffect(() => {
      if (token) {
         setIsAuthenticated(true)
      } else {
         setIsAuthenticated(false)
      }
   }, [token])

   useEffect(() => {
      if (isMobileNavShow) {
         setAnimationClass("animate-slideIn");
      } else {
         setAnimationClass("animate-slideOut");
      }
   }, [isMobileNavShow]);

   if (!isMobileNavShow) {
      return null;
   }

   return (
      <div
         className={`z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isMobileNavShow ? '' : 'pointer-events-none'}`}
         onClick={() => dispatch(closeMobileNav())}
      >
         <div
            className={`fixed top-0 left-0 w-3/5 h-screen bg-dark-ui-2 rounded-e-lg dark:bg-neutral-900 text-white transition-all duration-500 ${animationClass}`}
            onClick={(e) => e.stopPropagation()}
         >
            <div className="container flex flex-col gap-3 px-5 py-8">
               <div className="flex flex-col items-center">
                  <img src={logo} alt="Logo" width={150} />
                  <hr className="w-full border border-yellow-200 mt-5 mb-7" />
                  <div className="w-full flex flex-col items-start gap-5 ml-3 text-light-ui">
                     <div className={`flex flex-col items-start gap-2`}>
                        {links.map((link, index) => {
                           const isPathMatches = pathname === link.path
                           const isDashboard = isPathMatches && pathname.includes('/dashboard')

                           return (
                              <a
                                 className={`${isPathMatches || isDashboard ? 'text-yellow-200' : null} ${link.label === 'Dashboard' && 'mt-3'} flex items-center gap-3 hover:text-yellow-200`}
                                 key={index}
                                 href={link.path}>
                                 {link.icon}
                                 {link.label}
                              </a>
                           )
                        })}
                     </div>

                     {!isAuthenticated && (
                        <div className={`flex flex-col items-start gap-2`}>
                           <Link
                              className="flex items-center gap-3 hover:text-yellow-200"
                              to="/signin">
                              <FaArrowRightFromBracket />
                              Masuk
                           </Link>
                           <Link
                              className="flex items-center gap-3 hover:text-yellow-200"
                              to="/signup">
                              <FaUser />
                              Daftar
                           </Link>
                        </div>
                     )}

                     {darkMode
                        ? <button
                           className="flex items-center gap-3 hover:text-yellow-200"
                           onClick={() => dispatch(resetDarkMode())}
                        >
                           <FaSun />
                           Light Mode
                        </button>
                        : <button
                           className="flex items-center gap-3 hover:text-yellow-200"
                           onClick={() => dispatch(setDarkMode())}
                        >
                           <FaMoon />
                           Dark Mode
                        </button>
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
