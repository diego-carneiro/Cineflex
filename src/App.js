import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import Schedule from "./pages/Schedule";
import Seats from "./pages/Seats";
import CompletedOrder from "./pages/CompletedOrder";


export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />}></Route>
                <Route path="/sessoes/:idFilme" element={<Schedule/>}></Route>
                <Route path="/showtimes/:idSessao" element={<Seats />}></Route>
                <Route path="/finalizado" element={<CompletedOrder />}></Route>
            </Routes>
        </BrowserRouter>

    );
}