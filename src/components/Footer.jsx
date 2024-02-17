const Footer = () => {
    return (
        <>
            <div className="bg-sky-300 text-white py-12  md:flex md:flex-col md:items-center md:text-center md:mt-20 ">
                <nav className="inline-block text-sm  md:text-2xl font-bold leading-loose font-serif tracking-widest ml-8">
                <ul className="flex max-sm:flex-col ml-28 ">
                        <li className="inline-block text-sm md:text-lg font-bold leading-loose md:mb-4 md:p-10"><a href="#">INTRODUCTION</a></li>
                        <li className="inline-block text-sm font-bold leading-loose md:mb-4 md:p-10"><a href="#">IOZIMA SPOT</a></li>
                        <li className="inline-block text-sm md:text-lg font-bold leading-loose md:mb-4 md:p-10"><a href="#">NOMOZAKI SPOT</a></li>
                        <li className="inline-block text-sm  md:text-lg font-bold leading-loose md:mb-4 md:p-10"><a href="#">MIE SPOT</a></li>
                    </ul>
                    <h3 className="text-emerald-600 text-sm ml-16 mt-3  md:text-2xl font-bold ">NAGASAKI FISHING SPOT</h3>
                </nav>
            </div>
        </>
    );
}
export default Footer;