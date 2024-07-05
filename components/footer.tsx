import Image from "next/image";

const Footer = () => {
    return (
        <div className=" w-full">
            <div className="w-full ">
                {/* Upper layer */}
                <div className="flex bg-[#FBEFF2] items-center justify-between py-6 px-[108px] w-full text-[#79043C] ">
                    <div className="flex items-center justify-between ">
                        <Image src="/bunny vector.png"
                            alt="bunny vector"
                            width={40}
                            height={40}
                        />
                        <p className=" ml-4 font-normal text-[16px] leading-[28px] " >No Tests On Animals</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <Image src="/leaf vector.png"
                            alt="leaf vector"
                            width={40}
                            height={40}
                        />
                        <p className=" ml-4 font-normal text-[16px] leading-[28px] " >No Animal-Derived Ingredients</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <Image src="/wheat vector.png"
                            alt="wheat vector"
                            width={40}
                            height={40}
                        />
                        <p className=" ml-4 font-normal text-[16px] leading-[28px] " >No Gluten, Or Gluten Byproducts</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <Image src="/recycle vector.png"
                            alt="recycle vector"
                            width={40}
                            height={40}
                        />
                        <p className=" ml-4 font-normal text-[16px] leading-[28px] " >Recyclable Packaging</p>
                    </div>
                </div>
                {/* Lower layer */}
                <div className="bg-[#3D021E] flex items-center justify-between w-full px-[108px] py-[80px] text-white ">
                    {/* First half */}
                    <div className="flex flex-col ">
                        oiwji
                    </div>
                    <div>
                        nsin
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;