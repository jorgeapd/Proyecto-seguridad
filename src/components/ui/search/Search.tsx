'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category?: {
    name: string;
  };
  ProductImage: {
    url: string;
  }[];
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Utiliza next/navigation para la navegación

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setResults(data);
      setError(null); // Limpiar cualquier error previo
    } catch (error: any) {
      console.error('Error durante la búsqueda:', error);
      setError('Hubo un problema al realizar la búsqueda.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos..."
        className="input"
      />
      <button onClick={handleSearch} className="button">Buscar</button>

      {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error si lo hay */}

      <div>
        {results.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Categoria: {product.category?.name || 'Sin categoría'}</p>
            <p>Precio: ${product.price}</p>
            {product.ProductImage.length > 0 && (
              <Image
                src={product.ProductImage[0].url}
                alt={product.title}
                width={500}
                height={300}
                className="product-image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
