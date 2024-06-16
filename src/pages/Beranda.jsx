import { sales } from "../lib/placeholder-data";
import { products } from "../lib/products";
import { FaFire, FaBolt } from "react-icons/fa6";
import Banner from "../components/Banner";
import Section from '../components/Section'
import CardList from "../components/CardList";
import Countdown from "../components/Countdown";
import RootLayout from "../RootLayout";
import Container from "../components/Container";
import SectionTab from "../components/SectionTab";

export default function Beranda() {
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

               <Section>
                  <SectionTab />
               </Section>
            </div>
         </Container>
      </RootLayout>
   )
}