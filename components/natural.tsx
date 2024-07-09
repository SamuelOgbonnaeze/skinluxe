import Link from "next/link";
import { ProductCard } from "./product-card";

const products = [
    {
        key: 1,
        title: "Saint Leave Preservoiur",
        price: "16,000",
        supplier: "Skinluxe",
        reviewno: "4",
        imageString: "image_103"

    },
    {
        key: 2,
        title: "Coculeave Concotion",
        price: "76,000",
        supplier: "Jenny's Glow",
        reviewno: "3",
        imageString: "image_104"

    },
    {
        key: 3,
        title: "Tiffa Leave Es Tracts",
        price: "76,000",
        supplier: "Skinluxe",
        reviewno: "5",
        imageString: "image_101"

    },
    {
        key: 4,
        title: "Coconut Melt",
        price: "78,000",
        supplier: "Skinluxe",
        reviewno: "2",
        imageString: "image_112"

    },
    {
        key: 5,
        title: "Palleave Selucted Cream",
        price: "450,000",
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
        imageString: "image_116"

    },
    {
        key: 7,
        title: "Indexed Meltin",
        price: "51,000",
        supplier: "Meltin and more",
        reviewno: "7",
        imageString: "image_14"

    },
    {
        key: 8,
        title: "Isuned Serti",
        price: "76,410",
        supplier: "Skinluxe",
        reviewno: "4",
        imageString: "image_15"

    }

];

const Natural = () => {
    return (
        <div id="natural" className="px-[23px] lg:px-[75px] mb-[85px]">
            <div>
                <p className="font-oldenburg text-[16px] mb:text-[24px] lg:text-4xl font-normal leading-[22px] lg:leading-[50px]  ">Natural</p>
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

export default Natural;