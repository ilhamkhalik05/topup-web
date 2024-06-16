import { useSelector, useDispatch } from "react-redux"
import { setSection } from "../app/features/section-tab/section-tab-slice";
import { products } from "../lib/products";
import { voucher } from "../lib/placeholder-data"
import CardList from "./CardList";
import Section from "./Section";
import { TbDeviceGamepad2, TbCards } from "react-icons/tb";
import { PiPopcorn } from "react-icons/pi"
import { FaRegCirclePlay } from "react-icons/fa6";

export default function SectionTab() {
   const section = useSelector((state) => state.sectionTab.section)
   switch (section) {
      case ('all'):
         return (
            <>
               <TabPills section={section} />
               <div className="flex flex-col gap-7">
                  <SectionWrapper>
                     <Header>
                        <TbDeviceGamepad2 className="text-teal-600 text-2xl dark:text-teal-300" />
                        <h1 className="text-md lg:text-lg border-b-2 border-red-500 dark:border-yellow-200">Games</h1>
                     </Header>
                     <CardList items={products} type={'games'} />
                  </SectionWrapper>
                  <SectionWrapper>
                     <Header>
                        <TbCards className="text-2xl text-yellow-300" />
                        <h1 className="text-md lg:text-lg border-b-2 border-red-500 dark:border-yellow-200">Voucher</h1>
                     </Header>
                     <CardList items={voucher} type={'voucher'} />
                  </SectionWrapper>
                  <SectionWrapper>
                     <Header>
                        <FaRegCirclePlay className="text-2xl text-red-500" />
                        <h1 className="text-md lg:text-lg border-b-2 border-red-500 dark:border-yellow-200">Entertainment</h1>
                     </Header>
                     <CardList items={products} type={'games'} />
                  </SectionWrapper>
               </div>
            </>
         )

      case ('games'):
         return (
            <>
               <TabPills section={section} />
               <SectionWrapper>
                  <Header>
                     <TbDeviceGamepad2 className="text-teal-600 text-2xl dark:text-teal-300" />
                     <h1 className="text-md lg:text-lg border-b-2 border-red-500 dark:border-yellow-200">Games</h1>
                  </Header>
                  <CardList items={products} type={'games'} />
               </SectionWrapper>
            </>
         )

      case ('voucher'):
         return (
            <>
               <TabPills section={section} />
               <SectionWrapper>
                  <Header>
                     <TbCards className="text-2xl text-yellow-300" />
                     <h1 className="text-md lg:text-lg border-b-2 border-red-500 dark:border-yellow-200">Voucher</h1>
                  </Header>
                  <CardList items={voucher} type={'voucher'} />
               </SectionWrapper>
            </>
         )

      case ('entertainment'):
         return (
            <>
               <TabPills section={section} />
               <Section>
                  <Header>
                     <FaRegCirclePlay className="text-2xl text-red-400" />
                     <h1 className="text-md lg:text-lg border-b-2 border-red-500 dark:border-yellow-200">Entertainment</h1>
                  </Header>
                  <CardList items={products} type={'games'} />
               </Section>
            </>
         )
      default:
         null
   }
}

const Header = ({ children }) => {
   return (
      <header className="flex items-center gap-2 text-zinc-900 text-xl font-semibold mb-5 dark:text-zinc-50">
         {children}
      </header>
   )
}

const TabPills = ({ section }) => {
   const dispatch = useDispatch()
   const activeSection = "bg-yellow-400 text-white border-none hover:bg-yellow-400"
   return (
      <div className="flex items-center gap-1 text-sm mb-5">
         <div
            className={`${section === 'all' ? activeSection : 'bg-transparent border border-zinc-600 text-zinc-950 hover:bg-zinc-700 dark:text-white'} btn btn-sm cursor-pointer px-5 py-2 rounded-full`}
            onClick={() => dispatch(setSection('all'))}
         >
            Semua
         </div>
         <div
            className={`${section === 'games' ? activeSection : 'bg-transparent border border-zinc-600 text-zinc-950 hover:bg-zinc-700 dark:text-white'} btn btn-sm cursor-pointer px-5 py-2 rounded-full`}
            onClick={() => dispatch(setSection('games'))}
         >
            Games
         </div>
         <div
            className={`${section === 'voucher' ? activeSection : 'bg-transparent border border-zinc-600 text-zinc-950 hover:bg-zinc-700 dark:text-white'} btn btn-sm cursor-pointer px-5 py-2 rounded-full`}
            onClick={() => dispatch(setSection('voucher'))}
         >
            Voucher
         </div>
         <div
            className={`${section === 'entertainment' ? activeSection : 'bg-transparent border border-zinc-600 text-zinc-950 hover:bg-zinc-700 dark:text-white'} btn btn-sm cursor-pointer px-5 py-2 rounded-full`}
            onClick={() => dispatch(setSection('entertainment'))}
         >
            Entertainment
         </div>
      </div>
   )
}

const SectionWrapper = ({ children }) => {
   return (
      <div className="flex flex-col">
         {children}
      </div>
   )
}