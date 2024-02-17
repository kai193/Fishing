
const FishingTop = () => {
    return (
        <>
            <div className="container w-full">
                <h2 class="font-serif m-16 md:text-3xl md:ml-28 md:my-40 lg:text-5xl tracking-wider lg:ml-28 lg:my-40">NO1 Fishing Spot</h2>
            </div>
            <div className=" w-11/12 md:flex md:gap-20 lg:flex lg:gap-20 lg:ml-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26859.784217884302!2d129.7502392487981!3d32.70005601650403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35154ef4345118b1%3A0x9d8cb908220f9c73!2z44CSODUxLTEyMDEg6ZW35bSO55yM6ZW35bSO5biC5LyK546L5bO255S6!5e0!3m2!1sja!2sjp!4v1708068323660!5m2!1sja!2sjp"
            className="mx-10 md:w-6/12 md:mt-12"
            width="300"
            height="450"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            title="map"
        ></iframe>
                <div className="w-11/12">
                    <h3 className="font-serif ml-16 mt-12 md:text-3xl md:ml-5 lg:text-3xl">伊王島</h3>
                    <p className="ml-16 mt-12 w-10/12 font-serif md:leading-9 md:ml-5 lg:text-xl lg:leading-10">
                        豊かな自然と多様な魚種が魅力の釣りスポットです。<br/>
                        伊王島港ターミナル周辺：サビキ釣りでアジやメバル、サビキ釣りでアジやメバル、投げ釣りでキスが狙えます。<br/>
                        高島周辺：磯釣りでクロやグレ、ルアー釣りでヒラマサや青物などが釣れます。
                        伊王島大橋周辺：サビキ釣りでアジやメバル、夜釣りでアオリイカが狙えます。
                    </p>
                </div>
            </div>
            <div className="container w-11/12 ml-5 md:ml-5 lg:ml-24">
                <h4 className="mt-12 mb-20 text-xl ml-12 md:mt-40 md:ml-5 md:text-4xl lg:ml-2">釣果</h4>
                <div className="w-11/12  gap-10 ml-12  md:flex lg:flex lg:ml-2">
                    <img src="./image/img002.jpg" class="mb-20 w-10/12 md:w-1/3" alt="イカ" />
                    <img src="./image/img004.jpg" class="mb-20 w-10/12 md:w-1/3" alt="イカ" />
                    <img src="./image/img009.jpg" class="mb-20 w-10/12 md:w-1/3" alt="ブリ" />
                </div>
            </div>
        </>
    );
}
export default FishingTop;