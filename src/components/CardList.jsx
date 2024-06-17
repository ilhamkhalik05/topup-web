import { formatToRupiah, getPriceSavings } from "../lib/utils"
import { Link } from "react-router-dom"
import logo from "../assets/webp/logo.webp"
import fire from "../assets/svg/fire.svg"
import Marquee from "react-fast-marquee"
import { diamond } from "./Assets"

export default function CardList({ items, type }) {
   switch (type) {
      //Flash Sale List
      case 'sales':
         return (
            <Marquee
               className="overflow-hidden rounded-md"
               pauseOnHover={true}
               speed={100}
            >
               <div className="grid grid-cols-4 gap-3 mx-2 rounded-xl">
                  {items.map((item) => (
                     <SaleCard
                        key={item.id}
                        title={item.title}
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
               {items.map((item) => {
                  return (
                     <PopularCard
                        key={item.id}
                        title={item.title}
                        slug={item.slug}
                        image={item.image}
                        type={item.type}
                     />
                  )
               })}
            </div>
         )

      // Games List
      case 'games':
         return (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
               {items.map((game) => {
                  return (
                     <GameCard
                        key={game.id}
                        title={game.title}
                        developer={game.developer}
                        slug={game.slug}
                        image={game.image}
                     />
                  )
               })}
            </div>
         )

      // case 'layanan':
      //    return (
      //       <Marquee
      //          className="overflow-hidden"
      //          speed={100}
      //          pauseOnHover={true}
      //          gradient={true}
      //          gradientColor={"rgb(24 24 27)"}
      //          gradientWidth={50}
      //       >
      //          <div className="grid grid-cols-8">
      //             {items.map((game) => {
      //                return (
      //                   <Layanancard key={game.id} title={game.title} image={game.image} />
      //                )
      //             })}
      //          </div>
      //       </Marquee>
      //    )

      case 'products':
         const image = items.type_image
         const type = items.type
         const products = items.items
         return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
               {products.map((item) => {
                  return (
                     <ProductCard
                        key={item.id}
                        price={item.price}
                        quantity={item.quantity}
                        image={image}
                        type={type}
                     />
                  )
               })}
            </div>
         )

      case 'voucher':
         return (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
               {items.map((game) => {
                  return (
                     <VoucherCard
                        key={game.id}
                        title={game.title}
                        provider={game.provider}
                        slug={game.slug}
                        image={game.image}
                     />
                  )
               })}
            </div>
         )
      default:
         return null
   }
}

const SaleCard = ({ title, price, sale, quantity, type, stok }) => {
   const priceSaving = getPriceSavings(price, sale)
   return (
      <Link
         to="/"
         className="relative cursor-pointer flex flex-row items-center gap-3 rounded-lg bg-zinc-800 w-80 p-2 lg:gap-3"
      >
         <img
            src={diamond}
            alt={title}
            className="w-14"
         />
         <div className="w-3/4 flex flex-col text-zinc-200">
            <h1 className="font-bold">{title}</h1>
            <h2 className="text-xs text-red-600 italic line-through">Rp {formatToRupiah(price)}</h2>
            <h2 className="text-xs lg:text-sm text-primary">Rp. {formatToRupiah(sale)}</h2>
            <h2 className="text-xs lg:text-sm font-medium mb-1">{quantity} {type}</h2>
            <div className="w-full h-4 lg:h-6 bg-black rounded-full relative">
               <div
                  className="h-4 lg:h-6 bg-gradient-to-r from-yellow-300 to-red-600 text-xs font-medium text-blue-100 flex items-center justify-center p-1 leading-none rounded-full overflow-x-hidden"
                  style={{ width: `100%` }}
               >
               </div>
               <div className="absolute inset-0 flex items-center justify-center text-md font-medium">
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
         <div className="w-24 absolute aspect-square overflow-hidden -top-[6px] -right-[6px] rounded-sm">
            <div className="absolute top-0 left-0 bg-yellow-600 glass h-2 w-2 "></div>
            <div className="absolute bottom-0 right-0 bg-yellow-600 glass h-2 w-2 "></div>
            <div className="absolute block w-[141.42%] py-1 bottom-0 right-0 text-center text-xs font-semibold text-white bg-yellow-600 glass origin-bottom-right rotate-[45deg]">
               hemat
               Rp {formatToRupiah(priceSaving)}
            </div>
         </div>
      </Link>
   )
}

const PopularCard = ({ title, slug, image, type }) => {
   return (
      <a
         href={`/buy/${slug}`}
         className="group glass cursor-pointer flex flex-row items-center gap-3 rounded-xl px-3 py-2 bg-card bg-cover bg-center hover:ring-2 hover:ring-primary transition-all duration-700 lg:py-3 lg:px-5"
      >
         {/* Mobile Image Card */}
         <img
            src={image}
            alt={title}
            width={65}
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
         <div className="flex flex-col text-yellow-50 transition-colors">
            <h1 className="font-bold  line-clamp-2 leading-tight lg:line-clamp-none">{title}</h1>
            <h2 className="text-sm font-light line-clamp-1">{type}</h2>
         </div>
      </a>
   )
}

const GameCard = ({ title, developer, image }) => {
   return (
      <Link
         to="/"
         className="group relative cursor-pointer rounded-xl h-52 lg:h-64 hover:ring-2 ring-primary transition-all ease-in-out duration-150">
         <img
            src={image}
            alt={title}
            className="object-cover object-center w-full h-full rounded-xl brightness-90 transition"
         />
         <div className="flex flex-col items-start justify-end px-3 py-5 w-full bg-gradient-to-b from-transparent from-5% to-black text-zinc-50 rounded-xl absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
            <h1 className="font-bold text-lg line-clamp-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
               {title}
            </h1>
            <p className="text-sm text-gray-300 transform translate-y-full group-hover:translate-y-0 transition-transform">
               {developer}
            </p>
         </div>
      </Link>
   )
}

// const Layanancard = ({ title, image }) => {
//    return (
//       <a
//          href="/"
//          className="group card relative cursor-pointer h-52 lg:h-[260px] w-auto">
//          <img
//             src={image}
//             alt={title}
//             className="object-cover object-center w-full h-full brightness-75 group-hover:blur-sm group-hover:brightness-50 group-hover:shadow-xl shadow-yellow-300 transition ease-in duration-300"
//          />
//          <div className="flex flex-col items-center justify-center gap-5 w-full text-zinc-50 absolute inset-0 py-5 px-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ease-in-out">
//             <img
//                src={logo}
//                alt="logo"
//                width={140}
//                className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"
//             />
//             <h1 className="font-bold text-md text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
//                {title}
//             </h1>
//          </div>
//       </a>
//    )
// }

const ProductCard = ({ price, quantity, image, type }) => {
   return (
      <div
         className="group cursor-pointer flex bg-gradient-to-br from-zinc-700 from-40% to-zinc-500 p-2.5 md:p-4 rounded-lg hover:ring-2 ring-primary transition-all ease-in-out"
      >
         <div className="w-4/5 flex flex-col gap-1 text-xs md:text-sm text-white">
            <p className="text-nowrap">{quantity} {type}</p>
            <h1>Rp. {formatToRupiah(price)}</h1>
         </div>
         <img
            className="object-contain object-center w-8"
            src={image} alt={type}
         />
      </div>
   )
}


const VoucherCard = ({ title, provider, image }) => {
   return (
      <Link
         to="/"
         className="group relative cursor-pointer rounded-xl h-52 lg:h-64 hover:ring-2 ring-primary transition-all ease-in-out duration-150">
         <img
            src={image}
            alt={title}
            className="object-cover object-center w-full h-full rounded-xl brightness-90 transition"
         />
         <div className="flex flex-col items-start justify-end px-3 py-5 w-full bg-gradient-to-b from-transparent from-5% to-black text-zinc-50 rounded-xl absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
            <h1 className="font-bold text-lg line-clamp-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
               {title}
            </h1>
            <p className="text-sm text-gray-300 transform translate-y-full group-hover:translate-y-0 transition-transform">
               {provider}
            </p>
         </div>
      </Link>
   )
}