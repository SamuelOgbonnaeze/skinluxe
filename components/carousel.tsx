import Image from "next/image";

const Carousel = () => {
    return (
        <div className="relative w-full h-[629px] mb-[86px]">


            <Image
                src="/hero.png"
                alt="hero"
                width={1440}
                height={753}
                className="absolute w-full h-full object-cover inset-0 z-0"
            />

            {/* Overlay image */}
            <Image
                src="/Rec_4.png"
                alt="Overlay"
                layout="fill"
                className="absolute object-cover inset-0 z-10"
            />
           <div className="relative w-full h-full flex flex-col items-center justify-center z-20 text-white text-center gap-y-6">
                <p className="text-[44px] font-openSans leading-[62px] font-bold">Unlock Your Natural Glow</p>
                <div className="w-[184] border-2 py-2 px-4 border-white  ">
                    <p className="line-through font-openSans font-normal text-[16px] leading-[28px]">Know More</p>
                </div>
            </div>
            
        </div>

    );
}

export default Carousel;