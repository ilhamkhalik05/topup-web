export const ServicesTable = ({ datas }) => {
   return (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
         <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-zinc-800 dark:text-gray-100 border-b border-r-gray-800">
            <tr>
               <th scope="col" className="px-6 py-3">
                  Kategori
               </th>
               <th scope="col" className="px-6 py-3">
                  Layanan
               </th>
               <th scope="col" className="px-6 py-3">
                  Tanggal
               </th>
               <th scope="col" className="px-6 py-3">
                  Status
               </th>
            </tr>
         </thead>
         <tbody>
            {datas.map((data) => {
               const { status } = data;
               return (
                  <tr key={data.id} className="odd:bg-white odd:dark:bg-zinc-700 even:bg-zinc-50 even:dark:bg-zinc-800 border-b dark:border-zinc-700">
                     <td className="px-6 py-4">{data.category}</td>
                     <td className="px-6 py-4">{data.service}</td>
                     <td className="px-6 py-4">{data.date}</td>
                     <td className={`px-6 py-4 ${status === 'pending' ? 'text-yellow-400' : 'text-green-400'}`}>{status === 'pending' ? status + '...' : status}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   )
}