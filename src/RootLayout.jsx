import { useEffect } from "react"
import { useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function RootLayout({ children }) {
   const darkMode = useSelector((state) => state.darkMode.value)

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }, [darkMode])

   return (
      <div
         className="bg-zinc-50 dark:bg-gradient-to-br from-neutral-950 from-20% to-neutral-900 transition-all duration-500">
         <Navbar />
         {children}
         <Footer />
      </div>
   )
}