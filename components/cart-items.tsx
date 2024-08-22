"use client"

import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Trash } from 'lucide-react';
import { Checkbox } from "./ui/checkbox";
import { Search } from 'lucide-react';
import { CartItemCard } from "@/components/cart-item-card"
import Link from "next/link";
import useCart from "@/lib/store";
import toast from "react-hot-toast";


const CartItems = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const cart = useCart()

    if (!isMounted) {
        return null;
    }

    const onClearCart = () => {
        cart.removeAll();
        toast.success("Cart cleared");
    }
    return (
        <div className="px-[23px] lg:px-[75px] mt-[36px] ">
            {/* home to cart */}
            <div className="w-[100px] hidden lg:flex items-center justify-between py-2">
                <Link href="/">
                    <p className="text-[#606060] text-[16px] font-normal font-openSans leading-[28px] ">Home</p>
                </Link>
                <MdKeyboardArrowRight className="w-[16px] h-[16px] " />
                <Link href="/cart">
                    <p className="text-[#606060] text-[16px] font-bold font-openSans leading-[22px] ">Cart</p>
                </Link>
            </div>
            {/*  */}
            <div className="flex flex-col lg:hidden mt-[30px] gap-y-3 mb-[7px]">
                <p className="font-openSans font-semibold  text-[12px] leading-[16px] " >CART SUMMARY</p>
                <p className="font-openSans font-semibold  text-[12px] leading-[16px] text-[#9B9CA1]" >Cart ({cart.items.length})</p>
            </div>
            {/* select all */}
            <div className="hidden lg:flex items-center justify-between w-[808px] mt-[26px] ">
                <div className="flex w-full items-center justify-between py-[29px] px-[37px] ">
                    <div className="flex items-center gap-x-2 ">
                        <Checkbox className="border-[#B4B4B4] " />
                        <p className="font-openSans font-semibold text-[18px] text-[#B4B4B4] leading-[25px]">Select All Four Items</p>
                    </div>

                    <div className="flex items-center gap-x-2 text-[#D48CAF] ">
                        <Trash className="w-[14px] h-[18px] " />
                        <p onClick={onClearCart} className="font-openSans font-semibold text-[18px] text-[#E2B2C9] hover:text-[#bc84b2] hover:cursor-pointer leading-[25px] ">Clear cart</p>
                    </div>
                </div>
            </div>
            {/* items */}

            <div className="px-2 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="w-full flex flex-col gap-y-6">

                            <div className="flex items-center" >
                                {cart.items.length === 0 && <p className="text-neutral-500">There are no items currently in your cart </p>}
                                <ul>
                                    {cart.items.map((item) => (
                                        <div key={item.id} className="flex items-center px-1 md:px-2  gap-x-2 md:gap-x-4 w-full ">
                                            <Checkbox className="border-black" />

                                            <CartItemCard
                                                id={item.id}
                                                title={`${item.title}`}
                                                price={`${item.price}`}
                                                unitsleft="3"
                                                imgstring={item.imageString}
                                            />
                                          
                                        </div>

                                    ))}
                                </ul>


                            </div>

                        </div>
                    </div>



                    <div className="col-span-1 border-t md:border-t-0 md:border-l-2 border-[#B4B4B470] mt-6 lg:mt-0">
                        <div className="flex flex-col justify-start pl-4 md:pl-12 text-black font-openSans">
                            <p className="font-openSans font-bold text-[24px] md:text-[28px] leading-[34px] md:leading-[39px] flex">Order Summary</p>
                            <div className="mt-4 md:mt-6 flex flex-col gap-y-3 md:gap-y-4">
                                <div className="w-full flex justify-between font-openSans text-[16px] md:text-[20px] leading-[22px] md:leading-[28px]">
                                    <p>Sub Total ({cart.items.length} Items)</p>
                                    <p className="font-semibold text-[#868686]">N 211,440</p>
                                </div>
                                <div className="w-full flex justify-between font-openSans text-[16px] md:text-[20px] leading-[22px] md:leading-[28px]">
                                    <p>Shipping Fee</p>
                                    <p className="font-semibold text-[#868686]">N 11,300</p>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-8">
                                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[28px] text-[#5D5D5D] font-semibold">Enter Code</p>
                                <div className="w-full flex mt-2">
                                    <input className="w-full px-2 py-2 border border-gray-300 rounded-none font-semibold text-[16px] md:text-[18px] text-[#B4B4B4]/70 leading-[22px] md:leading-[25px]" placeholder="Coupon Code" />
                                    <button className="w-[60px] md:w-[84px] flex items-center justify-center bg-[#D3B1C2]">
                                        <Search className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-white" />
                                    </button>
                                </div>
                                <div className="w-full mt-3 md:mt-4 flex justify-between font-openSans text-[16px] md:text-[20px] leading-[22px] md:leading-[28px]">
                                    <p className="font-semibold">Total after discount</p>
                                    <p className="font-bold">N 227,440</p>
                                </div>
                            </div>
                            <Link href="/checkout">
                                <div className="w-full mt-4 md:mt-6 flex items-center justify-center bg-[#720439] text-white py-2 md:py-3">
                                    <p className="font-semibold text-[16px] leading-[22px]">Proceed to checkout</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CartItems;