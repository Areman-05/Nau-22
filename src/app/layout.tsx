import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nau 22 — Galería contemporánea · Poblenou",
    template: "%s · Nau 22",
  },
  description:
    "Galería contemporánea en una nave industrial de Poblenou. Exposiciones, obras disponibles y visitas privadas para coleccionistas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Providers>
          <Header />
          <main className="page-shell">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
