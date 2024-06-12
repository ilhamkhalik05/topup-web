import { banner, bannerMobile } from "./Assets";

export default function Banner() {
   return (
      <div className="relative container w-[93%] mb-20 lg:h-[80vh] lg:mb-10">
         <div className="absolute inset-0">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
         </div>
         <div className="mt-10 relative banner-img">
            <img
               className="hidden lg:block w-full h-full object-contain object-center rounded-lg"
               src={banner}
               alt="banner"
            />
            <img
               className="block lg:hidden w-full h-full object-contain object-center rounded-lg"
               src={bannerMobile}
               alt="banner"
            />
         </div>
      </div>
   );
}
