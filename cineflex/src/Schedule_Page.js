import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Footer from "./Footer";

export default function Schedule() {

    const [id, setId] = useState([]);
    const {
        idFilme,
    } = useParams();

    const [footerInfo, setFooterInfo] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idFilme}/showtimes`);

        promise.then(response => {
            console.log(response.data)
            setId([...response.data.days])
            setFooterInfo(response.data)
            console.log(footerInfo)
        })

    }, []);

    return (
        <div>
            <div className="interactionBox">
                <h1 className="interaction">Selecione o horário</h1>
            </div>
            <div className="scheduleBox">
                {id.map((data) =>
                    <div>
                        <p className="date">{data.weekday} - {data.date}</p>

                        {data.showtimes.map((horario) =>
                            <Link to={`/assentos/${horario.id}`}>
                                <div className="sessions">
                                    <p class="buttonText">{horario.name}</p>
                                </div>
                            </Link>
                        )}
                    </div>

                )}
            </div>
            <Footer>
                <div>
                    <img className="footerImg" src={footerInfo.posterURL}/>
                    <p className="footerTitle">{footerInfo.title}</p>
                </div>
            </Footer>
        </div>
    );
}