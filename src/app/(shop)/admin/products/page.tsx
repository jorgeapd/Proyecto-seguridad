export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table
import { getPaginatedOrders, getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductImage, Title } from '@/components';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { IoCardOutline } from 'react-icons/io5';
import { currencyFormat } from '@/utils';

interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function OrdersPage ({searchParams}: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  
  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });


  return (
    <>
      <Title title="Mantenimiento de productos" />

      <div className='flex justify-end mb-5'>
        <Link href="/admin/product/new" className='btn-primary'>
          Nuevo Producto
        </Link>
      </div>

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Imagen
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Titulo del producto
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Precio
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Tipo de producto
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Inventario
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Tallas
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">

                  <Link href={`/product/${product.slug}`}>
                  <ProductImage
                  src={product.ProductImage[0]?.url}
                  width={80}
                  height={80}
                  alt={product.title}
                  className='W-20 h-20 object-cover rounded'
                  />
                  </Link>
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <Link
                  href={`/admin/product/${product.slug}`}
                  className='hover:underline'
                  >
                    {product.title}
                  </Link>
                </td>
                <td className=" text-sm font-bold text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {currencyFormat(product.price)}
                </td>

                <td className="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {product.typeproduct}
                </td>

                <td className="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {product.inStock}
                </td>

                <td className="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {product.sizes.join(', ')}
                </td>
                
              </tr>
            ))}

            
          </tbody>
        </table>
        <Pagination totalPages={ totalPages } />
      </div>
    </>
  );
}