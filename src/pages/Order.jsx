import RootLayout from "../RootLayout"
import CardList from '../components/CardList'
import PromoModal from "../components/PromoModal";
import { useParams } from "react-router"
import { useState } from "react";
import { products } from "../lib/products"
import { FaGlobe, FaRegThumbsUp } from "react-icons/fa6";
import { IoWalletOutline, IoPricetagsOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaInfo, FaRegCalendarAlt, FaStar } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle, IoIosFlash } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { LuMedal } from "react-icons/lu";
import { GiFire } from "react-icons/gi";
import { IoMdFlash } from "react-icons/io";
import { payments } from "../lib/placeholder-data";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';

export default function Order() {
   const [phone, setPhone] = useState('');
   const [isShowMore, setIsShowMore] = useState(false)
   const [isPromoModalShow, setIsPromoModalShow] = useState(false)
   const [isPaymentShow, setIsPaymentShow] = useState(false)
   const { slug } = useParams()
   const product = products.find((game) => game.slug === slug)
   const eWalletPayments = payments.filter((payment) => payment.type === "E-Wallet")
   const virtualAccountPayments = payments.filter((payment) => payment.type === "Virtual Account")

   function showPromoModal(e) {
      e.preventDefault()
      setIsPromoModalShow(true)
   }

   function closePromoModal(e) {
      e.preventDefault()
      setIsPromoModalShow(false)
   }

   return (
      <RootLayout>
         {/* Chat CS */}
         <div className="z-50 fixed bottom-0 right-0 px-3 py-1 bg-yellow-400 text-white border-0 rounded-tl-md">
            <div className="flex items-center gap-3">
               <FaHeadphonesAlt />
               Chat CS
            </div>
         </div>

         {/* Banner Container */}
         <div className="flex flex-col h-[90vh] rounded-md shadow-lg mt-5 lg:m-0">
            {/* Banner Full Image */}
            <img
               className="h-56 md:h-72 lg:h-96 object-cover object-center rounded-t-md brightness-50"
               src={product.banner_image || product.image}
               alt={product.title}
            />
            {/* Banner Full Image */}

            <div className="z-10 h-full text-zinc-100 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-900 dark:to-zinc-950">
               <div className="flex flex-col items-start -mt-20 md:flex-row">
                  {/* Floating Image */}
                  <div className="flex justify-center w-full md:w-1/3 md:justify-end">
                     <img className="w-32 md:w-48 rounded-xl shadow-lg shadow-yellow-300" src={product.image} alt={product.title} />
                  </div>
                  {/* Store Description */}
                  <div className="w-full p-5 flex flex-col items-center gap-3 md:items-start">
                     <header className="flex flex-col items-center md:items-start">
                        <h1 className="text-2xl font-bold italic">
                           {product.title}
                        </h1>
                        <p className="text-md">{product.type}</p>
                     </header>
                     <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2">
                        <div className="px-4 py-2 bg-yellow-500 glass rounded-full text-xs flex items-center gap-2">
                           <FaRegThumbsUp className="text-lg" />
                           Layanan Terbaik
                        </div>
                        <div className="px-4 py-2 bg-yellow-500 glass rounded-full text-xs flex items-center gap-2">
                           <IoWalletOutline className="text-lg" />
                           Pembayaran Aman
                        </div>
                        <div className="px-4 py-2 bg-yellow-500 glass rounded-full text-xs flex items-center gap-2">
                           <IoPricetagsOutline className="text-lg" />
                           Harga Termurah
                        </div>
                        <div className="px-4 py-2 bg-yellow-500 glass rounded-full text-xs flex items-center gap-2">
                           <TbTruckDelivery className="text-lg" />
                           Proses Cepat
                        </div>
                     </div>
                     <div className="flex flex-col items-start gap-1 pr-3">
                        <div className={`flex flex-col gap-1 text-sm text-zinc-950 dark:text-zinc-50`}>
                           <div>
                              <p>Temukan berbagai macam pilihan {product.type} {product.title} Termurah, Cepat dan Aman hanya di <span className="italic">WEBTOPUPKU</span>.</p>
                              <p>Dengan beragam metode pembayaran yang mudah dan pelayanan pelanggan 24/7, <span className="italic">WEBTOPUPKU</span> adalah pilihan terbaik untuk kebutuhan {product.type} {product.title} Anda.</p>
                           </div>
                           {isShowMore
                              ?
                              <div>
                                 Pembayaran {product.type} dengan e-wallet bisa melalui Dana, Ovo, Gopay, QRIS, ShopeePay, dan Link Aja.
                                 Sedangkan virtual account bisa melalui BCA, Mandiri, Bank BRI, BNI, Permata Bank, CIMB Niaga, Danamon, Maybank, BSI, dan bank bjb. Selain itu anda juga bisa membayarnya di supermarket terdekat
                              </div>
                              :
                              null
                           }
                        </div>
                        <button
                           className="cursor-pointer text-sm text-yellow-300"
                           onClick={() => setIsShowMore(!isShowMore)}
                        >
                           {isShowMore ? "Show less..." : "Show more..."}
                        </button>
                     </div>
                     <div className="flex items-center gap-1 text-sm text-gray-950 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400 cursor-pointer duration-300">
                        <BsExclamationCircle />
                        Lihat cara pembelian
                     </div>
                  </div>
                  {/* Store Description */}
               </div>
            </div>
         </div>
         {/* Banner Container */}

         {/* Content Container */}
         <div className="flex flex-col gap-3 lg:flex-row w-full text-neutral-50 mt-20 p-5">
            {/* Left Box Layout */}
            <aside className="w-full lg:w-1/2">
               <div className="flex flex-col gap-5 sticky top-[90px]">
                  <Box no={<FaInfo />} title={`Tentang Game`}>
                     <p className="text-sm text-gray-300">
                        <span className="italic font-bold">Mobile Legends: Bang Bang</span>,
                        umumnya dikenal sebagai ML atau MLBB, adalah game mobile multiplayer online battle arena (MOBA) yang dikembangkan dan diterbitkan oleh Moonton, anak perusahaan ByteDance.
                        Mobile Legends pertama kali dirilis di Brazil pada 14 Juli 2016, untuk melihat perjalanannya <a className="link italic text-yellow-300" href="https://mobile-legends.fandom.com/wiki/Mobile_Legends:_Bang_Bang">klik di sini</a>
                     </p>
                  </Box>

                  <Box className="hidden lg:block" no={<FaStar />} title={'Review Pembeli'}>
                     {/* Rating */}
                     <div className="flex flex-col gap-1 mt-4">
                        <div className="flex justify-center items-center">
                           <FaStar className="mr-2 text-5xl text-yellow-300" />
                           <h1 className="text-6xl italic">4.7</h1>
                           <h2 className="self-end text-xl italic">/5</h2>
                        </div>
                        <p className="text-gray-200 text-center text-sm">Terlihat lebih dari <span className="font-bold">1.8jt </span> ulasan pembeli merasa puas dengan layanan kami.</p>
                     </div>
                     {/* Rincian Rating */}
                     <div className="flex flex-col gap-1 p-3">
                        <div className="flex justify-between items-center">
                           <div className="flex gap-1 text-yellow-300">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                           </div>
                           <p className="text-sm text-gray-300">1.7jt review</p>
                        </div>
                        <div className="flex justify-between items-center">
                           <div className="flex gap-1 text-yellow-300">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar className="text-gray-300" />
                           </div>
                           <p className="text-sm text-gray-300">3rb review</p>
                        </div>
                        <div className="flex justify-between items-center">
                           <div className="flex gap-1 text-yellow-300">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar className="text-gray-300" />
                              <FaStar className="text-gray-300" />
                           </div>
                           <p className="text-sm text-gray-300">400 review</p>
                        </div>
                        <div className="flex justify-between items-center">
                           <div className="flex gap-1 text-yellow-300">
                              <FaStar />
                              <FaStar />
                              <FaStar className="text-gray-300" />
                              <FaStar className="text-gray-300" />
                              <FaStar className="text-gray-300" />
                           </div>
                           <p className="text-sm text-gray-300">30 review</p>
                        </div>
                        <div className="flex justify-between items-center">
                           <div className="flex gap-1 text-yellow-300">
                              <FaStar />
                              <FaStar className="text-gray-300" />
                              <FaStar className="text-gray-300" />
                              <FaStar className="text-gray-300" />
                              <FaStar className="text-gray-300" />
                           </div>
                           <p className="text-sm text-gray-300">3 review</p>
                        </div>
                     </div>
                     <hr className="border border-zinc-600 my-4" />
                     {/* Review Pembeli */}
                     <div className="flex flex-col gap-1">
                        <div className="flex flex-col">
                           <div className="flex justify-between text-gray-300 p-3">
                              <div className="flex flex-col text-xs">
                                 <p>Free Fire</p>
                                 <p>65 Diamond</p>
                                 <p>(12-20-2024)</p>
                              </div>
                              <div className="flex flex-col">
                                 <div className="italic text-xs text-end">
                                    <p className="font-bold">+62 XXXX XXXX XXXX</p>
                                    <p className="text-sm">ᴾᴿᴼⓞ₦Ї₦ℑ₳࿐</p>
                                    <p>"Admin ramah auto bintang 5"</p>
                                    <div className="flex items-center justify-end text-md text-yellow-300">
                                       <FaStar />
                                       <FaStar />
                                       <FaStar />
                                       <FaStar />
                                       <FaStar />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="flex justify-between text-gray-300 p-3">
                              <div className="flex flex-col text-xs">
                                 <p>Free Fire</p>
                                 <p>65 Diamond</p>
                                 <p>(12-20-2024)</p>
                              </div>
                              <div className="flex flex-col">
                                 <div className="italic text-xs text-end">
                                    <p className="font-bold">+62 XXXX XXXX XXXX</p>
                                    <p className="text-sm">ᴾᴿᴼⓞ₦Ї₦ℑ₳࿐</p>
                                    <p>"Admin ramah auto bintang 5"</p>
                                    <div className="flex items-center justify-end text-md text-yellow-300">
                                       <FaStar />
                                       <FaStar />
                                       <FaStar />
                                       <FaStar />
                                       <FaStar />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="flex justify-between text-gray-300 p-3">
                              <div className="flex flex-col text-xs">
                                 <p>Free Fire</p>
                                 <p>65 Diamond</p>
                                 <p>(12-20-2024)</p>
                              </div>
                              <div className="flex flex-col">
                                 <div className="italic text-xs text-end">
                                    <p className="font-bold">+62 XXXX XXXX XXXX</p>
                                    <p className="text-sm">ᴾᴿᴼⓞ₦Ї₦ℑ₳࿐</p>
                                    <p>"Admin ramah auto bintang 5"</p>
                                    <div className="flex items-center justify-end text-md text-yellow-300">
                                       <FaStar />
                                       <FaStar />
                                       <FaStar />
                                       <FaStar />
                                       <FaStar />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr className="border border-zinc-600 my-4" />
                     {/*  Komentar Input */}
                     <div className="flex flex-col gap-3 px-1">
                        <div className="flex flex-col text-base">
                           <h1>Kami ingin mendengar dari Anda!</h1>
                           <h1>Berikan ulasan tentang layanan kami dan bantu pengguna lain menemukan pengalaman terbaik di <span className="italic">WEBTOPUPKU.</span></h1>
                        </div>
                        <form className="p-3 bg-zinc-700 rounded-lg flex flex-col gap-4">
                           <div className="flex flex-col gap-1 text-sm">
                              <label className="text-lg" htmlFor="rating">Bagikan Review</label>
                              <textarea type="text" className="text-sm text-black w-full bg-gray-200 rounded-lg border-none outline-none border-0 placeholder:text-gray-500 focus:border focus:border-yellow-300" placeholder="Komentar Anda sangat berarti untuk kami" />
                              <div className="cursor-pointer flex items-center justify-end gap-2 text-lg">
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                              </div>
                           </div>
                           <button type="submit" className="btn btn-sm bg-yellow-400 hover:bg-yellow-300 text-white w-full">Simpan</button>
                        </form>
                     </div>
                  </Box>
               </div>
            </aside>
            {/* Left Box Layout */}

            {/* Right Box Layout (Order Form) */}
            <form className="flex flex-col w-full gap-5">
               <Box no={"1"} title={'Silahkan Pilih Produk'}>
                  <div className="flex flex-wrap gap-x-1 gap-y-2 items-center mb-5">
                     <div className="flex items-center justify-center gap-1 btn btn-xs px-5 bg-yellow-200 font-bold text-black rounded-full border-0 hover:bg-yellow-200">
                        <LuMedal />
                        Best Sale
                     </div>
                     <div className="flex items-center justify-center gap-1 btn btn-xs px-5 bg-transparent font-bold text-zinc-300 rounded-full border border-zinc-100 hover:bg-zinc-500">
                        <IoMdFlash />
                        Flash Sale
                     </div>
                     <div className="flex items-center justify-center gap-1 btn btn-xs px-5 bg-transparent font-bold text-zinc-300 rounded-full border border-zinc-100 hover:bg-zinc-500">
                        <GiFire />
                        Hot
                     </div>
                  </div>
                  <CardList items={product} type='products' />
               </Box>

               <Box no={"2"} title={'Masukan Data Akun'}>
                  <div className="flex flex-col gap-2 lg:flex-row w-full">
                     <div className="flex flex-col gap-2 w-full">
                        <label className="text-md" htmlFor="">User ID</label>
                        <input
                           className="input input-bordered input-md bg-zinc-600 text-zinc-300 placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-300 transition-all ease-in-out duration-100 rounded-md"
                           type="text"
                           placeholder="Masukan user id"
                        />
                     </div>
                     <div className="flex flex-col gap-2 w-full">
                        <label className="text-md" htmlFor="">Server ID</label>
                        <input
                           className="input input-bordered input-md bg-zinc-600 text-zinc-300 placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-300 transition-all ease-in-out duration-100 rounded-md"
                           type="text"
                           placeholder="Masukan server id"
                        />
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">
                     <BsExclamationCircle />
                     Mohon masukan user id dan server id {product.title} kamu untuk proses lebih lanjut
                  </div>
               </Box>

               <Box no={"3"} title={'Pilih Metode Pembayaran'}>
                  <div className="flex flex-col gap-5">
                     {/* E-Wallet */}
                     <div className="flex flex-col">
                        <div
                           onClick={() => setIsPaymentShow(!isPaymentShow)}
                           className="cursor-pointer p-3 flex justify-between items-center bg-zinc-600 rounded-t-2xl">
                           <h1 className="font-semibold">E-Wallet</h1>
                           {isPaymentShow
                              ?
                              <IoIosArrowDropupCircle className="cursor-pointer text-lg" />
                              :
                              <IoIosArrowDropdownCircle className="cursor-pointer text-lg" />
                           }
                        </div>
                        {isPaymentShow
                           ? (
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5 px-5 py-7 bg-zinc-900 rounded-b-2xl animate-slideDown">
                                 <div className="flex flex-col cursor-pointer shadow-inner p-3 bg-gradient-to-br from-zinc-300 from-10% via-zinc-100 to-zinc-200 ring-2 ring-offset-2 ring-offset-zinc-800 ring-zinc-300 rounded-2xl">
                                    <div className="flex flex-col text-black">
                                       <h1 className="font-semibold text-md">Rp.159.000</h1>
                                       <p className="italic text-xs">Biaya layanan up to 2.5%</p>
                                    </div>
                                    <hr className="border border-black mt-3 mb-2" />
                                    <div className="flex items-center justify-between">
                                       <p className="text-gray-800 text-xs font-bold">E-Wallet</p>
                                       <img className="w-10 object-contain" src="https://cdn.bangjeff.com/f367ae56-ef1d-404d-959b-337e057966be.webp" alt="Ovo" />
                                    </div>
                                 </div>
                                 <div className="flex flex-col cursor-pointer shadow-inner p-3 bg-zinc-300 opacity-65 ring-2 ring-offset-2 ring-offset-zinc-800 ring-zinc-300 rounded-2xl">
                                    <div className="flex flex-col text-black">
                                       <h1 className="font-semibold text-md">Rp.159.000</h1>
                                       <p className="italic text-xs">Biaya layanan up to 2.5%</p>
                                    </div>
                                    <hr className="border border-black mt-3 mb-2" />
                                    <div className="flex items-center justify-between">
                                       <p className="text-gray-800 text-xs font-bold">E-Wallet</p>
                                       <img className="w-10 object-contain" src="https://cdn.bangjeff.com/f367ae56-ef1d-404d-959b-337e057966be.webp" alt="Ovo" />
                                    </div>
                                 </div>
                                 <div className="flex flex-col cursor-pointer shadow-inner p-3 bg-zinc-300 opacity-65 ring-2 ring-offset-2 ring-offset-zinc-800 ring-zinc-300 rounded-2xl">
                                    <div className="flex flex-col text-black">
                                       <h1 className="font-semibold text-md">Rp.159.000</h1>
                                       <p className="italic text-xs">Biaya layanan up to 2.5%</p>
                                    </div>
                                    <hr className="border border-black mt-3 mb-2" />
                                    <div className="flex items-center justify-between">
                                       <p className="text-gray-800 text-xs font-bold">E-Wallet</p>
                                       <img className="w-10 object-contain" src="https://cdn.bangjeff.com/f367ae56-ef1d-404d-959b-337e057966be.webp" alt="Ovo" />
                                    </div>
                                 </div>
                                 <div className="flex flex-col cursor-pointer shadow-inner p-3 bg-zinc-300 opacity-65 ring-2 ring-offset-2 ring-offset-zinc-800 ring-zinc-300 rounded-2xl">
                                    <div className="flex flex-col text-black">
                                       <h1 className="font-semibold text-md">Rp.159.000</h1>
                                       <p className="italic text-xs">Biaya layanan up to 2.5%</p>
                                    </div>
                                    <hr className="border border-black mt-3 mb-2" />
                                    <div className="flex items-center justify-between">
                                       <p className="text-gray-800 text-xs font-bold">E-Wallet</p>
                                       <img className="w-10 object-contain" src="https://cdn.bangjeff.com/f367ae56-ef1d-404d-959b-337e057966be.webp" alt="Ovo" />
                                    </div>
                                 </div>
                              </div>
                           )
                           : (
                              <div className="p-3 flex justify-end bg-zinc-400 rounded-b-2xl">
                                 <div className="flex gap-2">
                                    {eWalletPayments.map((payment) => (
                                       <img className="w-12 object-contain" src={payment.image} alt={payment.title} />
                                    ))}
                                 </div>
                              </div>
                           )}
                     </div>
                     {/* E-Wallet */}

                     {/* Virtual Account */}
                     <div className="flex flex-col">
                        <div className="p-3 flex justify-between items-center bg-zinc-600 rounded-t-2xl">
                           <h1 className="font-semibold">Virtual Account</h1>
                           <IoIosArrowDropdownCircle className="cursor-pointer text-lg" />
                        </div>
                        <div className="p-3 flex justify-end bg-zinc-400 rounded-b-2xl">
                           <div className="flex gap-2">
                              {virtualAccountPayments.map((payment) => (
                                 <img className="w-12 object-contain" src={payment.image} alt={payment.title} />
                              ))}
                           </div>
                        </div>
                     </div>
                     {/* Virtual Account */}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">
                     <BsExclamationCircle />
                     Silahkan pilih metode pembayaran yang tersedia untuk {product.title}
                  </div>
               </Box>

               <Box no={"4"} title={'Masukan Kode Promo'}>
                  <div className="flex gap-2 w-full">
                     <input type="text" placeholder="Masukan kode promo" className="input input-xs w-full text-black rounded-sm text-sm placeholder:text-zinc-400" />
                     <button className="btn btn-xs rounded-sm bg-yellow-400 hover:bg-yellow-600 text-white">Pakai Kode</button>
                  </div>
                  <button
                     onClick={showPromoModal}
                     className="btn btn-sm rounded-sm w-full bg-yellow-400 hover:bg-yellow-600 text-white mt-4">
                     <RiCoupon3Fill />
                     Lihat Kode Promo
                  </button>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">
                     <BsExclamationCircle />
                     Masukan kode promo yang tersedia diatas
                  </div>
               </Box>

               <Box no={"5"} title={'Masukan Detail Kontak'}>
                  <label htmlFor="whatsapp">No Whatsapp</label>
                  <PhoneInput
                     defaultCountry="id"
                     value={phone}
                     onChange={(phone) => setPhone(phone)}
                     forceDialCode={true}
                     preferredCountries={['id']}
                     disableDialCodeAndPrefix={true}
                     showDisabledDialCodeAndPrefix={true}
                     className="mt-2"
                     inputClassName="input input-sm w-full"
                     inputProps={{ placeholder: 'Masukan nomor whatsapp' }}
                  />
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">
                     <BsExclamationCircle />
                     Bukti transaksi akan langsung kami kirim ke no whatsapp yang terisi diatas
                  </div>
               </Box>

               <Box no={"6"} title={'Total Pembayaran'}>
                  <div className="w-full bg-zinc-950 border border-dashed border-zinc-600 flex items-center justify-center text-sm text-zinc-50 p-3 mb-3">
                     Anda belum memilih produk
                  </div>
                  <button type="submit" className="btn bg-yellow-400 w-full flex items-center gap-2 text-white uppercase  hover:bg-yellow-600">
                     <FaRegCalendarAlt />
                     Pesan Sekarang
                  </button>
                  <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-0 mt-4 text-gray-300">
                     <div className="flex items-center gap-2">
                        <IoIosFlash className="text-yellow-300" />
                        Proses Cepat
                     </div>
                     <div className="flex items-center gap-2">
                        <FaGlobe className="text-blue-400" />
                        Global Region
                     </div>
                     <div className="flex items-center gap-2">
                        <FaHeadphonesAlt className="text-red-500" />
                        Layanan Pelanggan 24/7
                     </div>
                  </div>
               </Box>
            </form>
            {/* Right Box Layout (Order Form) */}

            {/* Review Pembeli Mobile */}
            <Box className="block lg:hidden" no={<FaStar />} title={'Review Pembeli'}>
               {/* Rating */}
               <div className="flex flex-col gap-1 mt-4">
                  <div className="flex justify-center items-center">
                     <FaStar className="mr-2 text-5xl text-yellow-300" />
                     <h1 className="text-6xl italic">4.7</h1>
                     <h2 className="self-end text-xl italic">/5</h2>
                  </div>
                  <p className="text-gray-200 text-center text-sm">Terlihat lebih dari <span className="font-bold">1.8jt </span> ulasan pembeli merasa puas dengan layanan kami.</p>
               </div>
               {/* Rincian Rating */}
               <div className="flex flex-col gap-1 p-3">
                  <div className="flex justify-between items-center">
                     <div className="flex gap-1 text-yellow-300">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                     </div>
                     <p className="text-sm text-gray-300">1.7jt review</p>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex gap-1 text-yellow-300">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                     </div>
                     <p className="text-sm text-gray-300">3rb review</p>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex gap-1 text-yellow-300">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                     </div>
                     <p className="text-sm text-gray-300">400 review</p>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex gap-1 text-yellow-300">
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                     </div>
                     <p className="text-sm text-gray-300">30 review</p>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex gap-1 text-yellow-300">
                        <FaStar />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                     </div>
                     <p className="text-sm text-gray-300">3 review</p>
                  </div>
               </div>
               <hr className="border border-zinc-600 my-4" />
               {/* Review Pembeli */}
               <div className="flex flex-col gap-1">
                  <div className="flex flex-col">
                     <div className="flex justify-between text-gray-300 p-3">
                        <div className="flex flex-col text-xs">
                           <p>Free Fire</p>
                           <p>65 Diamond</p>
                           <p>(12-20-2024)</p>
                        </div>
                        <div className="flex flex-col">
                           <div className="italic text-xs text-end">
                              <p className="font-bold">+62 XXXX XXXX XXXX</p>
                              <p className="text-sm">ᴾᴿᴼⓞ₦Ї₦ℑ₳࿐</p>
                              <p>"Admin ramah auto bintang 5"</p>
                              <div className="flex items-center justify-end text-md text-yellow-300">
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between text-gray-300 p-3">
                        <div className="flex flex-col text-xs">
                           <p>Free Fire</p>
                           <p>65 Diamond</p>
                           <p>(12-20-2024)</p>
                        </div>
                        <div className="flex flex-col">
                           <div className="italic text-xs text-end">
                              <p className="font-bold">+62 XXXX XXXX XXXX</p>
                              <p className="text-sm">ᴾᴿᴼⓞ₦Ї₦ℑ₳࿐</p>
                              <p>"Admin ramah auto bintang 5"</p>
                              <div className="flex items-center justify-end text-md text-yellow-300">
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="flex justify-between text-gray-300 p-3">
                        <div className="flex flex-col text-xs">
                           <p>Free Fire</p>
                           <p>65 Diamond</p>
                           <p>(12-20-2024)</p>
                        </div>
                        <div className="flex flex-col">
                           <div className="italic text-xs text-end">
                              <p className="font-bold">+62 XXXX XXXX XXXX</p>
                              <p className="text-sm">ᴾᴿᴼⓞ₦Ї₦ℑ₳࿐</p>
                              <p>"Admin ramah auto bintang 5"</p>
                              <div className="flex items-center justify-end text-md text-yellow-300">
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <hr className="border border-zinc-600 my-4" />
               {/*  Komentar Input */}
               <div className="flex flex-col gap-3 px-1">
                  <div className="flex flex-col text-base">
                     <h1>Kami ingin mendengar dari Anda!</h1>
                     <h1>Berikan ulasan tentang layanan kami dan bantu pengguna lain menemukan pengalaman terbaik di <span className="italic">WEBTOPUPKU.</span></h1>
                  </div>
                  <form className="p-3 bg-zinc-700 rounded-lg flex flex-col gap-4">
                     <div className="flex flex-col gap-1 text-sm">
                        <label className="text-lg" htmlFor="rating">Bagikan Review</label>
                        <textarea type="text" className="text-sm text-black w-full bg-gray-200 rounded-lg border-none outline-none border-0 placeholder:text-gray-500 focus:border focus:border-yellow-300" placeholder="Komentar Anda sangat berarti untuk kami" />
                        <div className="cursor-pointer flex items-center justify-end gap-2 text-lg">
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                        </div>
                     </div>
                     <button type="submit" className="btn btn-sm bg-yellow-400 hover:bg-yellow-300 text-white w-full">Simpan</button>
                  </form>
               </div>
            </Box>
            {/* Review Pembeli Mobile */}
         </div>
         {/* Content Container */}

         {/* Promo Modal */}
         {isPromoModalShow && <PromoModal closePromoModal={closePromoModal} />}
         {/* Promo Modal */}
      </RootLayout>
   )
}

const Box = ({ className = '', no, title, children }) => {
   return (
      <div className={`group flex flex-col gap-3 rounded-md bg-zinc-800 ${className}`}>
         <header className="w-full flex rounded-t-md bg-zinc-600">
            <div className="bg-yellow-300 text-yellow-800 font-bold rounded-tl-md px-4 py-2 flex items-center justify-center">{no}</div>
            <h2 className="px-4 py-2 font-[500] text-lg">{title}</h2>
         </header>
         <div className="p-5">
            {children}
         </div>
      </div>
   )
}

