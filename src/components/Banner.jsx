import { banner, bannerMobile } from "./Assets";
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Banner() {
   return (
      <div className="relative container w-[93%] mb-14">
         <div className="absolute inset-0">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
         </div>
         <div className="mt-10 relative">
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
                     src={"https://sin1.contabostorage.com/b1d79b8bbee7475eab6c15cd3d13cd4d:mengtopup/p/1705688512atdatang.webp"}
                     alt="banner"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className="block w-full h-full object-contain object-center rounded-lg"
                     src={"https://sin1.contabostorage.com/b1d79b8bbee7475eab6c15cd3d13cd4d:mengtopup/p/1705688529eseller.webp"}
                     alt="banner"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className="block w-full h-full object-contain object-center rounded-lg"
                     src={"https://sin1.contabostorage.com/b1d79b8bbee7475eab6c15cd3d13cd4d:mengtopup/p/1705688512atdatang.webp"}
                     alt="banner"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className="block w-full h-full object-contain object-center rounded-lg"
                     src={"https://sin1.contabostorage.com/b1d79b8bbee7475eab6c15cd3d13cd4d:mengtopup/p/1705688529eseller.webp"}
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
