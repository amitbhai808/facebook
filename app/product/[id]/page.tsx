// ProductDetails.tsx
import React from 'react';

interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    thumbnail: string;
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-4 bg-white">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="flex flex-col space-y-2">
                <div className="text-lg font-semibold">{product.title}</div>
                <div className="text-sm text-gray-600">{product.category}</div>
                <div className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</div>
                <div className="text-sm text-gray-500 line-through">
                    ${(product.price + product.price * (product.discountPercentage / 100)).toFixed(2)}
                </div>
                <div className="flex items-center text-yellow-500 text-sm">
                    ⭐ {product.rating.toFixed(1)} / 5
                </div>
                <div className="text-sm text-gray-600">{product.stock} in stock</div>
            </div>
        </div>
    );
};

async function ProductPage({ params }: { params: { id: string } }) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    const product: Product = await res.json();

    return (
        <div className='p-5'>
            <div className='text-2xl font-semibold mb-4'>Product Details</div>
            <ProductDetails product={product} />
        </div>
    );
}

export default ProductPage;