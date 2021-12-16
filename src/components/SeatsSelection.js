import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

export default function SeatsSelection() {
    
    const { idSessao } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => {

            setItems(response.data.seats);
        });
        promise.catch(error => alert(error));
    }, []);
    
    if(items.length === 0){
        
        return (      
            <Loading />
        );
    }
    console.log(items)
    return (
        <Container>
            <SeatsContainer>
                {items.map(info => (

                    <Seat><p>{info.name}</p></Seat>

                ))} 
            </SeatsContainer>
            <Input placeholder="Digite seu nome" type="text" name="name"/>
            <Input placeholder="Digite seu nome" type="text" name="cpf"/>
        </Container>
    );

}
/*::::: STYLES :::::*/
const Container = styled.div`
    width: 100vw;
    padding-left: 24px;
    padding-right: 24px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-sizing: border-box;

`;
const SeatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const Seat = styled.div`
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 22px;
    margin-right: 3px;
    margin-bottom: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }
`;
const Input = styled.input`
    width: 327px;
    height: 51px;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    & ::placeholder{
        color: red;
    }
`;
