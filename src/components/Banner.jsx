import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { bannerImage } from "./Assets";

export default function Banner() {
   return (
      <div className="relative">
         <div className="absolute inset-0">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
         </div>
         <div className="relative">
            <Swiper
               effect="coverflow"
               grabCursor={true}
               centeredSlides={true}
               loop={true}
               slidesPerView={'auto'}
               modules={[EffectCoverflow, Pagination, Autoplay]}
               pagination={{ clickable: false }}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
               }}
               coverflowEffect={{
                  rotate: 0,
                  stretch: 100,
                  depth: 100,
                  modifier: 1,
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
         </div>
         <style jsx>{`
            .swiper-slide-prev,
            .swiper-slide-next {
               transform: rotate(90deg);
            }
         `}</style>
      </div>
   );
}
