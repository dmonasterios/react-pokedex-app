import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const FormSearch = () => {
    const [pkmSearch, setPkmSearch] = useState('');
    const { getPkmInfo} = useContext(PokemonContext);

    function handleSubmit(e)
    {
        e.preventDefault();
        getPkmInfo(pkmSearch.toLowerCase());
        setPkmSearch('');
    }

    return(
        <form onSubmit={handleSubmit}
            className='form lg:min-w-[750px]'>
            <input
                type="text"
                name="search_pkmInfo"
                className="bg-gray-200 p-2 mb-2 mx-auto"
                onChange={(e) => {
                    setPkmSearch(e.target.value);
                }}
                value={pkmSearch}
                autoFocus
            />
            <input className={`formBtn ${pkmSearch ? "formBtnEnabled hover:formBtnHover" : "formBtnDisabled"}`}
            type="submit" value="Buscar"
            disabled={pkmSearch ? "" : "disabled"}
            />
        </form>
    )
}

export default FormSearch;