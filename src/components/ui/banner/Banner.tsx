'use client';

import { usePathname } from 'next/navigation';

export const Banner = () => {
    const pathname = usePathname();

    // Verifica si estás en la página de inicio
    const isHomePage = pathname === '/';

    if (!isHomePage) {
        return null; // No renderizar el banner si no estás en el home
    }

    return (
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] bg-cover bg-center bg-[url('/imgs/Banner.jpg')] mt-5 flex items-center justify-center" />
    );
};

