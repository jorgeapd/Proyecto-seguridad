import type { Metadata } from "next";
import { inter } from "../config/fonts";

import "./globals.css";
import { Provider } from "@/components";




export const metadata: Metadata = {
  title: {
    template: '%s - Tacticos | E-Shop',
    default: 'Home - Tacticos | E-Shop',
  },
  description: "Tienda online de productos tacticos y seguridad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> <Provider>{children}</Provider> </body>
    </html>
  );
}
