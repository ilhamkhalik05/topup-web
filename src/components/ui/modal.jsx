import { useDispatch, useSelector } from 'react-redux';
import { closeSearchModal } from '../../app/features/search-modal/search-modal-slice';
import { FaSearch } from 'react-icons/fa';
import { products } from '../../lib/data/product';
import { BsClockHistory } from "react-icons/bs";
import { FaX } from "react-icons/fa6";

export const SearchModal = () => {
   const dispatch = useDispatch();
   const isSearchModalShow = useSelector(state => state.searchModal.show);
   const suggestions = products.slice(0, 4);

   if (!isSearchModalShow) return null;

   const handleModalClick = (e) => {
      e.stopPropagation();
   };

   return (
      <div
         className="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
         onClick={() => dispatch(closeSearchModal())}
      >
         <div
            className="z-50 w-4/5 lg:w-2/5 -translate-y-6 bg-zinc-200 text-zinc-900 p-6 rounded-lg flex flex-col gap-7 dark:bg-zinc-900 dark:text-zinc-50"
            onClick={handleModalClick}
         >
            <form className='w-full flex items-center gap-5' action="">
               <label className='cursor-pointer text-lg' htmlFor="search">
                  <FaSearch />
               </label>
               <input
                  className='w-full px-5 py-3 outline-none border-0 bg-transparent text-white font-light rounded-md focus:outline focus:outline-zinc-800'
                  type="text"
                  id='search'
                  name='search'
                  placeholder='Press to search...'
               />
            </form>
            <div className="suggestions flex flex-col gap-3 w-full">
               <h1 className="text-md">Popular</h1>
               <div className="flex flex-col gap-3 w-full max-h-80 overflow-y-auto">
                  {suggestions.map((suggestion) => (
                     <a
                        key={suggestion.id}
                        href="/"
                        className="group card cursor-pointer flex flex-row items-center gap-3 rounded-lg px-5 py-3 bg-gradient-to-br from-neutral-800 to-neutral-950 hover:-translate-y-1 hover:bg-neutral-900 duration-500 ease-in-out"
                     >
                        <img
                           src={suggestion.image}
                           alt={suggestion.title}
                           width={80}
                           height={80}
                           className="rounded-md"
                        />
                        <div className="flex flex-col text-yellow-50 transition-colors duration-300 ease-in-out">
                           <h1 className="font-bold">{suggestion.title}</h1>
                           <h2 className="text-sm">{suggestion.tipe}</h2>
                        </div>
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export const PromoModal = ({ closePromoModal }) => {
   return (
      // Modal Page Wrapper
      <div
         className="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
         onClick={closePromoModal}
      >
         {/* Promo Modal Container */}
         <div
            className="z-50 w-4/5 lg:w-2/5 -translate-y-20 bg-zinc-200 text-zinc-900 rounded-lg flex flex-col gap-7 dark:bg-zinc-900 dark:text-zinc-50"
            onClick={(e) => e.stopPropagation()}
         >
            {/* Promo Container */}
            <div className="flex flex-col w-full p-6">
               {/* Promo Header */}
               <header className="flex justify-between items-center text-xl text-center uppercase font-normal text-gray-200">
                  Promo Berlangsung
                  <FaX
                     className="cursor-pointer text-md text-zinc-300 hover:text-yellow-300 ease-in duration-100"
                     onClick={closePromoModal}
                  />
               </header>
               {/* Promo Header */}

               <hr className="border border-zinc-400 mt-3 mb-4" />

               {/* Promo List */}
               <div className="flex flex-col gap-4 w-full max-h-80 overflow-y-auto no-scrollbar">
                  <div className="flex flex-col gap-2 bg-gradient-to-br from-zinc-950 from-10% to-zinc-800 px-3 py-2 border-2 border-green-400 rounded-lg">
                     <h1 className="text-green-300">Diskon 10%</h1>
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                     </div>
                     <footer className="flex items-center justify-between gap-3">
                        <div className="btn btn-xs border-0 bg-green-400 rounded-sm hover:bg-green-400">Available</div>
                        <h1 className="text-sm text-end text-gray-200">Kode Promo: HEMATNIKMAT</h1>
                     </footer>
                  </div>
                  <div className="flex flex-col gap-2 bg-gradient-to-br from-zinc-950 from-10% to-zinc-800 px-3 py-2 border-2 border-gray-400 rounded-lg opacity-50">
                     <h1 className="text-gray-300">Diskon 10%</h1>
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                     </div>
                     <footer className="flex items-center justify-between gap-3">
                        <div className="btn btn-xs border-0 bg-gray-400 rounded-sm hover:bg-gray-400">Unavailable</div>
                        <h1 className="text-sm text-end text-gray-200">Kode Promo: HEMATNIKMAT</h1>
                     </footer>
                  </div>
                  <div className="flex flex-col gap-2 bg-gradient-to-br from-zinc-950 from-10% to-zinc-800 px-3 py-2 border-2 border-gray-400 rounded-lg opacity-50">
                     <h1 className="text-gray-300">Diskon 10%</h1>
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                     </div>
                     <footer className="flex items-center justify-between gap-3">
                        <div className="btn btn-xs border-0 bg-gray-400 rounded-sm hover:bg-gray-400">Unavailable</div>
                        <h1 className="text-sm text-end text-gray-200">Kode Promo: HEMATNIKMAT</h1>
                     </footer>
                  </div>
                  <div className="flex flex-col gap-2 bg-gradient-to-br from-zinc-950 from-10% to-zinc-800 px-3 py-2 border-2 border-gray-400 rounded-lg opacity-50">
                     <h1 className="text-gray-300">Diskon 10%</h1>
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                           <BsClockHistory />
                           Promo berlaku hingga 10 Januari 2023
                        </div>
                     </div>
                     <footer className="flex items-center justify-between gap-3">
                        <div className="btn btn-xs border-0 bg-gray-400 rounded-sm hover:bg-gray-400">Unavailable</div>
                        <h1 className="text-sm text-end text-gray-200">Kode Promo: HEMATNIKMAT</h1>
                     </footer>
                  </div>
               </div>
               {/* Promo List */}
            </div>
            {/* Promo Container */}
         </div>
         {/* Promo Modal Container */}
      </div>
   )
}