export default function DashboardTab({ dashboardSession }) {
   switch (dashboardSession) {
      case 'dashboard':
         return (
            <Dashboard />
         )
      case 'laporan':
         return (
            <Report />
         )
      case 'mutasi':
         return (
            <Mutation />
         )
      case 'transaksi':
         return (
            <Transaction />
         )
      default:
         null
   }
}


const Dashboard = () => {
   return (
      <div className='w-full p-4'>
         <div className='card w-full bg-transparent text-white mb-5'>
            <h1 className='text-3xl mb-1 font-bold'>Riwayat Transaksi</h1>
            <h3>Menampilkan data riwayat transaksi yang telah Anda lakukan selama periode yang dipilih.</h3>
         </div>
         <div className='card w-full grid grid-cols-4 gap-4 bg-transparent text-white border p-8'>
            <div className='text-left'>
               <h1 className='mb-2'>Status</h1>
               <select name="" id="" className='relative block w-full rounded-lg bg-base-100'>
                  <option value="">Semua</option>
                  <option value="1">Menunggu</option>
                  <option value="2">Sedang Diproses</option>
                  <option value="3">Selesai</option>
                  <option value="4">Dibatalkan</option>
                  <option value="5">Gagal</option>
               </select>
            </div>
            <div className='text-left'>
               <h1 className='mb-2'>Status Pembayaran</h1>
               <select name="" id="" className='relative block w-full rounded-lg bg-base-100'>
                  <option value="">Semua</option>
                  <option value="1">Dibayar</option>
                  <option value="2">Dikembalikan</option>
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
            <div className='text-left col-span-2'>
               <h1 className='mb-2'>Search</h1>
               <input type="search" name="" id="" className='relative block appearance-none w-full rounded-lg bg-base-100' />
            </div>
         </div>
      </div>
   )
}

const Report = () => {
   return (
      <div className='w-full p-4'>
         <div className='card w-full bg-transparent text-white mb-5'>
            <h1 className='text-3xl mb-1 font-bold'>Laporan</h1>
            <h3>Menampilkan data riwayat transaksi yang telah Anda lakukan selama periode yang dipilih.</h3>
         </div>
         <div className='card w-full grid grid-cols-4 gap-4 bg-transparent text-white border p-8'>
            <div className='text-left col-span-2'>
               <h1 className='mb-2'>Produk</h1>
               <select name="" id="" className='relative appearance-none block w-full rounded-lg bg-base-100'>
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
      </div>
   )
}

const Mutation = () => {
   return (
      <div className='w-full p-4'>
         <div className='card w-full bg-transparent text-white mb-5'>
            <h1 className='text-3xl mb-1 font-bold'>Riwayat Mutasi</h1>
            <h3>Menampilkan data riwaya Mutasi yang telah Anda lakukan selama periode yang dipilih.</h3>
         </div>
         <div className='card w-full grid grid-cols-4 gap-4 bg-transparent text-white border p-8'>
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
      </div>
   )
}

const Transaction = () => {
   return (
      <div className='w-full p-4'>
         <div className='card w-full bg-transparent text-white mb-5'>
            <h1 className='text-3xl mb-1 font-bold'>Transaksi Hari Ini</h1>
         </div>
         <div className='grid text-center gap-8 grid-cols-4'>
            {[...Array(6)].map((_, index) => (
               <div key={index} className={`items-center justify-center h-64 col-span-${index < 2 ? '2' : '1'} w-full ${index === 2 ? 'bg-yellow-300' : index === 3 ? 'bg-red-300' : index === 4 ? 'bg-blue-300' : 'bg-green-300'} rounded-lg`}>
                  <h1 className='text-4xl items-center justify-center font-semibold'>0</h1>
               </div>
            ))}
         </div>
      </div>

   )
}