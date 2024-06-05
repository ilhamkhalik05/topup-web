import banner from '../Asset/banner.webp';

export default function Banner() {
   return (
      <div className="relative w-full h-[80vh] flex justify-center items-center mb-20">
         <div className="absolute inset-0">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
         </div>
         <div className="banner-image w-full h-full lg:w-[93%] mt-10">
            <img className="relative w-full h-full object-cover rounded-lg" src={banner} alt="banner" />
         </div>
      </div>
   );
}
