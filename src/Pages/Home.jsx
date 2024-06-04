import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Wrapper from "../Components/Wrapper";
import { useTheme } from "../Hooks/useTheme";
import { games, populars } from "../Lib/PlaceholderData";
import { FaFire } from "react-icons/fa6";
import { MdOutlineGamepad } from "react-icons/md";
import logo from '../Asset/logo.webp'
import Section from '../Components/Section'
import Footer from "../Components/Footer";

export default function Home() {
   const { theme, toggleTheme } = useTheme()
   return (
      <Wrapper theme={theme}>
         <Navbar theme={theme} toggleTheme={toggleTheme} />
         <Banner />
         <main>
            <div className="container w-[93%] flex flex-col gap-6">
               <Section id="populer" className='mb-7'>
                  <header className="flex items-center gap-2 text-white text-xl mb-4">
                     <FaFire />
                     <h1 className="border-b-2 border-yellow-200">Popular</h1>
                  </header>
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                     {populars.map((popular) => {
                        return (
                           <div
                              key={popular.id}
                              className="group card glass cursor-pointer flex flex-col lg:flex-row items-center gap-3 rounded-lg px-5 py-3 bg-yellow-600 hover:-translate-y-1 hover:bg-yellow-400 duration-500 ease-in-out"
                           >
                              <img
                                 src={popular.image}
                                 alt={popular.title}
                                 width={80}
                                 height={80}
                                 className="rounded-md"
                              />
                              <div className="flex flex-col text-yellow-100 group-hover:text-yellow-900 transition-colors duration-300 ease-in-out">
                                 <h1 className="font-bold">{popular.title}</h1>
                                 <h2 className="text-sm">{popular.tipe}</h2>
                              </div>
                           </div>

                        )
                     })}
                  </div>
               </Section>

               <Section id="games">
                  <header className="flex items-center gap-2 text-white text-xl mb-5">
                     <MdOutlineGamepad className="-skew-x-6 text-yellow-300" />
                     <h1 className="border-b-2 border-yellow-200">Games</h1>
                  </header>
                  <div className="grid grid-cols-2 gap-2 lg:grid-cols-6">
                     {games.map((games) => {
                        return (
                           <div key={games.id} className="group card glass relative cursor-pointer rounded-lg h-64">
                              <img
                                 src={games.image}
                                 alt={games.title}
                                 className="object-cover object-center w-full h-full brightness-75 rounded-md group-hover:blur-sm group-hover:brightness-50 group-hover:shadow-xl shadow-yellow-300 transition ease-in duration-300"
                              />
                              <div className="flex flex-col items-center justify-center gap-5 w-full text-zinc-50 absolute inset-0 py-5 px-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ease-in-out">
                                 <img
                                    src={logo}
                                    alt="logo"
                                    width={140}
                                    className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"
                                 />
                                 <h1 className="font-bold text-md text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                                    {games.title}
                                 </h1>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </Section>
            </div>
         </main>

         <Footer />
      </Wrapper>
   )
}