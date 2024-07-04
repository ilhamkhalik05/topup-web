import fire from "../../assets/svg/fire.svg"
import { diamond } from "../assets"
import { formatToRupiah, getPriceSavings } from "../../lib/data/utils"

export const SaleCard = ({ title, price, sale, quantity, type, stok }) => {
   const priceSaving = getPriceSavings(price, sale)
   return (
      <a
         href="/"
         className="relative cursor-pointer rounded-lg bg-gradient-to-br from-zinc-800 from-50% to-zinc-900 w-80 p-2 lg:gap-3"
      >
         <div className="flex flex-row items-center gap-3 w-full">
            <div className="flex flex-col gap-3 items-center text-light-ui">
               <img
                  src={diamond}
                  alt={title}
                  className="w-12 object-contain"
               />
               <h2 className="text-xs text-center lg:text-sm font-medium">{quantity}</h2>
            </div>
            <div className="flex flex-col text-light-ui w-full pr-2">
               <h1 className="font-bold">{title}</h1>
               <h2 className="text-xs text-red-600 italic line-through">Rp {formatToRupiah(price)}</h2>
               <h2 className="text-sm lg:text-sm text-primary">{formatToRupiah(sale)}</h2>
               <div className="w-full h-4 lg:h-6 bg-dark-ui rounded-full relative">
                  <div
                     className="h-3.5 lg:h-6 bg-gradient-to-r from-primary to-red-600 text-xs font-medium text-blue-100 flex items-center justify-center p-1 leading-none rounded-full overflow-x-hidden"
                     style={{ width: `100%` }}
                  >
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-sm lg:text-md font-medium">
                     {stok} stok
                  </div>
                  <div className="absolute -top-2 -left-1">
                     <div className="hidden lg:block">
                        <img src={fire} alt="fire" width={30} />
                     </div>
                     <div className="block lg:hidden">
                        <img src={fire} alt="fire" width={25} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="w-24 absolute aspect-square overflow-hidden -top-[6px] -right-[6px] rounded-sm">
            <div className="absolute top-0 left-0 bg-primary glass h-2 w-2 "></div>
            <div className="absolute bottom-0 right-0 bg-primary glass h-2 w-2 "></div>
            <div className="absolute block w-[141.42%] py-1 bottom-0 right-0 text-center text-xs font-semibold text-dark-ui bg-primary glass origin-bottom-right rotate-[45deg]">
               hemat {formatToRupiah(priceSaving)}
            </div>
         </div>
      </a>
   )
}

export const PopularCard = ({ title, slug, image, type }) => {
   return (
      <a
         href={`/order/${slug}`}
         className="group cursor-pointer flex flex-row items-center gap-3 rounded-xl px-3 py-2 bg-card bg-cover bg-center dark:hover:shadow dark:hover:ring-2 dark:hover:ring-offset-2 dark:hover:ring-primary dark:ring-offset-dark-ui transition-all duration-100 lg:py-3 lg:px-5"
      >
         {/* Mobile Image Card */}
         <img
            src={image}
            alt={title}
            width={60}
            className="block lg:hidden rounded-md shadow-lg shadow-black"
         />
         {/* Desktop Image Card */}
         <img
            src={image}
            alt={title}
            width={80}
            height={80}
            className="hidden lg:block rounded-md shadow-lg shadow-black"
         />
         <div className="flex flex-col text-light-ui transition-colors">
            <h1 className="text-sm lg:text-base font-bold  line-clamp-2 leading-tight lg:line-clamp-none">{title}</h1>
            <h2 className="text-sm font-light line-clamp-1">{type}</h2>
         </div>
      </a>
   )
}

export const GameCard = ({ title, developer, image }) => {
   return (
      <a
         href="/"
         className="group relative cursor-pointer rounded-xl min-h-60 hover:scale-105 hover:ring-2 hover:ring-dark-ui ring-offset-4 dark:hover:ring-primary dark:hover:ring-offset-dark-ui transition-all duration-100">
         <img
            src={image}
            alt={title}
            className="object-cover object-center w-full h-full rounded-xl brightness-90 transition"
         />
         <div className="flex flex-col items-start justify-end px-3 py-5 w-full bg-gradient-to-b from-transparent from-5% to-black text-light-ui rounded-xl absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
            <h1 className="font-bold text-lg line-clamp-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
               {title}
            </h1>
            <p className="text-sm text-gray-300 transform translate-y-full group-hover:translate-y-0 transition-transform">
               {developer}
            </p>
         </div>
      </a>
   )
}

export const ProductCard = ({ index, price, quantity, image, type }) => {
   const baseClass = 'group cursor-pointer bg-dark-ui-3 text-light-ui flex p-2.5 md:p-4 rounded-xl md:rounded-2xl transition-all ease-in-out'
   const activeCard = index === 0
   const activeClass = "font-bold bg-dark-ui ring-2 ring-offset-2 ring-offset-light-ui ring-primary dark:ring-offset-dark-ui"

   return (
      <div
         className={`${activeCard ? activeClass : "hover:ring-2 ring-offset-2 ring-offset-light-ui ring-dark-ui dark:ring-teal-300 dark:ring-offset-dark-ui opacity-60"} ${baseClass}`}
      >
         <div className="w-4/5 flex flex-col gap-1 text-xs md:text-sm">
            <p className="text-nowrap">{quantity} {type}</p>
            <h1>{formatToRupiah(price)}</h1>
         </div>
         <img
            className="object-contain object-center w-8"
            src={image} alt={type}
         />
      </div>
   )
}

export const VoucherCard = ({ title, provider, image }) => {
   return (
      <a
         href="/"
         className="group relative cursor-pointer rounded-xl h-64 hover:scale-105 hover:ring-2 hover:ring-dark-ui ring-offset-4 dark:hover:ring-primary dark:hover:ring-offset-dark-ui transition-all duration-100">
         <img
            src={image}
            alt={title}
            className="object-cover object-center w-full h-full rounded-xl brightness-90 transition"
         />
         <div className="flex flex-col items-start justify-end px-3 py-5 w-full bg-gradient-to-b from-transparent from-5% to-black text-light-ui rounded-xl absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
            <h1 className="font-bold text-lg line-clamp-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
               {title}
            </h1>
            <p className="text-sm text-gray-300 transform translate-y-full group-hover:translate-y-0 transition-transform">
               {provider}
            </p>
         </div>
      </a>
   )
}

export const ServiceCard = ({ title, developer, image }) => {
   return (
      <div
         className="group relative cursor-pointer rounded-md h-36 md:h-52 transition-all duration-100">
         <img
            src={image}
            alt={title}
            className="object-cover object-center w-full h-full rounded-md brightness-75"
         />
         <div className="flex flex-col items-center justify-center px-3 py-5 w-full bg-gradient-to-b from-dark-ui via-transparent to-dark-ui  text-light-ui rounded-md absolute inset-0 opacity-0 group-hover:backdrop-brightness-75 group-hover:opacity-100 group-hover:backdrop-blur-sm pointer-events-none group-hover:pointer-events-auto transition-opacity">
            <h1 className="font-bold text-sm md:text-md text-center line-clamp-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
               {title}
            </h1>
            <p className="text-xs md:text-sm text-gray-300 transform translate-y-full group-hover:translate-y-0 transition-transform">
               {developer}
            </p>
         </div>
      </div>
   )
}