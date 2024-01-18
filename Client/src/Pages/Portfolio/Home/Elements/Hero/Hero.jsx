import "./Css/Hero.css"
export default function Hero() {

    return(
        <div className="bg-[#222434] hero h-[110vh] w-[100%] px-[30px] flex items-center relative">

            <div className="flex-col md:w-1/2 h-auto z-20">

                <h3 className="text-[30px] font-bold text-[#0ef0ad]">¡Hola! Bienvenido a mi mundo</h3>
                <h1 className="text-[72px] font-bold text-blue-50 my-[10px]">Mi nombre es Agustin Saravia</h1>
                <p className="text-blue-50 text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="mt-[30px] inline-flex items-center button">
                    <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    Descargar CV</button>
            </div>

            <div className="StripeOne z-[19]"></div>
            <img className="absolute top-0 left-2 animations-Circle" src="../../../../../../public/Image/Portafolio/Shape/circle.png" alt=""/>
            <img className="absolute top-[30px] left-[500px] animations-Circle" src="../../../../../../public/Image/Portafolio/Shape/circle.png" alt=""/>
            <img className="absolute bottom-[50px] left-[30px] animations-Circle" src="../../../../../../public/Image/Portafolio/Shape/circle.png" alt=""/>
            <img className="absolute top-[60px] left-[60px] animations-Circle-Two" src="../../../../../../public/Image/Portafolio/Shape/circle-two.png" alt=""/>
            <img className="absolute top-[40px] left-[250px] animations-Planet-Rotation w-[60px]" src="../../../../../../public/Image/Portafolio/Shape/planet.png" alt=""/>
            <img className="absolute top-[60px] left-[180px] animations-Circle-Star" src="../../../../../../public/Image/Portafolio/Shape/start.png" alt=""/>
            <img className="absolute top-[80px] left-[400px] animations-Circle-Two" src="../../../../../../public/Image/Portafolio/Shape/start.png" alt=""/>
            <img className="absolute top-[50px] left-[350px] animations-Three" src="../../../../../../public/Image/Portafolio/Shape/circle-two.png" alt=""/>
            <img className="absolute bottom-[20px] left-[200px] w-[60px] animations-Circle-Star" src="../../../../../../public/Image/Portafolio/Shape/planet-2.png" alt=""/>
            <img className="absolute bottom-[60px] left-[100px] animations-Circle-Two" src="../../../../../../public/Image/Portafolio/Shape/start.png" alt=""/>
            <img className="absolute bottom-[90px] left-[250px] animations-Circle-Two" src="../../../../../../public/Image/Portafolio/Shape/circle-two.png" alt=""/>



            <img className="absolute top-[100px] left-[850px] animations-Circle-Two w-[450px] z-20" src="../../../../../../public/Image/Portafolio/Shape/astronauts.png" alt=""/>
            <img className="absolute top-[430px] right-[-50px] w-[300px]" src="../../../../../../public/Image/Portafolio/Shape/moon.svg" alt=""/>
            <img className="absolute top-[400px] right-[40px] animations-four w-[200px]" src="../../../../../../public/Image/Portafolio/Shape/planet-2.svg" alt=""/>

            <img className="absolute bottom-[90px] right-[250px] animations-Three" src="../../../../../../public/Image/Portafolio/Shape/circle-two.png" alt=""/>
            <img className="absolute top-[90px] right-[100px] animations-Three w-[50px]" src="../../../../../../public/Image/Portafolio/Shape/meteorite.png" alt=""/>
            <img className="absolute top-[60px] right-[180px] animations-Circle-Star" src="../../../../../../public/Image/Portafolio/Shape/start.png" alt=""/>
            <img className="absolute bottom-[60px] right-[180px] animations-Circle-Star" src="../../../../../../public/Image/Portafolio/Shape/start.png" alt=""/>
            <img className="absolute top-[200px] right-[30px] animations-Circle-Star" src="../../../../../../public/Image/Portafolio/Shape/start.png" alt=""/>
            <img className="absolute top-[300px] right-[170px] animations-Circle-Star" src="../../../../../../public/Image/Portafolio/Shape/start.png" alt=""/>
            <img className="absolute top-[500px] right-2 animations-Circle" src="../../../../../../public/Image/Portafolio/Shape/circle.png" alt=""/>
            <img className="absolute bottom-[30px] right-[300px] animations-Circle-Two" src="../../../../../../public/Image/Portafolio/Shape/circle.png" alt=""/>
            <img className="absolute top-[30px] right-[100px] animations-Circle-Two" src="../../../../../../public/Image/Portafolio/Shape/circle.png" alt=""/>
            <img className="absolute top-[180px] right-[100px] animations-Circle-Star" src="../../../../../../public/Image/Portafolio/Shape/circle-two.png" alt=""/>
            <img className="absolute bottom-[150px] right-[300px] animations-Circle-Star" src="../../../../../../public/Image/Portafolio/Shape/start.png" alt=""/>
            <img className="absolute bottom-[100px] right-[350px] animations-Circle-Star" src="../../../../../../public/Image/Portafolio/Shape/start.png" alt=""/>
            <img className="absolute top-[250px] right-[30px] animations-Circle" src="../../../../../../public/Image/Portafolio/Shape/circle.png" alt=""/>
        </div>
    )
}