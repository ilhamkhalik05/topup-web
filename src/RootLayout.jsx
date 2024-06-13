import { useEffect } from "react"
import { useSelector } from "react-redux"

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
         className="bg-zinc-50 dark:bg-zinc-900 transition-all duration-500">
         {children}
      </div>
   )
}