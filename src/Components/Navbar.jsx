import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
   return (
      <nav className={`navbar ${theme === 'light' ? 'bg-zinc-200' : 'bg-zinc-900'} z-10 sticky top-0 text-white shadow-md shadow-yellow-200`}>
         <div className="container flex justify-between items-center mx-auto p-3">
            <div className="nav-start flex items-center gap-12">
               <img src="/public/logo.webp" alt="" width={150} />
            </div>
            <div className="nav-end flex items-center gap-3">
               <NavSearch />

               {theme === 'light'
                  ?
                  <FaToggleOn className="cursor-pointer text-2xl font-bold" onClick={toggleTheme} />
                  :
                  <FaToggleOff className="cursor-pointer text-2xl font-bold" onClick={toggleTheme} />
               }

               <NavAuth />
            </div>
         </div>
      </nav>
   )
}

const NavSearch = () => {
   return (
      <form className="search relative flex items-center gap-3" action="">
         <input className="peer glass px-5 py-2 w-72 rounded-lg border-0 outline-none bg-gradient-to-r from-zinc-700 to-zinc-900 text-white placeholder:text-zinc-200 focus:border border-b focus:border-yellow-200 ease-in-out duration-150" type="text" name="search" id="search" placeholder="Cari Layanan" />
         <label className="absolute right-3 top-3 text-white text-lg peer-focus:text-yellow-200 ease-in-out duration-150" htmlFor="search">
            <FaSearch />
         </label>
      </form>
   )
}

const NavAuth = () => {
   return (
      <div className="user flex items-center gap-2">
         <Link className="px-5 py-2 bg-primary text-black rounded-lg glass flex items-center gap-2 hover:bg-yellow-500 ease-in duration-150" href="">
            <FaArrowRightFromBracket />
            Masuk
         </Link>
         <Link className="px-5 py-2 bg-primary text-black rounded-lg glass flex items-center gap-2 hover:bg-yellow-500 ease-in duration-150" href="">
            <FaRegUser />
            Daftar
         </Link>
      </div>
   )
}