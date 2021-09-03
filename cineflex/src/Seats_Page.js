import Seats_Sort from "./Seats_Sort"

const numbers = [
    { seatNumber: '01' }, { seatNumber: '02' }, { seatNumber: '03' }, { seatNumber: '04' }, { seatNumber: '05' }, { seatNumber: '06' }, { seatNumber: '07' }, { seatNumber: '08' }, { seatNumber: '09' }, { seatNumber: '10' }, { seatNumber: '11' }, { seatNumber: '12' }, { seatNumber: '13' }, { seatNumber: '14' }, { seatNumber: '15' }, { seatNumber: '16' }, { seatNumber: '17' }, { seatNumber: '18' }, { seatNumber: '19' }, { seatNumber: '20' }, { seatNumber: '21' }, { seatNumber: '22' }, { seatNumber: '23' }, { seatNumber: '24' }, { seatNumber: '25' }, { seatNumber: '26' }, { seatNumber: '27' }, { seatNumber: '28' }, { seatNumber: '29' }, { seatNumber: '30' }, { seatNumber: '31' }, { seatNumber: '32' }, { seatNumber: '33' }, { seatNumber: '34' }, { seatNumber: '35' }, { seatNumber: '36' }, { seatNumber: '37' }, { seatNumber: '38' }, { seatNumber: '39' }, { seatNumber: '40' }, { seatNumber: '41' }, { seatNumber: '42' }, { seatNumber: '43' }, { seatNumber: '44' }, { seatNumber: '45' }, { seatNumber: '46' }, { seatNumber: '47' }, { seatNumber: '48' }, { seatNumber: '49' }, { seatNumber: '50' },
];

export default function Seats(props) {

    return (
        <div>
            <div className="seatsContainer">
                <div className="interactionBox">
                    <h1 className="interaction">Selecione o(s) assento(s)</h1>
                </div>
                <div className="seatsBox">
                    {numbers.map((data) => {
                        return <Seats_Sort seatNumber={data.seatNumber} />
                    })}
                </div>
            </div>
            <div className="statusBox">
                <div className="seatStatus selected"></div>
                <div className="seatStatus available"></div>
                <div className="seatStatus unavailable"></div>
            </div>

            <div className="purchaseBox">
                <p class="inputTitle">Nome do comprador:</p>
                <input placeholder="Digite seu nome..." id="input" />
                <p class="inputTitle">CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." id="input" />
            </div>
            <div className="buyingButton">
                <p class="buttonText">Reservar assento(s)</p>
            </div>


        </div>
    );
}