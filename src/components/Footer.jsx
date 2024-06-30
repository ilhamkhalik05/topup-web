import { logo } from "./assets"
import { useSelector } from "react-redux"

export default function Footer() {
   const darkMode = useSelector((state) => state.darkMode.value);

   return (
      <div className="mt-32">
         <div className="theme-transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
               <path fill={darkMode ? "rgb(9, 9, 1)" : "rgb(39, 39, 42)"} fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,224C672,203,768,181,864,197.3C960,213,1056,267,1152,272C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <footer className="footer  bg-dark-ui-2 p-10 dark:bg-dark-ui">
               <aside className="flex flex-col gap-3">
                  <img src={logo} alt="" width={180} height={180} />
                  <p className="text-light-ui">WEBTOPUPKU<br />Website Top-Up Termurah, Tercepat & Terpercaya di Indonesia</p>
               </aside>
               <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full text-light-ui">
                  <nav className="flex flex-col gap-2">
                     <h6 className="footer-title">Social Media</h6>
                     <a className="link link-hover dark:hover:text-yellow-200">Instagram</a>
                     <a className="link link-hover dark:hover:text-yellow-200">Facebook</a>
                     <a className="link link-hover dark:hover:text-yellow-200">Tiktok</a>
                  </nav>
                  <nav className="flex flex-col gap-2">
                     <h6 className="footer-title">Peta Situs</h6>
                     <a className="link link-hover dark:hover:text-yellow-200">Tentang</a>
                     <a className="link link-hover dark:hover:text-yellow-200">FAQ</a>
                     <a className="link link-hover dark:hover:text-yellow-200">Syarat & Ketentuan</a>
                     <a className="link link-hover dark:hover:text-yellow-200">Layanan</a>
                  </nav>
                  <nav className="flex flex-col gap-2">
                     <h6 className="footer-title">ketentuan</h6>
                     <a className="link link-hover dark:hover:text-yellow-200">Terms of use</a>
                     <a className="link link-hover dark:hover:text-yellow-200">Privacy policy</a>
                     <a className="link link-hover dark:hover:text-yellow-200">Cookie policy</a>
                  </nav>
               </div>
            </footer>
         </div>
      </div>
   )
}