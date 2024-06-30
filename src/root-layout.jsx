import { useEffect } from "react"
import { useSelector } from "react-redux"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

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
         className="bg-root-light dark:bg-root-dark theme-transition">
         <Navbar />
         {children}
         <Footer />
      </div>
   )
}