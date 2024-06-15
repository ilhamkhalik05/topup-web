import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSearchModal } from '../app/features/search-modal/search-modal-slice';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products } from '../lib/products';

const SearchModal = () => {
   const dispatch = useDispatch();
   const isSearchModalShow = useSelector(state => state.searchModal.show);
   const suggestions = products.slice(0, 4); // Popular data for suggestion

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
                     <Link
                        key={suggestion.id}
                        to="/"
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
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default SearchModal;
