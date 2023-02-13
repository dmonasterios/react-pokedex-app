import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonInfo from "./PokemonInfo";

const Container = () => {
    const { pkmInfo } = useContext(PokemonContext);
    // Error Handleling
    if(pkmInfo.hasData === false)
    {
        return (
            <div className="col-span-full mt-10">
                <p className="text-xl text-center">React Pokedex App</p>
            </div>
        )
    }

    if(pkmInfo.pokemon === undefined){
        return(
            <div className="col-span-full mt-10">
                <p className="text-xl text-center">Pokemon not Found</p>
            </div>
        )
    }
    // Error Handleling

    return (
        <>
            <PokemonInfo/>
        </>
    )
}
export default Container;