import Seat from "./Seat";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SeatsSelection(props) {

    return (
        <Container>
            <SeatsContainer>
                {props.items.map((info, index) => (

                    <Seat >
                        <p>{info.name}</p>
                    </Seat>
                ))}
            </SeatsContainer>
            <Input placeholder="Digite seu nome" type="text" name="name" />
            <Input placeholder="Digite seu nome" type="text" name="cpf" />
            <Link to={"/finalizado"}>
                <OrderButton>
                    <p>Reservar assento(s)</p>
                </OrderButton>
            </Link>
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

    * {
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

`;
const SeatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
const Number = styled.p`
 p {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }
`
const OrderButton = styled.div`
    width: 225px;
    height: 42px;
    margin-top: 10px;
    background-color: #E8833A;
    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-size: 18px;
        color: #FFF;
    }
`;
