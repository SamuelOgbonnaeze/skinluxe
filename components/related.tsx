import { ProductCard } from "./product-card";

const products = [
    {
        key: 1,
        title: "Skinluxe Este Glow",
        price: "86,780",
        supplier: "Skinluxe",
        reviewno: "4",
        imageString: "image_102"

    },
    {
        key: 2,
        title: "Kalnitify Cream",
        price: "46,000",
        supplier: "Skinluxe",
        reviewno: "3",
        imageString: "image_100"

    },
    {
        key: 3,
        title: "Essensial Robs Cream",
        price: "71,200",
        supplier: "Skinluxe",
        reviewno: "5",
        imageString: "image_99"

    },
    {
        key: 4,
        title: "Essensial Robs Cream II",
        price: "92,100",
        supplier: "Skinluxe",
        reviewno: "2",
        imageString: "image_111"

    },
];

const Related = () => {
    return (
        <div  className="px-[23px] lg:px-[73px] mt-[33px] lg:mt-[115px] mb-[80px] lg:mb-[185px]">
            <div>
                <p className="font-oldenburg text-[16px] mb:text-[24px] lg:text-4xl font-normal leading-[22px] lg:leading-[50px]  ">Other Similar Products</p>
            </div>

            {/* Cards */}
            <div className=" mt-[38px] ">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                        <ProductCard
                        id={`${product.key}`}
                            key={product.key}
                            title={product.title}
                            price={product.price}
                            supplier={product.supplier}
                            reviewno={product.reviewno}
                            imageString={product.imageString}
                        />
                    ))}
                </div>
            </div>
        
        </div>
    );
}

export default Related;