"use client"

import { useState } from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Input } from "./ui/input";

const PaymentOptions = () => {
    const [selectedOption, setSelectedOption] = useState("card");

    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };

    return (
        <div>
            <RadioGroup
                className="gap-y-[23px] md:gap-y-[48px]"
                value={selectedOption}
                onValueChange={handleOptionChange}
            >
                <div className="flex space-x-2 border border-[#EDEDED] px-3 py-[17px]">
                    <RadioGroupItem className="text-[#720439]" value="card" id="r1" />
                    <div className="flex flex-col justify-start gap-y-1 md:pl-2 lg:pl-[23px]">
                        <Label className="text-[14px] md:text-[20px] leading-[19px] md:leading-[27px] font-openSans font-bold text-black" htmlFor="r1">Card</Label>
                        <p className="font-normal font-openSans text-[10px] md:text-[16px] leading-[13px] md:leading-[21px] text-[#4B4C52]">{selectedOption === "card" ? "Enter the following details correctly an click on Pay Now to complete payment" : "Pay via your credit or debit card"}</p>
                        <p className="text-[#720439] text-[10px] md:text-[13px] leading-[13px] md:leading-[17px] font-openSans font-normal">Recommended</p>
                        {selectedOption === "card" && (
                            <div className="w-full flex flex-col mt-4 gap-y-[14px] md:gap-y-[24px]">
                                <div className="flex flex-col gap-y-[7px]">
                                    <Label className="font-openSans font-semibold text-[10px] md:text-[14px] leading-[13px] md:leading-[19px] text-[#720439] " htmlFor="cardname">Name on card</Label>
                                    <Input className="border border-[#EAD9E1] py-[10px] px-[24px] text-[8px] md:text-[16px] leading-[10px] rounded-none text-[#9B9CA1] " id="cardname" placeholder="Input name" />
                                </div>
                                <div className="flex flex-col gap-y-[7px]">
                                    <Label className="font-openSans font-semibold text-[10px] md:text-[14px] leading-[13px] md:leading-[19px] text-[#720439] " htmlFor="cardnumber">Card Number</Label>
                                    <Input className="border border-[#EAD9E1] py-[10px] px-[24px] text-[8px] md:text-[16px] leading-[10px] rounded-none text-[#9B9CA1] " id="cardnumber" placeholder="Card number" />
                                </div>
                                <div className="flex flex-col gap-y-[7px]">
                                    <Label className="font-openSans font-semibold text-[10px] md:text-[14px] leading-[13px] md:leading-[19px] text-[#720439] " htmlFor="expdate">Expiry Date</Label>
                                    <Input className="border border-[#EAD9E1] py-[10px] px-[24px] text-[8px] md:text-[16px] leading-[10px] rounded-none text-[#9B9CA1] " id="expdate" placeholder="mm/yy" />
                                </div>
                                <div className="flex flex-col gap-y-[7px]">
                                    <Label className="font-openSans font-semibold text-[10px] md:text-[14px] leading-[13px] md:leading-[19px] text-[#720439] " htmlFor="cvv">CVV</Label>
                                    <Input className="border border-[#EAD9E1] py-[10px] px-[24px] text-[8px] md:text-[16px] leading-[10px] rounded-none text-[#9B9CA1] " id="cvv" placeholder="xxx" />
                                </div>

                            </div>
                        )}
                    </div>
                </div>
                <div className="flex space-x-2 border border-[#EDEDED] px-2 py-[17px]">
                    <RadioGroupItem className="text-[#720439]" value="transfer" id="r2" />
                    <div className="flex flex-col justify-start gap-y-1 md:pl-2 lg:pl-[23px]">
                        <Label className="text-[14px] md:text-[20px] leading-[19px] md:leading-[27px] font-openSans font-bold text-black" htmlFor="r2">Bank transfer</Label>
                        <p className="font-normal font-openSans text-[10px] md:text-[16px] leading-[13px] md:leading-[21px] text-[#4B4C52] lg:w-[500px]">{selectedOption === "transfer" ? "Transfer to the following account and click on Pay Now to complete payment" : "Transfer to the companies bank account. You will be required to confirm transaction."}</p>
                        {selectedOption === "transfer" && (
                            <div className="mt-2">
                                <div className="flex flex-col gap-y-[11px] ">
                                    <div className="flex items-center justify-between w-full">
                                        <p className=" text-[12px] leading-[16px] md:text-[20px] md:leading-[27px] font-openSans font-normal ">Bank Name</p>
                                        <p className="text-[#720439] text-[12px] leading-[16px] md:text-[20px] md:leading-[27px] font-openSans font-semibold ">Kuda Bank</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <p className=" text-[12px] leading-[16px] md:text-[20px] md:leading-[27px] font-openSans font-normal ">Account Number</p>
                                        <p className="text-[#720439] text-[12px] leading-[16px] md:text-[20px] md:leading-[27px] font-openSans font-semibold ">2020059754</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <p className=" text-[12px] leading-[16px] md:text-[20px] md:leading-[27px] font-openSans font-normal ">Account Name</p>
                                        <p className="text-[#720439] text-[12px] leading-[16px] md:text-[20px] md:leading-[27px] font-openSans font-semibold ">Skinluxe Org</p>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
                <div className="flex space-x-2 border border-[#EDEDED] px-2 py-[17px]">
                    <RadioGroupItem className="text-[#720439]" value="delivery" id="r3" />
                    <div className="flex flex-col justify-start gap-y-1 md:pl-2 lg:pl-[23px]">
                        <Label className="text-[14px] md:text-[20px] leading-[19px] md:leading-[27px] font-openSans font-bold text-black" htmlFor="r3">Payment on delivery</Label>
                        <p className="font-normal font-openSans text-[10px] md:text-[16px] leading-[13px] md:leading-[21px] text-[#4B4C52] lg:w-[500px]">Pay our distributors with cash once they deliver to you.</p>
                    </div>
                </div>
            </RadioGroup>
        </div>
    );
};

export default PaymentOptions;
