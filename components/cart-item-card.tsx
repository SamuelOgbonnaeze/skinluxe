"use client"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react";

interface CartItemCardProps{
    title:string;
    price: string;
    unitsleft:string;
    category:string;
    imgstring: string;
}

export const CartItemCard = ({title, price, unitsleft, category, imgstring}:CartItemCardProps) => {
    const [quantity, setQuantity] = useState(1); // Initial quantity is set to 1

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) { // Prevent quantity from going below 1
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="w-full ">

            <div className="  bg-white flex gap-x-2 " >
                <div className="">
                    <Image
                        src={`/${imgstring}.png`}
                        alt=""
                        width={322}
                        height={277}
                        className="w-[80px] h-[86px] md:w-[250px] lg:w-[322px] md:h-[250px] lg:h-[277px]  object-cover"
                    />

                </div>
                {/* Product name */}
                <div className=" lg:pt-[24px] w-full lg:w-[400px] ">
                    <div className="flex flex-col justify-start" >
                        <div className="w-full flex flex-col font-openSans md:gap-y-1" >
                            <p className="font-bold text-[14px] md:text-[18px] lg:text-[24px] leading-[19px] lg:leading-[33px] ">{title}</p>
                            <p className="text-[10px] md:text-[14px] md:leading-[19px] font-semibold text-[#B43773] ">{category}</p>
                        </div>
                        <div className="w-full flex flex-col font-openSans mt-2 lg:mt-[18px] gap-y-1 ">
                            <p className="font-bold text-[14px] lg:text-[24px] text-[#A10550] leading-[19px] lg:leading-[33px] "><span className="line-through">N</span>{price}</p>
                            <p className="text-[10px] md:text-[12px] leading-[13px] md:leading-[16px] font-normal text-[#ED2E2E] ">{unitsleft} units left</p>
                        </div>
                        <div className="w-full hidden md:flex items-center font-openSans mt-[15px]  ">
                            <div className="flex items-center justify-center bg-[#720439] hover:opacity-40 group  ">
                                <p className="p-2 font-bold text-[14px] lg:text-[30px] leading-[19px] lg:leading-[24px] text-white  group-hover:cursor-pointer " onClick={handleDecrement}>-</p>
                            </div>
                            <p className="font-semibold text-[24px] leading-[33px] px-[18px] py-[7px] ">{quantity}</p>
                            <div className="flex items-center justify-center bg-[#720439] hover:opacity-40 group  ">
                                <p className="p-2 font-bold text-[14px] lg:text-[30px] leading-[19px] lg:leading-[24px] text-white  group-hover:cursor-pointer " onClick={handleIncrement}>+</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex md:hidden items-center justify-between font-openSans px-1 ">
                <div className="flex items-center text-[#D3B1C2] gap-x-1  ">
                    <Trash2 className="w-[16px] h-[16px] " />
                    <p className="font-bold font-openSans text-[10px] leading-[13px] ">Remove Item</p>
                </div>
                <div className=" flex items-center font-openSans ">
                    <div className="flex items-center justify-center bg-[#720439] hover:opacity-40 group w-[26px] h-[21px] ">
                        <p className="p-1 font-bold text-[14px] lg:text-[24px] leading-[19px] lg:leading-[24px] text-white  group-hover:cursor-pointer " onClick={handleDecrement}>-</p>
                    </div>
                    <p className="font-semibold text-[24px] leading-[33px] px-[10px] py-[5px] ">{quantity}</p>
                    <div className="flex items-center justify-center bg-[#720439] hover:opacity-40 group w-[26px] h-[21px] ">
                        <p className="p-1 font-bold text-[14px] lg:text-[24px] leading-[19px] lg:leading-[24px] text-white  group-hover:cursor-pointer " onClick={handleIncrement}>+</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

