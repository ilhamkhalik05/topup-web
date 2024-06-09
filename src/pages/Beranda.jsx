import { sales, games, populars } from "../lib/placeholder-data";
import { FaFire, FaBolt } from "react-icons/fa6";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { useEffect } from "react"
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Section from '../components/Section'
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import Countdown from "../components/Countdown";

export default function Beranda() {
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
         className="bg-white dark:bg-zinc-900 transition-all duration-500">
         <Navbar />
         <Banner />

         <main>
            <div className="container w-[93%] flex flex-col gap-10">
               <Section id="sales" className="bg-zinc-300 p-3 rounded-md dark:bg-zinc-950">
                  <header className="flex items-center gap-2 text-zinc-700 font-semibold text-xl mb-5 dark:text-white">
                     <FaBolt className="text-yellow-300" />
                     <h1 className="text-md lg:text-lg border-b-2 border-yellow-200 mr-2">Flash Sale</h1>
                     <Countdown />
                  </header>
                  <CardList items={sales} type='sales' />
               </Section>

               <Section id="populer">
                  <header className="flex items-center gap-2 text-zinc-900 text-xl font-semibold mb-4 dark:text-zinc-50">
                     <FaFire className="text-red-500" />
                     <h1 className="text-md lg:text-lg border-b-2 border-yellow-200">Popular</h1>
                  </header>
                  <CardList items={populars} type='popular' />
               </Section>

               <Section id="games">
                  <header className="flex items-center gap-2 text-zinc-900 text-xl font-semibold mb-5 dark:text-zinc-50">
                     <TbDeviceGamepad2 className="-skew-x-6 text-teal-600 text-2xl dark:text-teal-300" />
                     <h1 className="text-md lg:text-lg border-b-2 border-red-500 dark:border-yellow-200">Games</h1>
                  </header>
                  <CardList items={games} type='games' />
               </Section>
            </div>
         </main>

         <Footer />
      </div>
   )
}