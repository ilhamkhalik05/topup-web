import { logo } from "./Assets"

export default function Footer() {
   return (
      <div className="mt-32">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" rgb(9 9 11)" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,224C672,203,768,181,864,197.3C960,213,1056,267,1152,272C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
         <footer className="footer bg-zinc-200 p-10 dark:bg-zinc-950">
            <aside className="flex flex-col gap-3">
               <img src={logo} alt="" width={180} height={180} />
               <p className="text-black dark:text-zinc-300">WEBTOPUPKU<br />Website Top-Up Termurah, Tercepat & Terpercaya di Indonesia</p>
            </aside>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full text-zinc-950 dark:text-zinc-300">
               <nav className="flex flex-col gap-2">
                  <h6 className="footer-title">Social Media</h6>
                  <a className="link link-hover hover:text-yellow-200">Instagram</a>
                  <a className="link link-hover hover:text-yellow-200">Facebook</a>
                  <a className="link link-hover hover:text-yellow-200">Tiktok</a>
               </nav>
               <nav className="flex flex-col gap-2">
                  <h6 className="footer-title">Peta Situs</h6>
                  <a className="link link-hover hover:text-yellow-200">Tentang</a>
                  <a className="link link-hover hover:text-yellow-200">FAQ</a>
                  <a className="link link-hover hover:text-yellow-200">Syarat & Ketentuan</a>
                  <a className="link link-hover hover:text-yellow-200">Layanan</a>
               </nav>
               <nav className="flex flex-col gap-2">
                  <h6 className="footer-title">ketentuan</h6>
                  <a className="link link-hover hover:text-yellow-200">Terms of use</a>
                  <a className="link link-hover hover:text-yellow-200">Privacy policy</a>
                  <a className="link link-hover hover:text-yellow-200">Cookie policy</a>
               </nav>
            </div>
         </footer>
      </div>
   )
}