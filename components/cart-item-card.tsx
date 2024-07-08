"use client"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react";


export const CartItemCard = () => {
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
        <div className="w-full">

            <div className="  bg-white flex gap-x-2 " >
                <div className="">
                    <Image
                        src="/frame-2.png"
                        alt=""
                        width={322}
                        height={277}
                        className="w-[80px] h-[86px] md:w-[250px] lg:w-[322px] md:h-[250px] lg:h-[277px]  object-cover"
                    />

                </div>
                {/* Product name */}
                <div className=" lg:py-[24px] w-full lg:w-[400px] ">
                    <div className="flex flex-col justify-start" >
                        <div className="w-full flex flex-col font-openSans md:gap-y-1" >
                            <p className="font-bold text-[14px] md:text-[18px] lg:text-[24px] leading-[19px] lg:leading-[33px] ">Skinluxe Glow Cream XG <br /> <span className="hidden lg:flex"> Improved Sygen Syrup</span></p>
                            <p className="text-[10px] md:text-[14px] md:leading-[19px] font-semibold text-[#B43773] ">Women Skincare</p>
                        </div>
                        <div className="w-full flex flex-col font-openSans mt-2 lg:mt-[22px] gap-y-1 ">
                            <p className="font-bold text-[14px] lg:text-[24px] text-[#A10550] leading-[19px] lg:leading-[33px] "><span className="line-through">N</span>52,680</p>
                            <p className="text-[10px] md:text-[12px] leading-[13px] md:leading-[16px] font-normal text-[#ED2E2E] ">6 units left</p>
                        </div>
                        <div className="w-full hidden lg:flex items-center font-openSans mt-[25px]  ">
                            <div className="flex items-center justify-center bg-[#E3E3E3] group ">
                                <p className="p-[12px] font-bold text-[36px] leading-[50px] text-[#D48CAF] group-hover:cursor-pointer" onClick={handleDecrement}>-</p>
                            </div>
                            <p className="font-semibold text-[24px] leading-[33px] px-[18px] py-[7px] ">{quantity}</p>
                            <div className="flex items-center justify-center bg-[#E3E3E3] group">
                                <p className="p-[12px] font-bold text-[36px] leading-[50px] text-[#930549] group-hover:cursor-pointer " onClick={handleIncrement}>+</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex lg:hidden items-center justify-between font-openSans  ">
                <div className="flex items-center text-[#D3B1C2] gap-x-1 ">
                    <Trash2 className="w-[16px] h-[16px] " />
                    <p className="font-bold font-openSans text-[10px] leading-[13px] ">Remove Item</p>
                </div>
                <div className=" flex items-center font-openSans ">
                    <div className="flex items-center justify-center bg-[#720439] hover:opacity-40 group ">
                        <p className="p-[7px] font-bold text-[16px] lg:text-[36px] leading-[19px] lg:leading-[50px] text-white  group-hover:cursor-pointer " onClick={handleDecrement}>-</p>
                    </div>
                    <p className="font-semibold text-[24px] leading-[33px] px-[10px] py-[5px] ">{quantity}</p>
                    <div className="flex items-center justify-center bg-[#720439] hover:opacity-40 group">
                        <p className="p-[7px] font-bold text-[14px] lg:text-[36px] leading-[19px] lg:leading-[50px] text-white  group-hover:cursor-pointer " onClick={handleIncrement}>+</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

