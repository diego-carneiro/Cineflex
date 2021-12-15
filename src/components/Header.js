import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {

    return (


        <TopBar>
            <Link to="/">
                <p>CINEFLEX</p>
            </Link>
        </TopBar>


    );
}

/*::::: STYLES :::::*/

const TopBar = styled.div`
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

`;