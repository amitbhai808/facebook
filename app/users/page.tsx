'use client';
import useSWR, { mutate } from 'swr';

interface Product {
  id: number;
  title: string;
  favorite: boolean;
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function ProductWithFavorite() {
  const { data: product } = useSWR<Product>(
    `/api/products/1`,
    fetcher
  );

  async function toggleFavorite() {
    // Optimistic update
    mutate(
      `/api/products/1`,
      { ...product, favorite: !product?.favorite },
      false
    );

    // Make API call
    await fetch(`/api/products/1/favorite`, {
      method: 'POST',
      body: JSON.stringify({ favorite: !product?.favorite })
    });

    // Revalidate
    mutate(`/api/products/1`);
  }

  return (
    <div>
      <h1>{product?.title}</h1>
      <button onClick={toggleFavorite}>
        {product?.favorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
}
