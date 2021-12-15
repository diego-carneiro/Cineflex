import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function ScheduleSelection() {

    const { idFilme } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promise.then(response => {
            console.log(response)
            // setItems(response.data.days);
        });
        promise.catch(error => alert(error));
    }, []);

    if (items.length === 0) {

        return (
            <Loading />
        );
    }

    return (
        <Container>
            {items.map(info => (
                <>
                    <p>{info.weekday}</p><p>{info.date}</p>
                    
                    {info.showtimes.map(hours => (
                        <Link to="/seats">
                            <HourButton>
                                <p>{hours.name}</p>
                            </HourButton>
                        </Link>
                    ))}
                </>
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
const HourButton = styled.div`
    width: 83px;
    height: 43px;
    background-color: #E8833A;

    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: #FFF;
        text-decoration: none;
    }
    * {
        text-decoration: none;
    }

`;
