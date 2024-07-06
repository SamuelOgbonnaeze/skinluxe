import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[733px] mb-[102px]">
      {/* Background image */}
      <Image
        src="/banner_img.png"
        alt="banner image"
        width={1440}
        height={753}
        className="absolute w-full h-full object-cover inset-0 z-0"
      />

      {/* Overlay image */}
      <Image
        src="/Rec_11.png"
        alt="Overlay"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-10"
      />

      {/* Text content */}
      <div className="relative z-20 flex items-center ml-[75px]  w-full h-full text-left">
        <div className="text-white w-[591px] h-[715px] ">
          {/* Add any text content here */}
          <p className="font-bold font-outfit text-8xl leading-[143px] h-full ">PRESERVE YOUR GLOW, EMBRACE YOUR HUE</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
