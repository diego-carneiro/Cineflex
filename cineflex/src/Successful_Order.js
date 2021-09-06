import { Link } from 'react-router-dom';

export default function Successful(props) {
    console.log(props.sucessoInfo)

    return (
        <div>
            <div className="interactionBox">
                <p className="successfulTitle">Pedido feito</p>
                <p className="successfulTitle">com sucesso!</p>
            </div>

            <div className="movieInfo">
                <p className="sucessTitle">Filme e sessão</p>
                <p className="sucessText">{props.sucessoInfo.filmeNome}</p>
                <p className="sucessText">{props.sucessoInfo.data} {props.sucessoInfo.horario}</p>
            </div>
            <div className="ticketInfo">
                <p className="sucessTitle">Ingressos</p>
                {props.sucessoInfo.assentos.map((seat) => <p className="sucessText"> Assento {seat}</p>)}
            </div>
            <div className="customerInfo">
                <p className="sucessTitle">Comprador</p>
                <p className="sucessText">Nome: {props.sucessoInfo.nome}</p>
                <p className="sucessText">CPF: {props.sucessoInfo.cpf}</p>
            </div>
            <Link to="/">
                <div className="bottomButton">
                    <p class="buttonText">Voltar para a home</p>
                </div>
            </Link>

        </div>

    );
}