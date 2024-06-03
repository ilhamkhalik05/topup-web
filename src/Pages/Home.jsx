import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Wrapper from "../Components/Wrapper";
import { useTheme } from "../Hooks/useTheme";
import { populars } from "../Lib/PlaceholderData";
import { FaFire } from "react-icons/fa6";
import Section from '../Components/Section'

export default function Home() {
   const { theme, toggleTheme } = useTheme()
   return (
      <Wrapper theme={theme}>
         <Navbar theme={theme} toggleTheme={toggleTheme} />
         <Banner />
         <main>
            <div className="container w-[93%] flex flex-col gap-6">
               <Section id="populer">
                  <header className="flex items-center gap-2 text-white text-xl mb-3">
                     <FaFire />
                     Popular
                  </header>
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                     {populars.map((popular) => {
                        return (
                           <div key={popular.id} className="group card glass cursor-pointer flex flex-col lg:flex-row items-center gap-3 rounded-lg px-5 py-3 bg-yellow-600 hover:-translate-y-1 hover:bg-yellow-400 ease-in-out duration-500">
                              <img src={popular.image} alt="" width={80} height={80} className="rounded-md" />
                              <div className="flex flex-col text-yellow-100 group-hover:text-yellow-900 ease-in-out duration-300">
                                 <h1 className="font-bold">{popular.title}</h1>
                                 <h2 className="text-sm">{popular.tipe}</h2>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </Section>
            </div>
         </main>
      </Wrapper>
   )
}