import Link from "next/link";
import { ProductCard } from "./product-card";

const products = [1, 2, 3, 4];

const Moisturizer = () => {
    return (
        <div id="moisturizer" className="px-[23px] lg:px-[75px] mb-[85px]">
            <div>
                <p className="font-oldenburg text-[16px] mb:text-[24px] lg:text-4xl font-normal leading-[22px] lg:leading-[50px]   ">Moisturizer</p>
            </div>

            {/* Cards */}
            <div className=" mt-[38px] ">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} />
                    ))}
                </div>
            </div>
        
        </div>
    );
}

export default Moisturizer;