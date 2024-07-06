import Image from "next/image";
import { Checkbox } from "./ui/checkbox";
import { Instagram } from "lucide-react";

const Footer = () => {
    return (
        <div className=" w-full">
            <div className="w-full  ">

                {/* Upper layer */}
                <div className="flex bg-[#FBEFF2] items-center justify-between py-6 px-[108px] w-full text-[#79043C] ">
                    <div className="flex items-center justify-between ">
                        <Image src="/bunny vector.png"
                            alt="bunny vector"
                            width={40}
                            height={40}
                        />
                        <p className=" ml-4 font-normal text-[16px] leading-[28px] " >No Tests On Animals</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <Image src="/leaf vector.png"
                            alt="leaf vector"
                            width={40}
                            height={40}
                        />
                        <p className=" ml-4 font-normal text-[16px] leading-[28px] " >No Animal-Derived Ingredients</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <Image src="/wheat vector.png"
                            alt="wheat vector"
                            width={40}
                            height={40}
                        />
                        <p className=" ml-4 font-normal text-[16px] leading-[28px] " >No Gluten, Or Gluten Byproducts</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <Image src="/recycle vector.png"
                            alt="recycle vector"
                            width={40}
                            height={40}
                        />
                        <p className=" ml-4 font-normal text-[16px] leading-[28px] " >Recyclable Packaging</p>
                    </div>
                </div>
                {/* 2nd layer */}
                <div className="bg-[#3D021E]  ">
                    <div className=' z-10  bg-cover bg-no-repeat bg-center text-center items-center'>
                        <div className="flex items-center justify-between w-full px-[108px] py-[80px] text-white">

                            {/* First half */}
                            <div className="flex w-[500px] space-x-10  justify-between">
                                {/* How can we help */}
                                <div className="flex flex-col space-y-2">
                                    <h3 className="font-semibold  text-[24px] leading-[33.6px] mb-2 ">How Can We Help?</h3>
                                    <div className="font-normal text-[16px] leading-[28px] ">
                                        <p>Skinluxe Branches</p>
                                        <p>Contact Us</p>
                                        <p>FAQ</p>
                                        <p>Our Brand</p>
                                        <p>Blog</p>
                                    </div>
                                </div>
                                {/* Products */}
                                <div className="flex flex-col space-y-2">
                                    <h3 className="font-semibold text-[24px] leading-[33.6px] mb-2 ">Products</h3>
                                    <div className="gap-y-2 font-normal text-[16px] leading-[28px] ">
                                        <p>Men Skincare</p>
                                        <p>Women Skincare</p>
                                        <p>Gifts & Sets</p>
                                    </div>
                                </div>
                            </div>

                            {/* Second half */}
                            <div className="w-[600px]">
                                <div className="">
                                    <h3 className="font-semibold text-[24px] leading-[34px] ">Keep In Touch With Skinluxe</h3>
                                    <p className="font-normal text-[16px] leading-[28px] pt-[16px] ">Join The Skinluxe Newsletter And Be First To Hear About News, Offers And Skincare Advice</p>
                                </div>
                                <div className="mt-[16px]">
                                    <div className="flex justify-between gap-x-4">
                                        <div className="w-full   border-b-[1px] border-[#CBCBCB] ">
                                            <h3 className="px-2 w-full py-4 font-normal text-[20px] text-[#CBCBCB] ">Email Address</h3>
                                        </div>
                                        <button className="border-2 border-[#CBCBCB] py-2 px-4 font-normal text-[16px] leading-[28px] text-[#CBCBCB] ">Subscribe</button>
                                    </div>
                                </div>
                                <div className="flex mt-2 space-x-2">
                                    <Checkbox className="mt-1" />
                                    <label className="font-normal text-[14px] leading-[25px] ">By Submitting Your Email, You Agree To Receive Advertising Emails From Skinluxe.<br /> Please Review Our Privacy Policy</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* 3rd layer */}
                <div className="flex bg-[#280114] items-center justify-between py-3 px-[108px] w-full text-[#79043C] ">
                    <div className="flex w-full items-center justify-between">
                        {/* left */}
                        <div>
                            k
                        </div>
                        {/* right */}
                        <div className="flex items-center justify-between gap-x-2 ">
                            <Image src="/instagram.png"
                                alt="instagram icon"
                                width={30}
                                height={30}
                                
                            />
                            <Image src="/facebook.png"
                                alt="facebook"
                                width={24}
                                height={24}
                              
                            />
                            <Image src="/twitter.png"
                                alt="twitter icon"
                                width={24}
                                height={24}
                                
                            />
                            <Image src="/tiktok.png"
                                alt="tiktok icon"
                                width={24}
                                height={24}
                              
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;