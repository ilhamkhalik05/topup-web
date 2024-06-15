import RootLayout from "../RootLayout"
import { useParams } from "react-router"
import { useState } from "react";
import { products } from "../lib/products"
import { FaRegThumbsUp } from "react-icons/fa6";
import { IoWalletOutline, IoPricetagsOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import Container from '../components/Container'
import Section from '../components/Section'
import CardList from '../components/CardList'

export default function Buy() {
   const [isShowMore, setIsShowMore] = useState(true)
   const { slug } = useParams()
   const product = products.find((game) => game.slug === slug)

   return (
      <RootLayout>
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

         <div className="flex gap-3 w-full bg-neutral-950 text-neutral-50 mt-10 p-5">
            <main className="flex flex-col w-full gap-3">
               <div className="rounded-md p-5 bg-neutral-900 flex flex-col gap-1">
                  <h1 className="text-xl font-semibold">Pilih Paket</h1>
                  <CardList items={product} type='products' />
               </div>
            </main>
            <aside className="flex flex-col w-1/3 gap-3 sticky">
               <div className="flex flex-col gap-3 rounded-md p-3 bg-neutral-900">
                  <h1 className="font-semibold text-xl">Masukkan Data</h1>
                  <div className="flex gap-1">
                     <div className="flex flex-col gap-1">
                        <label className="text-md" htmlFor="">User ID</label>
                        <input className="input input-bordered input-sm text-black" type="text" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <label className="text-md" htmlFor="">Zone ID</label>
                        <input className="input input-bordered input-sm text-black" type="text" />
                     </div>
                  </div>
               </div>
            </aside>
         </div>
      </RootLayout>
   )
}