import styled from "styled-components";
import { useState } from "react";

export default function Seat(props) {
    
    let seatColor = ""; 
    
    if (props.isAvailable === false){
        seatColor = "#FBE192";
    } 

    const [toggled, setToggled] = useState(false);

    const Toggle = () => {

        toggled ? setToggled(false) : setToggled(true);
        toggled ? props.desSeleccionar(props.id) : props.selecionar(props.id);
    }

    return(

        <SeatButton color={toggled} seatColor={seatColor} 
        onClick={Toggle} >
            <p>{props.children}</p>
        </SeatButton>
                    
    );
}
/*::::: STYLES :::::*/

const SeatButton = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${props => props.color ? "#8DD7CF" : props.seatColor };
    border: 1px solid #808F9D;
    border-radius: 22px;
    margin-right: 3px;
    margin-bottom: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
    }
`;
