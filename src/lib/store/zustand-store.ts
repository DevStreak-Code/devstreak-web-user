/* eslint-disable @typescript-eslint/no-explicit-any */
// store/createStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type MiddlewareOptions = {
  persist?: boolean;
  devtools?: boolean;
  storageName?: string;
};

export function createServiceStore<State extends object>(
  initializer: (set: any, get: any) => State,
  options: MiddlewareOptions = {}
) {
  let storeCreator = initializer;

  if (options.persist) {
    storeCreator = persist(storeCreator, {
      name: options.storageName || "zustand-storage",
    }) as any;
  }

  if (options.devtools) {
    storeCreator = devtools(storeCreator) as any;
  }

  const useStore = create(storeCreator);

  // 🔥 Auto-generate Service layer (so no manual getState everywhere)
  const Service = new Proxy(
    {},
    {
      get(_, key: string) {
        const state = useStore.getState();
        return (state as any)[key];
      },
    }
  ) as State;

  return { useStore, Service };
}
