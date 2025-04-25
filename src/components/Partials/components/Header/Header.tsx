import { useScroll } from "@/hooks";
import { Banner, HeaderBg, Navbar } from "@components/Partials";

export const Header = () => {
  const { scrollY } = useScroll();

  const isScrolled = scrollY > 0;

  return (
    <header className={`header-bg relative transition-all   ${isScrolled ? "h-[75vh] max-md:h-[60vh]" : "h-[90vh]"}`}>
      <Navbar isScrolled={isScrolled} />
      <Banner />
      <HeaderBg />
    </header>
  );
};
