import RootLayout from "../RootLayout"
import { useParams } from "react-router"
import { useState } from "react";
import { products } from "../lib/products"
import { FaRegThumbsUp } from "react-icons/fa6";
import { IoWalletOutline, IoPricetagsOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import CardList from '../components/CardList'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { payments } from "../lib/placeholder-data";

export default function Buy() {
   const [isShowMore, setIsShowMore] = useState(true)
   const { slug } = useParams()
   const product = products.find((game) => game.slug === slug)
   const eWalletPayments = payments.filter((payment) => payment.type === "E-Wallet")
   const virtualAccountPayments = payments.filter((payment) => payment.type === "Virtual Account")

   return (
      <RootLayout>
         <div className="z-50 fixed bottom-0 right-0 px-3 py-1 bg-yellow-400 text-white border-0 rounded-tl-md">
            <div className="flex items-center gap-3">
               <FaHeadphonesAlt />
               Customer Service
            </div>
         </div>
         <div className="flex flex-col h-[90vh] rounded-md shadow-lg mt-5 lg:m-0">
            <img
               className="h-56 md:h-72 lg:h-96 object-cover object-center rounded-t-md brightness-50"
               src={product.banner_image || product.image}
               alt={product.title}
            />
            <div className="z-10 h-full text-zinc-100 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-900 dark:to-zinc-950">
               <div className="flex flex-col items-start -mt-20 md:flex-row">
                  {/* Image */}
                  <div className="flex justify-center w-full md:w-1/3 md:justify-end">
                     <img className="w-32 md:w-48 rounded-xl shadow-lg shadow-primary" src={product.image} alt={product.title} />
                  </div>
                  {/* Content */}
                  <div className="w-full p-5 flex flex-col items-center gap-3 md:items-start">
                     <header className="flex flex-col items-center md:items-start">
                        <h1 className="text-2xl font-bold italic">
                           {product.title}
                        </h1>
                        <p className="text-md">{product.type}</p>
                     </header>
                     <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2">
                        <div className="px-4 py-2 bg-yellow-500 glass rounded-full text-xs flex items-center gap-2">
                           <FaRegThumbsUp className="text-lg" />
                           Layanan Terbaik
                        </div>
                        <div className="px-4 py-2 bg-yellow-500 glass rounded-full text-xs flex items-center gap-2">
                           <IoWalletOutline className="text-lg" />
                           Pembayaran Aman
                        </div>
                        <div className="px-4 py-2 bg-yellow-500 glass rounded-full text-xs flex items-center gap-2">
                           <IoPricetagsOutline className="text-lg" />
                           Harga Termurah
                        </div>
                        <div className="px-4 py-2 bg-yellow-500 glass rounded-full text-xs flex items-center gap-2">
                           <TbTruckDelivery className="text-lg" />
                           Proses Cepat
                        </div>
                     </div>
                     <div className="flex flex-col items-start gap-1 pr-3">
                        <p className={`text-sm text-zinc-950 dark:text-zinc-50 ${isShowMore ? "line-clamp-0" : "line-clamp-2"}`}>
                           Beli {product.type} ({product.title}) Termurah Se-Indonesia, Dijamin Aman & Garansi Uang Kembali 10x Lipat eksklusif hanya ada di Mengtopup! Pembayaran Diamonds dengan e-wallet bisa melalui Dana, Ovo, gopay, QRIS, ShopeePay, dan Link Aja. Sedangkan virtual account bisa melalui BCA, Mandiri, Bank BRI, BNI, Permata Bank, CIMB Niaga, Danamon, Maybank, BSI, dan bank bjb. Selain itu anda juga membayarnya di gerai Alfamart terdekat
                        </p>
                        <button
                           className="cursor-pointer text-sm text-yellow-400"
                           onClick={() => setIsShowMore(!isShowMore)}
                        >
                           {isShowMore ? "Show less..." : "Show more..."}
                        </button>
                     </div>
                     <div className="flex items-center gap-1 text-sm text-gray-950 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400 cursor-pointer duration-300">
                        <BsExclamationCircle />
                        Lihat cara pembelian
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-3 lg:flex-row w-full bg-neutral-950 text-neutral-50 mt-20 p-5">
            <main className="flex flex-col w-full gap-3">
               <Box no={"1"} title={'Pilih Produk'}>
                  <CardList items={product} type='products' />
               </Box>
            </main>
            <aside className="flex flex-col w-full gap-3 lg:w-1/3 sticky top-0">
               <Box no={"2"} title={'Masukan Data Akun'}>
                  <div className="flex flex-col gap-1 lg:flex-row">
                     <div className="flex flex-col gap-1">
                        <label className="text-md" htmlFor="">User ID</label>
                        <input className="input input-bordered input-sm text-black focus:ring-2 focus:ring-primary" type="text" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <label className="text-md" htmlFor="">Server ID</label>
                        <input className="input input-bordered input-sm text-black focus:ring-2 focus:ring-primary" type="text" />
                     </div>
                  </div>
               </Box>

               <Box no={"3"} title={'Pilih Metode Pembayaran'}>
                  <div className="flex flex-col gap-3">
                     <div className="flex flex-col">
                        <div className="p-3 flex justify-between items-center bg-zinc-600 rounded-t-md">
                           <h1 className="font-semibold">E-Wallet</h1>
                           <IoIosArrowDropdownCircle className="cursor-pointer text-lg" />
                        </div>
                        <div className="p-3 flex justify-end bg-zinc-400 rounded-b-md">
                           <div className="flex gap-2">
                              {eWalletPayments.map((payment) => (
                                 <img className="w-12 object-contain" src={payment.image} alt={payment.title} />
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col">
                        <div className="p-3 flex justify-between items-center bg-zinc-600 rounded-t-md">
                           <h1 className="font-semibold">Virtual Account</h1>
                           <IoIosArrowDropdownCircle className="cursor-pointer text-lg" />
                        </div>
                        <div className="p-3 flex justify-end bg-zinc-400 rounded-b-md">
                           <div className="flex gap-2">
                              {virtualAccountPayments.map((payment) => (
                                 <img className="w-12 object-contain" src={payment.image} alt={payment.title} />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </Box>
               <Box no={"4"} title={'Kode Promo'}>
                  <div className="flex gap-2 w-full">
                     <input type="text" placeholder="Masukan kode promo" className="input input-xs w-full text-black rounded-md text-sm placeholder:text-zinc-400 focus:ring focus:ring-yellow-400" />
                     <button className="btn btn-xs bg-yellow-400 hover:bg-yellow-600 text-white">Pakai Kode</button>
                  </div>
                  <button className="btn btn-sm w-full bg-yellow-400 hover:bg-yellow-600 text-white mt-4">
                     <RiCoupon3Fill />
                     Lihat Kode Tersedia
                  </button>
               </Box>

               <Box className="sticky top-0" no={"5"} title={'Total Pembayaran'}>
                  <div className="w-full bg-zinc-950 border border-dashed border-zinc-600 flex items-center justify-center text-sm text-zinc-50 p-3 mb-3">
                     Anda belum memilih produk
                  </div>
                  <button className="btn bg-yellow-400 w-full flex items-center gap-2 text-white uppercase  hover:bg-yellow-600">
                     <FaRegCalendarAlt />
                     Pesan Sekarang
                  </button>
               </Box>
            </aside>
         </div>
      </RootLayout>
   )
}

const Box = ({ className = '', no, title, children }) => {
   return (
      <div className={`group flex flex-col gap-3 rounded-md bg-neutral-900 ${className}`}>
         <header className="w-full flex rounded-t-md bg-zinc-600">
            <div className="bg-yellow-300 text-yellow-800 font-bold rounded-tl-md px-4 py-2 flex items-center justify-center">{no}</div>
            <h2 className="px-3 py-2 font-[500] text-lg">{title}</h2>
         </header>
         <div className="p-5">
            {children}
         </div>
      </div>
   )
}