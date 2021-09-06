import { Link } from 'react-router-dom';

export default function Successful(props) {

    return (
        <div>
            <div className="interactionBox">
                <p className="successfulTitle">Pedido feito</p>
                <p className="successfulTitle">com sucesso!</p>
            </div>

            <div className="movieInfo">
                <h1>Filme e sessão</h1>
                <p>.</p>
                <p>.</p>
            </div>
            <div className="ticketInfo">
                <h1>Ingressos</h1>
                <p>.</p>
                <p>.</p>
            </div>
            <div className="customerInfo">
                <p>Nome:</p>
                <p>CPF:</p>
            </div>
            <Link to="/">
                <div className="bottomButton">
                    <p class="buttonText">Voltar para a home</p>
                </div>
            </Link>

        </div>

    );
}