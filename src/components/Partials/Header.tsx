import { useSyncExternalStore } from "@/core/base";
import { Banner, Navbar, HeaderBg } from "@components/Partials";

export const Header = () => {
  // Suscribirse al scroll del navegador usando useSyncExternalStore
  const scrollY = useSyncExternalStore(
    (callback) => {
      window.addEventListener("scroll", callback);
      return () => window.removeEventListener("scroll", callback);
    },
    () => window.scrollY,
    () => 0
  );

  const isScrolled = scrollY > 0;

  return (
    <header className={`header-bg relative transition-all  ${isScrolled ? "h-[75vh]" : "h-[90vh]"}`}>
      <Navbar isScrolled={isScrolled} />
      <Banner />
      <HeaderBg />
    </header>
  );
};
