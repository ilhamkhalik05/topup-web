import { transactions } from "../lib/data/product";

import RootLayout from "../layout/root-layout";
import SectionPage from "../components/section-page";
import Container from "../components/container";
import { authSideImg } from "../components/assets";
import { TransactionTable } from "../components/ui/table"
import { FaSearch } from "react-icons/fa";

export default function Services() {
    return (
        <RootLayout>
            <Container>
                <div className="flex flex-col gap-10">
                    <div className="relative p-6 overflow-hidden mb-10 rounded-xl">
                        <div className="absolute inset-0 w-full h-full">
                            <img className="w-full h-full object-cover brightness-[0.4] rounded-xl" src={authSideImg} alt="" />
                        </div>
                        <div className="relative z-10 flex flex-col gap-2">
                            <div className="flex flex-col">
                                <h1 className="text-3xl lg:text-4xl font-bold text-zinc-50">Cari Transaksi</h1>
                                <p className="text-sm lg:text-md font-normal text-gray-300">
                                    Transaksimu akan otomatis diproses, umumnya akan selesai dalam 1-2 detik namun jika kamu mengalami masalah silahkan cari transaksimu disini.
                                </p>
                            </div>

                            <form class="max-w-lg">
                                <label for="invoice-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center px-4 pointer-events-none text-zinc-400">
                                        <FaSearch />
                                    </div>
                                    <input
                                        type="search"
                                        id="invoice-search"
                                        className="peer block w-full px-5 py-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-dark-ui focus:border-dark-ui dark:bg-dark-ui dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300"
                                        placeholder="Masukan nomor invoicemu"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute end-2.5 bottom-2.5 bg-dark-ui hover:bg-dark-ui-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2 dark:bg-light-ui dark:text-dark-ui dark:hover:bg-light-ui-2 transition-all duration-100"
                                    >
                                        Cari
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <SectionPage id="transaksi" className={"flex flex-col gap-3"}>
                        <header className="ps-2 flex flex-col">
                            <h1 className="font-semibold text-2xl text-dark-ui dark:text-light-ui">List Transaksi</h1>
                            <p className="italic text-sm text-gray-400">Menampilkan 5 Transaksi Terbaru</p>
                        </header>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <TransactionTable datas={transactions} />
                        </div>
                    </SectionPage>
                </div>
            </Container>
        </RootLayout>
    )
}
