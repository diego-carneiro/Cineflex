import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Schedule() {

    const [id, setId] = useState([]);
    const {
        idFilme,
    } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idFilme}/showtimes`);

        promise.then(response => {
            console.log(response.data)
            setId([...response.data.days])  
        })
    }, []);

    return (
        <div>
            <div className="interactionBox">
                <h1 className="interaction">Selecione o horário</h1>
            </div>
            <div className="scheduleBox">
                {id.map((data) =>
                    <Link to={`/assentos/${data.id}`}>
                            <p className="date">{data.weekday} - {data.date}</p>
                            <div className="sessions">
                                <p class="buttonText">{data.name}</p>
                            </div>
                            <p className="date"></p>
                            <div className="sessions">
                                <p class="buttonText"></p>
                            </div>
                    </Link>
                )}
            </div>
        </div>
    );
}