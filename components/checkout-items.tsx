"use client"

import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import PaymentOptions from "./payment-options";
import toast from "react-hot-toast";


const CheckoutItem = () => {

    const handlePayment = () => {
        toast.success("Payment Successful")
    };

    return (
        <div className="px-[16px] md:px-[75px] mt-[36px] ">
            {/* home to cart */}
            <div className="w-[200px] hidden  md:flex items-center justify-between py-2">
                <Link href="/">
                    <p className="text-[#606060] text-[16px] font-normal font-openSans leading-[28px] ">Home</p>
                </Link>
                <MdKeyboardArrowRight className="w-[16px] h-[16px] " />
                <Link href="/cart">
                    <p className="text-[#606060] text-[16px] font-normal font-openSans leading-[22px] ">Cart</p>
                </Link>
                <MdKeyboardArrowRight className="w-[16px] h-[16px] " />
                <Link href="/">
                    <p className="text-[#606060] text-[16px] font-bold font-openSans leading-[22px] ">Checkout</p>
                </Link>
            </div>

            <div className=" mt-[32px] lg:mt-[26px] ">
                <div className="flex flex-col justify-start gap-y-3 px-[24px]">
                    <p className="font-openSans font-semibold md:font-bold text-[18px] md:text-[31px] leading-[16px] md:leading-[42px]">
                        Checkout
                    </p>
                    <p className="font-openSans font-normal text-[12px] md:text-[24px] leading-[13px] md:leading-[34px] text-[#4B4C52]">
                        Select your preferred payment method
                    </p>
                </div>
            </div>

            <div className="px-[24px] py-[48px] ">
                <div className="w-full grid grid-cols-3">
                    <div className="col-span-3 md:col-span-2">
                        <PaymentOptions />

                        <div onClick={handlePayment} className="w-full mt-[31px] flex lg:hidden items-center justify-center bg-[#720439] text-white p-[10px] hover:cursor-pointer ">
                            <p className="font-semibold text-[16px] leading-[22px] ">Pay now</p>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col justify-start col-span-1 text-black font-openSans  pl-[50px] ">
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
                        <div className="mt-[12px]">
                            <div className="w-full mt-[12px] flex justify-between font-openSans text-[20px] leading-[28px]" >
                                <p className=" font-semibold text-[16px] leading-[22px] ">Total after discount</p>
                                <p className="font-bold ">N 227,440</p>
                            </div>
                        </div>

                        <div onClick={handlePayment} className="w-full mt-[18px] flex items-center justify-center bg-[#720439] text-white p-[10px] hover:cursor-pointer ">
                            <p className="font-semibold text-[16px] leading-[22px] ">Pay now</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutItem;