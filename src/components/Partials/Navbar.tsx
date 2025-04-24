import { Logo } from "@/assets/icons";
import { useQuery } from "@/modules/shared/hooks";
import { useStoreQuery } from "@/store";
import { Button, Input, LoaderTailChase } from "@components";

interface Props {
  isScrolled: boolean;
}

export const Navbar = ({ isScrolled }: Props) => {
  const { query, handleSearch } = useQuery("");
  const { isPending } = useStoreQuery();

  return (
    <nav className={`p-5 z-20 transition-all ${isScrolled ? "fixed top-0 w-full py-2 bg-white/20 backdrop-blur-2xl " : "relative"}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <div className="flex relative">
          <Input placeholder="Search" className="w-96 px-4 py-2 !rounded-3xl bg-gray-800 text-white" value={query} onChange={handleSearch} />
          <div className="absolute right-5 top-0">{isPending && <LoaderTailChase size="20" color="white" containerProps={{ className: "mt-0" }} />}</div>
        </div>
        <Button className="bg-comp-green">Sign in</Button>
      </div>
    </nav>
  );
};
