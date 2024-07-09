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
    {
        key: 5,
        title: "Skin Brightener Rob",
        price: "76,000",
        supplier: "Skinluxe",
        reviewno: "5",
        imageString: "image_110"

    },
    {
        key: 6,
        title: "Skinluxe Moist",
        price: "88,670",
        supplier: "Skinluxe",
        reviewno: "1",
        imageString: "image_109"

    },
    {
        key: 7,
        title: "Essensial Cleanser",
        price: "69,330",
        supplier: "Meltin and more",
        reviewno: "7",
        imageString: "image_98"

    },
    {
        key: 8,
        title: "Skinluxe Purifier Sets",
        price: "1,110,000",
        supplier: "Skinluxe",
        reviewno: "4",
        imageString: "image_96"

    }

];
const NightCream = () => {
    return (
        <div id="nightcream" className="px-[23px] lg:px-[75px] mb-[85px]">
            <div>
                <p className="font-oldenburg text-[16px] mb:text-[24px] lg:text-4xl font-normal leading-[22px] lg:leading-[50px]   ">Night Cream</p>
            </div>

            {/* Cards */}
            <div className=" mt-[38px] ">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                        <ProductCard
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

export default NightCream;