import { sales } from "../lib/placeholder-data";
import { products } from "../lib/products";
import { FaFire, FaBolt } from "react-icons/fa6";
import { TbDeviceGamepad2 } from "react-icons/tb";
import Banner from "../components/Banner";
import Section from '../components/Section'
import CardList from "../components/CardList";
import Countdown from "../components/Countdown";
import RootLayout from "../RootLayout";
import Container from "../components/Container";
import { useState } from "react";

export default function Beranda() {
   const [section, setSection] = useState('games')
   const activeSection = "bg-yellow-400 text-white"
   function setGame() {
      setSection('games')
   }

   function setVoucher() {
      setSection('voucher')
   }

   function setEntertainment() {
      setSection('entertainment')
   }

   return (
      <RootLayout>
         <Container>
            <Banner />
            <div className="flex flex-col gap-10 mt-20 lg:gap-15">
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
                  <CardList items={products} type='popular' />
               </Section>

               <Section id="games">
                  <header className="flex justify-between items-center text-zinc-900 text-xl font-semibold mb-5 dark:text-zinc-50">
                     <div className="flex items-center gap-2">
                        <TbDeviceGamepad2 className="-skew-x-6 text-teal-600 text-2xl dark:text-teal-300" />
                        <h1 className="text-md lg:text-lg border-b-2 border-red-500 dark:border-yellow-200">Games</h1>
                     </div>
                     <div className="flex items-center gap-1 text-sm">
                        <div
                           className={`${section === 'games' ? activeSection : 'bg-transparent border border-zinc-600'} cursor-pointer px-5 py-2 text-white rounded-full`}
                           onClick={() => setGame()}
                        >
                           Games
                        </div>
                        <div
                           className={`${section === 'voucher' ? activeSection : 'bg-transparent border border-zinc-600'} cursor-pointer px-5 py-2 text-white rounded-full`}
                           onClick={() => setVoucher()}
                        >
                           Voucher
                        </div>
                        <div
                           className={`${section === 'entertainment' ? activeSection : 'bg-transparent border border-zinc-600'} cursor-pointer px-5 py-2 text-white rounded-full`}
                           onClick={() => setEntertainment()}
                        >
                           Entertainment
                        </div>
                     </div>
                  </header>
                  <CardList items={products} type='games' />
               </Section>
            </div>
         </Container>
      </RootLayout>
   )
}