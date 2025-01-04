'use server';

import prisma from "@/lib/prisma";
import { TypeProduct } from "@prisma/client";


interface PaginationOptions {
    page?: number;
    take?: number;
    typeproduct?: TypeProduct;
}


export const getPaginatedProductsWithImages = async({
    page = 1,
    take = 12,
    typeproduct,
}:PaginationOptions) => {
    
    if( isNaN(Number (page)) ) page =1;
    if (page < 1 ) page =1;
    
    try{
        // 1. Obtener productos
        const products = await prisma.product.findMany({
            take: take,
            skip: ( page - 1 ) * take,
            include:{
                ProductImage:{
                    take: 2,
                    select: {
                        url: true
                    }
                }
            },
            where: {
                typeproduct: typeproduct
            },
        });

        // 2.Obtener el total de paginas
        //todo: 
        const totalCount = await prisma.product.count({
            where: {
                typeproduct: typeproduct
            }
        })
        const totalPages = Math.ceil ( totalCount / take );

        return{
            currentPage: page,
            totalPages: 10,
            products: products.map( product => ({
                ...product,
                images: product.ProductImage.map( image => image.url)
            }))
        }
    
    }catch (error){
        throw new Error("No se pudo cargar los productos");
    }
}