import { game } from "../../components/assets"
import DashboardLayout from "../../layout/dashboard-layout"
import RootLayout from "../../layout/root-layout"

const Mutation = () => {
   return (
      <RootLayout>
         <DashboardLayout>
            <div className='w-full p-4'>
               <div className='card w-full bg-transparent text-white mb-5'>
                  <h1 className='text-3xl mb-1 font-bold'>Riwayat Mutasi</h1>
                  <h3>Menampilkan data riwaya Mutasi yang telah Anda lakukan selama periode yang dipilih.</h3>
               </div>
               <div className='card w-full grid grid-cols-4 gap-4 bg-transparent text-white border p-8 mb-5'>
                  <div className='text-left col-span-2'>
                     <h1 className='mb-2'>Produk</h1>
                     <input type="text" name="" id="" placeholder='$amount $-amount' className='relative block appearance-none w-full rounded-lg bg-base-100' />
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
                  <button type="button" disabled="" className="inline-flex w-auto items-center justify-center rounded-lg border bg-transparent px-4 py-2 text-sm text-white font-semibold">
                     Download CSV
                  </button>
                  <button type="button" disabled="" className="inline-flex w-auto items-center justify-center rounded-lg border bg-transparent px-4 py-2 text-sm text-white font-semibold">
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
                  <table className="min-w-full divide-y divide-muted">
                     <thead className="border-b border-white rounded-lg ">
                        <tr>
                           <th className="p-5">Nomor Invoice</th>
                           <th className="p-5">Deskripsi</th>
                           <th className="p-5">jumlah</th>
                           <th className="p-5">BCC Coin</th>
                           <th className="p-5">BCC Coin Saat Ini</th>
                           <th className="p-5">Tanggal</th>
                        </tr>
                     </thead>
                     <tbody className="text-white ">
                        <tr className="">
                           <td className="p-24" colSpan={6}>
                              <div className="w-full flex flex-col justify-center items-center text-center">
                                 <img src={game} className="mx-auto w-24 h-24" alt="" />
                                 <span className="text-xl font-bold" > Data Tidak Ditemukan !</span>
                                 <span> Tidak Ada Aktivitas data</span>
                              </div>
                           </td>
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

export default Mutation