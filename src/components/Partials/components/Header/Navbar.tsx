import { Logo } from "@/assets/icons";
import { useQuery } from "@/modules/shared/hooks";
import { useStoreQuery } from "@/store";
import { Input, LoaderTailChase, SigninButton } from "@components";

interface Props {
  isScrolled: boolean;
}

export const Navbar = ({ isScrolled }: Props) => {
  const { query, handleSearch } = useQuery("");
  const { isPending } = useStoreQuery();

  return (
    <nav className={`p-5 z-20 transition-all ${isScrolled ? "fixed top-0 w-full py-2 bg-white/20 backdrop-blur-2xl " : "relative"}`}>
      <div className="flex gap-5 items-center justify-between max-sm:justify-center max-w-7xl mx-auto">
        <div className="max-sm:hidden">
          <Logo />
        </div>
        <div className="flex-1 max-w-96 flex relative">
          <Input placeholder="Search" className="w-full px-4 py-2 !rounded-3xl bg-gray-800 text-white" value={query} onChange={handleSearch} />
          <div className="absolute right-5 top-0">{isPending && <LoaderTailChase size="20" color="white" containerProps={{ className: "mt-0" }} />}</div>
        </div>
        <SigninButton className="max-sm:hidden" />
      </div>
    </nav>
  );
};
