import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaHome } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaArrowRightFromBracket, FaRegUser, FaBars } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../app/features/dark-mode/dark-mode-slice";
import { showSearchModal } from "../app/features/search-modal/search-modal-slice";
import { showMobileNav } from "../app/features/mobile-nav/mobile-nav-slice";
import { GrServices } from "react-icons/gr";
import { logo } from "./assets";
import { SearchModal } from "./ui/modal";
import SideNav from "./ui/side-navbar";
// import UserAvatar from "./ui/user-avatar";

export default function Navbar() {
   const darkMode = useSelector((state) => state.darkMode.value);
   const dispatch = useDispatch();
   const location = useLocation();
   const { pathname } = location

   const links = [
      {
         label: "Home",
         path: "/",
         icon: <FaHome />
      },
      {
         label: "Daftar Layanan",
         path: "/services",
         icon: <GrServices />
      },
      {
         label: "Cek Transaksi",
         path: "/transaction-check",
         icon: <BsCurrencyExchange />
      },
   ]

   return (
      <>
         <nav className={`z-50 sticky top-0 text-light-ui bg-dark-ui-2 dark:bg-dark-ui theme-transition`}>
            <div className="container flex justify-between items-center mx-auto p-5">
               <NavBurgerToggler dispatch={dispatch} />
               <NavStart pathname={pathname} links={links} />
               <NavEnd
                  darkMode={darkMode}
                  dispatch={dispatch}
               // authStatus={authStatus}
               />
            </div>
         </nav>
         <SearchModal />
         <SideNav links={links} />
      </>
   );
}

const NavBurgerToggler = ({ dispatch }) => (
   <div
      className="cursor-pointer block lg:hidden"
      onClick={() => dispatch(showMobileNav())}>
      <FaBars />
   </div>
);

const NavStart = ({ pathname, links }) => {
   const active = "text-primary";
   return (
      <div className="nav-start flex items-center gap-7">
         <img src={logo} alt="Logo" width={150} />
         <div className={`hidden lg:flex items-center gap-5 border-s-2 border-primary pl-8`}>
            {links.map((link, index) => {
               return (
                  <Link
                     className={`${pathname === link.path ? active : 'hover:text-primary'} font-medium flex items-center gap-2 ease-in-out duration-100`}
                     key={index}
                     to={link.path}>
                     {link.icon}
                     {link.label}
                  </Link>
               )
            })}
         </div>
      </div>
   )
};

const NavEnd = ({ darkMode, authStatus, dispatch }) => (
   <div className="nav-end flex items-center gap-2">
      <div
         className="px-3 py-2 font-light rounded-lg border border-dark-ui-3 text-light-ui opacity-85 cursor-pointer hover:bg-dark-ui-2 hover:opacity-100 transition-all duration-100"
         onClick={() => dispatch(showSearchModal())}
      >
         <div className="flex items-center gap-2">
            <IoSearchOutline className="text-lg" />
            <h1 className="hidden md:block">
               Search
            </h1>
         </div>
      </div>

      <div className="hidden lg:block px-3 py-2 rounded-lg border border-dark-ui-3 text-light-ui opacity-85 cursor-pointer hover:bg-dark-ui-2 hover:opacity-100 transition-all duration-100" onClick={() => dispatch(toggleDarkMode())}>
         {darkMode
            ? <FiSun className="text-2xl font-bold" />
            : <FiMoon className="text-2xl font-bold" />
         }
      </div>

      <NavAuth authStatus={authStatus} />
   </div>
);

const NavAuth = () => (
   <div className="hidden lg:block">
      <UserUnauthenticatedNav />
   </div>
);

const UserUnauthenticatedNav = () => {
   return (
      <div className="flex items-center gap-2 ml-2">
         <Link
            className="font-semibold px-5 py-2 bg-transparent opacity-80 text-light-ui outline-1 outline outline-white hover:opacity-100 rounded-md flex items-center gap-2 transition-opacity ease-in-out duration-50"
            to="/signin"
         >
            <FaArrowRightFromBracket />
            Masuk
         </Link>
         <Link
            className="font-semibold px-5 py-2 bg-primary opacity-90 hover:opacity-100 text-dark-ui rounded-md flex items-center gap-2 ease-in duration-150"
            to="/signup"
         >
            <FaRegUser />
            Daftar
         </Link>
      </div>
   )
}