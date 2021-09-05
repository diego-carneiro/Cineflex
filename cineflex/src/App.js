import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./Header"
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
                <Route path="/assentos/:idSessao">
                    {<Seats /> }
                </Route>
            </Switch>
        </BrowserRouter>
    );
}