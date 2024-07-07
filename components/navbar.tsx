import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full py-[29px] px-[72px] ">
            <div className="w-full flex items-center justify-between ">

                {/*  */}
                <Link href="/">
                    <div className="" >
                        <Image
                            src="/logo.png"
                            alt=""
                            width={120}
                            height={59}
                        />
                    </div>
                </Link>
                {/*  */}
                <div className=" flex items-center gap-x-[40px] ">
                    <Link href="#natural">
                        <p className="font-openSans font-bold text-[16px] leading-[22px] ">Natural</p>
                    </Link>
                    <Link href="#bodyoil">
                        <p className="font-openSans font-bold text-[16px] leading-[22px] ">Body Oil</p>
                    </Link>
                    <Link href="#moisturizer">
                        <p className="font-openSans font-bold text-[16px] leading-[22px] ">Moisturizer</p>
                    </Link>
                    <Link href="#consult">
                        <p className="font-openSans font-bold text-[16px] leading-[22px] ">Consultation</p>
                    </Link>
                    <Link href="#about">
                        <p className="font-openSans font-bold text-[16px] leading-[22px] ">About us</p>
                    </Link>
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
                    <Link href="/cart">
                        <div className="">
                            <Image
                                src="/shopping_cart.png"
                                alt=""
                                width={24}
                                height={24}
                                className=""
                            />
                        </div>
                    </Link>
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