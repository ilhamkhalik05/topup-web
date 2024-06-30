import { useSelector, useDispatch } from "react-redux"
import { setSection } from "../app/features/section-tab/section-tab-slice";
import { products } from "../lib/products";
import { voucher } from "../lib/placeholder-data"
import CardList from "./card-list";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";
import { GiSwordClash } from "react-icons/gi";

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
                        <TbDeviceGamepad2 className="text-3xl" />
                        <h1 className="text-md lg:text-lg">Games</h1>
                     </Header>
                     <CardList items={products} type={'games'} />
                  </SectionWrapper>
                  <SectionWrapper>
                     <Header>
                        <RiCoupon3Line className="text-3xl " />
                        <h1 className="text-md lg:text-lg">Voucher</h1>
                     </Header>
                     <CardList items={voucher} type={'voucher'} />
                  </SectionWrapper>
                  <SectionWrapper>
                     <Header>
                        <GiSwordClash className="text-2xl" />
                        <h1 className="text-md lg:text-lg">Jasa Joki</h1>
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
                     <TbDeviceGamepad2 className="text-3xl" />
                     <h1 className="text-md lg:text-lg">Games</h1>
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
                     <RiCoupon3Line className="text-3xl" />
                     <h1 className="text-md lg:text-lg">Voucher</h1>
                  </Header>
                  <CardList items={voucher} type={'voucher'} />
               </SectionWrapper>
            </>
         )

      case ('jasa_joki'):
         return (
            <>
               <TabPills section={section} />
               <SectionWrapper>
                  <Header>
                     <GiSwordClash className="text-2xl" />
                     <h1 className="text-md lg:text-lg">Jasa Joki</h1>
                  </Header>
                  <CardList items={products} type={'games'} />
               </SectionWrapper>
            </>
         )
      default:
         null
   }
}

const Header = ({ children }) => {
   return (
      <header className="flex items-center gap-3 pl-1 text-zinc-900 text-xl font-semibold mb-5 dark:text-zinc-50">
         {children}
      </header>
   )
}

const TabPills = ({ section }) => {
   const dispatch = useDispatch()
   const activeSection = "bg-yellow-400 text-white border-none hover:bg-yellow-400"
   return (
      <div className="flex justify-start items-center flex-wrap gap-x-1 gap-y-2 text-sm mb-5 border-t-2 border-dark-ui-3 pt-4">
         <div
            className={`${section === 'all' ? activeSection : 'bg-transparent hover:bg-light-ui-2 border border-dark-ui-3 text-dark-ui dark:text-light-ui dark:hover:bg-dark-ui-3'} btn btn-sm cursor-pointer px-5 py-2 rounded-full`}
            onClick={() => dispatch(setSection('all'))}
         >
            Semua
         </div>
         <div
            className={`${section === 'games' ? activeSection : 'bg-transparent hover:bg-light-ui-2 border border-dark-ui-3 text-dark-ui dark:text-light-ui dark:hover:bg-dark-ui-3'} btn btn-sm cursor-pointer px-5 py-2 rounded-full`}
            onClick={() => dispatch(setSection('games'))}
         >
            Games
         </div>
         <div
            className={`${section === 'voucher' ? activeSection : 'bg-transparent hover:bg-light-ui-2 border border-dark-ui-3 text-dark-ui dark:text-light-ui dark:hover:bg-dark-ui-3'} btn btn-sm cursor-pointer px-5 py-2 rounded-full`}
            onClick={() => dispatch(setSection('voucher'))}
         >
            Voucher
         </div>
         <div
            className={`${section === 'jasa_joki' ? activeSection : 'bg-transparent hover:bg-light-ui-2 border border-dark-ui-3 text-dark-ui dark:text-light-ui dark:hover:bg-dark-ui-3'} btn btn-sm cursor-pointer px-5 py-2 rounded-full`}
            onClick={() => dispatch(setSection('jasa_joki'))}
         >
            Joki
         </div>
      </div>
   )
}

const SectionWrapper = ({ children }) => {
   return (
      <div className="flex flex-col">
         {children}
         <button className="btn btn-md bg-transparent text-dark-ui dark:text-light-ui-2 cursor-pointer self-center items-center mt-7 hover:bg-transparent dark:border-dark-ui-3">
            <h1 className="capitalize">
               tampilkan semua
            </h1>
            <MdOutlineArrowDropDownCircle className="text-xl" />
         </button>
      </div>
   )
}