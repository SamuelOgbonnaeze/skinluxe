import Image from "next/image";

const CeoFeedback = () => {
    return (
        <div className="px-[109px] mb-[141px] ">
            <div className="w-[224px] flex mx-auto items-center justify-center ">
                <p className="font-openSans font-semibold text-[24px] leading-[33px] text-[#720439] ">What Our CEO Says</p>
            </div>
            <div className="mt-11 flex items-center justify-between gap-x-16 ">
                <div>
                    <Image 
                    src="/image_94.png"
                    alt="Ceo image"
                    width={496}
                    height={415}
                    className="object-cover"
                    />
                </div>
                <div className="flex flex-col  w-[650px]">
                    <p className="font-bold text-[48px] leading-[67px]  " >HUMBLE PIUS</p>
                    <p className="font-openSans font-normal text-[24px] leading-[36px] text-left ">------- we blend cutting-edge innovation with timeless elegance to create high-quality, luxurious, and sustainable cosmetic products. Our cruelty-free formulas, made from the finest ingredients, enhance your natural beauty while caring for your skin and the planet.</p>
                </div>
            </div>
        </div>
    );
}

export default CeoFeedback;