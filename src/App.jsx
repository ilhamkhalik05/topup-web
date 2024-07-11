import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import Auth from "./pages/auth";
import Services from "./pages/services";
import TransactionCheck from "./pages/transaction-check"
import Order from "./pages/order"
import Dashboard from "./pages/dashboard";
import Report from "./pages/dashboard/report"
import Mutation from "./pages/dashboard/mutation"
import Transaction from "./pages/dashboard/transaction"
import Profile from "./pages/dashboard/profile";
import TopupBTC from "./pages/dashboard/btc/topup";
import RedeemBTC from "./pages/dashboard/btc/redeem";

import { useEffect, useState } from "react";
import { getLocalToken } from "./lib/auth/utils";

export default function App() {
   const token = getLocalToken()
   const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false)

   useEffect(() => {
      if (token) {
         setIsAuthenticated(true)
      } else {
         setIsAuthenticated(false)
      }
   }, [token])

   return (
      <BrowserRouter basename="/">
         <Routes>
            <Route element={<Home />} path={'/'} />
            <Route element={<Auth currentPage="signin" />} path={'/signin'} />
            <Route element={<Auth currentPage="signup" />} path={'/signup'} />
            <Route element={<Services />} path={'/services'} />
            <Route element={<TransactionCheck />} path={'/transaction-check'} />
            <Route element={<Order />} path={'/order/:slug'} />

            {isAuthenticated && (
               <>
                  <Route element={<Dashboard />} path={'/dashboard'} />
                  <Route element={<Report />} path={'/dashboard/laporan'} />
                  <Route element={<Mutation />} path={'/dashboard/mutasi'} />
                  <Route element={<Transaction />} path={'/dashboard/transaksi'} />
                  <Route element={<Profile />} path={'/dashboard/profile'} />
                  <Route element={<TopupBTC />} path={'/dashboard/topup-coin'} />
                  <Route element={<RedeemBTC />} path={'/dashboard/redeem-coin'} />
               </>
            )}

         </Routes>
      </BrowserRouter>
   )
}