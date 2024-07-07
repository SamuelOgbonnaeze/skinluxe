import Link from "next/link";
import { ProductCard } from "./product-card";

const products = [1, 2, 3, 4];

const NewSection = () => {
    return (
        <div id="natural" className="px-[75px] mb-[85px]">
            <div>
                <p className="font-oldenburg text-4xl font-normal leading-[50px]  ">Natural</p>
            </div>

            {/* Cards */}
            <div className=" mt-[38px] ">
                <div className="grid grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} />
                    ))}
                </div>
            </div>
        
        </div>
    );
}

export default NewSection;