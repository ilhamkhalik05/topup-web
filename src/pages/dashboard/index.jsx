import { FaGear } from "react-icons/fa6"
import { coin } from "../../components/assets"
import DashboardLayout from "../../layout/dashboard-layout"
import RootLayout from "../../layout/root-layout"
import { Link } from "react-router-dom"
import { BsClock, BsInfoCircle, BsInfoCircleFill } from "react-icons/bs"

const Dashboard = () => {
   const transactionStatus = [
      {
         status: 'menunggu',
         amount: 0,
         bgColor: 'bg-yellow-400'
      },
      {
         status: 'diproses',
         amount: 0,
         bgColor: 'bg-teal-400'
      },
      {
         status: 'berhasil',
         amount: 0,
         bgColor: 'bg-green-400'
      },
      {
         status: 'gagal',
         amount: 0,
         bgColor: 'bg-red-400'
      },
   ]

   return (
      <RootLayout>
         <DashboardLayout>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 mb-5">

               {/* User Profile */}
               <div className="col-span-2 lg:col-span-1 w-full bg-gradient-to-br from-dark-ui-3 from-10% to-dark-ui-2 rounded-lg px-5 py-6">
                  <figure className="flex items-center justify-between">
                     <figcaption className="flex space-x-3.5 items-center justify-start text-left">
                        <div className="avatar">
                           <div className="w-20 lg:w-24 rounded-full overflow-hidden">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Adam Wirayudha" />
                           </div>
                        </div>
                        <div>
                           <div class="flex items-center justify center gap-6 pb-1 text-xl font-semibold text-white">
                              Adam Wirayudha
                           </div>
                           <span className="inline-flex items-center rounded-md px-2 py-1 text-sm font-semibold capitalize ring-1 ring-inset bg-info/10 text-info ring-info/30">
                              Ketua Guild
                           </span>
                        </div>
                     </figcaption>
                     <Link to={'/dashboard/profile'} className="text-gray-300 rounded-md">
                        <FaGear size={24} />
                     </Link>
                  </figure>

                  <div className="bg-transparent flex text-md mt-7 font-semibold text-white items-center space-x-2">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
                        </path>
                     </svg>
                     <span>+6288290711137</span>
                  </div>
               </div>

               {/* User Coin */}
               <div className="col-span-2 lg:col-span-1 w-full bg-gradient-to-br from-dark-ui-3 from-10% to-dark-ui-2 rounded-lg px-5 py-6">
                  <div className="flex items-start justify-between">
                     <div className="items-center flex flex-row gap-3">
                        <img src={coin} alt="coin" className="w-8" />
                        <h1 className="text-lg font-semibold text-white">BTCCC COIN</h1>
                     </div>
                     <div className="flex items-start justify-center gap-1">
                        <Link to={'/dashboard/topup-coin'} className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 bg-dark-ui-2 font-bold text-white text-sm" href="">
                           Top up
                        </Link>
                        <Link to={'/dashboard/redeem-coin'} className="inline-flex w-full bg-yellow-400 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-bold text-white text-sm" href="">
                           Redeem Coin
                        </Link>
                     </div>
                  </div>
                  <div className="mt-10">
                     <h3 className="text-left font-bold text-3xl text-yellow-400">
                        6
                        <span className="text-gray-300"> BTCCC</span>
                     </h3>
                  </div>
               </div>
            </div>

            <div className="card w-full bg-transparent text-white mb-5">
               <h1 className="text-xl font-bold">Transaksi Hari Ini</h1>
            </div>
            
            <div className="grid text-center gap-2 grid-cols-4">
               <div className="col-span-4 lg:col-span-2 bg-gradient-to-br from-dark-ui-3 from-10% to-dark-ui-2  p-20 flex flex-col gap-2 justify-center items-center rounded-md text-gray-300 font-semibold">
                  <span className="text-4xl">0</span>
                  <span className="text-lg text-nowrap">Total Transaksi</span>
               </div>
               <div className="col-span-4 lg:col-span-2 bg-gradient-to-br from-dark-ui-3 from-10% to-dark-ui-2  p-20 flex flex-col gap-2 justify-center items-center rounded-md text-gray-300 font-semibold">
                  <span className="text-4xl">0</span>
                  <span className="text-lg text-nowrap">Total Penjualan</span>
               </div>

               {transactionStatus.map(({ amount, status, bgColor }) => {
                  return (
                     <div key={status} className={`col-span-2 lg:col-span-1 ${bgColor} p-20 flex flex-col gap-2 justify-center items-center rounded-md text-white font-semibold`}>
                        <span className="text-4xl">{amount}</span>
                        <span className="text-lg capitalize">{status}</span>
                     </div>
                  )
               })}
            </div>
         </DashboardLayout>
      </RootLayout>
   )
}

export default Dashboard