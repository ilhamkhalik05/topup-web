import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaToggleOff, FaToggleOn, FaSearch, FaHome, FaList, FaMoon } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaArrowRightFromBracket, FaRegUser, FaBars } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../app/features/dark-mode/dark-mode-slice";
import { showSearchModal } from "../app/features/search-modal/search-modal-slice";
import { showMobileNav } from "../app/features/mobile-nav/mobile-nav-slice";
import { logo } from "./Assets";
import SearchModal from "./SearchModal";
import SideNav from "./SideNav";

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
         icon: <FaList />
      },
      {
         label: "Cek Transaksi",
         path: "/transaction-check",
         icon: <BsCurrencyExchange />
      },
   ]

   return (
      <nav className={`bg-zinc-200 text-zinc-900 z-50 sticky top-0 dark:bg-zinc-950 dark:text-zinc-200 transition-all duration-500`}>
         <div className="container flex justify-between items-center mx-auto p-5">
            <NavBurgerToggler dispatch={dispatch} />
            <NavStart pathname={pathname} links={links} />
            <NavEnd darkMode={darkMode} dispatch={dispatch} />
            <SearchModal />
            <SideNav links={links} />
         </div>
      </nav>
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
   const active = "text-yellow-400 dark:text-yellow-200";
   return (
      <div className="nav-start flex items-center gap-7">
         <img src={logo} alt="Logo" width={150} />
         <div className={`hidden lg:flex items-center gap-5 border-s-2 border-yellow-300 pl-8`}>
            {links.map((link, index) => {
               return (
                  <Link
                     className={`${pathname === link.path ? active : 'hover:text-yellow-600 dark:hover:text-yellow-200'} font-medium flex items-center gap-2`}
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

const NavEnd = ({ darkMode, dispatch }) => (
   <div className="nav-end flex items-center gap-4">
      <div
         className="z-20 cursor-pointer text-lg peer-focus:text-yellow-200"
         onClick={() => dispatch(showSearchModal())}
      >
         <FaSearch />
      </div>

      {darkMode
         ? <FiSun className="hidden lg:block cursor-pointer text-2xl font-bold" onClick={() => dispatch(toggleDarkMode())} />
         : <FiMoon className="hidden lg:block cursor-pointer text-2xl font-bold" onClick={() => dispatch(toggleDarkMode())} />
      }

      <NavAuth />
   </div>
);

const NavAuth = () => (
   <div className="user hidden lg:flex items-center gap-2">
      <Link
         className="px-4 py-2 bg-yellow-300 text-black rounded-lg glass flex items-center gap-2 hover:bg-yellow-200 ease-in duration-150"
         to="/signin"
      >
         <FaArrowRightFromBracket />
         Masuk
      </Link>
      <Link
         className="px-4 py-2 bg-yellow-300 text-black rounded-lg glass flex items-center gap-2 hover:bg-yellow-200 ease-in duration-150"
         to="/signup"
      >
         <FaRegUser />
         Daftar
      </Link>
   </div>
);
