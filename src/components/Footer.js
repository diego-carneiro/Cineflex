import styled from "styled-components";

export default function Footer(props){

    return(
        
        <Container>
            
            {}
            <MovieIcon>
                <Poster src={props.img}/> 
            </MovieIcon>
            <MovieTitle>
                {props.title}{props.day && props.day}{props.hour && props.hour}
            </MovieTitle>

        </Container>
       
    );
    
}
const Container = styled.div`
    width: 100vw;
    height: 117px;
    border: 1px solid #9EADBA;
    box-sizing: border-box;
    padding: 22px 18px 22px 18px;
    position: fixed;
    bottom: 0;
    background: #DFE6ED;

    display: flex;
    align-items: center;

    *{
        font-family: 'Roboto', sans-serif;
    }
`;
const MovieIcon = styled.div`
    width: 64px;
    height: 89px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-right: 14px; 

    display: flex;
    align-items: center;
    justify-content: center;
`
const Poster = styled.img`
    width: 48px;
    height: 72px;
`
const MovieTitle = styled.p`
    font-size: 26px;
    color: #293845;
`