import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./css/reset.css";
import "./css/styles.css";
import Header from "./Header";
import Front_Page from "./Front_Page";
import Schedule from "./Schedule_Page";
import Seats from "./Seats_Page";
import Successful from './Successful_Order';

export default function App() {

    return (
        <BrowserRouter>
            <Header />
            {/* <Successful  /> */}
            <Switch>
                <Route path="/" exact>
                    <Front_Page />
                </Route>
                <Route path="/sessoes/:idFilme" exact>
                    <Schedule />
                </Route>
                <Route path="/assentos/:idSessao" exact>
                    {<Seats /> }
                </Route>
                <Route path="/sucesso" exact>
                    {<Successful /> }
                </Route>
            </Switch>
        </BrowserRouter>
    );
}