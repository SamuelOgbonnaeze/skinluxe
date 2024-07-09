
import { ProductCard } from "./product-card";

const products = [
    {
        key: 1,
        title: "Skinluxe Glow Cream XG",
        price: "52,860",
        supplier: "Skinluxe",
        reviewno: "4",
        imageString: "frame-2"

    },
    {
        key: 2,
        title: "Dior Prestige Le Concentre",
        price: "167,000",
        supplier: "Dior",
        reviewno: "3",
        imageString: "product_image"

    },
    {
        key: 3,
        title: "Skinluxe Manuxure Oil",
        price: "85,000",
        supplier: "Skinluxe",
        reviewno: "4",
        imageString: "gift-2"

    },
    {
        key: 4,
        title: "Sefare Mentus Oil",
        price: "88,000",
        supplier: "Skinluxe",
        reviewno: "6",
        imageString: "image_115"

    },
    {
        key: 5,
        title: "Paleted Skin Oil",
        price: "67,000",
        supplier: "Skinluxe",
        reviewno: "4",
        imageString: "image_108"

    },
    {
        key: 6,
        title: "Paleted Senused Oil",
        price: "76,231",
        supplier: "Skinluxe",
        reviewno: "1",
        imageString: "image_98"

    },
    {
        key: 7,
        title: "Oil Spray",
        price: "73,000",
        supplier: "Skinluxe",
        reviewno: "2",
        imageString: "image_105"

    },
    {
        key: 8,
        title: "Exonented Lectus Oil",
        price: "46,000",
        supplier: "Skinluxe",
        reviewno: "4",
        imageString: "image_97"

    }

];

const BodyOil = () => {
    return (
        <div id="bodyoil" className=" px-[23px] lg:px-[75px] mt-[77px] mb-[85px]">
            <div className="flex items-center mt-2 w-full">
                <p className="font-oldenburg text-[16px] mb:text-[24px] lg:text-4xl font-normal leading-[22px] lg:leading-[50px]  ">Body Oil</p>
            </div>


            {/* Cards */}
            <div className=" mt-[38px] ">
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

export default BodyOil;