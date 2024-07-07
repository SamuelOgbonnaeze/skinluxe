import Image from "next/image"
import Link from "next/link"

export const ProductCard = () => {
    return (
        <div className="w-[297px] h-[540px] bg-white border border-[#EDEDED] hover:scale-105 transition-smooth duration-300 hover:shadow-xl " >
            <div className="relative">
                <Image
                    src="/product_image.png"
                    alt=""
                    width={300}
                    height={384}
                    className=" object-cover"
                />
                <Image
                    src="/heart-icon.png"
                    alt=""
                    width={24}
                    height={24}
                    className="absolute top-2 right-2 z-10"
                />
            </div>
            {/* Product name */}
            <div className="my-[13px]">
                <p className="w-[245px] font-bold font-openSans text-[#720439] text-[20px] leading-[28px] ml-[18px] ">Skinluxe Glow Cream XG</p>
            </div>
            <hr className="border-[0.5px] border-[#D1D1D4] " />
            {/* Price */}
            <div className="mt-[7px] mb-[11px] ml-[18px]">
                <p className="w-[245px] font-bold font-openSans text-[20px] leading-[28px]  "><span className="pr-2">₦</span> 76,000 </p>
            </div>
            <hr className="border-[0.5px] border-[#D1D1D4] " />
            {/* Review */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-y-2 ml-[17px]">
                    <p className="font-openSans w-full font-semibold text-[10px] text-[#88898F] text-left leading-[14px] ">Supplied by: <span className="font-normal">Jenny&apos;s Glow</span></p>
                    <div className="flex items-center gap-x-1">
                        <Image
                            src="/reviews.png "
                            alt=""
                            width={92}
                            height={16}
                        />
                        <p className="text-[#9B9CA1] font-openSans font-normal text-[10px] leading-[13px] ">4 Reviews</p>
                    </div>
                </div>
                <Link href="/cart">
                    <div className=" flex items-center  mt-2 mr-3">
                        <Image
                            src="/cart-icon.png"
                            alt=""
                            width={34}
                            height={34}
                        />

                    </div>
                </Link>
            </div>

        </div>

    )
}

