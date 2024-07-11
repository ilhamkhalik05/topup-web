import Container from "../components/container"
import { FaMoneyBillTransfer } from "react-icons/fa6"
import { GrTransaction } from "react-icons/gr"
import { RxDashboard } from "react-icons/rx"
import { TbReport } from "react-icons/tb"
import { Link } from "react-router-dom"
import { coin } from "../components/assets"

import { useLocation } from "react-router-dom"
import { signout } from "../lib/auth/actions"
import { FiLogOut } from "react-icons/fi"

export default function DashboardLayout({ children }) {
   const { pathname } = useLocation()

   const dashboardMenu = [
      {
         title: "Dashboard",
         path: '/dashboard',
         icon: <RxDashboard size={20} />,
      },
      {
         title: "Laporan",
         path: '/dashboard/laporan',
         icon: <TbReport size={20} />
      },
      {
         title: "Mutasi",
         path: '/dashboard/mutasi',
         icon: <FaMoneyBillTransfer size={20} />
      },
      {
         title: "Transaksi",
         path: '/dashboard/transaksi',
         icon: <GrTransaction size={20} />
      },
   ]

   return (
      <Container>
         <div className="relative min-h-screen grid grid-cols-8 gap-8 mt-5">
            <div className="hidden lg:col-span-2 lg:block">
               <aside className="flex flex-col gap-5 sticky top-[90px] px-4 py-8 rounded-t-lg bg-gradient-to-b from-zinc-800 from-50% to-transparent text-white h-4/5">
                  <div className="flex items-center justify-center text-yellow-300 text-xl font-bold py-4 bg-gray-700 rounded-sm space-x-2">
                     <img src={coin} className="h-6 w-6" alt="" />
                     <span>BTCCC COIN</span>
                  </div>
                  <div className="flex flex-col">
                     {dashboardMenu.map(({ title, path, icon }) => (
                        <Link
                           className={`${path === pathname ? 'bg-yellow-400 hover:bg-yellow-400' : 'bg-transparent hover:bg-zinc-700'
                              } cursor-pointer flex items-center space-x-4 px-4 py-3 transition-colors duration-300`}
                           key={title}
                           to={path}
                        >
                           {icon}
                           <span>{title}</span>
                        </Link>
                     ))}
                     <button
                        className="mt-5 cursor-pointer flex items-center gap-3 space-x-4 px-4 py-3 text-red-400 hover:text-red-500 transition-colors duration-300"
                        onClick={signout}
                     >
                        <FiLogOut size={20} />
                        Sign Out
                     </button>
                  </div>
               </aside>
            </div>

            <main className="col-span-8 lg:col-span-6">
               {children}
            </main>
         </div>
      </Container>
   )
}