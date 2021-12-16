import Footer from "../components/Footer";
import Header from "../components/Header";
import Interaction from "../components/Interaction";
import SeatsSelection from "../components/SeatsSelection";

export default function Seats() {
    
    return (
        <>  
            <Header />
            <Interaction title={"Selecione o(s) assento(s)"}/>
            <SeatsSelection />
            {/* <Footer/> */}
        </>
    );
}