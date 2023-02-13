import { createContext, useState } from "react";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonContextProvider = (props) => {
    const [pkmInfo, setpkmInfo] = useState({hasData:false});
    const [isLoading, setIsLoading] = useState(false);

    async function getPkmInfo(pokemon){
        setIsLoading(true);
        try{
            const pokemonInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const pokemonSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);

            setpkmInfo({
                pokemon:pokemonInfo.data,
                specie:pokemonSpecies.data,
                hasData:true,
                css_color:pokemonInfo.data.types[0].type.name
            });
        } catch {
            setpkmInfo({error:'pokemon not found'});
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <PokemonContext.Provider
            value={{
                setpkmInfo,
                pkmInfo,
                isLoading,
                getPkmInfo }}
        >
            {props.children}
        </PokemonContext.Provider>
    );
};
