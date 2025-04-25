import { useLocation, useSyncExternalStore } from "@core";

export const usePathname = () => {
  const location = useLocation(); // Obtiene la ubicación actual

  const pathname = useSyncExternalStore(
    () => {
      // No necesitamos suscribirnos manualmente porque `useLocation` ya se actualiza
      // y provoca una re-renderización. Pero para cumplir con useSyncExternalStore,
      // podemos devolver una función vacía o usar un efecto para escuchar cambios.
      return () => {};
    },
    () => location.pathname, // Obtener el pathname actual
    () => "/" // Valor inicial para SSR
  );

  return { pathname };
};

// Suscribirse al scroll del navegador usando useSyncExternalStore
export const useScroll = () => {
  const scrollY = useSyncExternalStore(
    (callback) => {
      window.addEventListener("scroll", callback);
      return () => window.removeEventListener("scroll", callback);
    },
    () => window.scrollY,
    () => 0
  );

  return { scrollY };
};
