import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const StatBar = ({progressBar, barColor}) => {
    let widthValue = {width:progressBar}
    return (
        <div className="w-full bg-gray-200 h-6 mb-5 mt-2">
            <div className={`h-6 ${barColor}`} style={widthValue}></div>
        </div>
    )
}

const PokemonStats = () => {
    const { pkmInfo } = useContext(PokemonContext);
    let totalStats = 0;
    pkmInfo.pokemon.stats.map((statInfo) => {
        totalStats += statInfo.base_stat;
    });

    return (
        <section className="pokemonStats lg:order-1 lg:col-span-7 lg:h-52 lg:my-auto  lg:w-full">
            <p
            className={`w-full mb-2 rounded-lg grow col-span-5 py-3 text-center text-white ${pkmInfo.css_color}`}>Base Stats</p>
            <div className="col-span-3">
                {pkmInfo.pokemon.stats.map((statInfo,index) => (
                    <p key={index} className="flex justify-between bg-[#a4a4a4] h-9 mb-2 mx-3 items-center text-sm">
                        {statInfo.stat.name}:
                        <span className="ml-3 pr-2">{statInfo.base_stat}</span>
                    </p>
                ))}
                <p className="py-2 px-4">
                    total:
                    <span className="ml-5">{totalStats}</span>
                </p>
            </div>
            <div className="col-span-2">
                {pkmInfo.pokemon.stats.map((statInfo, index) => (
                    <StatBar key={index} progressBar={(statInfo.base_stat*100)/totalStats+'%'}
                    barColor={statInfo.stat.name} />
                ))}
            </div>
        </section>
    );
};
export default PokemonStats;
