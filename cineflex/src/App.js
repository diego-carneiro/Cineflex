import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./css/reset.css";
import "./css/styles.css";
import Header from "./Header";
import Front_Page from "./Front_Page";
import Schedule from "./Schedule_Page";
import Seats from "./Seats_Page";
import Successful from './Successful_Order';
import { useState } from 'react';

export default function App() {

    const [sucessoInfo, setSucessoInfo] = useState({
        
        filmeNome: "",
        data:"",
        horario:"",
        assentos:[],
        nome:"",
        cpf:"",
    })
    
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Front_Page />
                </Route>
                <Route path="/sessoes/:idFilme" exact>
                    <Schedule />
                </Route>
                <Route path="/assentos/:idSessao" exact>
                    <Seats setSucessoInfo = {setSucessoInfo}/> 
                </Route>
                <Route path="/sucesso" exact>
                    <Successful sucessoInfo = {sucessoInfo}/> 
                </Route>
            </Switch>
        </BrowserRouter>
    );
}