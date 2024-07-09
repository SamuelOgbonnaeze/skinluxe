"use client"

import Image from "next/image"
import Link from "next/link"
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Star from "./star";
import { IoHeart } from "react-icons/io5";
import { Heart } from 'lucide-react';
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const ProductCard = () => {
    const router = useRouter();
    const [isFavorite, setIsFavorite] = useState(false);
    
    const onAdd = async () => {
        toast.success("Item added to cart");
        router.push("/cart");
    }

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            toast.success("Item liked");
        } else {
            toast.success("Item unliked");
        }
    }

    return (
        <div className="w-[151px] lg:w-[270px] h-[318px] lg:h-[540px] bg-white border border-[#EDEDED] hover:scale-105 transition-smooth duration-300 hover:shadow-xl " >
            <div className="relative">
                <Image
                    src="/product_image.png"
                    alt="Product Image"
                    width={300}
                    height={384}
                    className=" w-[151px] lg:w-[300px] h-[181px] lg:h-[284px] object-cover"
                />
                <IoHeart 
                    className={`absolute top-2 right-2 z-10 w-[14px] lg:w-[24px] h-[14px] lg:h-[24px] cursor-pointer ${isFavorite ? 'text-red-500 ' : 'text-white'}`}
                    onClick={toggleFavorite}
                />
            </div>
            {/* Product name */}
            <div className=" my-[6px] lg:my-[13px]">
                <p className="w-[137px] lg:w-[245px] font-bold font-openSans text-[#720439] text-[10px] md:text-[12px] lg:text-[20px] leading-[14px] lg:leading-[28px] ml-[6px] lg:ml-[14px] ">Skinluxe Glow Cream XG</p>
            </div>
            <hr className="border-[0.5px] border-[#D1D1D4] " />
            {/* Price */}
            <div className="mt-[7px] mb-[11px] ml-[6px] lg:ml-[14px]">
                <p className="lg:w-[245px] font-bold font-openSans text-[14px] lg:text-[20px] leading-[19px] lg:leading-[28px]  "><span className="pr-2">₦</span> 76,000 </p>
            </div>
            <hr className="border-[0.5px] border-[#D1D1D4] " />
            {/* Review */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-y-2 ml-[6px] lg:ml-[14px]">
                    <p className="font-openSans w-full font-semibold text-[6px] lg:text-[10px] text-[#88898F] text-left leading-[14px] ">Supplied by: <span className="font-normal">Jenny&apos;s Glow</span></p>
                    <div className="flex items-center gap-x-1">
                        <Star />
                        <p className="text-[#9B9CA1] font-openSans font-normal text-[6px] lg:text-[10px] leading-[8px] lg:leading-[13px] ">4 Reviews</p>
                    </div>
                </div>
                <div onClick={onAdd} className=" flex items-center justify-center mt-2 mr-3 cursor-pointer">
                    <HiOutlineShoppingCart className="w-[34px] h-[34px] p-2 border rounded-full bg-gray-500 text-white hover:bg-[#3D021E] " />
                </div>
            </div>
        </div>
    );
}
