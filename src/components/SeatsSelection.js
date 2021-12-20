import Seat from "./Seat";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, onChange } from "react";

export default function SeatsSelection(props) {

    const initialValue = {
        name: "",
        cpf: "",
    }

    const [customer, setCustomer] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target;

        setCustomer({ ...customer, [name]: value });
        props.setSubmit(
            {
                ids: chosen,

                name: customer.name,

                cpf: customer.cpf,
            })
    }
  

    const [chosen, setChosen] = useState([]);

    function selecionar(id) {

        const aux = [...chosen, id] 
            setChosen(aux);
            props.setSubmit(
                {
                    ids: aux,

                    name: customer.name,

                    cpf: customer.cpf,
                });
    }

    function desSeleccionar(id) {

        const filtered = chosen.filter(index => {

            if (id === index) {
                return false;
            } else {
                return true;
            }

        })
        setChosen(filtered)
        props.setSubmit(
            {
                ids: filtered,

                name: customer.name,

                cpf: customer.cpf,
            });
    }
console.log(customer);
    return (
        <Container>
            <SeatsContainer>
                {props.items.map((info, index) => (

                    <Seat setSelected={props.setSelected} id={info.id} isAvailable={info.isAvailable} items={props.items} selecionar={selecionar} desSeleccionar={desSeleccionar} >
                        <p>{info.name}</p>
                    </Seat>
                ))}
            </SeatsContainer>
            <Input placeholder="Digite seu nome..." type="text" name="name" onChange={onChange} />
            <Input placeholder="Digite seu CPF..." type="text" name="cpf" onChange={onChange} />
            <Link to={"/finalizado"}>
                <OrderButton onClick={() => props.setFinishOrder(true)}>
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
