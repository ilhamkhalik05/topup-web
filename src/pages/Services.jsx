import RootLayout from "../root-layout";
import Container from "../components/container";
import SectionPage from "../components/section-page";
import { ServicesTable } from "../components/ui/table";
import { authSideImg } from "../components/assets";
import { BiSolidCategoryAlt } from "react-icons/bi";

import { services } from "../lib/placeholder-data";
import CardList from "../components/card-list";
import { products } from "../lib/products";

export default function Services() {
    return (
        <RootLayout>
            <Container>
                <div className="relative p-6 overflow-hidden mb-10 rounded-xl">
                    <div className="absolute inset-0 w-full h-full">
                        <img className="w-full h-full object-cover brightness-[0.4] rounded-xl" src={authSideImg} alt="" />
                    </div>
                    <div className="relative z-10 flex flex-col">
                        <h1 className="text-4xl font-bold text-zinc-50">Daftar Layanan</h1>
                        <p className="text-md font-normal text-gray-300">
                            Ini adalah halaman untuk melihat daftar harga semua produk kami. Silahkan pilih produk untuk melihat list harga.
                        </p>
                    </div>
                </div>

                <SectionPage id="kategori">
                    <div className="flex flex-col gap-6">
                        <header className="pl-2 flex flex-col justify-start items-start text-dark-ui dark:text-light-ui border-b-2 pb-3 border-dark-ui-2 dark:border-light-ui-2">
                            <div className="flex items-center gap-2">
                                <BiSolidCategoryAlt className="text-dark-ui dark:text-light-ui text-3xl" />
                                <h1 className="text-lg lg:text-xl font-semibold">Pilih Kategori Layanan</h1>
                            </div>
                            <p className="text-sm text-gray-800 dark:text-gray-300 italic">Kamu bisa melihat semua layanan yang kami sediakan di bawah ini</p>
                        </header>
                        <div className="flex flex-col gap-2 mb-10 overflow-x-auto">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="btn btn-xs md:btn-sm border-0 rounded-full bg-primary hover:bg-primary">Game</div>
                                <div className="btn btn-xs md:btn-sm border border-dark-ui text-dark-ui dark:border-light-ui-2 dark:text-light-ui-2 rounded-full bg-transparent hover:bg-light-ui-2 dark:hover:bg-dark-ui-3">Voucher</div>
                                <div className="btn btn-xs md:btn-sm border border-dark-ui text-dark-ui dark:border-light-ui-2 dark:text-light-ui-2 rounded-full bg-transparent hover:bg-light-ui-2 dark:hover:bg-dark-ui-3">Jasa Joki</div>
                            </div>
                            <CardList items={products} type={'service'} />
                        </div>
                        <div className="overflow-x-auto">
                            <ServicesTable datas={services} />
                        </div>
                    </div>
                </SectionPage>
            </Container>
        </RootLayout>
    )
}
