"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartItem } from "@/data/types";
import { canPurchase, getArtwork } from "@/data/artworks";

type CartContextValue = {
  items: CartItem[];
  addItem: (artworkSlug: string) => boolean;
  removeItem: (artworkSlug: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "nau22-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((artworkSlug: string) => {
    const artwork = getArtwork(artworkSlug);
    if (!artwork || !canPurchase(artwork)) return false;
    setItems((prev) => {
      if (prev.some((i) => i.artworkSlug === artworkSlug)) return prev;
      return [...prev, { artworkSlug, quantity: 1 }];
    });
    return true;
  }, []);

  const removeItem = useCallback((artworkSlug: string) => {
    setItems((prev) => prev.filter((i) => i.artworkSlug !== artworkSlug));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      const art = getArtwork(item.artworkSlug);
      return sum + (art?.priceEur ?? 0) * item.quantity;
    }, 0);
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      clear,
      count: items.length,
      subtotal,
    }),
    [items, addItem, removeItem, clear, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
