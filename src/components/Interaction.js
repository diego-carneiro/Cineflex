import styled from "styled-components";

export default function Interaction(props){

    if (props.title === "Pedido feito com sucesso!"){
        return <>
        <TextBox>
            <p>{props.title}</p>
             
        </TextBox>
     </>
    } 

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
    margin-top: 67px;

    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        color: ${props => props.title === "Pedido feito com sucesso!" ? "#247A6B" : "#293845"};
    }

`;