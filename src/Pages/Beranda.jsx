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
import CardList from "../Components/CardList";

export default function Beranda() {
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
                  <CardList items={populars} type='popular' />
               </Section>

               <Section id="games">
                  <header className="flex items-center gap-2 text-white text-xl mb-5">
                     <MdOutlineGamepad className="-skew-x-6 text-yellow-300" />
                     <h1 className="border-b-2 border-yellow-200">Games</h1>
                  </header>
                  <CardList items={games} type='games' />
               </Section>
            </div>
         </main>

         <Footer />
      </Wrapper>
   )
}