import React, { useState } from "react";
import styled from "styled-components";

export default function Interaction(props){

    return (
        <>
           <TextBox>
               <p>{props.title}</p> 
           </TextBox>
        </>
    
    );
}
/*::::: STYLES :::::*/

const TextBox = styled.div`
    width: 100vw;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        color: #293845;
    }

`;