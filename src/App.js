import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import Schedule from "./pages/Schedule";
import Seats from "./pages/Seats";


export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />}></Route>
                <Route path="/sessoes/:idFilme" element={<Schedule/>}></Route>
                <Route path="/seats" element={<Seats />}></Route>
            </Routes>
        </BrowserRouter>

    );
}