const FishingBottom = () => {
    return(
        <>
        <div className="container w-full">
                    <h2 class="font-serif m-16 md:text-3xl md:ml-28 md:my-40 lg:text-5xl tracking-wider lg:ml-28 lg:my-40">NO3 Fishing Spot</h2>
                </div>
                <div className=" w-11/12 md:flex md:gap-20 lg:flex lg:gap-20 lg:ml-20">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26820.343361569732!2d129.72224109914725!3d32.83087386300205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356ab35d64341695%3A0xca2c9410909c2056!2z44CSODUxLTIyMDQg6ZW35bSO55yM6ZW35bSO5biC5LiJ6YeN55S6!5e0!3m2!1sja!2sjp!4v1708070309820!5m2!1sja!2sjp"
                className="mx-10 md:w-6/12 md:mt-12"
                width="300"
                height="450"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                title="map"
                ></iframe>
                    <div className="w-11/12">
                        <h3 className="font-serif ml-16 mt-12 md:text-3xl md:ml-5 lg:text-3xl">三重</h3>
                        <p className="ml-16 mt-12 w-10/12 font-serif md:leading-9 md:ml-5 lg:text-xl lg:leading-10">
                        長崎県長崎市三重は、海に面した街で、釣り場が豊富です。
                        三重で釣れる魚は、アジ、イカ、カサゴなどです。<br/>
                        三重で釣りの魅力は、豊富な魚種と、海の景色を楽しみながら釣りができることです。
                        </p>
                    </div>
                </div>
                <div className="container w-11/12 ml-5 md:ml-5 lg:ml-24">
                    <h4 className="mt-12 mb-20 text-xl ml-12 md:mt-40 md:ml-5 md:text-4xl lg:ml-2">釣果</h4>
                    <div className="w-11/12  gap-10 ml-12  md:flex lg:flex  lg:ml-5">
                        <img src="./image/img011.jpg" class="mb-20 w-10/12 md:w-1/3 " />
                        <img src="./image/img012.jpg" class="mb-20 w-10/12 md:w-1/3 " />
                        <img src="./image/img013.jpg" class="mb-20 w-10/12 md:w-1/3" />
                    </div>
                </div>
        </>
    );
}
export default FishingBottom;