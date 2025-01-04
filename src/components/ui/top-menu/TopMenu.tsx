'use client';

import { useEffect, useState } from "react";
import { useCartStore, useUIStore } from "@/store";
import Image from 'next/image';
import Link from "next/link"
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";  // Importa useRouter desde next/navigation

export const TopMenu = () => {
    const openSideMenu = useUIStore(state => state.openSideMenu);
    const totalItemsInCart = useCartStore(state => state.getTotalItems());
    const [loaded, setLoaded] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const router = useRouter();  // Inicializa useRouter

    useEffect(() => {
        setLoaded(true);
    }, []);

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Redirige a la página de búsqueda con el query utilizando el router de Next.js
            router.push(`/search?query=${searchQuery}`);
        }
    };

    return (
        <nav className="flex px-5 justify-between items-center w-full flex-wrap">
            {/* Logo */}
            <div>
                <Link href="/">
                    <Image width={250} height={100} src="/imgs/logo.png" alt={"Imagen Logo"} />
                </Link>
            </div>

            {/* Menu icon for mobile */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden">
                <IoMenuOutline className="w-8 h-8" />
            </button>

            {/* Center Menu */}
            <div className={`flex-1 sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block flex-wrap justify-center items-center`}>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-center min-w-[120px]" href="/typeproduct/vestuario">Vestuario</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-center min-w-[120px]" href="/typeproduct/chalecos">Protección</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-center min-w-[120px]" href="/typeproduct/baston">Bastón y Esposas</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-center min-w-[120px]" href="/typeproduct/accesories">Radios y Accesorios</Link>
            </div>

            {/* Search, Cart, Menu */}
            <div className="flex items-center">
                <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="mx-2">
                    <IoSearchOutline className="w-5 h-5" />
                </button>

                {isSearchOpen && (
                    <form onSubmit={handleSearch} className="flex items-center">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar productos..."
                            className="border p-2 rounded"
                        />
                        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">Buscar</button>
                    </form>
                )}

                <Link href={((totalItemsInCart === 0) && loaded) ? '/empty' : "/cart"} className="mx-2">
                    <div className="relative">
                        {(loaded && totalItemsInCart > 0) && (
                            <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                                {totalItemsInCart}
                            </span>
                        )}
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>

                <button
                    onClick={openSideMenu}
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-white bg-yellow-500 sm:bg-transparent sm:text-black sm:border sm:border-gray-300 sm:hover:bg-gray-100 sm:p-1 sm:m-1 sm:rounded sm:shadow-md sm:w-auto w-full text-center">
                    Menú
                </button>
            </div>

        </nav>
    );
};