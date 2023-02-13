import { useState, useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
const PokedexList = (props) => {
    const { pkmInfo } = useContext(PokemonContext);
    const [isActive, setIsActive] = useState(false);

    return (
        <section className={`mb-9 rounded-lg ${pkmInfo.css_color} mx-auto max-w-[950px] ${props.cssClassName}`}>
            <p
                onClick={() => setIsActive(!isActive)}
                className={` mr-4 text-base p-2 text-center text-white w-full`}
            >
                {props.title}
            </p>
            <div
                className={`h-96 overflow-y-scroll scroll-smooth  bg-slate-100  p-2 rounded-b-lg ${
                    isActive ? "block" : "hidden"
                }`}
            >
                {props.children}
            </div>
        </section>
    );
};

export default PokedexList;
