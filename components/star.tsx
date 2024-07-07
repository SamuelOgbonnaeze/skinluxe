import { MdStar } from "react-icons/md";

const Star = () => {
    return (
        <div className="w-[92px] flex items-center justify-between">
            <MdStar className="w-[16px] h-[16px] text-[#FFB44C] " />
            <MdStar className="w-[16px] h-[16px] text-[#FFB44C] " />
            <MdStar className="w-[16px] h-[16px] text-[#FFB44C] " />
            <MdStar className="w-[16px] h-[16px] text-[#FFB44C] " />
            <MdStar className="w-[16px] h-[16px] text-[#D9D9D9] " />
        </div>
    );
}

export default Star;