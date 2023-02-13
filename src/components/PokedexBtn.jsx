export const PkmTypesBtn = ({typeName}) => {


    return (
        <button className={`${typeName} text-center rounded-2xl text-white h-7 w-24 font-source-code`}>
            {typeName}
        </button>
    );
};

export const PkmAbilitiesBtn = ({abilityName}) => {
    return (
        <button className="bg-blue-200 font-source-code shrink-0 h-7">
            {abilityName}
        </button>
    )
}

export const PkmMoveBtn = ({moveName}) => {
    return (
        <button className="bg-gray-300 hover:bg-gray-400 p-4 w-full my-1 font-source-code">
            {moveName}
        </button>
    )
}