import Link from "next/link";
import { ProductCard } from "./product-card";

const products = [1, 2, 3, 4, 5, 6, 7, 8];

const BestSellers = () => {
    return (
        <div id="bodyoil" className="px-[75px] mt-[77px] mb-[85px]">
            <div className="flex items-center mt-2 w-full">
                <p className="font-oldenburg font-normal text-4xl leading-[50px] ">Body Oil</p>
            </div>


            {/* Cards */}
            <div className=" mt-[38px] ">
                <div className="w-full grid grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default BestSellers;