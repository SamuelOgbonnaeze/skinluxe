"use client"

import Image from "next/image"
import { ShoppingCart } from 'lucide-react';
import Star from "./star";
import { IoHeart } from "react-icons/io5";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    title: string;
    price: string;
    supplier:string;
    reviewno:string;
    imageString:string
}

export const ProductCard = ({ title,price,reviewno,supplier,imageString }: ProductCardProps) => {
    const router = useRouter();
    const [isFavorite, setIsFavorite] = useState(false);

    const onAdd = async () => {
        toast.success("Item added to cart");
        router.push("/cart");
    }

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            toast.success("Item added to favorite");
        } else {
            toast.success("Item removed from favorite");
        }
    }

    return (
        <div className="w-[151px] md:w-[215px]  lg:w-[270px] h-[300px] md:h-[320px] lg:h-[470px] bg-white border border-[#EDEDED] hover:scale-105 transition-smooth duration-300 hover:shadow-xl " >
            <div className="relative">
                <Image
                    src={`/${imageString}.png`}
                    alt="Product Image"
                    width={300}
                    height={384}
                    className=" w-full lg:w-[300px] h-[181px] lg:h-[284px] object-cover"
                />
                <IoHeart
                    className={`absolute top-2 right-2 z-10 w-[14px] lg:w-[24px] h-[14px] lg:h-[24px] cursor-pointer ${isFavorite ? 'text-red-500 ' : 'text-white'}`}
                    onClick={toggleFavorite}
                />
            </div>
            {/* Product name */}
            <div className=" my-[6px] lg:my-[13px]">
                <p className="w-[137px] lg:w-[250px] font-bold font-openSans text-[#720439] text-[10px] md:text-[12px] lg:text-[20px] leading-[14px] lg:leading-[28px] ml-[6px] lg:ml-[10px] ">{title}</p>
            </div>
            <hr className="border-[0.5px] border-[#D1D1D4] " />
            {/* Price */}
            <div className="mt-[7px] mb-[11px] ml-[6px] lg:ml-[14px]">
                <p className="lg:w-[245px] font-bold font-openSans text-[14px] lg:text-[20px] leading-[19px] lg:leading-[28px]  "><span className="pr-2">₦</span> {price} </p>
            </div>
            <hr className="border-[0.5px] border-[#D1D1D4] " />
            {/* Review */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-y-2 ml-[6px] lg:ml-[14px]">
                    <p className="font-openSans w-full font-semibold text-[6px] lg:text-[10px] text-[#88898F] text-left leading-[14px] ">Supplied by: <span className="font-normal">{supplier}</span></p>
                    <div className="flex items-center gap-x-1">
                        <Star />
                        <p className="text-[#9B9CA1] font-openSans font-normal text-[6px] lg:text-[10px] leading-[8px] lg:leading-[13px] ">{reviewno} Reviews</p>
                    </div>
                </div>
                <div onClick={onAdd} className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px]  flex  items-center justify-center mt-2 mr-2 p-2 cursor-pointer rounded-full  text-white hover:bg-[#3D021E] bg-[#D3B1C2]">
                    <ShoppingCart className="w-4 h-4   " />
                </div>
            </div>
        </div>
    );
}
