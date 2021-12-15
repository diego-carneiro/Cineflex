import Header from "../components/Header";
import Interaction from "../components/Interaction";
import MoviesSection from "../components/MoviesSelection"

export default function FrontPage() {

    return (
        <>
            <Header />
            <Interaction title={"Selecione o filme"}/>
            <MoviesSection />
        </>

    );
}

