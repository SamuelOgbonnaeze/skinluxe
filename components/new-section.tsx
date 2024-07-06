import { ProductCard } from "./product-card";

const products = [1, 2, 3, 4];

const NewSection = () => {
    return (
        <div className="px-[75px] mb-[85px]">
            <div>
                <p className="font-oldenburg text-4xl ">New In</p>
            </div>
            <div className="flex items-center justify-end mt-2 w-full">

                <div className="bg-[#720439] font-openSans ">
                    <p className="px-5 py-3 text-white text-[20px] leading-[30px] font-bold ">All</p>
                </div>
                <div className="bg-[#FEF8FE]  ">
                    <p className="px-5 py-3 text-[20px] leading-[30px] font-semibold">Natural</p>
                </div>
                <div className="bg-[#FEF8FE]  ">
                    <p className="px-5 py-3 text-[20px] leading-[30px] font-semibold">Body Oil</p>
                </div>
                <div className="bg-[#FEF8FE]  ">
                    <p className="px-5 py-3 text-[20px] leading-[30px] font-semibold">Mosturizer</p>
                </div>
            </div>

            {/* Cards */}
            <div className="px-[73px] mt-[20px] ">
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