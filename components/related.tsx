import Link from "next/link";
import { ProductCard } from "./product-card";

const products = [1, 2, 3, 4];

const Related = () => {
    return (
        <div  className="px-[73px] mt-[115px] mb-[185px]">
            <div>
                <p className="font-oldenburg text-4xl font-normal leading-[50px]  ">Related to this product</p>
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

export default Related;