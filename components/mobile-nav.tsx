import Image from "next/image";
import Link from "next/link";

import NavMenu from "./nav-menu";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { ShoppingCart } from 'lucide-react';

const MobileNav = () => {
    return (
        <div className="w-full py-[29px] px-[20px] border-b border-[#DFDFDF] ">
            <div className="w-full flex items-center justify-between ">

                <NavMenu />
                {/*  */}
                <Link href="/">
                    <div className="" >
                        <Image
                            src="/logo.png"
                            alt=""
                            width={76}
                            height={38}
                        />
                    </div>
                </Link>
                <div className="flex items-center gap-x-4 ">

                    <Link href="/cart">
                    <div className="relative flex group px-2">
                            <ShoppingCart className="w-[16px] h-[16px] text-[#D3B1C2] group-hover:text-[#720439]" />
                            <p className="absolute text-[12px] text-[#D3B1C2] -top-2 right-0 group-hover:text-[#720439] ">4</p>
                        </div>
                    </Link>
                    <div className="flex items-center justify-between gap-x-1">
                        <Image
                            src="/language.png"
                            alt=""
                            width={16}
                            height={16}
                            className=""
                        />
                        <p className="font-openSans font-normal text-[12px] leading-[16px] ">NGN <span className="text-[10px] leading-[14px] ">(EN)</span></p>
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center justify-between mt-[19px] " >
                <div className="flex items-center border border-[#9B9CA1] px-2 ">
                    <Search className="w-[16px] h-[16px] " />
                    <Input className="border-none" placeholder="Search for product" />
                </div>
                <button className="px-[8px] py-[20px] text-[12px] text-white bg-[#720439]  font-openSans font-normal leading-[17px] text-center h-[34px] flex items-center justify-center w-[79px] ">
                    Search
                </button>
            </div>
        </div>
    );
}

export default MobileNav;