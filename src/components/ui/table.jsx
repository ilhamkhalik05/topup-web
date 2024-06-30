import { formatToRupiah } from "../../lib/utils";

export const TransactionTable = ({ datas }) => {
   return (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
         <thead className="text-md text-center md:text-left text-gray-700 uppercase bg-gray-50 dark:bg-zinc-800 dark:text-gray-100 border-b border-r-gray-800">
            <tr>
               <th scope="col" className="px-6 py-3">
                  Nomor Invoice
               </th>
               <th scope="col" className="px-6 py-3">
                  Kategori
               </th>
               <th scope="col" className="px-6 py-3">
                  Layanan
               </th>
               <th scope="col" className="px-6 py-3">
                  Tanggal
               </th>
               <th scope="col" className="px-6 py-3 text-center">
                  Status
               </th>
            </tr>
         </thead>
         <tbody>
            {datas.map((data) => {
               const status = data.status;
               return (
                  <tr key={data.id} className="odd:bg-white odd:dark:bg-zinc-700 even:bg-zinc-50 even:dark:bg-zinc-800 border-b dark:border-zinc-700">
                     <td className="px-6 py-4 text-nowrap font-bold">{data.invoice_id}</td>
                     <td className="px-6 py-4 text-nowrap">{data.category}</td>
                     <td className="px-6 py-4 text-nowrap">{data.service}</td>
                     <td className="px-6 py-4 text-nowrap">{data.date}</td>
                     <td className="px-6 py-4 text-nowrap flex justify-center">
                        <div className={`${status === 'processing' ? 'bg-blue-500' : 'bg-green-400'} rounded-md text-white px-3 py-1`}>
                           {status === 'processing' ? status + "..." : status}
                        </div>
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   )
}

export const ServicesTable = ({ datas }) => {
   return (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
         <thead className="text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-zinc-800 dark:text-gray-100 border-b border-r-gray-800">
            <tr>
               <th scope="col" className="px-6 py-3">
                  PID
               </th>
               <th scope="col" className="px-6 py-3">
                  Kategori
               </th>
               <th scope="col" className="px-6 py-3">
                  Layanan
               </th>
               <th scope="col" className="px-6 py-3">
                  Harga
               </th>
               <th scope="col" className="px-6 py-3">
                  Harga Silver
               </th>
               <th scope="col" className="px-6 py-3">
                  Harga Gold
               </th>
               <th scope="col" className="px-6 py-3">
                  Harga Pro
               </th>
               <th scope="col" className="px-6 py-3">
                  Status
               </th>
            </tr>
         </thead>
         <tbody className="text-center">
            {datas.map((data) => {
               const { price, status } = data
               const silverPrice = price - 30
               const goldPrice = price - 50
               const proPrice = price - 100
               return (
                  <tr key={data.pid} className="odd:bg-white odd:dark:bg-zinc-700 even:bg-zinc-50 even:dark:bg-zinc-800 border-b dark:border-zinc-700">
                     <td className="px-6 py-4 text-nowrap">{data.pid}</td>
                     <td className="px-6 py-4 text-nowrap">{data.category}</td>
                     <td className="px-6 py-4 text-nowrap">{data.service}</td>
                     <td className="px-6 py-4 text-nowrap">{formatToRupiah(price)}</td>
                     <td className="px-6 py-4 text-nowrap">{formatToRupiah(silverPrice)}</td>
                     <td className="px-6 py-4 text-nowrap">{formatToRupiah(goldPrice)}</td>
                     <td className="px-6 py-4 text-nowrap">{formatToRupiah(proPrice)}</td>
                     <td className={`px-6 py-4 flex justify-center`}>
                        <div className={`${status === 'tidak aktif' ? 'bg-red-500' : 'bg-green-400'} text-light-ui px-4 py-0.5 rounded-full font-poppins text-nowrap`}>
                           {status}
                        </div>
                     </td>
                  </tr>
               )
            })}
         </tbody>
      </table>
   )
}