import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Description = ({ gameVersion, flavorText }) => {
    return (
        <article className=" bg-gray-300 sm:flex items-center my-3">
            <p className="sm:max-2xl:ml-4 bg-gray-200 py-2 text-center sm:min-w-[150px]">{gameVersion}</p>
            <p className="sm:max-2xl:ml-4 py-2 w-full">{flavorText}</p>
        </article>
    );
};

const PokedexDescription = () => {
    const { pkmInfo } = useContext(PokemonContext);
    const pkmDescriptions = [];

    pkmInfo.specie.flavor_text_entries.map((description) => {
        if (description.language.name === "en") {
            pkmDescriptions.push({
                flavor_text: description.flavor_text,
                version: description.version.name,
            });
        }
    });

    return pkmDescriptions.map((description, index) => (
        <Description
            key={index}
            gameVersion={description.version}
            flavorText={description.flavor_text}
        />
    ));
};

export default PokedexDescription;
