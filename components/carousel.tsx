import Image from "next/image";

const Carousel = () => {
    return (
        <div className="w-full h-[629px]">
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
                className="absolute object-cover inset-0 z-10"
            />
        </div>
    );
}

export default Carousel;