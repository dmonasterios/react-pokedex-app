import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import AditionalInfo from "./AditionalInfo";
import { PkmTypesBtn, PkmAbilitiesBtn } from "./PokedexBtn";

const PokedexScreen = () =>  {
    const {pkmInfo} = useContext(PokemonContext);
    console.log(pkmInfo);
    return(
        <img className="col-span-2 w-40 h-40 bg-slate-100 mx-auto rounded-md"
        src={pkmInfo.pokemon.sprites.front_default}
        alt={`${pkmInfo.pokemon.name} sprite`}
    />
    )
}

const PokemonName = () => {
    const { pkmInfo } = useContext(PokemonContext);

    let pkmDescription = "";
    pkmInfo.specie.genera.forEach((description) => {
        if (description.language.name === "en") {
            pkmDescription = description.genus;
        }
    });

    return (
        <>
            <div
                className={`col-span-2 w-full flex py-2 px-2 mb-1 items-center ${pkmInfo.css_color}`}
            >
                <h2 className="text-center h-10 w-[80%] text-3xl text-white">
                    {pkmInfo.pokemon.name}
                </h2>
                <p className="bg-white rounded-lg h-12 w-[20%] flex items-center justify-center font-press-start text-lg">
                    #{pkmInfo.pokemon.id}
                </p>
            </div>
            <p
                className={`col-span-2 w-full text-white text-sm text-center mb-4 rounded-lg  ${pkmInfo.css_color}`}
            >
                {pkmDescription}
            </p>
        </>
    );
};

const PokemonResumeInfo = () => {
    const { pkmInfo } = useContext(PokemonContext);
    let hasHiddenAbility = pkmInfo.pokemon.abilities.length > 1;

    return (
        <aside className="resumeInfo lg:col-start-9 lg:col-span-3 lg:w-full lg:order-2">
            <PokemonName/>
            <PokedexScreen/>
            <AditionalInfo title="Types" cssClassName="col-span-2">
                {pkmInfo.pokemon.types.map((pkmType, index) => (
                        <PkmTypesBtn key={index} typeName={pkmType.type.name} />
                    ))}
            </AditionalInfo>
            <AditionalInfo title={hasHiddenAbility?'Abilities':'Ability'} cssClassName="col-span-2">
                {pkmInfo.pokemon.abilities.map((pkmabilities, index) => (
                        <PkmAbilitiesBtn key={index} abilityName={pkmabilities.ability.name} />
                    ))}
            </AditionalInfo>
            <AditionalInfo title="Height" cssClassName="col-span-1">
                {`${pkmInfo.pokemon.height / 10} Mts`}
            </AditionalInfo>
            <AditionalInfo title="Weight" cssClassName="col-span-1">
                {`${pkmInfo.pokemon.weight / 10} Kgs`}
            </AditionalInfo>
        </aside>
    )
}

export default PokemonResumeInfo;