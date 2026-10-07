"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

export type Locale = "es" | "en";

const STORAGE_KEY = "nau22-locale";
const CHANGE_EVENT = "nau22-locale-change";

function subscribeLocale(onStoreChange: () => void) {
  const onChange = () => onStoreChange();
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function readLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : "es";
}

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
} | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, readLocale, () => "es" as Locale);

  const setLocale = useCallback((l: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, l);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
