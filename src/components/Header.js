import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {

    return (

        <Container>
            <Link to="/">
                <p>CINEFLEX</p>
            </Link>
        </Container>

    );
}

/*::::: STYLES :::::*/

const Container = styled.div`
    width: 100vw;
    height: 67px;
    background-color: #C3CFD9;

    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 34px;
        color: #E8833A;
    }
    * {
        text-decoration: none;
    }

    position: fixed;
    top: 0;
`;