"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";

const links = [
  { href: "/exposiciones", key: "exhibitions" },
  { href: "/obras", key: "works" },
  { href: "/artistas", key: "artists" },
  { href: "/visitar", key: "visit" },
  { href: "/la-nau", key: "space" },
] as const;

export function Header() {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const { count } = useCart();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label="Nau 22 — inicio">
          Nau 22
        </Link>

        <nav className="nav" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname.startsWith(link.href) ? "is-active" : undefined}
            >
              {t("nav", link.key, locale)}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label="Idioma">
            <button
              type="button"
              className={locale === "es" ? "is-active" : undefined}
              onClick={() => setLocale("es")}
            >
              ES
            </button>
            <span aria-hidden>/</span>
            <button
              type="button"
              className={locale === "en" ? "is-active" : undefined}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          </div>
          <Link href="/carrito" className="cart-link">
            {t("nav", "cart", locale)}
            {count > 0 ? <span className="cart-count">{count}</span> : null}
          </Link>
        </div>
      </div>
    </header>
  );
}
