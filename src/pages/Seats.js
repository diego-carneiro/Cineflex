import Footer from "../components/Footer";
import Header from "../components/Header";
import Interaction from "../components/Interaction";
import SeatsSelection from "../components/SeatsSelection";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

export default function Seats() {

    const { idSessao } = useParams();

    const [items, setItems] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => {

            setItems(response.data.seats);
            setInfo(response.data)
        });
        promise.catch(error => alert(error));
    }, []);

    if (info.length === 0) {

        return (
            <>
                <Header />
                <Loading />
            </>
        );
    }

    return (
        <>
            <Header />
            <Interaction title={"Selecione o(s) assento(s)"} />
            <SeatsSelection items={items} />
            <Footer img={info.movie.posterURL} title={info.movie.title}
                day={info.day.weekday} hour={info.name} />
        </>
    );
}