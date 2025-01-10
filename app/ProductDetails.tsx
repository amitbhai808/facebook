'use client'; // This marks it as a Client Component

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProductProps {
    product: {
        title: string;
        description: string;
        category: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        thumbnail: string;
    }
}

export default function ProductDetails({ product }: ProductProps) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        alert(`Added ${quantity} of ${product.title} to cart`);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white border border-gray-200">
            <img className="w-full h-48 object-cover" src={product.thumbnail} alt={product.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-base truncate mb-2 text-gray-800">{product.title}</div>
                <p className="text-gray-700 text-xs line-clamp-2">{product.description}</p>
                <div className="mt-2 text-gray-600">
                    <p className='font-semibold text-pink-600 text-sm'> {product.category}</p>
                    <div className='flex justify-between items-center px-2'>
                        <div className='flex gap-4 items-center'>
                            <p className='font-semibold text-sm text-black/90'>${product.price}</p>

                            <p className='font-semibold text-sm text-black/40'> {product.discountPercentage}%</p>
                        </div>
                        <p className='font-semibold text-sm'>{product.rating}</p>
                    </div>
                    <p>Stock: {product.stock}</p>
                </div>
                <div className="mt-4 flex items-center">
                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="ml-4 w-16 border rounded p-1"
                        min="1"
                    />
                </div>
            </div>
        </div>
    );
}