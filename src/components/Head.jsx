const Head = () => {
    return(
        <>
         <div className="bg-sky-300 p-4 text-white  md:text-center ">
         <h3 className="text-emerald-600 text-2xl ml-10 mb-3 font-bold mt-4">NAGASAKI FISHING SPOT</h3>
                <nav className="inline-block text-2xl font-bold leading-loose font-serif tracking-widest  max-sm:flex-col ">
                    <ul className="flex  max-sm:flex-col  ml-28">
                    <li className="inline-block text-sm md:text-lg font-bold leading-loose md:mb-4 md:p-10"><a href="#INTRODUCTION">INTRODUCTION</a></li>
                        <li className="inline-block text-sm md:text-lg font-bold leading-loose md:mb-4 md:p-10"><a href="INTRODUCTION">IOZIMA SPOT</a></li>
                        <li className="inline-block text-sm md:text-lg font-bold leading-loose md:mb-4 md:p-10"><a href="./FishingMiddle.jsx">NOMOZAKI SPOT</a></li>
                        <li className="inline-block text-sm  md:text-lg font-bold leading-loose md:mb-4 md:p-10"><a href="./FishingTop.jsx">MIE SPOT</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Head;