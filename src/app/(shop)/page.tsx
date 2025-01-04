export const revalidate = 60;


import { redirect } from "next/navigation";

import { getPaginatedProductsWithImages } from "@/actions";
import { Banner, Pagination, ProductGrid, Title } from "@/components";
import FloatingButton from "@/components/ui/floatingbutton/FloatingButton";


interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });

  if (products.length === 0) {
    redirect('/');
  }

  return (
    <>
      
      <Banner />
      
      <Title
        title="Tienda Online"
        subtitle="Todos los productos"
        className="mb-2"
      />     

      <ProductGrid products={products} />

      <FloatingButton phoneNumber="56949410892" />

      <Pagination totalPages={totalPages} />

    </>
  );
}
