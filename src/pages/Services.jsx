import { useEffect } from "react";
import { useSelector } from "react-redux";
import { authSideImg } from "../components/Assets";
import { games, transactions } from "../lib/placeholder-data";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { ServicesTable } from "../components/Table";

export default function Services() {
    const darkMode = useSelector((state) => state.darkMode.value)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <div
            className="bg-zinc-50 dark:bg-zinc-900 transition-all duration-500">
            <Navbar />

            <div className="container w-[93%] flex flex-col mt-10">
                <div className="relative p-3 overflow-hidden mb-10 lg:py-7 lg:px-10">
                    <div className="absolute inset-0 w-full h-full">
                        <img className="w-full h-full object-cover brightness-[0.2] rounded-md" src={authSideImg} alt="" />
                    </div>
                    <div className="relative z-10 flex flex-col">
                        <h1 className="text-4xl font-bold text-zinc-50">Daftar Layanan</h1>
                        <p className="text-lg font-normal text-zinc-300">
                            Ini adalah halaman untuk melihat daftar harga semua produk kami. Silahkan pilih produk untuk melihat list harga.
                        </p>
                    </div>
                </div>


                <Section className={"mb-12"}>
                    <h1 className="text-2xl text-zinc-100 font-semibold mb-3">Pilihan Layanan</h1>
                    <div className="flex items-center gap-2 mb-5">
                        <button className="px-4 py-1 rounded-full bg-yellow-500 text-white">Game</button>
                        <button className="px-4 py-1 rounded-full bg-yellow-500 text-white">Pulsa</button>
                        <button className="px-4 py-1 rounded-full bg-yellow-500 text-white">Voucher</button>
                    </div>
                    <CardList items={games} type='layanan' />
                </Section>

                <Section>
                    <header className="text-md text-gray-400 italic mb-3">
                        Menampilkan 5 Transaksi Terbaru
                    </header>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <ServicesTable datas={transactions} />
                    </div>
                </Section>
            </div>
            <Footer />
        </div>
    )
}
