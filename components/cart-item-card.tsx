"use client"

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
        <div className="  bg-white flex gap-x-2 " >
            <div className="">
                <Image
                    src="/frame-2.png"
                    alt=""
                    width={322}
                    height={277}
                    className="h-full object-cover"
                />

            </div>
            {/* Product name */}
            <div className=" py-[24px] w-[400px] ">
                <div className="flex flex-col justify-start" >
                    <div className="w-full flex flex-col font-openSans gap-y-1" >
                        <p className="font-bold text-[24px] leading-[33px] ">Skinluxe Glow Cream XG Improved Sygen Syrup</p>
                        <p className="text-[14px] leading-[19px] font-semibold text-[#B43773] ">Women Skincare</p>
                    </div>
                    <div className="w-full flex flex-col font-openSans mt-[22px] gap-y-1 ">
                        <p className="font-bold text-[24px] text-[#A10550] leading-[33px] ">N52,680</p>
                        <p className="text-[12px] leading-[16px] font-normal text-[#ED2E2E] ">6 units left</p>
                    </div>
                    <div className="w-full flex items-center font-openSans mt-[25px]  ">
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

    )
}

