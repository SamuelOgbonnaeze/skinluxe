"use client";

import Image from "next/image";
import Link from "next/link";

import { ShoppingCart } from 'lucide-react';
import useCartStore from "@/lib/store";

const Navbar = () => {

    const cart = useCartStore((state) => state.cart);

    return (
        <div className="w-full py-[29px] px-[30px] lg:px-[72px] border-b border-[#DFDFDF] ">
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
                <div className=" flex items-center gap-x-[20px] lg:gap-x-[40px] ">
                    <Link href="#natural">
                        <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Natural</p>
                    </Link>
                    <Link href="#bodyoil">
                        <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Body Oil</p>
                    </Link>
                    <Link href="#moisturizer">
                        <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Moisturizer</p>
                    </Link>
                    <Link href="#faceoil">
                        <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Face Oil</p>
                    </Link>
                    <Link href="#nightcream">
                        <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Night Cream</p>
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
                        <div className="relative flex group px-2">
                            <ShoppingCart className="w-[24px] h-[24px] text-[#D3B1C2] group-hover:text-[#720439]" />
                            <p className="absolute text-[16px] text-[#D3B1C2] -top-2 -right-1 group-hover:text-[#720439] ">{cart.length}</p>
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