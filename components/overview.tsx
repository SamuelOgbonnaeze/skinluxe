import Image from "next/image";


const Overview = () => {
    return (
        <div className="px-[272px]">
            <div className="  ">
                <div className="flex flex-col items-center mx-auto text-center gap-y-2">
                    <p className="text-[#720439] font-openSans font-semibold text-[24px] leading-[33px] ">Products</p>
                    <p className="text-[#1E1E1E] font-openSans font-bold text-[44px] leading-[61px]  ">Glow In Abundance</p>
                </div>
                <div className="mt-6 w-full ">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <Image
                                src="/gift-1.png"
                                alt=""
                                width={256}
                                height={342}
                                className="fill"
                            />
                            <p className="mt-4 text-center text-[18px] leading-[32px] font-openSans font-normal ">Men Skin Care</p>
                        </div>
                        <div className="">
                            <Image
                                src="/gift-2.png"
                                alt=""
                                width={256}
                                height={342}
                                className="fill"
                            />
                            <p className="mt-4 text-center text-[18px] leading-[32px] font-openSans font-normal ">Women Skin Care</p>
                        </div>
                        <div className="">
                            <Image
                                src="/gift-3.png"
                                alt=""
                                width={256}
                                height={342}
                                className="fill"
                            />
                            <p className="mt-4 text-center text-[18px] leading-[32px] font-openSans font-normal ">Gifts & Sets</p>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    );
}

export default Overview;