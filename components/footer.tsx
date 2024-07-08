import Image from "next/image";
import { Checkbox } from "./ui/checkbox";

const Footer = () => {
    return (
        <div className="w-full font-openSans">
            <div className="w-full">
                {/* Upper layer */}
                <div className="flex flex-wrap bg-[#FBEFF2] items-center justify-between py-6 px-6 lg:px-[108px] text-[#79043C]">
                    <div className="flex items-center mb-4 lg:mb-0">
                        <Image
                            src="/bunny vector.png"
                            alt="bunny vector"
                            width={40}
                            height={40}
                        />
                        <p className="ml-4 font-normal text-[16px] leading-[28px]">No Tests On Animals</p>
                    </div>
                    <div className="flex items-center mb-4 lg:mb-0">
                        <Image
                            src="/leaf vector.png"
                            alt="leaf vector"
                            width={40}
                            height={40}
                        />
                        <p className="ml-4 font-normal text-[16px] leading-[28px]">No Animal-Derived Ingredients</p>
                    </div>
                    <div className="flex items-center mb-4 lg:mb-0">
                        <Image
                            src="/wheat vector.png"
                            alt="wheat vector"
                            width={40}
                            height={40}
                        />
                        <p className="ml-4 font-normal text-[16px] leading-[28px]">No Gluten, Or Gluten Byproducts</p>
                    </div>
                    <div className="flex items-center mb-4 lg:mb-0">
                        <Image
                            src="/recycle vector.png"
                            alt="recycle vector"
                            width={40}
                            height={40}
                        />
                        <p className="ml-4 font-normal text-[16px] leading-[28px]">Recyclable Packaging</p>
                    </div>
                </div>

                {/* 2nd layer */}
                <div className="bg-[#3D021E]">
                    <div className="flex flex-wrap items-center justify-between w-full px-6 py-16 lg:px-[108px] text-white">
                        {/* First half */}
                        <div className="flex flex-col w-full lg:w-[500px] space-y-10 mb-16 lg:mb-0 lg:flex-row lg:space-y-0 lg:space-x-10">
                            {/* How can we help */}
                            <div className="flex flex-col space-y-2">
                                <h3 className="font-bold text-[24px] leading-[33.6px] mb-2">How Can We Help?</h3>
                                <div className="font-normal text-[16px] leading-[28px]">
                                    <p>Skinluxe Branches</p>
                                    <p>Contact Us</p>
                                    <p>FAQ</p>
                                    <p>Our Brand</p>
                                    <p>Blog</p>
                                </div>
                            </div>
                            {/* Products */}
                            <div className="flex flex-col space-y-2">
                                <h3 className="font-bold text-[24px] leading-[33.6px] mb-2">Products</h3>
                                <div className="font-normal text-[16px] leading-[28px]">
                                    <p>Natural</p>
                                    <p>Body Oil</p>
                                    <p>Moisturizer</p>
                                </div>
                            </div>
                        </div>

                        {/* Second half */}
                        <div className="w-full lg:w-[600px]">
                            <div>
                                <h3 className="font-bold text-[24px] leading-[34px]">Keep In Touch With Skinluxe</h3>
                                <p className="font-normal text-[16px] leading-[28px] pt-[16px]">
                                    Join The Skinluxe Newsletter And Be First To Hear About News, Offers And Skincare Advice
                                </p>
                            </div>
                            <div className="mt-[16px]">
                                <div className="flex flex-wrap gap-y-4">
                                    <div className="w-full lg:w-3/4 border-b-[1px] border-[#CBCBCB]">
                                        <h3 className="px-2 py-4 font-normal text-[20px] text-[#CBCBCB]">Email Address</h3>
                                    </div>
                                    <button className="w-full lg:w-1/4 border-2 border-[#CBCBCB] py-2 px-4 font-normal text-[16px] leading-[28px] text-[#CBCBCB]">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 space-x-2">
                                <Checkbox className="mt-1" />
                                <label className="font-normal text-[14px] leading-[25px]">
                                    By Submitting Your Email, You Agree To Receive Advertising Emails From Skinluxe.
                                    <br /> Please Review Our Privacy Policy
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3rd layer */}
                <div className="flex flex-wrap bg-[#280114] items-center justify-between py-3 px-6 lg:px-[108px] text-[#79043C]">
                    <div className="flex flex-wrap items-center justify-between w-full">
                        {/* left */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-4 lg:mb-0 lg:gap-x-2 ">
                            <div className="flex items-center gap-2 md:border-b-2 lg:border-r-2 lg:border-b-0 border-[#79043C]">
                                <Image
                                    src="/location_on.png"
                                    alt="location icon"
                                    width={24}
                                    height={24}
                                />
                                <p className="font-normal text-[16px] text-white leading-[28px] px-2">123 Wellington Bassey Way</p>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <Image
                                    src="/call.png"
                                    alt="call icon"
                                    width={24}
                                    height={24}
                                />
                                <p className="font-normal text-[16px] text-white leading-[28px] px-2">234-904-500-4705</p>
                            </div>
                        </div>
                        {/* right */}
                        <div className="flex items-center justify-between gap-2 lg:gap-x-2">
                            <Image
                                src="/instagram.png"
                                alt="instagram icon"
                                width={30}
                                height={30}
                            />
                            <Image
                                src="/facebook.png"
                                alt="facebook"
                                width={24}
                                height={24}
                            />
                            <Image
                                src="/twitter.png"
                                alt="twitter icon"
                                width={24}
                                height={24}
                            />
                            <Image
                                src="/tiktok.png"
                                alt="tiktok icon"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>

                {/* last layer */}
                <div className="flex flex-wrap bg-[#14010A] items-center justify-between py-3 px-6 lg:px-[108px] text-[#CBCBCB]">
                    <div className="flex flex-wrap items-center justify-between w-full">
                        {/* left */}
                        <div className="flex items-center justify-between gap-2 mb-4 lg:mb-0">
                            <Image
                                src="/copyright.png"
                                alt="copyright icon"
                                width={20}
                                height={20}
                            />
                            <p className="font-semibold text-[12px] leading-[16px] px-2">2024 Skinluxe. All Rights Reserved</p>
                        </div>
                        {/* right */}
                        <div className="flex items-center justify-between gap-6">
                            <p className="font-normal text-[12px] leading-[22px]">Terms & Conditions</p>
                            <p className="font-normal text-[12px] leading-[22px]">Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
