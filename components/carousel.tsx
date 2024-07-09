import Image from "next/image";


const Carousel = () => {
    return (
        <div className="relative w-full h-[195px] md:h-[400px] lg:h-[629px] mb-[83px]">


            <Image
                src="/hero.png"
                alt="hero"
                width={1440}
                height={753}
                className="absolute w-full md:w-[1000px] h-[195px] md:h-[400px] lg:w-full lg:h-full object-cover inset-0 z-0"
            />

            {/* Overlay image */}
            <Image
                src="/Rec_4.png"
                alt="Overlay"
                width={1440}
                height={753}
                className="absolute w-full md:w-[1000px] h-[195px] md:h-[400px] lg:w-full lg:h-full object-cover inset-0 z-10"
            />
            <div className="relative w-full h-full flex flex-col items-center justify-center z-20 text-white text-center gap-y-1">
                <p className="text-[16px] md:text-[24px] lg:text-[44px] font-openSans leading-[22px] md:leading-[36px] lg:leading-[62px] font-bold">Unlock Your Natural Glow</p>

                <div className="  w-[319px] md:[522px] lg:w-[682px] lg:py-1 lg:px-4 ">
                    <p className=" font-openSans font-normal text-[8px] lg:text-[16px] leading-[14px] lg:leading-[28px]">Discover the power of your skin with Skinluxe. Our natural skincare products are meticulously crafted with botanical extracts and nourishing oils to enhance your skin&apos;s natural radiance</p>
                </div>

            </div>

        </div>

    );
}

export default Carousel;