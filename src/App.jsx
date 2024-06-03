import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
   return (
      <BrowserRouter basename="/">
         <Routes>
            <Route element={<Home />} path={'/'} />
         </Routes>
      </BrowserRouter>
   )
}