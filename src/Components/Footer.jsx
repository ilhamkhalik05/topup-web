import logo from '../assets/logo.webp'

export default function Footer() {
   return (
      <footer className="footer p-10 bg-zinc-950 mt-10">
         <aside className="flex flex-col gap-3">
            <img src={logo} alt="" width={180} height={180} />
            <p className="text-zinc-300">WEBTOPUPKU<br />Website Top-Up Termurah, Tercepat & Terpercaya di Indonesia</p>
         </aside>
         <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            <nav className="flex flex-col gap-2 text-zinc-300">
               <h6 className="footer-title">Social Media</h6>
               <a className="link link-hover">Instagram</a>
               <a className="link link-hover">Facebook</a>
               <a className="link link-hover">Tiktok</a>
            </nav>
            <nav className="flex flex-col gap-2 text-zinc-300">
               <h6 className="footer-title">Peta Situs</h6>
               <a className="link link-hover">Tentang</a>
               <a className="link link-hover">FAQ</a>
               <a className="link link-hover">Syarat & Ketentuan</a>
               <a className="link link-hover">Layanan</a>
            </nav>
            <nav className="flex flex-col gap-2 text-zinc-300">
               <h6 className="footer-title">ketentuan</h6>
               <a className="link link-hover">Terms of use</a>
               <a className="link link-hover">Privacy policy</a>
               <a className="link link-hover">Cookie policy</a>
            </nav>
         </div>
      </footer>
   )
}