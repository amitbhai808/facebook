// page.tsx (Server Component)
import Link from 'next/link';
import ProductDetails from './ProductDetails';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms * 1000));

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

async function Page() {
  // await wait(2);
  console.log('Rendering page...');
  const { products }: { products: Product[] } = await fetch('https://dummyjson.com/products').then(res => res.json());

  return (
    <div className='p-5'>
      <div className='text-2xl font-semibold mb-4'>Dashboard</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map(product => (
          <Link key={product.id} href={`/product/${product.id}`}>

            <ProductDetails product={product} />

          </Link>
        ))}
      </div>
    </div>
  );
}

export default Page;