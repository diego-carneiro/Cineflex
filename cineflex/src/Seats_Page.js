import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import Footer from "./Footer";

export default function Seats(props) {

    const initialValue = {

        name: '',
        cpf: '',
    }

    let history = useHistory();

    const [customer, setCustomer] = useState(initialValue)

    const [footerInfo, setFooterInfo] = useState([]);

    function onChange(ev) {
        const { name, value } = ev.target;
        console.log({ name, value })

        setCustomer({ ...customer, [name]: value });
    }

    const [id, setId] = useState([]);
    const {
        idSessao,
    } = useParams();
    const [selected, setSelected] = React.useState([]);
    
    const [data, setData] = useState(null);
    console.log(data);

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
            setData(response.data);
        })
        promise.catch((error) => alert(error))
    }, []);


    function selectedSeat(index) {
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
       
        selected.filter((status, index) => {
            if (status === "selected") {
                assentosSelect.push(id[index].id);
                return true;
            } else {
                return false;
            }
        });

        const infos =
        {
            ids: assentosSelect,
            name: customer.name,
            cpf: customer.cpf,
        }

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many`, infos)

        promise.then((response) => {
            
            props.setSucessoInfo({
                filmeNome: data.movie.title,
                data: data.day.date,
                horario: data.name,
                assentos: selected.map((seat, i) => seat === "selected" ? i + 1 : -1 ).filter((seat) => seat > -1),
                nome:customer.name,
                cpf:customer.cpf,
            })

            history.push("/sucesso");

        });
        promise.catch((error) => alert(error))
    }

    if(!data){
        return (
            <p>Carregando</p>
        );
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
                <div className="seatStatus selected">
                    <h1 className="statusClass">Selecionado</h1>
                </div>
                <div className="seatStatus available">
                    <h1 className="statusClass">Disponível</h1>
                </div>
                <div className="seatStatus unavailable">
                    <h1 className="statusClass">Indisponível</h1>
                </div>

            </div>

            <div className="purchaseBox">
                <label class="inputTitle">Nome do comprador:</label>
                <input placeholder="Digite seu nome..." id="name" name="name" type="text" onChange={onChange} />
                <p class="inputTitle">CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." id="cpf" name="cpf" type="text" onChange={onChange} />
            </div>
           
                <div className="bottomButton" onClick={reservarAssento}>
                    <p class="buttonText">Reservar assento(s)</p>
                </div>
                <Footer>
                    <div className="">
                        <img className="footerImg" src={data.movie.posterURL} />
                    </div>
                    <div>
                        <h1 className="footerTitle">{data.movie.title}</h1>
                    </div> 
            </Footer>
        </div>
    );
}