import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Auth from "./pages/Auth";
import Services from "./pages/Services";
import TransactionCheck from "./pages/TransactionCheck";
import Buy from "./pages/Buy"

export default function App() {
   return (
      <BrowserRouter basename="/">
         <Routes>
            <Route element={<Beranda />} path={'/'} />
            <Route element={<Auth currentPage="signin" />} path={'/signin'} />
            <Route element={<Auth currentPage="signup" />} path={'/signup'} />
            <Route element={<Services />} path={'/services'} />
            <Route element={<TransactionCheck />} path={'/transaction-check'} />
            <Route element={<Buy />} path={'/buy/:slug'} />
         </Routes>
      </BrowserRouter>
   )
}