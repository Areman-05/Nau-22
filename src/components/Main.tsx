"use client";

import { usePathname } from "next/navigation";

export function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className={`flex-grow relative z-10 ${isHome ? "" : "pt-24 md:pt-32"}`}>
      {children}
    </main>
  );
}
