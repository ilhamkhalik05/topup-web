import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Auth from "./pages/Auth";

export default function App() {
   return (
      <BrowserRouter basename="/">
         <Routes>
            <Route element={<Beranda />} path={'/'} />
            <Route element={<Auth currentPage="signin" />} path={'/signin'} />
            <Route element={<Auth currentPage="signup" />} path={'/signup'} />
         </Routes>
      </BrowserRouter>
   )
}