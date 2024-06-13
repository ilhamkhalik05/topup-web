import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaToggleOff, FaToggleOn, FaSearch, FaHome, FaList } from "react-icons/fa";
import { FaArrowRightFromBracket, FaRegUser, FaBars } from "react-icons/fa6";
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
         icon: <FaSearch />
      },
   ]

   return (
      <nav className={`bg-zinc-200 text-zinc-900 z-50 sticky top-0 shadow-md shadow-yellow-200 dark:bg-zinc-900 dark:text-zinc-200 transition-all duration-500`}>
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
         <div className={`hidden lg:flex items-center gap-5 border-s-2 border-yellow-300 pl-5`}>
            {links.map((link, index) => {
               return (
                  <Link
                     className={`${pathname === link.path ? active : 'hover:text-yellow-600 dark:hover:text-yellow-200'}`}
                     key={index}
                     to={link.path}>
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
         className="z-20 cursor-pointer text-lg peer-focus:text-yellow-200 transition-colors duration-150 ease-in-out"
         onClick={() => dispatch(showSearchModal())}
      >
         <FaSearch />
      </div>

      {darkMode
         ? <FaToggleOff className="hidden lg:block cursor-pointer text-2xl font-bold" onClick={() => dispatch(toggleDarkMode())} />
         : <FaToggleOn className="hidden lg:block cursor-pointer text-2xl font-bold" onClick={() => dispatch(toggleDarkMode())} />
      }
      <NavAuth />
   </div>
);

const NavAuth = () => (
   <div className="user hidden lg:flex items-center gap-2">
      <Link
         className="px-5 py-2 bg-yellow-300 text-black rounded-lg glass flex items-center gap-2 hover:bg-yellow-200 ease-in duration-150"
         to="/signin"
      >
         <FaArrowRightFromBracket />
         Masuk
      </Link>
      <Link
         className="px-5 py-2 bg-yellow-300 text-black rounded-lg glass flex items-center gap-2 hover:bg-yellow-200 ease-in duration-150"
         to="/signup"
      >
         <FaRegUser />
         Daftar
      </Link>
   </div>
);
