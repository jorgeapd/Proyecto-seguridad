export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";

import { TypeProduct } from "@prisma/client";
import {  redirect } from "next/navigation";



interface Props {
  params: {
    typeproduct: string;
  },
  searchParams: {
    page?: string;
  }
}

export default async function TypeproductByPage ({ params, searchParams }: Props) {

  const { typeproduct } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({
    page,
    typeproduct: typeproduct as TypeProduct
  });

  if (products.length === 0) {
    redirect(`/typeproduct/${typeproduct}`);
  }

  const labels: Record<string, string> = {
    'vestuario': 'Vestuario y Botas',
    'chalecos': 'Chalecos y Cascos',
    'baston': 'Baston y Esposas',
    'accesories': 'Radios y Accesorios'
  }

  //if ( id === 'kids'){
  //  notFound();
  // }

  return (
    <>
      <Title
        title={`Articulos de ${(labels as any)[typeproduct]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={products}
      />

      <Pagination totalPages={totalPages} />

    </>
  );
}