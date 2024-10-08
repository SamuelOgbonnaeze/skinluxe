import Image from "next/image";

interface ClientCardProps {
    imgString: String,
    name: String,
    title: String,
    description: String,
}

const ClientCard = ({ imgString, name, title, description }: ClientCardProps) => {
    return (
        <div className="flex flex-col items-center w-[300px] lg:w-[770px] border  border-[#D6D6D6] space-y-3 font-josefin text-[#232233] pb-[36px] ">
            <Image
                src={`/${imgString}`}
                alt="Client image"
                width={96}
                height={96}
                className="w-[50px] lg:w-[96px] h-[50px] lg:h-[50px] flex mx-auto mt-[40px]"
            />
            <p className="font-bold text-center text-[24px] lg:text-[31px] leading-[28px] lg:leading-[47.25px]  ">{name}</p>
            <p className="font-semibold text-[22px] lg:text-[30px] leading-[22px] lg:leading-[30px] text-center ">{title}</p>
            <p className="w-[250px] lg:w-[650px] h-[78px] font-normal text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px] text-center text-[#6C6C72] ">{description}</p>
        </div>
    );
}

export default ClientCard;