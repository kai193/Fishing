const Concept = () => {
    return (
        <>
        <div id="INTRODUCTION">
            <div className="container w-full">
                <h1 className="font-serif m-16 md:text-3xl md:ml-28 md:my-40 lg:text-5xl tracking-wider lg:ml-28 lg:my-40">Introduction</h1>
                <div className="w-full  md:w-12/12 md:flex lg:flex">
                    <img className="w-8/12 ml-16  md:w-3/12 md:ml-20 lg:w-4/12 lg:ml-40" src="./image/fishing.png" />
                    <div className="font-serif w-full lg:ml-30 text-center">
                        <h3 className="ml-4 text-lg md:ml-5 md:text-2xl md:60 lg:text-4xl w-11/12   mt-12">釣りの魅力とは</h3>
                        <p className="ml-4 text-base leading-10 md:mt-6 md:text-lg md:ml-5 lg:mt-10 lg:text-2xl w-11/12 lg:leading-10">
                            季節によって様々な魚種が狙える<br />
                            美しい景色を眺めながら釣りを楽しめる <br />
                            初心者からベテランまで楽しめるポイントが豊富
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );

}

export default Concept;