import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import Header from "../components/Header";

export default function MoviesSelection() {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
        promise.then(response => {

            setItems(response.data);
        });
        promise.catch(error => alert(error));       
    }, []);
    
    if(items.length === 0){
        
        return (
            <>
                <Header />
                <Loading />
            </>
        );
    }

    return (
        <Container>
            {items.map(info => (
                    <Link to={`/sessoes/${info.id}`}>
                        <MovieIcon>
                            <Poster src={info.posterURL}/>
                        </MovieIcon>
                    </Link>
            ))}
        </Container>
    );
}
/*::::: STYLES :::::*/
const Container = styled.div`
    width: 100vw;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-sizing: border-box;
`;
const MovieIcon = styled.div`
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;    
`;
const Poster = styled.img`
    width: 129px;
    height: 193px;
`