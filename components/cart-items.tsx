import { MdKeyboardArrowRight } from "react-icons/md";
import { Trash } from 'lucide-react';
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Search } from 'lucide-react';
import { CartItemCard } from "@/components/cart-item-card"
import Link from "next/link";

const CartItems = () => {
    return (
        <div className="px-[75px] mt-[36px] ">
            {/* home to cart */}
            <div className="w-[100px] flex items-center justify-between py-2">
                <Link href="/">
                    <p className="text-[#606060] text-[16px] font-normal font-openSans leading-[28px] ">Home</p>
                </Link>
                <MdKeyboardArrowRight className="w-[16px] h-[16px] " />
                <Link href="/cart">
                <p className="text-[#606060] text-[16px] font-bold font-openSans leading-[22px] ">Cart</p>
                </Link>
            </div>
            {/* select all */}
            <div className=" w-[808px] mt-[26px] ">
                <div className="flex items-center justify-between py-[29px] px-[37px] ">
                    <div className="flex items-center gap-x-2 ">
                        <Checkbox className="border-[#B4B4B4] " />
                        <p className="font-openSans font-semibold text-[18px] text-[#B4B4B4] leading-[25px]">Select All Four Items</p>
                    </div>

                    <div className="flex items-center gap-x-2 text-[#D48CAF] ">
                        <Trash className="w-[14px] h-[18px] " />
                        <p className="font-openSans font-semibold text-[18px] text-[#E2B2C9] leading-[25px] ">Delete</p>
                    </div>
                </div>
            </div>
            {/* items */}

            <div>
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <div className="w-full flex flex-col gap-y-[36px]">
                            <div className="flex items-center gap-x-[10px]">
                                <Checkbox className="border-black" />
                                <CartItemCard />
                            </div>
                            <div className="flex items-center gap-x-[10px]">
                                <Checkbox className="border-black" />
                                <CartItemCard />
                            </div>
                            <div className="flex items-center gap-x-[10px]">
                                <Checkbox className="border-black" />
                                <CartItemCard />
                            </div>
                            <div className="flex items-center gap-x-[10px]">
                                <Checkbox className="border-black" />
                                <CartItemCard />
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="flex flex-col justify-start col-span-1 border-l-[3px] text-black font-openSans border-[#B4B4B470]/45  pl-[50px] ">
                            <p className=" font-openSans font-bold text-[28px] leading-[39px] ">Order Summary</p>
                            <div className="mt-[24px] flex flex-col gap-y-[12px]">
                                <div className="w-full flex justify-between font-openSans text-[20px] leading-[28px]" >
                                    <p className="  ">Sub Total (4 Items)</p>
                                    <p className="font-semibold text-[#868686] ">N 211,440</p>
                                </div>
                                <div className="w-full flex justify-between font-openSans text-[20px] leading-[28px]" >
                                    <p className="  ">Shipping Fee</p>
                                    <p className="font-semibold text-[#868686] ">N 11,300</p>
                                </div>
                            </div>
                            <div className="mt-[30px]">
                                <p className="text-[20px] leading-[28px] text-[#5D5D5D] font-semibold ">Enter Code</p>
                                <div className="w-full flex">
                                    <Input className="rounded-none font-semibold text-[18px] text-[#B4B4B4]/70 leading-[25px] " placeholder="Coupon Code" />
                                    <button className="w-[84px] flex items-center justify-center bg-[#D3B1C2] ">
                                        <Search className="w-[24px] h-[24px] text-white " />
                                    </button>
                                </div>
                                <div className="w-full mt-[12px] flex justify-between font-openSans text-[20px] leading-[28px]" >
                                    <p className=" font-semibold text-[16px] leading-[22px] ">Total after discount</p>
                                    <p className="font-bold ">N 227,440</p>
                                </div>
                            </div>
                            <Link href="/checkout">
                                <div className="w-full mt-[18px] flex items-center justify-center bg-[#720439] text-white p-[10px] ">
                                    <p className="font-semibold text-[16px] leading-[22px] ">Proceed to checkout</p>
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