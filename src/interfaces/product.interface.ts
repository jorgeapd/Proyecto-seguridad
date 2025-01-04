export interface Product {
    id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    //todo: type: Type;
    typeproduct: Category;
}

export interface CartProduct {
   id: string;
   slug: string;
   title: string;
   price: number;
   quantity: number;
   size: Size;
   image: string;
}




export type Category = 'vestuario'|'chalecos'|'baston'|'accesories'
export type Size = 'S'|'M'|'L'|'XL'| 'None';
export type Type = 'shirts'|'pants'|'jackets'|'boots'| 'klevar'| 'helmet'| 'gloves'| 'tacticalbag'| 'protections'| 'belts'| 'flashlight'| 'laser'| 'pens'| 'handcuff'| 'guardbaton'| 'radio';
