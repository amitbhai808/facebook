// ProductDetailsSkeleton.tsx
'use client';

export default function ProductDetailsSkeleton() {
    return (
        <div>
            {/* Title skeleton */}
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />

            <div>
                {/* Product title skeleton */}
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />

                {/* Description skeleton - multiple lines */}
                <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
                </div>

                {/* Product details skeleton */}
                <div className="space-y-3">
                    {/* Category */}
                    <div className="flex items-center">
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mr-2" />
                        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                    </div>

                    {/* Discount */}
                    <div className="flex items-center">
                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mr-2" />
                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center">
                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mr-2" />
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    </div>

                    {/* Stock */}
                    <div className="flex items-center">
                        <div className="h-4 w-14 bg-gray-200 rounded animate-pulse mr-2" />
                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    </div>

                    {/* Tags */}
                    <div className="flex items-center">
                        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse mr-2" />
                        <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
                    </div>
                </div>

                {/* Buttons skeleton */}
                <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
                    <div className="h-6 w-8 bg-gray-200 rounded animate-pulse mx-4" />
                    <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
                    <div className="h-10 w-32 bg-gray-200 rounded animate-pulse ml-4" />
                </div>
            </div>
        </div>
    );
}