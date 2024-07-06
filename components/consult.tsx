import Image from "next/image";

const Consult = () => {
    return (
        <div className="my-[110px] px-[72px]">
            <div className="flex  items-center justify-center">
                {/* left */}
                <div className="bg-[#720439] flex flex-col gap-y-2 px-[62px] text-white pb-[33px]">
                    <p className="mt-[20px] font-openSans font-bold text-[24px] leading-[33px] ">NEW Virtual Skincare Consultation</p>
                    <p className="w-[496px] font-normal font-openSans text-[14px] leading-[25px] ">Looking for a full skincare Consultant? Our NEW Virtual Skincare Consultant Tool evaluates your skin and provides the most personalized recommendations.</p>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-y-3">
                            <p className="font-openSans font-bold text-[16px] leading-[22px]  ">Scan With Your Phone To Get Started <br />Or</p>
                            <button className="py-2 px-4 border-2 border-white h-[48px]  ">
                                <p className="font-openSans font-normal text-[16px] leading-[28px]">
                                    Answer A Few Questions
                                </p>
                            </button>
                        </div>
                        <div>
                            <Image
                                src="/image_83.png"
                                alt="Qr code"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                {/* right */}
                <div>
                    <Image
                        src="/consult_img.png"
                        alt="Consult image"
                        width={712}
                        height={476}
                        className="object-cover "
                    />
                </div>
            </div>
        </div>
    );
}

export default Consult;