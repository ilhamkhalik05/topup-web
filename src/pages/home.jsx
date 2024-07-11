import RootLayout from "../layout/root-layout";
import Container from "../components/container";
import Banner from "../components/banner";
import SectionPage from '../components/section-page'
import CardList from "../components/card-list";
import Countdown from "../components/ui/countdown";
import SectionTab from "../components/section-tab";
import { FaBolt } from "react-icons/fa6";
import { SiBetterstack } from "react-icons/si";
import { ImFire } from "react-icons/im";

import { products, sales } from "../lib/data/product";

export default function Home() {
   return (
      <RootLayout>
         <Banner />
         <Container>
            <div className="flex flex-col gap-20 lg:mt-20 lg:gap-15">
               <SectionPage id="sales" className="bg-transparent rounded-lg shadow-zinc-950 dark:bg-transparent">
                  <header className="flex flex-row items-center justify-between gap-3 lg:justify-start text-zinc-700 font-semibold text-xl mb-5 dark:text-white">
                     <div className="flex items-center gap-2">
                        <FaBolt className="text-yellow-300" />
                        <h1 className="text-lg lg:text-xl border-b-2 border-yellow-200 mr-2">Flash Sale</h1>
                     </div>
                     <Countdown />
                  </header>
                  <CardList items={sales} type='sales' />
               </SectionPage>

               <SectionPage id="populer">
                  <header className="pl-2 flex flex-col justify-start items-start text-dark-ui mb-4 dark:text-light-ui">
                     <div className="flex items-center gap-2">
                        <ImFire className="text-red-500 text-2xl" />
                        <h1 className="text-lg lg:text-xl font-semibold">Populer Sekarang</h1>
                     </div>
                     <p className="text-sm text-gray-800 dark:text-gray-300 italic">Apa saja sih produk yang paling dicari oleh pengguna kami?</p>
                  </header>
                  <CardList items={products} type='popular' />
               </SectionPage>

               <SectionPage id="layanan" className={"flex flex-col gap-3"}>
                  <header className="pl-2 flex flex-col justify-start items-start text-dark-ui dark:text-light-ui">
                     <div className="flex items-center gap-2">
                        <SiBetterstack className="text-fuchsia-500 text-2xl" />
                        <h1 className="text-lg lg:text-xl font-semibold">Layanan Tersedia</h1>
                     </div>
                     <p className="text-sm text-gray-800 dark:text-gray-300 italic">Kamu bisa melihat layanan apa saja yang kami sediakan di bawah ini</p>
                  </header>
                  <SectionTab />
               </SectionPage>
            </div>
         </Container>
      </RootLayout>
   )
}