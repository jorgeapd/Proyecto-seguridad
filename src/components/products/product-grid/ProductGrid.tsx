import { Product } from '@/interfaces'
import { ProductGridItem } from './ProductGridItem';

interface Props {
    products: Product[];
}


export const ProductGrid = ({ products }: Props) => {
    
    const sortedProducts = products.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-10 mb-10">
            {
                products.map(product => (
                    <ProductGridItem
                        key={product.slug}
                        product={product}
                    />
                ))
            }
        </div>
    )
}