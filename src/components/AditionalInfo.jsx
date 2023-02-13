import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const AditionalInfo = (props) => {
    const { pkmInfo } = useContext(PokemonContext);
    return (
        <div className={`${props.cssClassName} mt-2 rounded-lg mx-3 ${pkmInfo.css_color}`}>
            <p className="mr-4 text-base p-2 text-center text-white w-full">{props.title}</p>
            <div className="bg-slate-100 align-middle text-center space-x-6 space-y-1 p-2 rounded-lg">
                {props.children}
            </div>
        </div>
    );
}

export default AditionalInfo;