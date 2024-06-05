import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

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