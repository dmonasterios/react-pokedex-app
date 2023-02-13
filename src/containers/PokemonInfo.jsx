import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonResumeInfo from "../components/PokemonResumeInfo";
import PokedexList from "../components/PokedexList";
import PokemonStats from "../components/PokemonStats";
import {PkmMoveBtn} from "../components/PokedexBtn";
import PokedexDescription from "../components/PokedexDescription";

const PokemonInfo = () => {
    const { pkmInfo } = useContext(PokemonContext);
    return (
        <>
            <PokemonResumeInfo />
            <PokemonStats />
            <PokedexList title="Pokemon Moves" cssClassName="order-4 col-start-7 col-span-5 lg:w-full lg:h-12 lg:mt-20 lg:mb-12">
                {pkmInfo.pokemon.moves.map((moveName, index) => (
                    <PkmMoveBtn key={index} moveName={moveName.move.name} />
                ))}
            </PokedexList>
            <PokedexList title="Pokedex Description Entries" cssClassName="order-3 col-start-1 col-span-5 lg:w-full lg:h-12 lg:mt-20 lg:mb-12">
                <PokedexDescription/>
            </PokedexList>
        </>
    );
};

export default PokemonInfo;
