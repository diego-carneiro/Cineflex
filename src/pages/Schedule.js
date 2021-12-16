import Header from "../components/Header";
import Interaction from "../components/Interaction";
import ScheduleSelection from "../components/ScheduleSelection";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";

export default function Schedule() {

    const { idFilme } = useParams();

    const [items, setItems] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promise.then(response => {

            setItems(response.data.days);
            setInfo(response.data)
        });
        promise.catch(error => alert(error));
    }, []);

    return (
        <>
            <Header />
            <Interaction title={"Selecione o horário"}/>
            <ScheduleSelection items={items}/>
            <Footer info={info}/>
        </>

    );
}