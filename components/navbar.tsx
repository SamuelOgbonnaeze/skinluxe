import Image from "next/image";

const Navbar = () => {
    return (
        <div className="w-full py-[29px] px-[72px] ">
            <div className="w-full flex items-center justify-between ">

                {/*  */}
                <div className="" >
                    <Image
                        src="/logo.png"
                        alt=""
                        width={120}
                        height={59}
                    />
                </div>
                {/*  */}
                <div className=" flex items-center gap-x-[40px] ">
                    <p className="font-openSans font-bold text-[16px] leading-[22px] ">Women Skincare</p>
                    <p className="font-openSans font-bold text-[16px] leading-[22px] ">Men Skincare</p>
                    <p className="font-openSans font-bold text-[16px] leading-[22px] ">Blog</p>
                    <p className="font-openSans font-bold text-[16px] leading-[22px] ">Contact Us</p>
                    <p className="font-openSans font-bold text-[16px] leading-[22px] ">Our Brand</p>
                </div>
                {/*  */}
                <div className="flex items-center gap-x-4 ">
                    <div className="p-2 border-r border-[#868686] ">
                        <Image
                            src="/search-icon.png"
                            alt=""
                            width={30}
                            height={30}
                            className=""
                        />
                    </div>
                    <div className="flex items-center justify-between gap-x-1">
                        <Image
                            src="/Ellipse_17.png"
                            alt=""
                            width={35}
                            height={35}
                            className=""
                        />
                        <p className="font-openSans font-semibold text-[14px] leading-[24px] ">DesignKid</p>
                        <Image
                            src="/arrow_left.png"
                            alt=""
                            width={24}
                            height={24}
                            className=""
                        />
                    </div>
                    <div className="">
                        <Image
                            src="/shopping_cart.png"
                            alt=""
                            width={24}
                            height={24}
                            className=""
                        />
                    </div>
                    <div className="flex items-center justify-between gap-x-1">
                        <Image
                            src="/language.png"
                            alt=""
                            width={24}
                            height={24}
                            className=""
                        />
                        <p className="font-openSans font-normal text-[16px] leading-[28px] ">NGN <span className="text-[14px] leading-[24px] ">(EN)</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;