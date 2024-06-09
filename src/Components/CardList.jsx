import { formatToRupiah, getPriceSavings, getStockInPercent } from "../lib/utils"
import logo from "../assets/logo.webp"
import fire from "../assets/fire.svg"
import Marquee from "react-fast-marquee"

export default function CardList({ items, type }) {
   switch (type) {
      //Flash Sale List
      case 'sales':
         return (
            <Marquee className="overflow-hidden whitespace-nowrap" pauseOnHover={true} speed={100}>
               <div className="flex flex-row gap-3 mx-3">
                  {items.map((item) => (
                     <SaleCard
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        sale={item.sale}
                        quantity={item.quantity}
                        type={item.type}
                        stok={item.stok}
                     />
                  ))}
               </div>
            </Marquee>
         );

      // Popular List
      case 'popular':
         return (
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
               {items.map((item) => {
                  return (
                     <PopularCard
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        tipe={item.tipe}
                     />
                  )
               })}
            </div>
         )

      // Games List
      case 'games':
         return (
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-6">
               {items.map((game) => {
                  return (
                     <Gamecard key={game.id} title={game.title} image={game.image} />
                  )
               })}
            </div>
         )

      default:
         return null
   }
}

const SaleCard = ({ title, image, price, sale, quantity, type, stok }) => {
   const priceSaving = getPriceSavings(price, sale)
   // const stockInPercent = getStockInPercent(stok) // Not fixed bug
   return (
      <a
         href=""
         className="relative cursor-pointer flex flex-row items-center gap-3 rounded-lg bg-zinc-900 w-80 p-3"
      >
         <img
            src={image}
            alt={title}
            width={100}
            height={100}
            className="w-1/4"
         />
         <div className="w-3/4 flex flex-col text-zinc-200">
            <h1 className="font-bold">{title}</h1>
            <h2 className="text-xs text-red-600 italic line-through">Rp {formatToRupiah(price)}</h2>
            <h2 className="tex-xs">Rp {formatToRupiah(sale)}</h2>
            <h2 className="tex-xs mb-1">{quantity} {type}</h2>
            <div className="w-full h-6 bg-black rounded-full relative">
               <div
                  className="h-6 bg-gradient-to-r from-yellow-300 to-red-600 text-xs font-medium text-blue-100 flex items-center justify-center p-1 leading-none rounded-full overflow-x-hidden"
                  style={{ width: `100%` }}
               >
               </div>
               <div className="absolute inset-0 flex items-center justify-center text-md font-medium">
                  {stok} stok
               </div>
               <div className="absolute -top-2 -left-1">
                  <img src={fire} alt="fire" width={30} />
               </div>
            </div>
         </div>
         <div className="w-24 absolute aspect-square overflow-hidden -top-[6px] -right-[6px] rounded-sm">
            <div className="absolute top-0 left-0 bg-yellow-600 glass h-2 w-2 "></div>
            <div className="absolute bottom-0 right-0 bg-yellow-600 glass h-2 w-2 "></div>
            <div className="absolute block w-[141.42%] py-1 bottom-0 right-0 text-center text-xs font-semibold text-white bg-yellow-600 glass origin-bottom-right rotate-[45deg]">
               hemat
               Rp {formatToRupiah(priceSaving)}
            </div>
         </div>
      </a>
   )
}

const PopularCard = ({ title, image, tipe }) => {
   return (
      <a
         href="/"
         className="group card glass cursor-pointer flex flex-row items-center gap-3 rounded-lg px-3 py-2 bg-yellow-400 hover:-translate-y-1 hover:bg-yellow-300 duration-500 ease-in-out lg:py-3 lg:px-5"
      >
         {/* Mobile Image Card */}
         <img
            src={image}
            alt={title}
            width={65}
            className="block lg:hidden rounded-md"
         />
         {/* Desktop Image Card */}
          <img
            src={image}
            alt={title}
            width={80}
            height={80}
            className="hidden lg:block rounded-md"
         />
         <div className="flex flex-col text-yellow-50 transition-colors duration-300 ease-in-out">
            <h1 className="font-bold  line-clamp-2 leading-tight lg:line-clamp-none">{title}</h1>
            <h2 className="text-sm font-light">{tipe}</h2>
         </div>
      </a>
   )
}

const Gamecard = ({ title, image }) => {
   return (
      <a
         href="/"
         className="group card relative cursor-pointer rounded-lg h-52 lg:h-64">
         <img
            src={image}
            alt={title}
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
               {title}
            </h1>
         </div>
      </a>
   )
}