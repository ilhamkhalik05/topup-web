import { sales, games, populars } from "../lib/placeholder-data";
import { FaFire, FaBolt } from "react-icons/fa6";
import { TbDeviceGamepad2 } from "react-icons/tb";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Section from '../components/Section'
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import Countdown from "../components/Countdown";
import RootLayout from "../RootLayout";

export default function Beranda() {
   return (
      <RootLayout>
         <Navbar />
         <Banner />

         <div className="container w-[93%] flex flex-col gap-14 mt-10">
            <Section id="sales" className="bg-transparent rounded-lg shadow-zinc-950 dark:bg-transparent">
               <header className="flex flex-row items-center justify-between gap-3 lg:justify-start text-zinc-700 font-semibold text-xl mb-5 dark:text-white">
                  <div className="flex items-center gap-2">
                     <FaBolt className="text-yellow-300" />
                     <h1 className="text-md lg:text-lg border-b-2 border-yellow-200 mr-2">Flash Sale</h1>
                  </div>
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
         <Footer />
      </RootLayout>
   )
}