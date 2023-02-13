import pokeball from "../assets/pokeball.svg"

const LoadingScreen =  () => {

    return(
        <section className="text-center grid place-items-center h-screen lg:w-full col-span-full">
            <div className="w-full">
                <img src={pokeball} className="animate-bounce mx-auto mb-10 w-72" alt="loading pokeball"/>
                <p className="w-full text-4xl font-press-start">Loading</p>
            </div>
        </section>
    )

}

export default LoadingScreen;