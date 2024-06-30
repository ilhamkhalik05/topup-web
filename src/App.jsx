import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import Auth from "./pages/auth";
import Services from "./pages/services";
import TransactionCheck from "./pages/transaction-check"
import Order from "./pages/order"

export default function App() {
   return (
      <BrowserRouter basename="/">
         <Routes>
            <Route element={<Home />} path={'/'} />
            <Route element={<Auth currentPage="signin" />} path={'/signin'} />
            <Route element={<Auth currentPage="signup" />} path={'/signup'} />
            <Route element={<Services />} path={'/services'} />
            <Route element={<TransactionCheck />} path={'/transaction-check'} />
            <Route element={<Order />} path={'/order/:slug'} />
         </Routes>
      </BrowserRouter>
   )
}