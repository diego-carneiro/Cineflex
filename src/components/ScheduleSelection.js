import styled from "styled-components";
import { Link } from "react-router-dom";


export default function ScheduleSelection(props) {


    return (
        <Container>
            {props.items.map(info => (
                <>
                    <DayHour>{info.weekday} - {info.date}</DayHour>
                    
                    <ButtonBox>
                        {info.showtimes.map(hours => (
                            <Link to={`/showtimes/${hours.id}`}>
                                <HourButton>
                                    <p>{hours.name}</p>
                                </HourButton>
                            </Link>
                        ))}
                    </ButtonBox>  
                </>
            ))}
        </Container>
    );
}
/*::::: STYLES :::::*/
const Container = styled.div`
    width: 100vw;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 117px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;

    * {
        text-decoration: none;
    }
`;
const HourButton = styled.div`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    margin-top: 22px;
    margin-bottom: 23px;
    margin-right: 10px; ;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: #FFF;
    }
 
`;
const DayHour = styled.p`
    font-family: 'Roboto', sans-serif;  
    font-size: 20px;
    color: #293845;
`;
const ButtonBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`
