import Container from './container';
import { bannerImage } from "./assets";

import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Banner() {
   return (
      <div className="relative max-h-full">
         <div className="absolute inset-0">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
         </div>
         <Container className="w-[90%]">
            <Swiper
               className='h-full'
               effect="cards"
               grabCursor={true}
               centeredSlides={true}
               loop={true}
               slidesPerView={'auto'}
               modules={[EffectCards, Pagination, Autoplay]}
               pagination={{ clickable: false }}
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
               }}
               cardsEffect={{
                  rotate: true,
                  perSlideRotate: 2,
                  perSlideOffset: 8,
                  slideShadows: true,
               }}
            >
               <SwiperSlide>
                  <img
                     className="block w-full h-full object-contain object-center rounded-lg"
                     src={bannerImage}
                     alt="banner"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className="block w-full h-full object-contain object-center rounded-lg"
                     src={bannerImage}
                     alt="banner"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className="block w-full h-full object-contain object-center rounded-lg"
                     src={bannerImage}
                     alt="banner"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className="block w-full h-full object-contain object-center rounded-lg"
                     src={bannerImage}
                     alt="banner"
                  />
               </SwiperSlide>
            </Swiper>
         </Container>
      </div>
   );
}
