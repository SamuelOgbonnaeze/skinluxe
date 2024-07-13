"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import MobileNav from '@/components/mobile-nav';
import Star from '@/components/star';

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        if (productId) {
            const fetchProduct = async () => {
                try {
                    const response = await fetch(`/api/products/${productId}`);
                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`);
                    }

                    const product = await response.json();
                    setProduct(product);
                    console.log(product);

                } catch (error) {
                    console.error('Error fetching product:', error);
                }
            };

            fetchProduct();
        }
    }, [productId]);

    return (
        <>
            <div className="hidden md:flex">
                <Navbar />
            </div>
            <div className="flex md:hidden">
                <MobileNav />
            </div>
            <div className="px-[23px] lg:px-[75px]">
                <div className="grid grid-cols-3 gap-x-[82px]">
                    <div className="col-span-2">
                        {product && product.photos && product.photos.length > 0 && (
                            <div className="flex flex-col items-center space-y-[26px]">
                                <Image
                                    src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                                    alt="Individual Product Picture"
                                    width={828}
                                    height={728}
                                    className='w-full overflow-hidden'
                                />
                                <div className="flex justify-start  ">
                                    {product.photos.slice().map((photo: any, index: number) => (
                                        <Image
                                            key={index}
                                            src={`https://api.timbu.cloud/images/${photo.url}`}
                                            alt={`Product Image ${index + 1}`}
                                            width={70}
                                            height={70}
                                            className='px-2'
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-span-1">
                        <div className="w-full">
                            <p className="font-bold font-openSans text-[34px] leading-[47px]">{product && product.name}</p>
                            <div className="flex items-center justify-between h-[19px]">
                                <div className='flex'>
                                    <Star />
                                    <p>53 reviews</p>
                                </div>
                                <p className='font-normal text-[14px] leading-[19px] text-[#9B9B9B] '>Product Code: {product && product.unique_id}</p>
                            </div>
                            <p>Brand: Jenny Glow</p>
                            <p>N{product && product.current_price}</p>
                            {product && (
                                product.available_quantity > 0 ?
                                    (<p>Item in stock</p>) : (<p>Item out of stock</p>)
                            )}
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Product;
