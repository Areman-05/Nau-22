import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Footer, Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const sans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "nau 22 — Galería contemporánea · Poblenou",
    template: "%s · nau 22",
  },
  description:
    "Galería de exposiciones contemporáneas en una nave de Poblenou, Barcelona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground font-sans">
        <Providers>
          <Header />
          <main className="flex-grow relative z-10 pt-24 md:pt-32">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
