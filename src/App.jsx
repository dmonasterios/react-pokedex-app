import { useContext } from "react";
import { PokemonContext } from "./context/PokemonContext"
import FormSearch from "./components/FormSearch";
import LoadingScreen from "./components/LoadingScreen";
import Container from "./containers/Container";

function App() {
    const { isLoading } = useContext(PokemonContext);
    return (
        <>
            <FormSearch />
            {isLoading? <LoadingScreen/>:<Container/>}
        </>
    );
}

export default App;
