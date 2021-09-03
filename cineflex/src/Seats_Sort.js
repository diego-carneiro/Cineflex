export default function Seats_Sort(props) {

    const { seatNumber } = props;

    return (
        <div className="seatsPosition available">{seatNumber}</div>
    );
}