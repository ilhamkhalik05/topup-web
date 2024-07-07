import RootLayout from "../root-layout";
import DashboardTab from "../components/dashboard-tab";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbReport } from "react-icons/tb"
import { VscSignOut } from "react-icons/vsc";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { getLocalToken } from '../lib/auth/utils';
import { signout } from "../lib/auth/actions";

export default function Dashboard() {
    const [dashboardSession, setDashboardSession] = useState('dashboard')
    const navigate = useNavigate()
    const token = getLocalToken()

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [token])

    const dashboardServices = [
        {
            title: "Dashboard",
            icon: <RxDashboard size={24} />
        },
        {
            title: "Laporan",
            icon: <TbReport size={24} />
        },
        {
            title: "Transaksi",
            icon: <GrTransaction size={24} />
        },
        {
            title: "Mutasi",
            icon: <FaMoneyBillTransfer size={24} />
        },
        {
            title: "Sign Out",
            icon: <VscSignOut size={24} />
        }
    ]

    const handleDashboardSessionState = (title) => {
        if (title === 'sign out') {
            signout()
        }
        
        setDashboardSession(title)
    }

    return (
        <RootLayout>
            <div className="relative min-h-screen container grid grid-cols-8 gap-8">
                <aside className="col-span-2 sticky top-0 rounded-lg h-full bg-dark-ui-2 text-white p-4">
                    <nav className="flex flex-col gap-5">
                        <div className="flex items-center justify-center text-yellow-300 text-xl font-bold py-4 bg-gray-700 rounded-md space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path d="M12 1.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5S17.79 1.5 12 1.5zm0 18a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM12 9v6m0 0h-2m2 0h2m2-3h-4.5M8.25 6.75l-1.5 1.5m9 0l1.5-1.5M4.5 12H7m10 0h2.5" />
                            </svg>
                            <span>BTCCC COIN</span>
                        </div>
                        <div className="flex flex-col">
                            {dashboardServices.map(({ title, icon }) => (
                                <div
                                    key={title}
                                    className={`${dashboardSession.toLowerCase() === title.toLowerCase() && 'bg-gray-700'} 
                                    ${title === "Sign Out" ? 'hover:bg-red-600' : 'hover:bg-gray-700'} 
                                    cursor-pointer flex items-center space-x-4 p-4 transition-colors duration-300`
                                    }
                                    onClick={() => handleDashboardSessionState(title.toLowerCase())}
                                >
                                    {icon}
                                    <span>{title}</span>
                                </div>
                            ))}
                        </div>
                    </nav>
                </aside>

                <main className='col-span-6'>
                    <DashboardTab dashboardSession={dashboardSession} />
                </main>
            </div>
        </RootLayout>
    );
}
