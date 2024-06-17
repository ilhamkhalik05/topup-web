import { authSideImg } from "../components/Assets";
import { transactions } from "../lib/placeholder-data";
import { products } from "../lib/products";
import CardList from "../components/CardList";
import Section from "../components/Section";
import { ServicesTable } from "../components/Table";
import { Link } from "react-router-dom";
import RootLayout from "../RootLayout";
import Container from "../components/Container";

export default function TransationCheck() {
    return (
        <RootLayout>
            <Container>
                <div className="relative p-3 overflow-hidden mb-10 lg:p-6">
                    <div className="absolute inset-0 w-full h-full">
                        <img className="w-full h-full object-cover brightness-[0.2] rounded-md" src={authSideImg} alt="" />
                    </div>
                    <div className="relative z-10 flex flex-col">
                        <h1 className="text-4xl font-bold text-zinc-50">Daftar Layanan</h1>
                        <p className="text-md font-normal text-gray-300">
                            Ini adalah halaman untuk melihat daftar harga semua produk kami. Silahkan pilih produk untuk melihat list harga.
                        </p>
                    </div>
                </div>

                {/* <Section className={"mb-20"}>
                    <h1 className="text-2xl text-zinc-900 font-semibold mb-3 dark:text-zinc-100">Pilihan Layanan</h1>
                    <div className="flex items-center gap-2 mb-5 text-sm">
                        <Link className="px-3 py-1 rounded-full bg-yellow-400 border-2 border-solid border-yellow-400 text-white">Game</Link>
                        <Link className="px-3 py-1 rounded-full bg-transparent border-2 border-solid border-zinc-500 dark:border-zinc-50 text-zinc-900 dark:text-white">Pulsa</Link>
                        <Link className="px-3 py-1 rounded-full bg-transparent border-2 border-solid border-zinc-500 dark:border-zinc-50 text-zinc-900 dark:text-white">Voucher</Link>
                    </div>
                    <CardList items={products} type='games' />
                </Section>

                <Section>
                    <header className="text-md text-gray-400 italic mb-3">
                        Menampilkan 5 Transaksi Terbaru
                    </header>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <ServicesTable datas={transactions} />
                    </div>
                </Section> */}
            </Container>
        </RootLayout>
    )
}
