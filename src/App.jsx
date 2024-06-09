import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
   return (
      <BrowserRouter basename="/">
         <Routes>
            <Route element={<Beranda />} path={'/'} />
            <Route element={<Login />} path={'/login'} />
            <Route element={<Signup />} path={'/signup'} />
         </Routes>
      </BrowserRouter>
   )
}