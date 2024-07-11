import { game } from "../../components/assets"
import DashboardLayout from "../../layout/dashboard-layout"
import RootLayout from "../../layout/root-layout"

const Report = () => {
   return (
      <RootLayout>
         <DashboardLayout>
            <div className='w-full'>
               <div className='card w-full bg-transparent text-white mb-5'>
                  <h1 className='text-3xl mb-1 font-bold'>Laporan</h1>
                  <h3>Menampilkan data riwayat transaksi yang telah Anda lakukan selama periode yang dipilih.</h3>
               </div>
               <div className='card w-full grid grid-cols-4 gap-4 bg-transparent text-white border p-8'>
                  <div className='text-left col-span-2'>
                     <h1 className='mb-2'>Produk</h1>
                     <select name="" id="" className='relative block w-full rounded-lg bg-base-100'>
                        <option value="">-- Pilih Semua Produk --</option>
                        <option value="1">Mobile Legend</option>
                        <option value="2">coc</option>
                        <option value="3">kuda kudaan</option>
                        <option value="4">judi</option>
                        <option value="5">Gagal</option>
                     </select>
                  </div>
                  <div className='text-left'>
                     <h1 className='mb-2'>Tanggal Mulai</h1>
                     <input type="date" name="" id="" className='relative block appearance-none w-full rounded-lg bg-base-100' />
                  </div>
                  <div className='text-left'>
                     <h1 className='mb-2'>Tanggal Akhir</h1>
                     <input type="date" name="" id="" className='relative block appearance-none w-full rounded-lg bg-base-100' />
                  </div>
               </div>
               <div className="flex items-center justify-end gap-x-2 my-3">
                  <button type="button" className="inline-flex w-auto items-center justify-center rounded-lg border bg-transparent px-4 py-2 text-sm text-white font-semibold">
                     Download CSV
                  </button>
                  <button type="button" className="inline-flex w-auto items-center justify-center rounded-lg border bg-transparent px-4 py-2 text-sm text-white font-semibold">
                     Download XLSX
                  </button>
                  <select className="hover:bg-black inline-flex w-auto items-center justify-center rounded-lg border border-white bg-transparent px-4 py-2 text-sm text-white font-semibold ring-inset">
                     <option value="5">5 Entries</option>
                     <option value="10">10 Entries</option>
                     <option value="25">25 Entries</option>
                     <option value="50">50 Entries</option>
                     <option value="100">100 Entries</option>
                  </select>
               </div>


               <div className="w-full border border-white bg-transparant text-white rounded-xl  ">
                  <table className="min-w-full text-left">
                     <thead className="border-b border-white rounded-lg">
                        <tr>
                           <th className="p-5">Tanggal</th>
                           <th className="p-5">Total Transaksi</th>
                           <th className="p-5">Total Jumlah</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td className="p-5">10-07-2024</td>
                           <td className="p-5">3</td>
                           <td className="p-5">Rp.1.200.900</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div className="flex items-center justify-between">
                  <div className="hidden sm:block">
                     <div className="text-xl text-white font-semibold">
                        Menampilkan 0 sampai 0 dari 0 hasil
                     </div>
                  </div>
                  <div className="flex flex-1 items-center justify-end gap-x-2 my-3">
                     <button type="button" disabled="" className="inline-flex w-auto items-center justify-center rounded-lg border bg-transparent px-4 py-2 text-sm text-white font-semibold">
                        Sebelumnya
                     </button>
                     <button type="button" disabled="" className="inline-flex w-auto items-center justify-center rounded-lg border bg-transparent px-4 py-2 text-sm text-white font-semibold">
                        Selanjutnya
                     </button>
                  </div>
               </div>
            </div>
         </DashboardLayout>
      </RootLayout>
   )
}

export default Report