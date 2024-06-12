import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Auth from "./pages/Auth";
import Transaksi from "./pages/Transaksi";
import Layanan from "./pages/Layanan";

export default function App() {
   return (
      <BrowserRouter basename="/">
         <Routes>
            <Route element={<Beranda />} path={'/'} />
            <Route element={<Auth currentPage="signin" />} path={'/signin'} />
            <Route element={<Auth currentPage="signup" />} path={'/signup'} />
            <Route element={<Transaksi />} path={'/transaksi'} />
            <Route element={<Layanan />} path={'/layanan'} />
         </Routes>
      </BrowserRouter>
   )
}