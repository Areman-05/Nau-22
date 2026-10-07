"use client";

import { useSyncExternalStore } from "react";

/** True after hydration; false during SSR. Avoids setState-in-effect for mount flags. */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}
