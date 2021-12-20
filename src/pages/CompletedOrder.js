import Header from "../components/Header";
import Interaction from "../components/Interaction";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CompletedOrder(props) {

    console.log(props)
    return (
        <Container>
            <Header/>
            <Interaction title={"Pedido feito com sucesso!"}/>


            <p>Ingressos</p>
            <p>Comprador</p>
            <p>Nome:{props.submit.name}</p>
            <p>CPF:{props.submit.cpf}</p>
            
            <Link to={"/"}>
                <HomeButton onClick={() => props.setFinishOrder(true)}>
                    <p>Voltar pra Home</p>
                </HomeButton>
            </Link>
       </Container>

    );
}
/*::::: STYLES :::::*/
const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    *{
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        color: black;
    }
`;
const HomeButton = styled.div`
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
