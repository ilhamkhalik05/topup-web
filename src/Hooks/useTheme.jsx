import { useState } from "react";

export const useTheme = () => {
   const [darkMode, setDarkMode] = useState(false);
   const [theme, setTheme] = useState('dark')

   const toggleTheme = () => {
      setDarkMode(!darkMode);
      setTheme(darkMode ? 'dark' : 'light')
   }

   return { theme, toggleTheme }
}