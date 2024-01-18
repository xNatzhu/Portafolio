import "../Hero/Css/Hero.css"
export default function AboutMe() {
    return(
        <div className="bg-[#161829] w-[100%] px-[30px] flex pt-[100px] pb-[50px] relative">
            <div className="StripeTwo"></div>
            <img className="absolute top-[250px] right-[30px] animations-Circle" src="../../../../../../public/Image/Portafolio/Shape/circle.png" alt=""/>
            <img className="absolute top-[10px] right-[100px] animations-Circle" src="../../../../../../public/Image/Portafolio/Shape/circle.png" alt=""/>
            <img className="absolute top-[20px] right-[200px] animations-Circle-Star" src="../../../../../../public/Image/Portafolio/Shape/circle-two.png" alt=""/>
            <div className="w-1/2   z-10 flex justify-center">
            <img className="w-[400px] h-auto rounded-[30px]" src="../../../../../../public/Image/Portafolio/profile-2.jpg" alt=""/>
            </div>
            <div className="flex flex-col w-1/2 z-10">
                <h6 className="text-[20px] font-bold text-[#0ef0ad]">Acerca De Mi</h6>
                <h2 className="text-[45px] font-bold text-blue-50 leading-[60px] my-[20px]">Un Viaje Personal Por El Espacio De <span className="text-[#0ef0ad]">Mi Vida</span></h2>
                
                <p className="text-blue-50 text-[20px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                <div className="flex gap-[20px] mt-[30px]">
                    <button className="button">
                        Contactame
                    </button>
                    <button className="button-two">
                        Linkedin
                    </button>
                </div>
            </div>

        </div>  
    )
}