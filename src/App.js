import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import Schedule from "./pages/Schedule";
import Seats from "./pages/Seats";
import CompletedOrder from "./pages/CompletedOrder";
import { useState } from "react";
import axios from "axios";


export default function App() {

    const [submit, setSubmit] = useState("");
    const [finishOrder, setFinishOrder] = useState(false);
    
    if(finishOrder !== false){
        buyTickets();
    }
console.log(submit);
    function buyTickets () {
        
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v4/cineflex/seats/book-many`, submit)
        promise.then((response) => {

        });
        promise.catch((error) => alert(error))
    }
    // const [orderData, setOrderData] = useState({
        
    //     movieName: "",
    //     date:"",
    //     hour:"",
    //     assentos:[],
    //     nome:"",
    //     cpf:"",
    // })

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />}></Route>
                <Route path="/sessoes/:idFilme" element={<Schedule/>}></Route>
                <Route path="/showtimes/:idSessao" element={<Seats setSubmit={setSubmit} setFinishOrder={setFinishOrder}/>}></Route>
                <Route path="/finalizado" element={<CompletedOrder submit={submit}/>}></Route>
            </Routes>
        </BrowserRouter>

    );
}