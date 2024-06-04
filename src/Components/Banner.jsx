import banner from '../Asset/banner.webp';

export default function Banner() {
   return (
      <div className="relative w-full h-[80vh] flex justify-center items-center p-10 mb-20">
         <div className="absolute inset-0">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
         </div>
         <img className="relative w-full h-full object-cover rounded-lg" src={banner} alt="banner" />
      </div>
   );
}
