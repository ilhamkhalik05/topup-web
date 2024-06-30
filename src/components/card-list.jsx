import Marquee from "react-fast-marquee"
import { SaleCard, PopularCard, GameCard, ProductCard, VoucherCard, ServiceCard } from "./ui/card"
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

export default function CardList({ items, type }) {
   switch (type) {
      // Flash Sale List
      case 'sales':
         return (
            <Marquee
               className="overflow-hidden rounded-md"
               pauseOnHover={true}
               speed={100}
            >
               <div className="grid grid-cols-4 gap-3 mx-2 rounded-xl">
                  {items.map((sale) => (
                     <SaleCard
                        key={sale.id}
                        title={sale.title}
                        price={sale.price}
                        sale={sale.sale}
                        quantity={sale.quantity}
                        type={sale.type}
                        stok={sale.stok}
                     />
                  ))}
               </div>
            </Marquee>
         );

      // Popular List
      case 'popular':
         return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
               {items.map((popular) => {
                  return (
                     <PopularCard
                        key={popular.id}
                        title={popular.title}
                        slug={popular.slug}
                        image={popular.image}
                        type={popular.type}
                     />
                  )
               })}
            </div>
         )

      // Games List
      case 'games':
         return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
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

      case 'products':
         const image = items.type_image
         const type = items.type
         const products = items.items
         return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {products.map((item, index) => {
                  return (
                     <ProductCard
                        key={item.id}
                        index={index}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
               {items.map((voucher) => {
                  return (
                     <VoucherCard
                        key={voucher.id}
                        title={voucher.title}
                        provider={voucher.provider}
                        slug={voucher.slug}
                        image={voucher.image}
                     />
                  )
               })}
            </div>
         )

      case 'service':
         return (
            <Swiper
               className="w-full"
               loop={true}
               modules={[Autoplay]}
               breakpoints={{
                  300: {
                     slidesPerView: 3,
                     spaceBetween: 5,
                  },
                  512: {
                     slidesPerView: 4,
                     spaceBetween: 5,
                  },
                  632: {
                     slidesPerView: 5,
                     spaceBetween: 5,
                  },
                  768: {
                     slidesPerView: 7,
                     spaceBetween: 5,
                  },
               }}
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
               }}
            >
               {items.map((service) => {
                  return (
                     <SwiperSlide key={service.id}>
                        <ServiceCard
                           title={service.title}
                           developer={service.developer}
                           image={service.image}
                        />
                     </SwiperSlide>
                  )
               })}
            </Swiper>
         )
      default:
         return null
   }
}

