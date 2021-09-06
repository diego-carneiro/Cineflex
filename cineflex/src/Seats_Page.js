import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

export default function Seats(props) {

    const initialValue = {

        name: '',
        cpf: '',
    }

    const [customer, setCustomer] = useState(initialValue)
    console.log(customer);

    function onChange(ev) {
        const { name, value } = ev.target;
        console.log({ name, value })

        setCustomer({ ...customer, [name]: value });
        console.log(customer);
    }

    function onSubmit(ev) {
        ev.preventDefault();

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many`)

        promise.then((response) => {


        });
    }


    const [id, setId] = useState([]);
    const {
        idSessao,
    } = useParams();
    const [selected, setSelected] = React.useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`);

        promise.then(response => {
            setId([...response.data.seats])
            setSelected(response.data.seats.map((seat) => {
                if (seat.isAvailable === false) {
                    return "unavailable"
                } else {
                    return "available"
                }
            }))
        })
    }, []);

    function selectedSeat(index) {
        console.log(index)
        if (selected[index] === "available") {
            selected[index] = "selected";
            setSelected([...selected]);
        } else if (selected[index] === "unavailable") {
            alert("A poltrona está ocupada");
        } else {
            selected[index] = "available"
            setSelected([...selected]);
        }
    }
    function reservarAssento() {

        const assentosSelect = [];
        console.log(assentosSelect)

        selected.filter((status, index) => {
            if (status === "selected") {
                assentosSelect.push(index);
                return true;
            } else {
                return false;
            }
        });
    }

    return (
        <div>
            <div className="seatsContainer">
                <div className="interactionBox">
                    <h1 className="interaction">Selecione o(s) assento(s)</h1>
                </div>
                <div className="seatsBox">
                    {id.map((data, index) =>
                        <div className={`seatsPosition ${selected[index]}`} onClick={() => selectedSeat(index)} >{data.name}
                        </div>
                    )}
                </div>
            </div>
            <div className="statusBox">
                <div className="seatStatus selected"></div>
                <div className="seatStatus available"></div>
                <div className="seatStatus unavailable"></div>
            </div>

            <div className="purchaseBox">
                <label class="inputTitle">Nome do comprador:</label>
                <input placeholder="Digite seu nome..." id="name" name="name" type="text" onChange={onChange} />
                <p class="inputTitle">CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." id="cpf" name="cpf" type="text" onChange={onChange} />
            </div>
            <Link to="/sucesso">
                <div className="bottomButton" onClick={reservarAssento}>
                    <p class="buttonText">Reservar assento(s)</p>
                </div>
            </Link>
        </div>
    );
}