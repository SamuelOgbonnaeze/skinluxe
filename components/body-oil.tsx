"use client";
import { useState, useEffect } from 'react';
import { ProductCard } from './product-card';



interface Photo {
    url: string;
}

interface Product {
    name: string;
    description: string | null;
    unique_id: string;
    url_slug: string;
    is_available: boolean;
    is_service: boolean;
    previous_url_slugs: string | null;
    unavailable: boolean;
    unavailable_start: string | null;
    unavailable_end: string | null;
    id: string;
    parent_product_id: string | null;
    parent: string | null;
    organization_id: string;
    stock_id: string | null;
    product_image: any[];
    categories: any[];
    date_created: string;
    last_updated: string;
    user_id: string;
    photos: Photo[];
    prices: number | null;
    stocks: any | null;
    is_deleted: boolean;
    available_quantity: number | null;
    selling_price: number | null;
    discounted_price: number | null;
    buying_price: number | null;
    extra_infos: any | null;
    featured_reviews: any | null;
    unavailability: any[];
    supplier: string | null;
}

const BodyOil = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/products'); 
                const data = await response.json();

                if (data && data.items) {
                    setProducts(data.items as Product[]);
                    setIsLoading(false);
                } else {
                    console.error('Error fetching products: Response structure incorrect');
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    console.log(products); // Log the products array to inspect data
    // console.log(products[7].photos[0].url)

    return (
        <div id="bodyoil" className="px-[23px] lg:px-[75px] mt-[77px] mb-[85px]">
            <div className="flex items-center mt-2 w-full">
                <p className="font-oldenburg text-[16px] mb:text-[24px] lg:text-4xl font-normal leading-[22px] lg:leading-[50px]">Body Oil</p>
            </div>

            {/* Cards */}
            <div className="mt-[38px]">
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        isLoading ? (
                            <div>
                                <p>Loading...</p>
                            </div>
                        ) : (
                            products.map((product: Product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    title={product.name}
                                    price={product.selling_price ?? 0} // Default to 0 if selling price is null
                                    supplier={product.supplier ?? ''} // Default to 'Unknown' if supplier is null
                                    reviewno={product.available_quantity ?? 0} // Default to 0 if available quantity is null
                                    imageString={product.photos.length > 0 ? product.photos[0].url : ''} // Default to empty string if no photos
                                />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default BodyOil;
