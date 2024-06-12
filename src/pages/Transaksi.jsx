import { Outlet } from "react-router";
import { games } from "../lib/placeholder-data";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Transaksi() {
    return (
        <div
        className="">
        <Navbar />  
    <div className="m-16 flex flex-col gap-5">       
        <div className="bg-yellow-400 rounded-lg h-[11vh]">
            <div className="flex flex-col m-8 gap-2">
                <div className=" flex flex-col">
                    <h1 className="text-4xl font-bold text-white">Daftar Layanan</h1>
                    <p className="text-xl font-light text-white">Ini adalah halaman untuk melihat daftar harga semua produk kami. Silahkan pilih produk untuk melihat list harga</p>
                </div>
            </div>   
        </div>  
        
        <div className="text-xl text-white font-semibold mt-2 -mb-2">Pilih Kategori</div>
        
        <div>
            <div className="flex p-2 gap-2 group">
                <button className="btn w-24 rounded-full bg-yellow-500 text-white font-light text-sm ">Game</button>
                <button className="btn w-24 rounded-full bg-yellow-500 text-white font-light text-sm ">Pulsa</button>
                <button className="btn w-24 rounded-full bg-yellow-500 text-white font-light text-sm ">Voucher</button>
            </div>
            <CardList items={games} type='layanan' />
        </div>

        <div className="overflow-x-auto rounded-lg">
            <table className="table table-zebra font-light min-w-full table-auto ">
                <thead className="uppercase bg-yellow-500 border-b-2 p-3 text-white text-lg">
                    <tr>
                        <th>INVOICE</th>
                        <th>KATEGORI</th>
                        <th>Layanan</th>
                        <th>tanggal</th>
                        <th>Layanan</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody className="capitalize p-3 bg-yellow-400 text-white text-base">
                    <tr className="border-b-[1px] border-zinc-300">
                        <th>1</th> 
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>pending</td>
                        <td>pending</td>
                    </tr>
                    <tr className="border-b-[1px] border-zinc-300">
                        <th>1</th>
                        <td>pending</td>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>pending</td>
                    </tr>
                    <tr className="border-b-[1px] border-zinc-300">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>pending</td>    
                        <td>pending</td>
                    </tr>
                    <tr className="border-b-[1px] border-zinc-300">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>pending</td>
                        <td>pending</td>
                    </tr>
                    <tr className="border-b-[1px] border-zinc-300">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>pending</td>
                        <td>pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Footer />
    </div>
    )   
 }
